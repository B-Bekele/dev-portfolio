export const projects = [
  {
    slug: "risk-dashboard",
    title: "PortView Risk/Analytics Dashboard",
    summary: "PortView is a portfolio analytics platform combining real market data, risk analysis, and interactive visualization all in one clean dashboard",
    pageSummary: "PortView is a portfolio analytics platform combining real market data, risk analysis, and interactive visualization all in one clean dashboard.",
    pageSummary2: "What began as a small project to learn about financial analytics and markets evolved into a full-stack, data-driven analytics suite that integrates robust data ingestion, structured analytics, and interactive visualization.",
    stack: ["Python", "Pandas", "SQLAlchemy", "Streamlit", "Plotly", "yfinance"],
    links: { demo: "https://portview.streamlit.app/", code: "https://github.com/B-Bekele/portview" },
    screenshots: ["/assets/screenshots/risk1-1800.webp", "/assets/screenshots/risk2-1800.webp"]
  },
  {
    slug: "resource-monitor",
    title: "Resource Monitor",
    summary: "Native desktop system monitor with real-time and historical performance tracking and automated alerts",
    pageSummary: "A Native Python desktop application that visualizes CPU, memory, and disk usage in real time with PyQt6 and PyQtGraph. It logs performance data in SQLite for historical analysis and issues automated alerts when thresholds are exceeded, providing an all-in-one system performance dashboard.",
    pageSummary2: "Originally conceived as a Flask-based web app, the project evolved into a native desktop solution focused on performance, responsiveness, and tracking.",
    stack: ["Python", "SQLite", "PyQt6", "PyQtGraph", "psutil"],
    links: { demo: "", code: "https://github.com/B-Bekele/srmonitor" },
    screenshots: ["/assets/screenshots/mon1-1770.webp", "/assets/screenshots/mon2-1761.webp"]
  }
]
