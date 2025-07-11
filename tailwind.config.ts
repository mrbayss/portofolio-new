import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Aktifkan mode gelap berbasis class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8A2BE2", // Warna ungu utama
          light: "#A45EFF",
        },
        dark: {
          bg: "#121212",      // Latar belakang utama mode gelap
          card: "#1E1E1E",    // Latar belakang kartu/komponen
          text: "#EAEAEA",
        },
        light: {
          bg: "#F5F5F5",
          card: "#FFFFFF",
          text: "#121212",
        },
      },
      fontFamily: {
        // Ganti dengan font yang Anda suka, misalnya Poppins
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;