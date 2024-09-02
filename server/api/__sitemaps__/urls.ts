import { asSitemapUrl, defineSitemapEventHandler } from "#imports";
import { PHRASES } from "~/composables/phrases";
import { VOCABULARIES } from "~/composables/vocabularies";
import { WORK_RELATED } from "~/composables/workRelated";
export default defineSitemapEventHandler(async () => {
    const pages = await $fetch<any>("/api/sitemap");
    let CONTENT = [];
    for (let page of pages) {
        CONTENT.push({ route: page._path, image: null, korean: page.title });
    }
    let WORK = [
        {
            route: `/eps-topik/reading`,
            image: null,
            korean: "Reading",
        },
    ];
    for (let page of WORK_RELATED) {
        WORK.push({
            route: `/eps-topik/work-related/${page.slug}`,
            image: null,
            korean: page.korean,
        });
    }
    return [
        ...[...VOCABULARIES, ...PHRASES, ...CONTENT, ...WORK].map((p) =>
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
