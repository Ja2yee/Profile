
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/tailwind.css"],
  app: {
    head: {
      title: "Wajahatullah | Front-End Developer",
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }]
    }
  },
  devtools: { enabled: true },
})
