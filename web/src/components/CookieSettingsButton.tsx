"use client";

export function CookieSettingsButton() {
  const openBanner = () => {
    window.dispatchEvent(new CustomEvent("open-cookie-settings"));
    if (typeof window !== "undefined" && window.location.hash !== "#cookie-einstellungen") {
      window.location.hash = "cookie-einstellungen";
    }
  };

  return (
    <button
      type="button"
      onClick={openBanner}
      className="inline-block rounded-full border-2 border-nrw-gruen bg-white px-5 py-2.5 text-sm font-semibold text-nrw-gruen hover:bg-nrw-gruen hover:text-white"
    >
      Cookie-Einstellungen anpassen
    </button>
  );
}
