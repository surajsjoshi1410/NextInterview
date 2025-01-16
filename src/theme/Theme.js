const theme = {
  colors: {
    primary: "#68c184",
    secondary: "#2390ac",
    success: "#28a745",
    error: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    text: "#262524",
    sidebarBgColor: "#F0F8F1",
    textgray:"#c2c3c4",
    black: "#000",

    sidebarTextColor: "#1A1C1E",
    sidebarHoverBgColor: "#e0e0e0",
    sidebarHoverTextColor: "#000",
    sidebarActiveBgColor: "#d3d3d3",
    sidebarActiveTextColor: "#000",
  },
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'Montserrat', sans-serif",
    monospace: "'Source Sans 3', monospace",
    accent: "'Nunito', sans-serif",
    display: "'Outfit', sans-serif",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
  spacing: (factor) => `${factor * 8}px`,
};

export default theme;
