/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    function (prop) {
      prop.addVariant("child", "& > *");
      prop.addVariant("child-hover", "& > *:hover");
    },
  ],

  theme: {
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        primary: {
          DEFAULT: "#031226",
          50: "#ECF4FD",
          100: "#C7DDFA",
          200: "#A1C6F7",
          300: "#7CB0F4",
          400: "#5699F0",
          500: "#2F80ED",
          600: "#146DE1",
          700: "#105BBC",
          800: "#0D4896",
          900: "#0A3671",
          950: "#07244B",
        },
        secondary: {
          DEFAULT: "#0A060E",
          50: "#EBE2F3",
          100: "#D7C6E7",
          200: "#C3A9DA",
          300: "#B08DCE",
          400: "#9C70C2",
          500: "#8854B6",
          600: "#73439D",
          700: "#5E3781",
          800: "#492B64",
          900: "#341F47",
          950: "#1F122B",
        },
        error: {
          main: "#110305",
          50: "#F9DCDF",
          100: "#F3BAC0",
          200: "#ED97A1",
          300: "#E77482",
          400: "#E05263",
          500: "#DA2F43",
          600: "#BF2234",
          700: "#9C1C2B",
          800: "#791521",
          900: "#570F18",
          950: "#34090E",
        },
        warning: {
          DEFAULT: "#120E02",
          50: "#FBF2DA",
          100: "#F7E6B5",
          200: "#F3D990",
          300: "#EFCB68",
          400: "#ECC046",
          500: "#E8B321",
          600: "#CB9B15",
          700: "#A67F11",
          800: "#81620E",
          900: "#5C460A",
          950: "#372A06",
        },
        success: {
          DEFAULT: "#01140C",
          50: "#D8FDEE",
          100: "#B1FCDE",
          200: "#89FACD",
          300: "#62F8BC",
          400: "#3BF7AC",
          500: "#0AF497",
          600: "#09D785",
          700: "#07B06D",
          800: "#068955",
          900: "#04623C",
          950: "#023B24",
        },
        neutral: {
          DEFAULT: "#0A0A0A",
          50: "#F1F1F1",
          100: "#D6D6D6",
          200: "#C2C2C2",
          300: "#ADADAD",
          400: "#999999",
          500: "#858585",
          600: "#707070",
          700: "#5C5C5C",
          800: "#474747",
          900: "#333333",
          950: "#1F1F1F",
        },
      },
      fontSize: {
        xxs: "0.625rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
    },
  },
};

export default tailwindConfig;
