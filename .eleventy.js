const { DateTime } = require("luxon");
const crypto = require("crypto");
const path = require("path");
module.exports = function (eleventyConfig) {

    let handlebars = require("handlebars");
    eleventyConfig.setLibrary("hbs", handlebars);

    let options = {
        dynamicPartials: true,
        strictFilters: true,
        root: [
            path.resolve(__dirname, 'src/_includes'),
            path.resolve(__dirname, 'src/_layouts')
        ],
        layout: [path.resolve(__dirname, "src/_layouts")],
        includes: [path.resolve(__dirname, "src/_includes")],
    };

    eleventyConfig.addShortcode("asset_id", function() {
        console.log(`${crypto.randomBytes(3).toString("hex")}`);
        return  `${crypto.randomBytes(3).toString("hex")}`;
    });

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./dist/css");

    eleventyConfig.addPassthroughCopy("./src/icons");
    eleventyConfig.addWatchTarget("./dist/icons");

    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addWatchTarget("./dist/images");

    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });

    return {
        dir: {
            input: "src",
            output: "dist",
            root: "./",
            includes: "_includes",
            layouts: "_layouts"
        }
    }
};