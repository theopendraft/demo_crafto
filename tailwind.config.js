export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#111111",
        accent: "#A3E635",
        muted: "#9CA3AF"
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["Sora", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(163, 230, 53, 0.25)"
      }
    }
  },
  plugins: []
};
