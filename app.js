const STORAGE_KEY = "shortcuts-space-v1";

const COLOR_PALETTE = [
  { id: "rose", label: "Rosa", a: "#ffc5d8", b: "#ffe9df" },
  { id: "sunset", label: "Atardecer", a: "#ffd0ad", b: "#ffecbd" },
  { id: "lilac", label: "Lila", a: "#d8c8ff", b: "#f0e7ff" },
  { id: "sky", label: "Cielo", a: "#bde3ff", b: "#ddf5ff" },
  { id: "mint", label: "Menta", a: "#bfead8", b: "#e6f5d5" },
  { id: "lemon", label: "Limón", a: "#ffeaa7", b: "#fff5ce" },
  { id: "peach", label: "Durazno", a: "#ffbdad", b: "#ffe2d3" },
  { id: "slate", label: "Pizarra", a: "#cbd2dc", b: "#e8eaf0" },
  { id: "ocean", label: "Océano", a: "#83c5e8", b: "#c9eff5" },
  { id: "teal", label: "Turquesa", a: "#82d6c7", b: "#d0f2df" },
  { id: "indigo", label: "Índigo", a: "#aebcf2", b: "#dfe4ff" },
  { id: "coral", label: "Coral", a: "#ff9f99", b: "#ffd8c9" },
  { id: "berry", label: "Frambuesa", a: "#d99ad5", b: "#f3d4ec" },
  { id: "sand", label: "Arena", a: "#d9c6a5", b: "#f1e5cb" },
];

const DEFAULT_STATE = {
  version: 5,
  theme: "system",
  activeTab: "all",
  categories: [
    { id: "educacion", name: "Educación" },
    { id: "gestion", name: "Gestión" },
    { id: "herramientas", name: "Herramientas" },
    { id: "ia", name: "Inteligencia artificial" },
  ],
  shortcuts: [
    {
      id: "instrumentos",
      name: "Instrumentos de Evaluación",
      url: "https://coeduca.github.io/instrumentos-de-evaluacionx/#home",
      categoryId: "educacion",
      icon: "./shortcuts-icons/instrumentos-de-evaluacion.webp",
      color: "rose",
      favorite: true,
    },
    {
      id: "lunes-civicos",
      name: "Lunes Cívicos",
      url: "https://coeduca.github.io/lunes-civicos/#inicio",
      categoryId: "educacion",
      icon: "./shortcuts-icons/lunes-civicos.webp",
      color: "sky",
      favorite: true,
    },
    {
      id: "autoevaluacion",
      name: "Auto y Coevaluación",
      url: "https://coeduca.github.io/autoevaluacion-coevaluacion/",
      categoryId: "educacion",
      icon: "./shortcuts-icons/autoevaluacion-y-coevaluacion.webp",
      color: "sunset",
      favorite: true,
    },
    {
      id: "ingles",
      name: "Inglés Recuperación",
      url: "https://coeduca.github.io/recovery-activity/",
      categoryId: "educacion",
      icon: "./shortcuts-icons/ingles-recuperacion.webp",
      color: "sky",
      favorite: false,
    },
	{
      id: "asistencia",
      name: "Asistencia",
      url: "https://coeduca.github.io/registro-coeduca/",
      categoryId: "gestion",
      icon: "./shortcuts-icons/asistencia.webp",
      color: "mint",
      favorite: false,
    },
	{
      id: "siges",
      name: "SIGES",
      url: "https://cas.siges.sv/cas/login?service=https%3A%2F%2Fcentros.siges.sv%2Fce%2Fpp%2FcalificacionPeriodos",
      categoryId: "gestion",
      icon: "./shortcuts-icons/SIGES.webp",
      color: "lilac",
      favorite: true,
    },
    {
      id: "desarrollo-humano",
      name: "Desarrollo Humano",
      url: "https://desarrollohumano.mined.gob.sv/",
      categoryId: "educacion",
      icon: "./shortcuts-icons/desarrollo-humano.webp",
      color: "sky",
      favorite: false,
    },
    {
      id: "enlaces",
      name: "Enlaces",
      url: "https://www.enlaces.edu.sv/secciones/",
      categoryId: "educacion",
      icon: "./shortcuts-icons/enlaces.webp",
      color: "sunset",
      favorite: false,
    },
	{
      id: "drive",
      name: "Google Drive",
      url: "https://drive.google.com/",
      categoryId: "herramientas",
      icon: "./shortcuts-icons/google-drive.webp",
      color: "mint",
      favorite: true,
    },
    {
      id: "classroom",
      name: "Google Classroom",
      url: "https://classroom.google.com/",
      categoryId: "educacion",
      icon: "./shortcuts-icons/classroom.webp",
      color: "sky",
      favorite: true,
    },
    {
      id: "appsscript",
      name: "AppsScript",
      url: "https://script.google.com/home",
      categoryId: "herramientas",
      icon: "./shortcuts-icons/apps-script.webp",
      color: "lemon",
      favorite: true,
    },
    {
      id: "google",
      name: "Google",
      url: "https://www.google.com/",
      categoryId: "herramientas",
      icon: "./shortcuts-icons/Google.webp",
      color: "sky",
      favorite: true,
    },
    {
      id: "gemini",
      name: "Gemini",
      url: "https://gemini.google.com/",
      categoryId: "ia",
      icon: "./shortcuts-icons/gemini.webp",
      color: "lilac",
      favorite: true,
    },
    {
      id: "chatgpt",
      name: "ChatGPT",
      url: "https://chatgpt.com/",
      categoryId: "ia",
      icon: "./shortcuts-icons/ChatGPT-Logo.webp",
      color: "slate",
      favorite: true,
    },
	{
      id: "claude",
      name: "Claude",
      url: "https://claude.ai/new",
      categoryId: "ia",
      icon: "./shortcuts-icons/claude.webp",
      color: "rose",
      favorite: false,
    },
	{
      id: "elevenlabs",
      name: "ElevenLabs",
      url: "https://elevenlabs.io/",
      categoryId: "ia",
      icon: "./shortcuts-icons/elevenlabs.webp",
      color: "slate",
      favorite: false,
    },
    {
      id: "notebooklm",
      name: "NotebookLM",
      url: "https://notebooklm.google.com/",
      categoryId: "ia",
      icon: "./shortcuts-icons/notebook-lm.webp",
      color: "lilac",
      favorite: false,
    },
	{
      id: "keep",
      name: "Google Keep",
      url: "https://keep.google.com/u/0/",
      categoryId: "herramientas",
      icon: "./shortcuts-icons/google-keep.webp",
      color: "lemon",
      favorite: false,
    },
	{
      id: "qrcode-monkey",
      name: "QR Code Monkey",
      url: "https://www.qrcode-monkey.com/",
      categoryId: "herramientas",
      icon: "./shortcuts-icons/monkey-qr.webp",
      color: "teal",
      favorite: false,
    },
    {
      id: "figma",
      name: "Figma",
      url: "https://www.figma.com/",
      categoryId: "herramientas",
      icon: "./shortcuts-icons/figma.webp",
      color: "coral",
      favorite: false,
    },
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/",
      categoryId: "herramientas",
      icon: "./shortcuts-icons/github.webp",
      color: "slate",
      favorite: false,
    },
  ],
};

