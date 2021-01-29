module.exports = {
  title: 'SMACSS中文翻译',
  description: 'CSS模块化可扩展架构',
  theme: '@vuepress/vue',
  themeConfig: {
    logo: '/logo.png',
    editLinks: true,
    smoothScroll: true,
    nav: [
      { text: '原书地址', link: 'https://smacss.com/', target:'_blank', rel:'' },
      { text: 'Github', link: 'https://github.com/jeffwcx/translate-smacss-zh', target:'_blank', rel:'' }
    ],
    sidebar: [
      {
        title: '前言',
        collapsable: false,
        children: [
          {
            title: '关于作者',
            path: '/preface/1-关于作者'
          },
          {
            title: '介绍',
            path: '/preface/2-介绍.md'
          }
        ]
      },
      {
        title: '核心',
        collapsable: false,
        children: [
          {
            title: '规则分类',
            path: '/core/3-对CSS规则进行分类'
          },
          {
            title: '基础规则',
            path: '/core/4-基础规则'
          },
          {
            title: '布局规则',
            path: '/core/5-布局规则'
          },
          {
            title: '模块规则',
            path: '/core/6-模块规则'
          },
          {
            title: '状态规则',
            path: '/core/7-状态规则'
          },
          {
            title: '主题规则',
            path: '/core/8-主题规则'
          },
          {
            title: '状态改变',
            path: '/core/9-状态改变'
          }
        ]
      },
      {
        title: 'SMACSS面面观',
        collapsable: false,
        children: [
          {
            title: '适用性深度',
            path: '/aspectsofsmacss/10-适用性深度'
          },
          {
            title: '选择器性能',
            path: '/aspectsofsmacss/11-选择器性能'
          },
          {
            title: 'HTML5和SMACSS',
            path: '/aspectsofsmacss/12-HTML5和SMACSS'
          },
          {
            title: '原型',
            path: '/aspectsofsmacss/13-原型'
          },
          {
            title: '预处理器',
            path: '/aspectsofsmacss/14-预处理器'
          },
          {
            title: '不要随便定义基础规则',
            path: '/aspectsofsmacss/15-不要随便定义基础规则'
          },
          {
            title: '图标模块',
            path: '/aspectsofsmacss/16-图标模块'
          },
          {
            title: '复杂的继承',
            path: '/aspectsofsmacss/17-复杂的继承'
          },
          {
            title: '录屏 应用原则',
            path: '/aspectsofsmacss/18-录屏：应用原则'
          },
          {
            title: '录屏 避免上下文内容特定',
            path: '/aspectsofsmacss/19-录屏：避免有特定内容的上下文'
          }
        ]
      },
      {
        title: '附录',
        collapsable: false,
        children: [
          {
            title: '代码格式',
            path: '/appendix/20-代码格式'
          },
          {
            title: '资源',
            path: '/appendix/21-资源'
          }
        ]
      }
    ]
  }
}