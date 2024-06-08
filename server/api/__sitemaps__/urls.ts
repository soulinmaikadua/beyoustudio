import { asSitemapUrl, defineSitemapEventHandler } from "#imports";
import { PHRASES } from "~/composables/phrases";
import { VOCABULARIES } from "~/composables/vocabularies";

export default defineSitemapEventHandler(() => {
    return [
        ...[...VOCABULARIES, ...PHRASES].map((p) =>
            asSitemapUrl({
                loc: p.route,
                lastmod: new Date(),
            }),
        ),
    ];
});