const elements = {
  body: document.body,
  tabs: document.querySelector("#tabs"),
  grid: document.querySelector("#shortcutGrid"),
  emptyState: document.querySelector("#emptyState"),
  search: document.querySelector("#searchInput"),
  themeButton: document.querySelector("#themeButton"),
  themeMenu: document.querySelector("#themeMenu"),
  shortcutCount: document.querySelector("#shortcutCount"),
  categoryCount: document.querySelector("#categoryCount"),
  favoriteCount: document.querySelector("#favoriteCount"),
  shortcutDialog: document.querySelector("#shortcutDialog"),
  shortcutForm: document.querySelector("#shortcutForm"),
  shortcutDialogTitle: document.querySelector("#shortcutDialogTitle"),
  shortcutId: document.querySelector("#shortcutId"),
  shortcutName: document.querySelector("#shortcutName"),
  shortcutUrl: document.querySelector("#shortcutUrl"),
  shortcutCategory: document.querySelector("#shortcutCategory"),
  shortcutIcon: document.querySelector("#shortcutIcon"),
  colorOptions: document.querySelector("#colorOptions"),
  shortcutOrderControls: document.querySelector("#shortcutOrderControls"),
  moveShortcutBack: document.querySelector("#moveShortcutBack"),
  moveShortcutForward: document.querySelector("#moveShortcutForward"),
  deleteShortcutButton: document.querySelector("#deleteShortcutButton"),
  categoriesDialog: document.querySelector("#categoriesDialog"),
  categoryList: document.querySelector("#categoryList"),
  categoryForm: document.querySelector("#categoryForm"),
  newCategoryName: document.querySelector("#newCategoryName"),
  backupDialog: document.querySelector("#backupDialog"),
  importFile: document.querySelector("#importFile"),
  confirmDialog: document.querySelector("#confirmDialog"),
  confirmTitle: document.querySelector("#confirmTitle"),
  confirmMessage: document.querySelector("#confirmMessage"),
  confirmAccept: document.querySelector("#confirmAccept"),
  confirmCancel: document.querySelector("#confirmCancel"),
  toast: document.querySelector("#toast"),
};

let state = loadState();
let draggedShortcutId = null;
let draggedCategoryId = null;
let pointerDrag = null;
let suppressCardOpenUntil = 0;
let toastTimer = null;
let confirmAction = null;

