import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import VueHighlightJS from "vue-highlight.js";
// Highlight.js languages (Only required languages)
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import vue from "vue-highlight.js/lib/languages/vue";
/*
 * Import Highlight.js theme
 * Find more: https://highlightjs.org/static/demo/
 */
import "highlight.js/styles/vs2015.css";

// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(ElementUI);
  Vue.use(VueHighlightJS, {
    // Register only languages that you want
    languages: {
      css,
      javascript,
      vue,
    },
  });
};
