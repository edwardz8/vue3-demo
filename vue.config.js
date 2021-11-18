module.exports = {
    css: {
      extract: false,
      loaderOptions: {
        sass: {
          additionalData: `
          @import "~storyblok-design-system/src/assets/styles/variables.scss";
          @import "~storyblok-design-system/src/assets/styles/global.scss";
          @import "~storyblok-design-system/src/assets/styles/resets.scss";
          @import "~storyblok-design-system/src/assets/styles/mixins.scss";`
        },
      },
    }
  }