function cloneDefaults() {
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!isValidState(saved)) return cloneDefaults();

    let stateChanged = false;
    const assistance = saved.shortcuts.find(
      (shortcut) => shortcut.id === "asistencia",
    );
    if (
      assistance?.url ===
      "https://coeduca.github.io/autoevaluacion-coevaluacion/"
    ) {
      assistance.url = "https://coeduca.github.io/registro-coeduca/";
      stateChanged = true;
    }

    if ((saved.version || 1) < 3) {
      const newShortcutIds = [
        "desarrollo-humano",
        "enlaces",
        "classroom",
        "notebooklm",
      ];

      newShortcutIds.forEach((shortcutId) => {
        const defaultShortcut = DEFAULT_STATE.shortcuts.find(
          (shortcut) => shortcut.id === shortcutId,
        );
        const shortcutAlreadyExists = saved.shortcuts.some(
          (shortcut) =>
            shortcut.id === shortcutId ||
            shortcut.url === defaultShortcut?.url,
        );

        if (!shortcutAlreadyExists && defaultShortcut) {
          saved.shortcuts.push({ ...defaultShortcut });
          stateChanged = true;
        }
      });
    }

    if ((saved.version || 1) < 4) {
      const newShortcutIds = ["qrcode-monkey", "figma", "github"];

      newShortcutIds.forEach((shortcutId) => {
        const defaultShortcut = DEFAULT_STATE.shortcuts.find(
          (shortcut) => shortcut.id === shortcutId,
        );
        const shortcutAlreadyExists = saved.shortcuts.some(
          (shortcut) =>
            shortcut.id === shortcutId ||
            shortcut.url === defaultShortcut?.url,
        );

        if (!shortcutAlreadyExists && defaultShortcut) {
          saved.shortcuts.push({ ...defaultShortcut });
          stateChanged = true;
        }
      });
    }

    if ((saved.version || 1) < 5) {
      const newShortcutIds = ["lunes-civicos"];

      newShortcutIds.forEach((shortcutId) => {
        const defaultShortcut = DEFAULT_STATE.shortcuts.find(
          (shortcut) => shortcut.id === shortcutId,
        );
        const shortcutAlreadyExists = saved.shortcuts.some(
          (shortcut) =>
            shortcut.id === shortcutId ||
            shortcut.url === defaultShortcut?.url,
        );

        if (!shortcutAlreadyExists && defaultShortcut) {
          saved.shortcuts.push({ ...defaultShortcut });
          stateChanged = true;
        }
      });
    }

    if (saved.version !== DEFAULT_STATE.version) {
      saved.version = DEFAULT_STATE.version;
      stateChanged = true;
    }

    if (stateChanged) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    }
    return saved;
  } catch {
    return cloneDefaults();
  }
}

function isValidState(value) {
  return Boolean(
    value &&
      Array.isArray(value.categories) &&
      Array.isArray(value.shortcuts) &&
      value.categories.every((category) => category.id && category.name) &&
      value.shortcuts.every(
        (shortcut) =>
          shortcut.id && shortcut.name && shortcut.url && shortcut.categoryId,
      ),
  );
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeUrl(value) {
  const trimmed = value.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function getCategory(categoryId) {
  return state.categories.find((category) => category.id === categoryId);
}

function mixHexColor(from, to, amount) {
  const parse = (hex) =>
    hex
      .replace("#", "")
      .match(/.{2}/g)
      .map((value) => Number.parseInt(value, 16));
  const start = parse(from);
  const end = parse(to);
  const mixed = start.map((value, index) =>
    Math.round(value + (end[index] - value) * amount),
  );
  return `#${mixed.map((value) => value.toString(16).padStart(2, "0")).join("")}`;
}

function getColor(colorId) {
  const customColor = /^custom:(#[0-9a-f]{6})$/i.exec(colorId || "")?.[1];
  if (customColor) {
    return {
      id: colorId,
      label: "Personalizado",
      a: customColor,
      b: mixHexColor(customColor, "#ffffff", 0.46),
    };
  }
  return COLOR_PALETTE.find((color) => color.id === colorId) || COLOR_PALETTE[0];
}

function getDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "sitio web";
  }
}

function isImageIcon(icon) {
  return /^(\.?\.?\/|https?:\/\/|data:image)/i.test(icon || "");
}

function applyTheme() {
  const validThemes = [
    "system",
    "light",
    "dark",
    "skeuodark",
    "wood",
    "glass",
    "dreamcore",
    "frutiger",
    "brutalist",
    "sketch",
    "paradise",
    "hell",
  ];
  const selectedTheme = validThemes.includes(state.theme)
    ? state.theme
    : "system";
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const standaloneThemes = [
    "skeuodark",
    "wood",
    "glass",
    "dreamcore",
    "frutiger",
    "brutalist",
    "sketch",
    "paradise",
    "hell",
  ];
  const appliedTheme = standaloneThemes.includes(selectedTheme)
    ? selectedTheme
    : selectedTheme === "dark" ||
        (selectedTheme === "system" && systemDark)
      ? "dark"
      : "light";
  const themeLabels = {
    system: "Automático",
    light: "Claro",
    dark: "Oscuro",
    skeuodark: "Skeuo",
    wood: "Wood",
    glass: "Glass",
    dreamcore: "Dreamcore",
    frutiger: "Frutiger",
    brutalist: "Brutalist",
    sketch: "Sketch",
    paradise: "Paradise",
    hell: "Hell",
  };
  const themeIcons = {
    system: "◐",
    light: "☀",
    dark: "☾",
    skeuodark: "◉",
    wood: "▦",
    glass: "◇",
    dreamcore: "✧",
    frutiger: "◉",
    brutalist: "▣",
    sketch: "✎",
    paradise: "✦",
    hell: "♨",
  };

  state.theme = selectedTheme;
  elements.body.dataset.theme = appliedTheme;
  elements.themeButton.innerHTML = `<span aria-hidden="true">${themeIcons[selectedTheme]}</span>`;
  elements.themeButton.title = `Tema: ${themeLabels[selectedTheme]}`;
  elements.themeButton.setAttribute(
    "aria-label",
    `Elegir tema. Actual: ${themeLabels[selectedTheme]}`,
  );
  elements.themeMenu
    .querySelectorAll("[data-theme-choice]")
    .forEach((button) => {
      const active = button.dataset.themeChoice === selectedTheme;
      button.classList.toggle("active", active);
      button.setAttribute("aria-checked", String(active));
    });
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute(
      "content",
      appliedTheme === "wood"
        ? "#654022"
        : appliedTheme === "skeuodark"
          ? "#11151a"
        : appliedTheme === "glass"
          ? "#8aafd4"
          : appliedTheme === "dreamcore"
            ? "#d6c7ec"
            : appliedTheme === "frutiger"
              ? "#62bce8"
              : appliedTheme === "brutalist"
                ? "#ffe45c"
                : appliedTheme === "sketch"
                  ? "#e8ddc7"
                  : appliedTheme === "paradise"
                    ? "#d9ecfa"
                    : appliedTheme === "hell"
                      ? "#2b0806"
                      : appliedTheme === "dark"
                        ? "#121214"
                        : "#f4f2ef",
    );
}

function closeThemeMenu() {
  elements.themeMenu.hidden = true;
  elements.themeButton.setAttribute("aria-expanded", "false");
}

function render() {
  applyTheme();
  renderTabs();
  renderCards();
  renderStats();
  renderCategorySelect();
}

function renderStats() {
  elements.shortcutCount.textContent = state.shortcuts.length;
  elements.categoryCount.textContent = state.categories.length;
  elements.favoriteCount.textContent = state.shortcuts.filter(
    (shortcut) => shortcut.favorite,
  ).length;
}

function renderTabs() {
  if (
    state.activeTab !== "all" &&
    state.activeTab !== "favorites" &&
    !getCategory(state.activeTab)
  ) {
    state.activeTab = "all";
  }

  const fixedTabs = [
    {
      id: "all",
      name: "Todos",
      count: state.shortcuts.length,
      icon: "✦",
    },
    {
      id: "favorites",
      name: "Favoritos",
      count: state.shortcuts.filter((shortcut) => shortcut.favorite).length,
      icon: "★",
    },
  ];
  const tabs = [
    ...fixedTabs,
    ...state.categories.map((category) => ({
      ...category,
      count: state.shortcuts.filter(
        (shortcut) => shortcut.categoryId === category.id,
      ).length,
    })),
  ];

  elements.tabs.innerHTML = tabs
    .map(
      (tab) => `
        <button
          class="tab ${state.activeTab === tab.id ? "active" : ""}"
          type="button"
          data-tab-id="${escapeHtml(tab.id)}"
          ${fixedTabs.some((fixed) => fixed.id === tab.id) ? "" : 'draggable="true"'}
          aria-current="${state.activeTab === tab.id ? "page" : "false"}"
        >
          ${tab.icon ? `<span aria-hidden="true">${tab.icon}</span>` : ""}
          ${escapeHtml(tab.name)}
          <span class="tab-count">${tab.count}</span>
        </button>
      `,
    )
    .join("");

  elements.tabs.querySelectorAll("[data-tab-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tabId;
      saveState();
      renderTabs();
      renderCards();
    });

    if (button.draggable) {
      button.addEventListener("dragstart", () => {
        draggedCategoryId = button.dataset.tabId;
      });
      button.addEventListener("dragover", (event) => {
        event.preventDefault();
        button.classList.add("drag-over");
      });
      button.addEventListener("dragleave", () =>
        button.classList.remove("drag-over"),
      );
      button.addEventListener("drop", (event) => {
        event.preventDefault();
        button.classList.remove("drag-over");
        reorderCategory(draggedCategoryId, button.dataset.tabId);
      });
    }
  });
}

