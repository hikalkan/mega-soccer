(function () {
	"use strict";

	var I18N = {
		tr: {
			skip: "İçeriğe atla",
			eyebrow: "Arcade 11 v 11",
			tagline: "Futbol oyna. Yönetme.",
			lede: "Tam saha, sevimli oyuncular, düzgün kurallar. Özellik yok, stamina çubuğu yok, taktik kaydırıcısı yok — sadece maç.",
			cta_play: "Tarayıcıda oyna",
			cta_download: "İndir",
			mobile_note: "En iyisi masaüstünde klavye veya gamepad ile.",
			shots_title: "Sahada",
			shots_lead: "Yayın kamerası, gece ışıkları, serbest vuruşlar ve çıkış töreni — bir arcade paketinde bütün maç günü.",
			cap_goal: "Gol",
			cap_walkout: "Çıkış",
			cap_free_kick: "Serbest vuruş",
			cap_close: "Yakın kamera",
			cap_night: "Gece maçı",
			cap_rain: "Yağmur",
			dl_title: "İndir",
			dl_lead: "Taşınabilir sürümler — zip'i aç ve oyna. Kurulum yok. Ayarlar kullanıcı profilinde kalır.",
			dl_win_meta: "x64 · ~57 MB zip · tek .exe",
			dl_win_btn: "Windows için indir",
			dl_win_1: "Herhangi bir yere aç ve NonameSoccer.exe'yi çalıştır.",
			dl_win_2: "SmartScreen uyarırsa: More info → Run anyway.",
			dl_mac_meta: "Universal · ~79 MB zip · Apple Silicon + Intel",
			dl_mac_btn: "macOS için indir",
			dl_mac_1: "Zip'i aç, uygulamaya Control-tıkla → Open → Open.",
			dl_mac_2: "macOS bozuk derse Terminal'de şunu çalıştır:",
			copy: "Kopyala",
			dl_or: "Kurulum istemiyor musun?",
			dl_browser_link: "Tarayıcıda oyna",
			ctl_title: "Kontroller",
			ctl_lead: "Küçük bir set. Klavye ve gamepad'de aynı eylemler.",
			ctl_action: "Eylem",
			ctl_keys: "Klavye",
			ctl_pad: "Gamepad",
			ctl_move: "Hareket",
			ctl_shoot: "Şut / baskı",
			ctl_pass: "Pas",
			ctl_through: "Ara pas",
			ctl_lob: "Lob / kayma",
			ctl_skill: "Skill / kalkan",
			ctl_switch: "Oyuncu değiştir",
			ctl_cam: "Kamera",
			phil_title: "Futbol oyna, yönetme",
			phil_lead: "Tek üstünlük daha iyi oynamaktır. Hiçbir menü ayarı veya meta-strateji başlamadan önce kimseyi önde bırakmaz.",
			phil_1_t: "Herkes eşit",
			phil_1_b: "Hız, şut veya boy istatistiği yok. Forma numaraları 1–11 yalnızca kimlik.",
			phil_2_t: "Kondisyon sistemi yok",
			phil_2_b: "Maçı değiştiren stamina, form, moral veya sakatlık yok.",
			phil_3_t: "İlerleme yok",
			phil_3_b: "XP, seviye veya yükseltme yok. Uzun süre oynayan daha iyi oynadığı için daha iyidir.",
			phil_4_t: "Taktik yönetimi yok",
			phil_4_b: "Kaydırıcı veya talimat yok. Birkaç dengeli diziliş, maç için kilitli.",
			phil_5_t: "Gizli etki yok",
			phil_5_b: "Momentum senaryosu, iç saha avantajı veya fiziği değiştiren hava yok.",
			phil_6_t: "Küçük kontrol seti",
			phil_6_b: "Hareket, pas, ara pas, lob, şut, skill, değiştir. Başlık → takım seç → başla.",
			phil_diff: "Zorluk yalnızca CPU'nun ne kadar iyi karar verdiğini değiştirir — fiziği değil, takım arkadaşlarını değil.",
			foot_line: "Bağımsız arcade futbol. Yalnızca özgün takım adları — gerçek kulüp veya oyuncu yok.",
			foot_fonts: "Fontlar: Russo One ve Barlow (OFL).",
			copied: "Kopyalandı"
		},
		en: {
			skip: "Skip to content",
			eyebrow: "Arcade 11 v 11",
			tagline: "Play football. Don't manage it.",
			lede: "Full pitch, cute players, honest rules. No attributes, no stamina bars, no tactics sliders — just the match.",
			cta_play: "Play in browser",
			cta_download: "Download",
			mobile_note: "Best on desktop with keyboard or gamepad.",
			shots_title: "On the pitch",
			shots_lead: "Broadcast camera, night floodlights, free kicks and walkouts — the whole match day in one arcade package.",
			cap_goal: "Goal",
			cap_walkout: "Walkout",
			cap_free_kick: "Free kick",
			cap_close: "Close camera",
			cap_night: "Night match",
			cap_rain: "Rain",
			dl_title: "Download",
			dl_lead: "Portable builds — unzip and play. No installer. Settings live in your user profile.",
			dl_win_meta: "x64 · ~57 MB zip · single .exe",
			dl_win_btn: "Download for Windows",
			dl_win_1: "Unzip anywhere and run NonameSoccer.exe.",
			dl_win_2: "If SmartScreen warns: More info → Run anyway.",
			dl_mac_meta: "Universal · ~79 MB zip · Apple Silicon + Intel",
			dl_mac_btn: "Download for macOS",
			dl_mac_1: "Unzip, then Control-click the app → Open → Open.",
			dl_mac_2: "If macOS says it is damaged, run this in Terminal:",
			copy: "Copy",
			dl_or: "Prefer zero install?",
			dl_browser_link: "Play in the browser",
			ctl_title: "Controls",
			ctl_lead: "A small set. Same actions on keyboard and gamepad.",
			ctl_action: "Action",
			ctl_keys: "Keyboard",
			ctl_pad: "Gamepad",
			ctl_move: "Move",
			ctl_shoot: "Shoot / press",
			ctl_pass: "Pass",
			ctl_through: "Through pass",
			ctl_lob: "Lob / slide",
			ctl_skill: "Skill / shield",
			ctl_switch: "Switch player",
			ctl_cam: "Camera",
			phil_title: "Play football, don't manage it",
			phil_lead: "The only edge is playing better. No menu setting or meta-strategy puts anyone ahead before kickoff.",
			phil_1_t: "Equal players",
			phil_1_b: "No pace, shooting or height stats. Shirt numbers 1–11 are identity only.",
			phil_2_t: "No condition systems",
			phil_2_b: "No stamina, form, morale or injuries that change how the match plays.",
			phil_3_t: "No progression",
			phil_3_b: "No XP, levels or upgrades. A long-time player is better only because they play better.",
			phil_4_t: "No tactics management",
			phil_4_b: "No sliders or instructions. A few balanced formations, locked for the match.",
			phil_5_t: "No hidden modifiers",
			phil_5_b: "No momentum scripting, home advantage or weather that changes physics.",
			phil_6_t: "Small control set",
			phil_6_b: "Move, pass, through, lob, shoot, skill, switch. Title → pick teams → kick off.",
			phil_diff: "Difficulty only changes how well the CPU decides — never the physics, never your teammates.",
			foot_line: "Independent arcade football. Original team names only — no real clubs or players.",
			foot_fonts: "Fonts: Russo One & Barlow (OFL).",
			copied: "Copied"
		}
	};

	var LANG_KEY = "noname-soccer-lang";
	var lang = "en";

	function detectLang() {
		try {
			var q = new URLSearchParams(window.location.search).get("lang");
			if (q === "tr" || q === "en") return q;
		} catch (e) { /* ignore */ }
		try {
			var saved = localStorage.getItem(LANG_KEY);
			if (saved === "tr" || saved === "en") return saved;
		} catch (e) { /* ignore */ }
		var nav = (navigator.language || "en").toLowerCase();
		return nav.indexOf("tr") === 0 ? "tr" : "en";
	}

	function applyLang(next) {
		lang = next;
		var dict = I18N[lang] || I18N.en;
		document.documentElement.lang = lang;
		document.querySelectorAll("[data-i18n]").forEach(function (el) {
			var key = el.getAttribute("data-i18n");
			if (dict[key] != null) el.textContent = dict[key];
		});
		document.querySelectorAll(".lang-btn").forEach(function (btn) {
			btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
		});
		try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
		var meta = document.querySelector('meta[name="description"]');
		if (meta) meta.setAttribute("content", "Noname Soccer — " + (dict.lede || ""));
	}

	function setupLang() {
		document.querySelectorAll(".lang-btn").forEach(function (btn) {
			btn.addEventListener("click", function () {
				applyLang(btn.getAttribute("data-lang"));
			});
		});
		applyLang(detectLang());
	}

	function setupOsHighlight() {
		var ua = navigator.userAgent || "";
		var os = /Mac|iPhone|iPad|iPod/i.test(ua) ? "mac"
			: /Win/i.test(ua) ? "windows"
			: null;
		if (!os) return;
		document.querySelectorAll(".dl-card").forEach(function (card) {
			if (card.getAttribute("data-os") === os) {
				card.classList.add("is-preferred");
			}
		});
	}

	function setupLightbox() {
		var dlg = document.getElementById("lightbox");
		var img = document.getElementById("lb-img");
		var cap = document.getElementById("lb-cap");
		if (!dlg || !img) return;

		document.querySelectorAll(".shot").forEach(function (btn) {
			btn.addEventListener("click", function () {
				var full = btn.getAttribute("data-full");
				var key = btn.getAttribute("data-caption-key");
				var dict = I18N[lang] || I18N.en;
				img.src = full;
				img.alt = dict[key] || "";
				cap.textContent = dict[key] || "";
				if (typeof dlg.showModal === "function") dlg.showModal();
			});
		});

		dlg.addEventListener("click", function (ev) {
			if (ev.target === dlg) dlg.close();
		});
	}

	function setupCopy() {
		var btn = document.getElementById("copy-xattr");
		var code = document.getElementById("xattr-cmd");
		if (!btn || !code) return;
		btn.addEventListener("click", function () {
			var text = code.textContent;
			var done = function () {
				var dict = I18N[lang] || I18N.en;
				var prev = btn.textContent;
				btn.textContent = dict.copied || "Copied";
				setTimeout(function () { btn.textContent = prev; }, 1400);
			};
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(text).then(done).catch(function () {
					fallbackCopy(text, done);
				});
			} else {
				fallbackCopy(text, done);
			}
		});
	}

	function fallbackCopy(text, done) {
		var ta = document.createElement("textarea");
		ta.value = text;
		document.body.appendChild(ta);
		ta.select();
		try { document.execCommand("copy"); done(); } catch (e) { /* ignore */ }
		document.body.removeChild(ta);
	}

	function cleanupRootServiceWorker() {
		if (!("serviceWorker" in navigator)) return;
		navigator.serviceWorker.getRegistrations().then(function (regs) {
			regs.forEach(function (reg) {
				var scope = reg.scope || "";
				var path = "/";
				try { path = new URL(scope).pathname; } catch (e) { path = scope; }
				if (path.indexOf("/play") !== -1) return;
				// Old game SW was registered at /noname-soccer/ (or site root in preview).
				var normalized = path.replace(/\/+$/, "") || "/";
				if (normalized === "/" || /\/noname-soccer$/i.test(normalized) || /\/mega-soccer$/i.test(normalized)) {
					reg.unregister();
				}
			});
		}).catch(function () { /* ignore */ });
	}

	setupLang();
	setupOsHighlight();
	setupLightbox();
	setupCopy();
	cleanupRootServiceWorker();
}());
