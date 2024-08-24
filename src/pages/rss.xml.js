import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Jacob Proffer - Blog',
        site: context.site,
        description: 'My journey learning Astro',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    });
}