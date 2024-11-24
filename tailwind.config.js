/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray1: {
          "100": "#0c0d0e",
          "200": "rgba(0, 0, 0, 0.5)",
          "300": "rgba(0, 0, 0, 0)",
        },
        dimgray: {
          "100": "#666",
          "200": "#596573",
          "300": "#636363",
          "400": "#586472",
          "500": "#576372",
          "600": "#556170",
        },
        darkslategray: {
          "100": "#4a4a4a",
          "200": "#333",
        },
        mediumseagreen: "#5dc78b",
        silver: {
          "100": "#bdc1c3",
          "200": "#bbc0c2",
          "300": "rgba(185, 191, 198, 0.3)",
        },
        "neutral-white": "#fff",
        slategray: "#73808c",
        "miscellaneous-sidebar-text-selected": "#007aff",
        cornflowerblue: "#26a1ff",
        "neutral-black": "#000",
        "gray-900": "#141414",
        ghostwhite: {
          "100": "#f3f5f9",
          "200": "#f0f3fe",
        },
        darkgray: "#a0a6b4",
        gainsboro: {
          "100": "#e0e2e6",
          "200": "#d9dbe0",
        },
        lavender: "#d1dbea",
        lightsteelblue: "#9babc2",
        whitesmoke: "rgba(245, 245, 245, 0.7)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        akatab: "Akatab",
        "abril-fatface": "'Abril Fatface'",
        inherit: "inherit",
      },
      borderRadius: {
        "9980xl": "9999px",
        "80xl": "99px",
        smi: "13px",
        "3xs": "10px",
        "10xs": "3px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "xl-2": "20.2px",
      base: "16px",
      "5xl-2": "24.2px",
      lgi: "19px",
      "mid-1": "17.1px",
      "mini-9": "14.9px",
      mini: "15px",
      "base-3": "15.3px",
      "base-1": "15.1px",
      lg: "18px",
      xs: "12px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      "8xl-7": "27.7px",
      "3xl": "22px",
      "9xl-6": "28.6px",
      "4xl": "23px",
      "xl-3": "20.3px",
      "9xl-5": "28.5px",
      "8xl-2": "27.2px",
      "8xl-5": "27.5px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq600: {
        raw: "screen and (max-width: 600px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq439: {
        raw: "screen and (max-width: 439px)",
      },
      mq410: {
        raw: "screen and (max-width: 410px)",
      },
      mq278: {
        raw: "screen and (max-width: 278px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
