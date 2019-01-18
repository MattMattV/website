const { src, dest, series, parallel, watch } = require("gulp");

const cleanCSS = require('gulp-clean-css');
const concatCSS = require('gulp-concat-css');


const browserSync = require('browser-sync').create();
const execa = require("execa");

// Concatenation, minification of 3rd party CSS
const css = () => {
    const externalCss = [
        "./node_modules/sanitize.css/sanitize.css",
    ];

    return src(externalCss)
        .pipe(concatCSS("vendor.css"))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(dest("./_site/assets/css/"));
};

// Copy some icons into the blog
const icons = () => {
    const iconPaths = [
        "./node_modules/super-tiny-icons/images/svg/discord.svg",
        "./node_modules/super-tiny-icons/images/svg/email.svg",
        "./node_modules/super-tiny-icons/images/svg/github.svg",
        "./node_modules/super-tiny-icons/images/svg/linkedin.svg",
        "./node_modules/super-tiny-icons/images/svg/mastodon.svg",
        "./node_modules/super-tiny-icons/images/svg/rss.svg",
        "./node_modules/super-tiny-icons/images/svg/twitter.svg",
    ];

    return src(iconPaths)
        .pipe(dest("./_site/assets/img/"));
};

// Copy fonts from the NPM package @ibm/plex
const fonts = () => {
    return src("./node_modules/@ibm/plex/**/*.woff*")
        .pipe(dest("./_site/assets/fonts/Plex/"));
};

const serve = () => {
    browserSync.init({
        server: "./_site",
    });

    return watch("./src/**/*", series(incrementalBuild, parallel(css, icons, fonts)));
};

const incrementalBuild = async () => {
    await execa("jekyll", ["build", "--incremental"]);

    browserSync.reload();

    return
};

exports.css = css;
exports.fonts = fonts;
exports.icons = icons;

exports.serve = series(parallel(css, fonts, icons), serve);
exports.build = parallel(css, fonts, icons);