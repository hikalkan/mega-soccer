/* Self-unregistering stub.
 * Replaces the old Godot PWA worker that was registered at the site root
 * (/noname-soccer/ or former /mega-soccer/). Clients that still have that worker
 * will fetch this file, uninstall themselves, drop old game caches, and reload once.
 */
self.addEventListener("install", function (event) {
	self.skipWaiting();
});

self.addEventListener("activate", function (event) {
	event.waitUntil((async function () {
		var keys = await caches.keys();
		await Promise.all(keys.filter(function (k) {
			return k.indexOf("Noname Soccer-sw-cache-") === 0
				|| k.indexOf("Arcade Soccer-sw-cache-") === 0
				|| k.indexOf("Arcade%20Soccer-sw-cache-") === 0
				|| k.indexOf("Noname%20Soccer-sw-cache-") === 0;
		}).map(function (k) { return caches.delete(k); }));

		await self.registration.unregister();

		var clientsList = await self.clients.matchAll({ type: "window" });
		clientsList.forEach(function (client) {
			client.navigate(client.url);
		});
	})());
});