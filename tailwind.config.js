module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    screens: {
      pc: { max: "1535px" },
      ll: { max: "1279px" },
      l: { max: "1024px" },
      t: { max: "767px" },
      mt: { max: "639px" },
      m: { max: "450px" },
    },
    extend: {
      colors: {
        "custom-purple": "#302C42",
        "pink-01": "#8176AF",
        "pink-02": "#C0B7E8",
        "grey-transparent": "rgba(192, 183, 232, 0.33)",
      },
      borderRadius: {
        "custom-rounded": " 30px 30px 30px 150px",
        "custom-rounded-02": "100px 40px 100px 40px;",
      },
      width: {
        106: "26rem",
      },
      backgroundImage: () => ({
        "gradient-radial-to-tr":
          "radial-gradient(50% 2900.76% at 50% 53.89%, rgba(58, 52, 86, 0.95) 0%, #211E2E 100%)",
        "gradient-radial-to-tr-white":
          " radial-gradient(circle, rgba(192,183,232,1) 24%, rgba(129,118,175,1) 79%)",
      }),
    },
  },
  plugins: [],
};
