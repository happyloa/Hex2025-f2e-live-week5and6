import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#F1F4FD",
          "200": "#D2D9F9",
          "300": "#A4B4F3",
          "400": "#778EEE",
          DEFAULT: "#4A69E8",
          "600": "#1736B5",
          "700": "#0E2271",
        },
        secondary: {
          "100": "#D7F4EC",
          "200": "#87DEC5",
          DEFAULT: "#36C99F",
          "400": "#268C6F",
        },
        neutral: {
          "100": "#F0F3F5",
          "200": "#E0E5EB",
          "300": "#D1D9E1",
          "400": "#B2BFCC",
          "500": "#8599AD",
          "600": "#667F99",
          "700": "#3D4D5C",
          DEFAULT: "#141A1F",
        },
        alpha: "#141A1F3C",
        white: "#FCFCFD",
        success: {
          "100": "#DEFCCF",
          "200": "#47C20A",
          DEFAULT: "#369108",
        },
        danger: {
          "100": "#FFD0CC",
          "200": "#FF7467",
          DEFAULT: "#E51300",
        },
        warning: {
          "100": "#FFEACC",
          "200": "#F58F00",
          DEFAULT: "#B26800",
        },
      },
      fontSize: {
        display: [
          "5rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        "display-sm": [
          "3rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        t5: [
          "3rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        "t5-sm": [
          "2rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        t4: [
          "2rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        "t4-sm": [
          "1.75rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        t3: [
          "1.75rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        "t3-sm": [
          "1.5rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        t2: [
          "1.5rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        "t2-sm": [
          "1.25rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        t: [
          "1.25rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        "t-sm": [
          "1.125rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        "body-lg": [
          "1.125rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "body-lg-sm": [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "body-md-sm": [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "body-sm": [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "body-xs": [
          "0.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
      },
      maxWidth: {
        container: "1296px",
        "container-md": "1076px",
        "container-sm": "856px",
      },
      boxShadow: {
        shadow: "0 0 16px 0 #0000001F",
        focus: "0 0 0px 4px #D2D9F9",
        "focus-error": "0 0 0px 4px #FF746780",
      },
    },
  },
};