function getVisibleShortcuts() {
  const query = elements.search.value.trim().toLocaleLowerCase("es");
  return state.shortcuts.filter((shortcut) => {
    const inTab =
      state.activeTab === "all" ||
      (state.activeTab === "favorites" && shortcut.favorite) ||
      shortcut.categoryId === state.activeTab;
    const category = getCategory(shortcut.categoryId)?.name || "";
    const matchesQuery =
      !query ||
      `${shortcut.name} ${category} ${getDomain(shortcut.url)}`
        .toLocaleLowerCase("es")
        .includes(query);
    return inTab && matchesQuery;
  });
}

function renderCards() {
  const visible = getVisibleShortcuts();
  elements.grid.hidden = visible.length === 0;
  elements.emptyState.hidden = visible.length !== 0;

  elements.grid.innerHTML = visible
    .map((shortcut) => {
      const category = getCategory(shortcut.categoryId);
      const color = getColor(shortcut.color);
      const icon = shortcut.icon?.trim();
      const iconMarkup = isImageIcon(icon)
        ? `<img src="${escapeHtml(icon)}" alt="" loading="lazy" data-icon-fallback="${escapeHtml(shortcut.name.charAt(0).toUpperCase())}" />`
        : escapeHtml(icon || shortcut.name.charAt(0).toUpperCase());

      return `
        <article
          class="shortcut-card"
          style="--card-a:${color.a};--card-b:${color.b}"
          data-shortcut-id="${escapeHtml(shortcut.id)}"
          role="link"
          tabindex="0"
          aria-label="Abrir ${escapeHtml(shortcut.name)}"
        >
          <div class="card-visual">
            <button
              class="drag-handle"
              type="button"
              data-drag-handle="${escapeHtml(shortcut.id)}"
              aria-label="Arrastrar ${escapeHtml(shortcut.name)} para reordenar"
              title="Mantén y arrastra para reordenar"
            >⠿</button>
            <div class="card-icon">${iconMarkup}</div>
          </div>
          <div class="card-content">
            <div class="card-meta">
              <span class="category-pill">${escapeHtml(category?.name || "Sin categoría")}</span>
              <button
                class="more-button"
                type="button"
                data-more-id="${escapeHtml(shortcut.id)}"
                aria-label="Opciones de ${escapeHtml(shortcut.name)}"
                aria-expanded="false"
              >⋮</button>
            </div>
            <h3>${escapeHtml(shortcut.name)}</h3>
            <div class="card-menu" data-menu-id="${escapeHtml(shortcut.id)}" hidden>
              <button type="button" data-menu-action="open" data-action-id="${escapeHtml(shortcut.id)}">
                <span aria-hidden="true">↗</span>Abrir
              </button>
              <button type="button" data-menu-action="edit" data-action-id="${escapeHtml(shortcut.id)}">
                <span aria-hidden="true">✎</span>Editar
              </button>
              <button type="button" data-menu-action="favorite" data-action-id="${escapeHtml(shortcut.id)}">
                <span aria-hidden="true">${shortcut.favorite ? "★" : "☆"}</span>
                ${shortcut.favorite ? "Quitar favorito" : "Marcar favorito"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  bindCardEvents();
}

function bindCardEvents() {
  elements.grid.querySelectorAll("[data-icon-fallback]").forEach((image) => {
    image.addEventListener(
      "error",
      () => image.replaceWith(document.createTextNode(image.dataset.iconFallback)),
      { once: true },
    );
  });

  elements.grid.querySelectorAll("[data-more-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const menu = elements.grid.querySelector(
        `[data-menu-id="${CSS.escape(button.dataset.moreId)}"]`,
      );
      const willOpen = menu.hidden;
      closeCardMenus();
      menu.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));
    });
  });

  elements.grid.querySelectorAll("[data-menu-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const shortcut = state.shortcuts.find(
        (item) => item.id === button.dataset.actionId,
      );
      if (!shortcut) return;
      closeCardMenus();

      if (button.dataset.menuAction === "open") {
        openShortcut(shortcut);
      } else if (button.dataset.menuAction === "edit") {
        openShortcutDialog(shortcut.id);
      } else if (button.dataset.menuAction === "favorite") {
        shortcut.favorite = !shortcut.favorite;
        saveState();
        render();
        showToast(
          shortcut.favorite
            ? "Añadido a tus favoritos."
            : "Quitado de tus favoritos.",
        );
      }
    });
  });

  elements.grid.querySelectorAll(".shortcut-card").forEach((card) => {
    const shortcut = state.shortcuts.find(
      (item) => item.id === card.dataset.shortcutId,
    );
    const handle = card.querySelector("[data-drag-handle]");

    card.addEventListener("click", (event) => {
      if (
        Date.now() < suppressCardOpenUntil ||
        event.target.closest(".drag-handle, .more-button, .card-menu")
      ) {
        return;
      }
      openShortcut(shortcut);
    });

    card.addEventListener("keydown", (event) => {
      if (
        event.target === card &&
        (event.key === "Enter" || event.key === " ")
      ) {
        event.preventDefault();
        openShortcut(shortcut);
      }
    });

    handle.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;
      pointerDrag = {
        pointerId: event.pointerId,
        sourceId: card.dataset.shortcutId,
        startX: event.clientX,
        startY: event.clientY,
        targetId: null,
        active: false,
      };
      handle.setPointerCapture(event.pointerId);
    });

    handle.addEventListener("pointermove", (event) => {
      if (!pointerDrag || pointerDrag.pointerId !== event.pointerId) return;
      const distance = Math.hypot(
        event.clientX - pointerDrag.startX,
        event.clientY - pointerDrag.startY,
      );
      if (!pointerDrag.active && distance > 7) {
        pointerDrag.active = true;
        card.classList.add("dragging");
      }
      if (!pointerDrag.active) return;
      const targetCard = document
        .elementFromPoint(event.clientX, event.clientY)
        ?.closest(".shortcut-card");
      elements.grid
        .querySelectorAll(".drag-over")
        .forEach((item) => item.classList.remove("drag-over"));
      if (
        targetCard &&
        targetCard.dataset.shortcutId !== pointerDrag.sourceId
      ) {
        pointerDrag.targetId = targetCard.dataset.shortcutId;
        targetCard.classList.add("drag-over");
      } else {
        pointerDrag.targetId = null;
      }
    });

    const finishPointerDrag = (event) => {
      if (!pointerDrag || pointerDrag.pointerId !== event.pointerId) return;
      const { active, sourceId, targetId } = pointerDrag;
      pointerDrag = null;
      card.classList.remove("dragging");
      elements.grid
        .querySelectorAll(".drag-over")
        .forEach((item) => item.classList.remove("drag-over"));
      if (active) {
        suppressCardOpenUntil = Date.now() + 350;
        if (targetId) reorderShortcut(sourceId, targetId);
      }
    };

    handle.addEventListener("pointerup", finishPointerDrag);
    handle.addEventListener("pointercancel", finishPointerDrag);
    handle.addEventListener("lostpointercapture", (event) => {
      if (pointerDrag?.pointerId === event.pointerId) finishPointerDrag(event);
    });
  });
}

function openShortcut(shortcut) {
  if (!shortcut) return;
  window.open(shortcut.url, "_blank", "noopener,noreferrer");
}

function closeCardMenus() {
  elements.grid.querySelectorAll("[data-menu-id]").forEach((menu) => {
    menu.hidden = true;
  });
  elements.grid.querySelectorAll("[data-more-id]").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
}

function reorderShortcut(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  const sourceIndex = state.shortcuts.findIndex((item) => item.id === sourceId);
  const targetIndex = state.shortcuts.findIndex((item) => item.id === targetId);
  if (sourceIndex < 0 || targetIndex < 0) return;
  const [moved] = state.shortcuts.splice(sourceIndex, 1);
  const adjustedTarget = state.shortcuts.findIndex((item) => item.id === targetId);
  state.shortcuts.splice(adjustedTarget, 0, moved);
  saveState();
  renderCards();
  showToast("Orden de atajos actualizado.");
}

function renderCategorySelect(selectedId) {
  const value = selectedId || elements.shortcutCategory.value;
  elements.shortcutCategory.innerHTML = state.categories
    .map(
      (category) =>
        `<option value="${escapeHtml(category.id)}">${escapeHtml(category.name)}</option>`,
    )
    .join("");
  if (getCategory(value)) {
    elements.shortcutCategory.value = value;
  } else if (getCategory(state.activeTab)) {
    elements.shortcutCategory.value = state.activeTab;
  }
}

function renderColorOptions(selected = COLOR_PALETTE[0].id) {
  const customMatch = /^custom:(#[0-9a-f]{6})$/i.exec(selected || "");
  const customHex = customMatch?.[1] || "#52758f";
  const customGradient = getColor(`custom:${customHex}`);

  elements.colorOptions.innerHTML = `${COLOR_PALETTE.map(
    (color) => `
      <label class="color-option" title="${color.label}">
        <input
          type="radio"
          name="color"
          value="${color.id}"
          ${color.id === selected ? "checked" : ""}
          aria-label="${color.label}"
        />
        <span style="--swatch-a:${color.a};--swatch-b:${color.b}"></span>
      </label>
    `,
  ).join("")}
    <div class="custom-color-option">
      <label class="color-option" title="Color personalizado">
        <input
          type="radio"
          name="color"
          value="custom:${customHex}"
          data-custom-color-radio
          ${customMatch ? "checked" : ""}
          aria-label="Color personalizado"
        />
        <span
          data-custom-color-swatch
          style="--swatch-a:${customGradient.a};--swatch-b:${customGradient.b}"
        ></span>
      </label>
      <label class="custom-color-control">
        <input
          id="customCardColor"
          type="color"
          value="${customHex}"
          aria-label="Elegir un color personalizado"
        />
        <span>Personalizado</span>
      </label>
    </div>
  `;

  const customInput = elements.colorOptions.querySelector("#customCardColor");
  const customRadio = elements.colorOptions.querySelector(
    "[data-custom-color-radio]",
  );
  const customSwatch = elements.colorOptions.querySelector(
    "[data-custom-color-swatch]",
  );

  customInput.addEventListener("input", () => {
    const value = customInput.value.toLowerCase();
    const gradient = getColor(`custom:${value}`);
    customRadio.value = `custom:${value}`;
    customRadio.checked = true;
    customSwatch.style.setProperty("--swatch-a", gradient.a);
    customSwatch.style.setProperty("--swatch-b", gradient.b);
  });
}

function openShortcutDialog(shortcutId = null) {
  if (state.categories.length === 0) {
    showToast("Crea una categoría antes de añadir un atajo.");
    openCategoriesDialog();
    return;
  }

  elements.shortcutForm.reset();
  const shortcut = state.shortcuts.find((item) => item.id === shortcutId);
  elements.shortcutDialogTitle.textContent = shortcut
    ? "Editar atajo"
    : "Nuevo atajo";
  elements.shortcutId.value = shortcut?.id || "";
  elements.shortcutName.value = shortcut?.name || "";
  elements.shortcutUrl.value = shortcut?.url || "";
  elements.shortcutIcon.value = shortcut?.icon || "";
  elements.deleteShortcutButton.hidden = !shortcut;
  elements.shortcutOrderControls.hidden = !shortcut;
  renderCategorySelect(shortcut?.categoryId);
  renderColorOptions(shortcut?.color || COLOR_PALETTE[state.shortcuts.length % COLOR_PALETTE.length].id);
  elements.shortcutDialog.showModal();
  window.setTimeout(() => elements.shortcutName.focus(), 30);
}

function moveShortcutByOffset(offset) {
  const shortcutId = elements.shortcutId.value;
  const shortcut = state.shortcuts.find((item) => item.id === shortcutId);
  if (!shortcut) return;
  const categoryItems = state.shortcuts.filter(
    (item) => item.categoryId === shortcut.categoryId,
  );
  const categoryIndex = categoryItems.findIndex((item) => item.id === shortcutId);
  const target = categoryItems[categoryIndex + offset];
  if (!target) {
    showToast(
      offset < 0
        ? "Este atajo ya es el primero."
        : "Este atajo ya es el último.",
    );
    return;
  }
  const sourceIndex = state.shortcuts.findIndex((item) => item.id === shortcutId);
  const targetIndex = state.shortcuts.findIndex((item) => item.id === target.id);
  const [moved] = state.shortcuts.splice(sourceIndex, 1);
  const nextTargetIndex = state.shortcuts.findIndex((item) => item.id === target.id);
  state.shortcuts.splice(offset < 0 ? nextTargetIndex : nextTargetIndex + 1, 0, moved);
  saveState();
  renderCards();
  showToast("Orden de atajos actualizado.");
}

function upsertShortcut(event) {
  event.preventDefault();
  const id = elements.shortcutId.value;
  const existing = state.shortcuts.find((item) => item.id === id);
  const values = {
    name: elements.shortcutName.value.trim(),
    url: normalizeUrl(elements.shortcutUrl.value),
    categoryId: elements.shortcutCategory.value,
    icon: elements.shortcutIcon.value.trim(),
    color:
      new FormData(elements.shortcutForm).get("color") || COLOR_PALETTE[0].id,
  };

  try {
    new URL(values.url);
  } catch {
    elements.shortcutUrl.setCustomValidity("Escribe un enlace válido.");
    elements.shortcutUrl.reportValidity();
    return;
  }
  elements.shortcutUrl.setCustomValidity("");

  if (existing) {
    Object.assign(existing, values);
  } else {
    state.shortcuts.push({
      id: uid("shortcut"),
      ...values,
      favorite: false,
    });
  }

  saveState();
  elements.shortcutDialog.close();
  render();
  showToast(existing ? "Atajo actualizado." : "Atajo creado.");
}

function deleteShortcut() {
  const shortcut = state.shortcuts.find(
    (item) => item.id === elements.shortcutId.value,
  );
  if (!shortcut) return;
  askForConfirmation({
    title: "Eliminar atajo",
    message: `“${shortcut.name}” dejará de aparecer en tu espacio.`,
    acceptLabel: "Eliminar",
    action: () => {
      state.shortcuts = state.shortcuts.filter((item) => item.id !== shortcut.id);
      saveState();
      elements.shortcutDialog.close();
      render();
      showToast("Atajo eliminado.");
    },
  });
}

function openCategoriesDialog() {
  renderCategoryManager();
  elements.categoriesDialog.showModal();
}

function renderCategoryManager() {
  elements.categoryList.innerHTML = state.categories
    .map(
      (category, index) => `
        <div
          class="category-row"
          draggable="true"
          data-category-id="${escapeHtml(category.id)}"
        >
          <span class="category-grip" title="Arrastrar para reordenar" aria-hidden="true">•••</span>
          <input
            type="text"
            value="${escapeHtml(category.name)}"
            maxlength="28"
            aria-label="Nombre de la categoría"
            data-category-name="${escapeHtml(category.id)}"
          />
          <div class="row-actions">
            <button
              class="mini-button"
              type="button"
              data-move-up="${escapeHtml(category.id)}"
              aria-label="Mover ${escapeHtml(category.name)} a la izquierda"
              title="Mover a la izquierda"
              ${index === 0 ? "disabled" : ""}
            >←</button>
            <button
              class="mini-button"
              type="button"
              data-move-down="${escapeHtml(category.id)}"
              aria-label="Mover ${escapeHtml(category.name)} a la derecha"
              title="Mover a la derecha"
              ${index === state.categories.length - 1 ? "disabled" : ""}
            >→</button>
            <button
              class="mini-button delete"
              type="button"
              data-delete-category="${escapeHtml(category.id)}"
              aria-label="Eliminar ${escapeHtml(category.name)}"
              title="Eliminar"
            >×</button>
          </div>
        </div>
      `,
    )
    .join("");

  elements.categoryList
    .querySelectorAll("[data-category-name]")
    .forEach((input) => {
      input.addEventListener("change", () => {
        const category = getCategory(input.dataset.categoryName);
        const nextName = input.value.trim();
        if (!nextName) {
          input.value = category.name;
          return;
        }
        category.name = nextName;
        saveState();
        renderTabs();
        renderCards();
        showToast("Pestaña renombrada.");
      });
    });

  elements.categoryList.querySelectorAll("[data-move-up]").forEach((button) => {
    button.addEventListener("click", () => moveCategory(button.dataset.moveUp, -1));
  });
  elements.categoryList.querySelectorAll("[data-move-down]").forEach((button) => {
    button.addEventListener("click", () => moveCategory(button.dataset.moveDown, 1));
  });
  elements.categoryList
    .querySelectorAll("[data-delete-category]")
    .forEach((button) => {
      button.addEventListener("click", () =>
        deleteCategory(button.dataset.deleteCategory),
      );
    });

  elements.categoryList.querySelectorAll(".category-row").forEach((row) => {
    row.addEventListener("dragstart", () => {
      draggedCategoryId = row.dataset.categoryId;
    });
    row.addEventListener("dragover", (event) => {
      event.preventDefault();
      row.classList.add("drag-over");
    });
    row.addEventListener("dragleave", () => row.classList.remove("drag-over"));
    row.addEventListener("drop", (event) => {
      event.preventDefault();
      row.classList.remove("drag-over");
      reorderCategory(draggedCategoryId, row.dataset.categoryId);
    });
  });
}

function addCategory(event) {
  event.preventDefault();
  const name = elements.newCategoryName.value.trim();
  if (!name) return;
  const category = { id: uid("category"), name };
  state.categories.push(category);
  state.activeTab = category.id;
  elements.newCategoryName.value = "";
  saveState();
  render();
  renderCategoryManager();
  showToast("Nueva pestaña creada.");
}

function moveCategory(categoryId, offset) {
  const index = state.categories.findIndex((item) => item.id === categoryId);
  const target = index + offset;
  if (index < 0 || target < 0 || target >= state.categories.length) return;
  const [category] = state.categories.splice(index, 1);
  state.categories.splice(target, 0, category);
  saveState();
  renderTabs();
  renderCategoryManager();
}

function reorderCategory(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  const sourceIndex = state.categories.findIndex((item) => item.id === sourceId);
  if (sourceIndex < 0) return;
  const [category] = state.categories.splice(sourceIndex, 1);
  const targetIndex = state.categories.findIndex((item) => item.id === targetId);
  state.categories.splice(targetIndex, 0, category);
  saveState();
  renderTabs();
  if (elements.categoriesDialog.open) renderCategoryManager();
  showToast("Orden de pestañas actualizado.");
}

function deleteCategory(categoryId) {
  const category = getCategory(categoryId);
  if (!category) return;
  if (state.categories.length === 1) {
    showToast("Debe existir al menos una categoría.");
    return;
  }
  const count = state.shortcuts.filter(
    (shortcut) => shortcut.categoryId === categoryId,
  ).length;
  const fallback = state.categories.find((item) => item.id !== categoryId);
  askForConfirmation({
    title: "Eliminar pestaña",
    message:
      count > 0
        ? `“${category.name}” contiene ${count} ${count === 1 ? "atajo" : "atajos"}. Se moverán a “${fallback.name}”.`
        : `La pestaña “${category.name}” se eliminará.`,
    acceptLabel: "Eliminar",
    action: () => {
      state.shortcuts.forEach((shortcut) => {
        if (shortcut.categoryId === categoryId) shortcut.categoryId = fallback.id;
      });
      state.categories = state.categories.filter((item) => item.id !== categoryId);
      if (state.activeTab === categoryId) state.activeTab = fallback.id;
      saveState();
      render();
      renderCategoryManager();
      showToast("Pestaña eliminada.");
    },
  });
}

function askForConfirmation({
  title,
  message,
  acceptLabel = "Confirmar",
  action,
}) {
  elements.confirmTitle.textContent = title;
  elements.confirmMessage.textContent = message;
  elements.confirmAccept.textContent = acceptLabel;
  confirmAction = action;
  elements.confirmDialog.showModal();
}

function exportBackup() {
  const backup = {
    ...state,
    exportedAt: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `shortcuts-respaldo-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast("Respaldo descargado.");
}

function importBackup(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!isValidState(imported)) throw new Error("Invalid backup");
      state = {
        version: 1,
        theme: imported.theme || state.theme,
        activeTab: "all",
        categories: imported.categories,
        shortcuts: imported.shortcuts,
      };
      saveState();
      elements.backupDialog.close();
      render();
      showToast("Respaldo restaurado correctamente.");
    } catch {
      showToast("Este archivo no parece ser un respaldo válido.");
    } finally {
      elements.importFile.value = "";
    }
  };
  reader.readAsText(file);
}

