const CACHE_NAME = "shortcuts-space-v16";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./favicon.webp",
  "./shortcuts_logo.webp",
  "./shortcuts-icons/apps-script.webp",
  "./shortcuts-icons/asistencia.webp",
  "./shortcuts-icons/autoevaluacion-y-coevaluacion.webp",
  "./shortcuts-icons/ChatGPT-Logo.webp",
  "./shortcuts-icons/classroom.webp",
  "./shortcuts-icons/desarrollo-humano.webp",
  "./shortcuts-icons/elevenlabs.webp",
  "./shortcuts-icons/enlaces.webp",
  "./shortcuts-icons/figma.webp",
  "./shortcuts-icons/gemini.webp",
  "./shortcuts-icons/github.webp",
  "./shortcuts-icons/google-drive.webp",
  "./shortcuts-icons/Google.webp",
  "./shortcuts-icons/ingles-recuperacion.webp",
  "./shortcuts-icons/instrumentos-de-evaluacion.webp",
  "./shortcuts-icons/lunes-civicos.webp",
  "./shortcuts-icons/monkey-qr.webp",
  "./shortcuts-icons/notebook-lm.webp",
  "./shortcuts-icons/SIGES.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(
      (cached) =>
        cached ||
        fetch(event.request).then((response) => {
          if (new URL(event.request.url).origin === self.location.origin) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        }),
    ),
  );
});
