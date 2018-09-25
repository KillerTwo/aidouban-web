/**
 * 该文件用于修改create-react-app项目的默认配置
 * @param {*} config 
 * @param {*} env 
 */
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
    // 按需加载antd
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css'}], config);
    // 可以使用less样式
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#1DA57A" },
    })(config, env);
    return config;
};