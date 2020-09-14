module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./_site/styles.css");
    eleventyConfig.addWatchTarget("./_site/cv.css");

    eleventyConfig.addPassthroughCopy({"node_modules/super-tiny-icons/images/svg": "/svg"});
    eleventyConfig.addPassthroughCopy({"static": "/"});

    return {
        dir: {
            includes: "_includes",
            input: "src",
            layouts: "_layouts"
        }
    };
};
