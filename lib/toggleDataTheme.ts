let rgbAnimationId: number | null = null;

const THEMES = ["red", "gold", "green", "cyan", "blue", "purple"] as const;
export type Theme = (typeof THEMES)[number];

export function stopRgb() {
  if (rgbAnimationId) {
    cancelAnimationFrame(rgbAnimationId);
    rgbAnimationId = null;
  }
}

export function setTheme(theme: Theme | "rgb", intervalMs = 2000) {
  const root = document.documentElement;

  stopRgb();

  const applyTheme = (t: Theme) => {
    if (!document.startViewTransition) {
      root.dataset.theme = t;
      return;
    }
    document.startViewTransition(() => {
      root.dataset.theme = t;
    });
  };

  if (theme === "rgb") {
    root.dataset.themeMode = "rgb";

    let index = THEMES.indexOf((root.dataset.theme as Theme) ?? "red");
    let lastTime = performance.now();

    const tick = (now: number) => {
      if (now - lastTime >= intervalMs) {
        index = (index + 1) % THEMES.length;
        applyTheme(THEMES[index]);
        lastTime = now;
      }
      rgbAnimationId = requestAnimationFrame(tick);
    };

    rgbAnimationId = requestAnimationFrame(tick);
  } else {
    delete root.dataset.themeMode;
    applyTheme(theme);
  }
}
