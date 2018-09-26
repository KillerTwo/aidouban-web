/**
 * 该文件用于修改create-react-app项目的默认配置
 * @param {*} config 
 * @param {*} env 
 */
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
    // // 按需加载antd
    // config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css'}], config);
    // // 可以使用less样式
    // config = rewireLess.withLoaderOptions({
    //     modifyVars: { "@primary-color": "#a7a794" },
    // })(config, env);

    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    //config = injectBabelPlugin(['wrapper', {}], config);#8a8a72  #a7a794
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#8a8a72" },
    })(config, env);

    return config;
};