function resetState() {
  askForConfirmation({
    title: "Restablecer espacio",
    message:
      "Se recuperarán las pestañas y atajos iniciales. Esta acción no se puede deshacer.",
    acceptLabel: "Restablecer",
    action: () => {
      state = cloneDefaults();
      saveState();
      elements.search.value = "";
      elements.backupDialog.close();
      render();
      showToast("Espacio restablecido.");
    },
  });
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("show"), 2400);
}

document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  state.activeTab = "all";
  elements.search.value = "";
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document
  .querySelector("#addShortcutButton")
  .addEventListener("click", () => openShortcutDialog());
document
  .querySelector("#emptyAddButton")
  .addEventListener("click", () => openShortcutDialog());
document
  .querySelector("#manageCategoriesButton")
  .addEventListener("click", openCategoriesDialog);
document.querySelector("#backupButton").addEventListener("click", () => {
  elements.backupDialog.showModal();
});

elements.search.addEventListener("input", renderCards);
elements.shortcutForm.addEventListener("submit", upsertShortcut);
elements.deleteShortcutButton.addEventListener("click", deleteShortcut);
elements.moveShortcutBack.addEventListener("click", () => moveShortcutByOffset(-1));
elements.moveShortcutForward.addEventListener("click", () =>
  moveShortcutByOffset(1),
);
elements.categoryForm.addEventListener("submit", addCategory);

