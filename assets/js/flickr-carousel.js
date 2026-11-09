/* Recent photos are embedded by Jekyll from _data/flickr.json.
   The public Flickr feed cannot be fetched from the browser (no CORS). */
(function () {
  "use strict";

  var root = document.getElementById("photo-carousel");
  var dataNode = document.getElementById("photo-carousel-data");
  if (!root || !dataNode) return;

  var photos;
  try {
    photos = JSON.parse(dataNode.textContent || "");
  } catch (error) {
    return;
  }
  if (!Array.isArray(photos)) return;

  photos = photos.filter(function (photo) {
    return photo && isHttps(photo.page) && isHttps(photo.src);
  });
  if (photos.length < 2) return;

  var frame = root.querySelector(".photo-carousel-frame");
  var link = root.querySelector(".photo-carousel-link");
  var img = root.querySelector(".photo-carousel-link img");
  var caption = root.querySelector(".photo-carousel-caption");
  var count = root.querySelector(".photo-carousel-count");
  var controls = root.querySelector(".photo-carousel-controls");
  var prev = root.querySelector(".photo-carousel-prev");
  var next = root.querySelector(".photo-carousel-next");
  var pause = root.querySelector(".photo-carousel-pause");
  var status = document.getElementById("photo-carousel-status");
  if (!frame || !link || !img || !caption || !controls || !prev || !next || !pause) return;

  var motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var index = 0;
  var generation = 0;
  var timer = 0;
  var userPaused = false;
  var hoverPaused = false;
  var focusPaused = false;
  var broken = Object.create(null);
  var ADVANCE_MS = 7000;

  root.setAttribute("aria-roledescription", "carousel");
  controls.hidden = false;
  if (count) count.hidden = false;
  syncPauseButton();
  render(false);
  armTimer();

  prev.addEventListener("click", function () {
    step(-1, true);
  });
  next.addEventListener("click", function () {
    step(1, true);
  });
  pause.addEventListener("click", function () {
    userPaused = !userPaused;
    syncPauseButton();
    armTimer();
  });

  root.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1, true);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1, true);
    }
  });

  root.addEventListener("focusin", function () {
    focusPaused = true;
    stopTimer();
  });
  root.addEventListener("focusout", function (event) {
    if (root.contains(event.relatedTarget)) return;
    focusPaused = false;
    armTimer();
  });

  if (finePointer) {
    root.addEventListener("mouseenter", function () {
      hoverPaused = true;
      stopTimer();
    });
    root.addEventListener("mouseleave", function () {
      hoverPaused = false;
      armTimer();
    });
  }

  document.addEventListener("visibilitychange", armTimer);
  if (typeof motionQuery.addEventListener === "function") {
    motionQuery.addEventListener("change", function () {
      img.classList.remove("is-incoming");
      syncPauseButton();
      armTimer();
    });
  }

  function step(delta, announce) {
    var nextIndex = findAhead(index, delta);
    if (nextIndex === null) {
      degrade();
      return;
    }
    index = nextIndex;
    render(announce);
    armTimer();
  }

  function render(announce) {
    var photo = photos[index];
    if (!photo || broken[index]) {
      degrade();
      return;
    }
    var gen = ++generation;
    var title = photo.title || "Untitled photograph";
    caption.textContent = title;
    if (count) count.textContent = (index + 1) + " of " + photos.length;
    link.href = photo.page;
    img.alt = title;
    if (announce && status) {
      status.textContent = title + ". Photo " + (index + 1) + " of " + photos.length + ".";
    }

    var current = img.getAttribute("src");
    if (current === photo.src && img.complete && img.naturalWidth > 0) {
      img.classList.remove("is-incoming");
      warmAhead();
      return;
    }

    if (!motionQuery.matches) img.classList.add("is-incoming");
    var largeAlreadyFailed = current === photo.src && img.complete && img.naturalWidth === 0;
    loadInto(photo, gen, largeAlreadyFailed);
  }

  function loadInto(photo, gen, usedFallback) {
    img.onload = function () {
      if (gen !== generation) return;
      img.classList.remove("is-incoming");
      warmAhead();
    };
    img.onerror = function () {
      if (gen !== generation) return;
      var fallback = photo.fallback;
      if (!usedFallback && isHttps(fallback) && fallback !== photo.src) {
        loadInto(photo, gen, true);
        return;
      }
      broken[index] = true;
      var ahead = findAhead(index, 1);
      if (ahead === null) {
        degrade();
        return;
      }
      index = ahead;
      render(false);
    };
    img.src = usedFallback ? photo.fallback : photo.src;
  }

  function warmAhead() {
    var ahead = (index + 1) % photos.length;
    if (broken[ahead]) return;
    var photo = photos[ahead];
    if (!photo || !isHttps(photo.src)) return;
    var preload = new Image();
    preload.src = photo.src;
  }

  function findAhead(from, delta) {
    var seen = 0;
    var cursor = from;
    while (seen < photos.length) {
      cursor = (cursor + delta + photos.length) % photos.length;
      seen += 1;
      if (!broken[cursor]) return cursor;
    }
    return null;
  }

  function armTimer() {
    stopTimer();
    if (motionQuery.matches || userPaused || hoverPaused || focusPaused || document.hidden) return;
    timer = window.setInterval(function () {
      step(1, false);
    }, ADVANCE_MS);
  }

  function stopTimer() {
    if (!timer) return;
    window.clearInterval(timer);
    timer = 0;
  }

  function syncPauseButton() {
    var reduced = motionQuery.matches;
    pause.hidden = reduced;
    if (reduced) return;
    pause.textContent = userPaused ? "Play" : "Pause";
    pause.setAttribute("aria-pressed", userPaused ? "true" : "false");
    pause.setAttribute("aria-label", userPaused ? "Play slideshow" : "Pause slideshow");
  }

  function degrade() {
    stopTimer();
    generation += 1;
    frame.hidden = true;
    if (caption.parentElement) caption.parentElement.hidden = true;
    controls.hidden = true;
    if (status) status.textContent = "";
  }

  function isHttps(url) {
    return typeof url === "string" && url.indexOf("https://") === 0;
  }
})();
