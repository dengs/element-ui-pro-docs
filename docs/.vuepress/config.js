module.exports = {
  title: "Element-UI Pro",
  description: "基于Element-ui 2.x & Vue.js 2.x 封装的一套业务组件库.",
  dest: "dist", // 默认 .vuepress/dist
  host: "0.0.0.0",
  port: 9000,
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2, 3],
    },
  },
  themeConfig: {
    logo: "/assets/logo.png",
    // 启用/禁用 默认的搜索框
    search: true,
    // 默认搜索框显示的搜索结果数量
    searchMaxSuggestions: 10,
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "dengs/element-ui-pro",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: "查看源码",
    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'dengs/element-ui-pro',
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
    // 启用页面滚动效果
    smoothScroll: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    // 最后更新时间,以合适的日期格式显示在每一页的底部
    // lastUpdated: "Last Updated", // string | boolean
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/component/" },
      {
        text: "相关推荐",
        ariaLabel: "相关资源推荐",
        items: [
          { text: "工具库", items: [{ text: "nothing.js 工具库", link: "https://nothing.js.org", target: "_blank" }] },
          { text: "vuex-helper", link: "https://github.com/dengs/vuex-helper", target: "_blank" },
        ],
      },
    ],
    sidebar: [
      {
        title: "更新日志",
        path: "/change-logs",
      },
      {
        title: "开发指南",
        // path: "/component/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          { title: "安装", path: "/component/installation/" },
          { title: "快速上手", path: "/component/quickstart/" },
        ],
      },
      {
        title: "组件",
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 3, // 可选的, 默认值是 1

        children: [
          {
            title: "基础组件 - Basic",
            collapsable: false,
            children: [
              { title: "按钮组", path: "/component/basic/button-group" },
              { title: "编辑表单", path: "/component/basic/edit-form" },
              { title: "编辑表格", path: "/component/basic/edit-table" },
              { title: "Test", path: "/component/basic/test1" },
            ],
          },
          {
            title: "引用类组件 - Reference",
            collapsable: false,
            children: [
              { title: "表型参照", path: "/component/ref/ref-table" },
              { title: "树型参照", path: "/component/ref/ref-tree" },
              { title: "树表型参照", path: "/component/ref/ref-tree-table" },
            ],
          },
        ],
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
    ],
  },
};
