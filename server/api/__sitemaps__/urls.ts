import { asSitemapUrl, defineSitemapEventHandler } from "#imports";
import { PHRASES } from "~/composables/phrases";
import { VOCABULARIES } from "~/composables/vocabularies";

export default defineSitemapEventHandler(async () => {
    const pages = await $fetch<any>("/api/sitemap");
    let CONTENT = [];
    console.log({ pages });
    for (let page of pages) {
        CONTENT.push({ route: page._path, image: null, korean: page.title });
    }
    return [
        ...[...VOCABULARIES, ...PHRASES, ...CONTENT].map((p) =>
            asSitemapUrl({
                loc: p.route,
                lastmod: new Date(),
                images: [
                    {
                        loc: p?.image
                            ? p.image
                            : "http://beyoustudio.pro/logo.png",
                        caption: "BeYou Studio - A learning platform",
                        title: p?.korean,
                    },
                ],
            }),
        ),
    ];
});
