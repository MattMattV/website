const { src, dest, series, parallel, watch } = require("gulp");

const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const concatCSS = require('gulp-concat-css');
const execa = require("execa");
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const sriHash = require('gulp-sri-hash');

// Concatenation, minification of 3rd party CSS
const css = () => {
    const externalCss = [
        "./node_modules/sanitize.css/sanitize.css",
    ];

    return src(externalCss)
        .pipe(concatCSS("vendor.css"))
        .pipe(dest("./_site/assets/css/"));
};

// Copy some icons into the blog
const icons = () => {
    const iconPaths = [
        "./node_modules/super-tiny-icons/images/svg/email.svg",
        "./node_modules/super-tiny-icons/images/svg/github.svg",
        "./node_modules/super-tiny-icons/images/svg/keybase.svg",
        "./node_modules/super-tiny-icons/images/svg/linkedin.svg",
        "./node_modules/super-tiny-icons/images/svg/mastodon.svg",
        "./node_modules/super-tiny-icons/images/svg/rss.svg",
        "./node_modules/super-tiny-icons/images/svg/steam.svg",
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

const serve = async () => {
    browserSync.init({
        server: "./_site"
    });

    return watch("./src/**/*", series(incrementalBuild, assets));
};

const prod = (done) => {
    src('_site/assets/{favicons,img}/**/*')
        .pipe(imagemin())
        .pipe(dest('_site/assets', {overwrite: true}))

    src('_site/assets/**/*.css')
        .pipe(cleanCSS())
        .pipe(dest('_site/assets', {overwrite: true}))

    src('_site/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: false }))
        .pipe(dest('_site', {overwrite: true}))

    return done()
}

const incrementalBuild = async () => {
    await execa("jekyll", ["build"]);

    browserSync.reload();

    return
};

assets = parallel(css, fonts, icons)

exports.css = css;
exports.fonts = fonts;
exports.icons = icons;

exports.serve = series(incrementalBuild, assets, serve);
exports.build = series(assets, prod);