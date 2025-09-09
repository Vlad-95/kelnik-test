// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/styles/styles.less'],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
            @import "~/assets/styles/base/variables.less";
            @import "~/assets/styles/base/mixin.less";  
          `,
        },
      },
    },
  },
});