elements.themeButton.addEventListener("click", (event) => {
  event.stopPropagation();
  const willOpen = elements.themeMenu.hidden;
  closeThemeMenu();
  if (willOpen) {
    elements.themeMenu.hidden = false;
    elements.themeButton.setAttribute("aria-expanded", "true");
  }
});

elements.themeMenu
  .querySelectorAll("[data-theme-choice]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      state.theme = button.dataset.themeChoice;
      saveState();
      applyTheme();
      closeThemeMenu();
      showToast(
        state.theme === "wood"
          ? "Tema Wood aplicado."
          : `Tema ${button.querySelector("strong").textContent} aplicado.`,
      );
    });
});

document.querySelector("#exportButton").addEventListener("click", exportBackup);
document
  .querySelector("#importButton")
  .addEventListener("click", () => elements.importFile.click());
elements.importFile.addEventListener("change", () =>
  importBackup(elements.importFile.files[0]),
);
document.querySelector("#resetButton").addEventListener("click", resetState);

elements.confirmCancel.addEventListener("click", () => {
  elements.confirmDialog.close();
  confirmAction = null;
});
elements.confirmAccept.addEventListener("click", () => {
  const action = confirmAction;
  elements.confirmDialog.close();
  confirmAction = null;
  action?.();
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(`#${button.dataset.close}`).close();
  });
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".theme-picker")) {
    closeThemeMenu();
  }
  if (!event.target.closest(".more-button, .card-menu")) {
    closeCardMenus();
  }
});

document.addEventListener("keydown", (event) => {
  const typing =
    document.activeElement?.matches("input, textarea, select") ||
    document.querySelector("dialog[open]");
  if (event.key === "/" && !typing) {
    event.preventDefault();
    elements.search.focus();
  }
  if (event.key.toLowerCase() === "n" && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    openShortcutDialog();
  }
  if (event.key === "Escape") {
    closeCardMenus();
    closeThemeMenu();
  }
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (state.theme === "system") applyTheme();
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

render();
