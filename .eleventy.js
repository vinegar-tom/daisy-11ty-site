module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/styles');
  eleventyConfig.addPassthroughCopy('./src/scripts');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/scores');
  eleventyConfig.addWatchTarget('./src/styles');
  eleventyConfig.addWatchTarget('./src/scripts');
  eleventyConfig.addWatchTarget('./src/images');
  eleventyConfig.addWatchTarget('./src/scores');

  return {
    pathPrefix: '/daisy-11ty-site/',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};