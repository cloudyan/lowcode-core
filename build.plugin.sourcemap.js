module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    // θΏιζ― webpackd η config
    // config.devtool('cheap-module-source-map');
    // config.devtool('source-map');
    config.devtool('inline-source-map');
  });
};
