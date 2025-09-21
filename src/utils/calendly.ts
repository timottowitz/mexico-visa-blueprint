declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
      showPopupWidget: (url: string) => void;
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}

export const openCalendlyPopup = () => {
  if (window.Calendly) {
    window.Calendly.showPopupWidget('https://calendly.com/tim-ottowitz/30min');
  } else {
    // Fallback: open in new tab if Calendly hasn't loaded yet
    window.open('https://calendly.com/tim-ottowitz/30min', '_blank');
  }
};