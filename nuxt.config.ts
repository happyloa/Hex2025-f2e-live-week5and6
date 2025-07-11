// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  // 網站 meta 設定
  app: {
    head: {
      title: "2025 切版直播班 - 職涯諮詢媒合 W5&W6",
      htmlAttrs: {
        lang: "zh-Hant",
      },
      meta: [
        {
          name: "description",
          content: `職旅 WorkWay 匯集了來自不同領域、擁有豐富實戰經驗的自由工作者與數位遊牧專家。根據你的需求和階段，我們提供一對一諮詢。`,
        },
        {
          property: "og:title",
          content: "2025 切版直播班 - 職涯諮詢媒合 W5&W6",
        },
        {
          property: "og:description",
          content: `職旅 WorkWay 匯集了來自不同領域、擁有豐富實戰經驗的自由工作者與數位遊牧專家。根據你的需求和階段，我們提供一對一諮詢。`,
        },
        {
          property: "og:image",
          content: "/ogImage.webp",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "zh_TW" },
        { name: "twitter:card", content: "/ogImage.webp" },
        {
          name: "twitter:image",
          content: "/ogImage.webp",
        },
      ],
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "nuxt-swiper"],

  // Google Fonts 的相關配置
  googleFonts: {
    families: {
      "Noto+Sans+TC": [400, 500, 700],
      Inter: [400, 500, 700],
    },
    download: true,
    inject: true,
    display: "swap",
  },

  css: ["~/assets/css/fonts.css"],
});
