module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./_site/styles/");

    eleventyConfig.addPassthroughCopy({"node_modules/super-tiny-icons/images/svg": "/svg"});
    eleventyConfig.addPassthroughCopy("node_modules/@ibm/plex/**/*.{eot,otf,ttf,woff,woff2}");
    eleventyConfig.addPassthroughCopy({"static": "/"});

    return {
        dir: {
            includes: "_includes",
            input: "src",
            layouts: "_layouts"
        }
    };
};
