module.exports = {
    dir: {
        input: "src",
        output: "_site"
    },
};
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles.css");

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
