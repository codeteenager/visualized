module.exports = {
    title: '数据可视化',
    description: '数据可视化',
    base: '/visualized/',
    head: [
        ['link', { rel: 'icon', href: '/visualized/favicon.ico' }]
    ],
    markdown: {
        lineNumbers: true, //显示代码行数
    },
    lastUpdated: true,
    themeConfig: {
        //siteTitle: false,
        //logo: "/logo.svg",
        nav: [
            { text: "博文", link: "/guide/introduction" }
        ],
        outlineTitle: '在本页面',
        lastUpdatedText: '最近更新时间',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present codeteenager'
        },
        smoothScroll: true,
        socialLinks: [{ icon: "github", link: "https://github.com/codeteenager/visualized" }],
        sidebar: {
            "/guide/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "介绍",
                            link: "/guide/introduction",
                        },
                        {
                            text: "Canvas",
                            link: "/guide/canvas",
                        },
                        {
                            text: "技术分享",
                            link: "/guide/share",
                        }
                    ],
                }
            ],
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    }
}