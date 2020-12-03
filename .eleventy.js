module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./_site/styles.css");
    eleventyConfig.addWatchTarget("./_site/cv.css");

    eleventyConfig.addPassthroughCopy({"node_modules/super-tiny-icons/images/svg": "/svg/super-tiny-icons"});
    eleventyConfig.addPassthroughCopy({"node_modules/simple-icons/icons/*.svg": "/svg/simple-icons"});
    eleventyConfig.addPassthroughCopy({"static": "/"});

    eleventyConfig.addShortcode("tinyIcon", (name) => {
        return `<img class="tiny-icon" alt="${name} icon" src="/svg/super-tiny-icons/${name.toLowerCase()}.svg">`;
    });

    return {
        dir: {
            includes: "_includes",
            input: "src",
            layouts: "_layouts"
        }
    };
};
