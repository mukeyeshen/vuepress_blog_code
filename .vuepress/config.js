module.exports = {
   title: "喵ฅ仙 | BLOG",
  description: " 初识, (ฅ>ω<*ฅ)你的世界但愿都好",
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
   markdown: {
    lineNumbers: true
  },
  // 插件
  plugins: [
    // 阅读进度条
    ["reading-progress"],

    // 打赏
    [
      "reward",
      {
        btnText: "打赏", // reward button text.
        title: "给作者赏一杯咖啡吧", // First reward text.
        subTitle: "感谢您的支持", // Second reward text.
        rewardOption: [
          // your QR code image.
          {
            text: "微信",
            url: "https://i.loli.net/2020/01/16/hfg1SWVA9iwUeQb.png" // ddd your picture to docs/.vuepress/public
          },
          {
            text: "支付宝",
            url: "https://i.loli.net/2020/06/19/8BTSwDntmvlFkjV.png" // ddd your picture to docs/.vuepress/public
          }
        ],
        showInMobile: false // whether to display on the mobile side, default: false.
      }
    ],

    // 粒子线
    [
      "nest",
      {
        color: "220,20,60", // color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
        pointColor: "255,182,193", // color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
        opacity: 0.6, // the opacity of line (0~1), default: 0.5.
        count: 68, // the number of lines, default: 99.
        zIndex: 1, // z-index property of the background, default: -1.
        showInMobile: false // whether to display on the mobile side, default: false.
      }
    ],

    // 切换页面的时候，在顶部显示进度条
    ["vuepress-plugin-nprogress"],

    //看板娘
    [
      require("./plugins/KanBanNiang"),
      {
        theme: [
          "blackCat",
          "whiteCat",
          "haru1",
          "haru2",
          "haruto",
          "koharu",
          "izumi",
          "shizuku",
          "wanko",
          "miku",
          "z16"
        ],
        width: 120,
        height: 280,
        modelStyle: {
          position: "fixed",
          right: "120px",
          bottom: "20px",
          opacity: "1.2"
        },
        messageStyle: {
          position: "fixed",
          right: "80px",
          bottom: "200px"
        },
        btnStyle: {
          bottom: "10px",
          right: "60px"
        }
      }
    ],

    // 图片预览
    [
      "vuepress-plugin-medium-zoom",
      {
        selector: ".my-wrapper .my-img",
        delay: 1000,
        options: {
          margin: 24,
          background: "#BADA55",
          scrollOffset: 0
        }
      }
    ],

    //音乐播放器
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          // 网络文件示例
          {
            name: "烟火里的尘埃",
            artist: "华晨宇",
            url: "http://music.163.com/song/media/outer/url?id=29004400.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
		 
		  {
            name: "恋のEveryDay☆HappyDay(フルサイズ)",
            artist: "竹達彩奈",
            url: "http://music.163.com/song/media/outer/url?id=27488656.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },

          {
            name: "山有木兮",
            artist: "伦桑 / 橙光音乐",
            url: "http://music.163.com/song/media/outer/url?id=425100599.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "大鱼",
            artist: "ayo又又",
            url: "http://music.163.com/song/media/outer/url?id=507930569.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "牵丝戏",
            artist: "银临 / Aki阿杰",
            url: "http://music.163.com/song/media/outer/url?id=30352891.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "有何不可",
            artist: "ayo又又",
            url: "http://music.163.com/song/media/outer/url?id=537026484.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "入梦已千年",
            artist: "伦桑",
            url: "http://music.163.com/song/media/outer/url?id=418279303.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },

          {
            name: "九万字",
            artist: "ayo又又",
            url: "http://music.163.com/song/media/outer/url?id=1374141023.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "九州·不负",
            artist: "橙光音乐 / 卡修Rui",
            url: "http://music.163.com/song/media/outer/url?id=521599645.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },

          {
            name: "胡广生",
            artist: "ayo又又",
            url: "http://music.163.com/song/media/outer/url?id=1358326714.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "生死劫",
            artist: "五音Jw / 银临",
            url: "http://music.163.com/song/media/outer/url?id=470759298.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "远方",
            artist: "ayo又又",
            url: "http://music.163.com/song/media/outer/url?id=505749845.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "世界上的另一个我",
            artist: "ayo又又",
            url: "http://music.163.com/song/media/outer/url?id=537029200.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "冬眠",
            artist: "司南",
            url: "http://music.163.com/song/media/outer/url?id=1398663411.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "你的答案",
            artist: "阿冗",
            url: "http://music.163.com/song/media/outer/url?id=1400256289.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },

          {
            name: "いつもこの場所で",
            artist: "彩音",
            url: "http://music.163.com/song/media/outer/url?id=26259014.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "7月の翼",
            artist: "Aimer",
            url: "http://music.163.com/song/media/outer/url?id=28660145.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "君のままで",
            artist: "azusas",
            url: "http://music.163.com/song/media/outer/url?id=33190502.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "上邪",
            artist: "小曲儿",
            url: "http://music.163.com/song/media/outer/url?id=28188382.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "ハナコトバ",
            artist: "三澤紗千香",
            url: "http://music.163.com/song/media/outer/url?id=1414075101.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "紅、華を咲かせて",
            artist: "柳原かなこ",
            url: "http://music.163.com/song/media/outer/url?id=1410648388.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "嚣张",
            artist: "en",
            url: "http://music.163.com/song/media/outer/url?id=1382596189.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          },
          {
            name: "悠久のカタルシス ~ユニコーン ver.~",
            artist: "加隈亜衣",
            url: "http://music.163.com/song/media/outer/url?id=1407215737.mp3",
            cover: "https://i.loli.net/2020/01/06/3gAnevw2xfzk4dY.png"
          }
        ]
      }
    ],

    // 开启 code-copy
    ["vuepress-plugin-code-copy", true],

    // 开启 PWA
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    // 彩带背景
    [
      "ribbon",
      {
        size: 60,
        opacity: 0.8,
        zIndex: -1
      }
    ],
    // 鼠标特效插件
    ["cursor-effects"],

    // 离开页面标题变化
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(ฅ>ω<*ฅ)欢迎萌酱か小精灵！",
        hideIcon: "/failure.ico",
        hideText: "( ๑ˊ•̥▵•)੭₎₎萌酱か不要走呀！",
        recoverTime: 2000
      }
    ],
    // 悬挂小猫返回顶部
    ["go-top"],
    // 禁用无用插件
    ["@vuepress-reco/back-to-top", false],
    ["@vuepress-reco/extract-code", true],
    // 流程图
    ["flowchart"]
  ],

  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'Docs', 
        icon: 'reco-message',
        items: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/' }
        ]
      },
      { text: 'Contact', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/mukeyeshen', icon: 'reco-github' }
        ]
      }
    ],
    sidebarDepth: 4,
    sidebar: "auto",
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
	
	valineConfig: {
      appId: "iWj5aLupYQrgDReqHczbWNHy-gzGzoHsz", // your appId
      appKey: "WN0BVsbJOKRhbQkvq5h9EcNi", // your appKey
      placeholder: "ヾﾉ≧∀≦)o 来呀！吐槽一番吧！ 萌呆小可爱 ",
      avatar: "wavatar",
      recordIP: true,
      visitor: true // 阅读量统计
    },

    lastUpdated: 'Last Updated',
    // 作者
    author: '喵ฅ仙 | BLOG',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2017'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
