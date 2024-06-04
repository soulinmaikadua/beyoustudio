// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttris: {
        en: "en",
      },
      charset: "utf-16",
      title: "BeYou Studio",
      viewport: "width=device-width, initial-scale=1",
	  meta:[
		{
			name: 'google-site-verification',
			content: 'eGaVqsClWH0Kk8xrXiyI6ImZEbIwSfpnpW-TTA3gz_U'
		},
	  ]
    },
    // google-site-verification=eGaVqsClWH0Kk8xrXiyI6ImZEbIwSfpnpW-TTA3gz_U
  },
  devtools: { enabled: true },
});
