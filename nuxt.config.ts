// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  image: {
    domains: ["s.udemycdn.com"], // Allow images from Udemy CDN
  },
  nitro: {
    preset: "static", // Enables static site generation
  },
  app: {
    head: {
      title: "Course Platform",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
});
