#!/usr/bin/env python3
"""Refresh _data/flickr.json from Flickr's public photostream feed.

No API key. The feed is https://www.flickr.com/services/feeds/photos_public.gne
and does not send Access-Control-Allow-Origin, so the site cannot read it
from the browser. This script writes a static list that Jekyll embeds at
build time. Image files are still loaded from Flickr's CDN.
"""

import json
import re
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

USER_ID = "188746755@N03"
FEED_URL = (
    "https://www.flickr.com/services/feeds/photos_public.gne"
    f"?id={USER_ID}&format=json&nojsoncallback=1"
)
PHOTOSTREAM = f"https://www.flickr.com/photos/{USER_ID}/"
OUT = Path(__file__).resolve().parents[1] / "_data" / "flickr.json"
SIZE_RE = re.compile(r'width="(\d+)" height="(\d+)"')


def flickr_image(url):
    if not isinstance(url, str) or not url.startswith("https://"):
        return False
    host = url.split("/", 3)[2]
    return host == "staticflickr.com" or host.endswith(".staticflickr.com")


def flickr_page(url):
    return isinstance(url, str) and url.startswith("https://www.flickr.com/photos/")


def display_size(description):
    """Scale the feed's small-image ratio up to Flickr's 1024px size."""
    match = SIZE_RE.search(description or "")
    if not match:
        return 1024, 683
    width, height = int(match.group(1)), int(match.group(2))
    if width <= 0 or height <= 0:
        return 1024, 683
    scale = 1024 / float(max(width, height))
    return int(round(width * scale)), int(round(height * scale))


def load_feed():
    request = urllib.request.Request(
        FEED_URL,
        headers={"User-Agent": "naoiseirwin-flickr-refresh"},
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def photos_from_feed(payload):
    photos = []
    for item in payload.get("items") or []:
        media = ((item.get("media") or {}).get("m")) or ""
        page = item.get("link") or ""
        if not flickr_image(media) or not flickr_page(page):
            continue
        src = media[:-6] + "_b.jpg" if media.endswith("_m.jpg") else media
        if not flickr_image(src):
            src = media
        title = (item.get("title") or "").strip() or "Untitled photograph"
        width, height = display_size(item.get("description") or "")
        photos.append(
            {
                "title": title,
                "page": page,
                "src": src,
                "fallback": media,
                "width": width,
                "height": height,
            }
        )
        if len(photos) >= 20:
            break
    return photos


def main():
    photos = photos_from_feed(load_feed())
    if not photos:
        print("Flickr feed returned no photos; leaving the existing file unchanged.", file=sys.stderr)
        return 1

    if OUT.exists():
        try:
            current = json.loads(OUT.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            current = None
        if (
            isinstance(current, dict)
            and current.get("photos") == photos
            and current.get("photostream") == PHOTOSTREAM
        ):
            print(f"No photo changes ({len(photos)} photos).")
            return 0

    document = {
        "photostream": PHOTOSTREAM,
        "fetched_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "photos": photos,
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(document, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {len(photos)} photos to {OUT}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
