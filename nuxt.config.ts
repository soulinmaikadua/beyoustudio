// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            charset: "utf-16",
            title: "BeYou Studio - A learning platform for Laos.",
            viewport: "width=device-width, initial-scale=1",
            meta: [
                {
                    name: "description",
                    content: "Learn korean from zero to advanced",
                },
                {
                    name: "keywords",
                    content:
                        "learn korean, learn korean language, study korean, study korean language",
                },
                { property: "og:type", content: "website" },
                {
                    name: "google-site-verification",
                    content: "eGaVqsClWH0Kk8xrXiyI6ImZEbIwSfpnpW-TTA3gz_U",
                    // google-site-verification=eGaVqsClWH0Kk8xrXiyI6ImZEbIwSfpnpW-TTA3gz_U
                },
                {
                    name: "google-adsense-account",
                    content: "ca-pub-5349802525175772",
                },
                // <meta name="google-adsense-account" content="ca-pub-5349802525175772">
            ],
            script: [
                {
                    async: true,
                    src: "https://www.googletagmanager.com/gtag/js?id=G-Y2NG6E4LB2",
                },
                // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5349802525175772"
                //crossorigin="anonymous"></script>
                {
                    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5349802525175772",
                    crossorigin: "anonymous"
                },
                {
                    children:
                        'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "G-Y2NG6E4LB2");(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "ftlwikt3ui");',
                    //  G-Y2NG6E4LB2
                },
            ],
        },
    },
    site: {
        url: "https://beyoustudio.pro",
        trailingSlash: true,
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap"],
    sitemap: {
        sources: ["/api/__sitemaps__/urls"],
    },
    devtools: { enabled: true },
});
