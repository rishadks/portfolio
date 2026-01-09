export const initWOW = async () => {
  if (typeof window === "undefined") return;

  const wowModule = await import("wowjs");

  const WOWClass =
    (wowModule as any).WOW ||
    (wowModule as any).default ||
    wowModule;

  if (typeof WOWClass === "function") {
    new WOWClass({ live: false }).init();
  }
};
