/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: ["class"],
  presets: [require("@repo/tailwindcss-config")],
};

export default tailwindConfig;
