export const TABBING_CLASS_NAME = "tabbing";
const TAB_CODE = "Tab";

export function handleFirstTab(e: KeyboardEvent): void {
  if (e.code === TAB_CODE) {
    document.body.classList.add(TABBING_CLASS_NAME);

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
}

function handleMouseDownOnce(): void {
  document.body.classList.remove(TABBING_CLASS_NAME);

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
}
