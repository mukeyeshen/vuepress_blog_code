<template>
  <div class="kanbanniang">
    <div class="banniang-container" v-show="isLoaded">
      <div class="messageBox" :style="messageStyle" v-show="isShowMessageBox">
        {{ messages.message || '欢迎来到 ' + $site.title }}
      </div>
      <div
        v-show="!isShowBtns"
        :style="btnStyle"
        class="operation"
        @mouseenter="isShowMessageBox = true"
        @mouseleave="isShowMessageBox = false">
        <i class="kbnfont kbn-ban-home ban-home" @click="goHome" @mouseenter="hoverGoHome" @mouseleave="resetMessage"></i>
        <i class="kbnfont kbn-ban-message message"></i>
        <i class="kbnfont kbn-ban-close close" @click="closeBanNiang" @mouseenter="hoverCloseBanNiang" @mouseleave="resetMessage"></i>
        <a target="_blank" href="https://vuepress-theme-reco.recoluan.com/views/plugins/kanbanniang.html">
          <i class="kbnfont kbn-ban-info info" @mouseenter="hoverMoreInfo" @mouseleave="resetMessage" ></i>
        </a>
        <i v-show="myTheme.length > 1" class="kbnfont kbn-ban-theme skin" @click="changeTheme" @mouseenter="hoverChangeTheme" @mouseleave="resetMessage"></i>
      </div>
      <canvas
        id="banniang"
        :style="modelStyle"
        :width="style.width"
        :height="style.height"
        class="live2d"
      ></canvas>
    </div>
    <div class="showBanNiang" v-show="displayBanNiang" @click="showBanNiang">
      看板娘
    </div>
  </div>
</template>

<script>
import live2dJSString from './assets/js/live2d'
export default {
  name: 'KanBanNiang',
  data () {
    return {
      isLoaded: true,
      displayBanNiang: false,
      isShowMessageBox: false,
      isShowBtns: CLEAN,
      messages: {
        message: MESSAGES.welcome,
        welcome: MESSAGES.welcome,
        home: MESSAGES.home,
        theme: MESSAGES.theme,
        close: MESSAGES.close
      },
      currentTheme: THEME[0],
      myTheme: THEME,
      themeName: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
      // 模型地址
      model: {
         blackCat:  
		  'https://assets.smallsunnyfox.com/models/model/HyperdimensionNeptunia/general/pose.json',	
        whiteCat:
          'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4-SOPMOD-II-1/normal/model.json',
        haru1:
          'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/M4-SOPMOD-II-2/normal/model.json',
        haru2:
          'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/potion-Maker-Pio/index.json',
        haruto:
          'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/wed_16/wed_16.model.json',
        koharu:
          'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/HK416-1/normal/model.json',
        izumi:
          'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/HK416-1/destroy/model.json',
        shizuku:
          'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/UMP45-3/normal/model.json',
        wanko:
          'https://assets.smallsunnyfox.com/models/model/live_uu/model.json',
        miku:
          'https://assets.smallsunnyfox.com/models/model/kurumi/model.json',
        z16:
          'https://assets.smallsunnyfox.com/models/model/HyperdimensionNeptunia/general/pose.json'
      },
      // model的高宽
      style: {
        width: WIDTH,
        height: HEIGHT
      },
      // model的样式
      modelStyle: MODEL_STYLE,
      // messageBox的样式
      messageStyle: MESSAGE_STYLE,
      // 按钮的样式
      btnStyle: BTN_STYLE
    }
  },
  mounted () {
    this.btnStyle = {
      ...this.btnStyle,
      height: this.myTheme.length > 1 ? '120px' : '100px'
    }
    // 初始化live2d模型
    this.initBanNiang()
  },
  methods: {
    hoverGoHome () {
      this.messages.message = this.messages.home
    },
    hoverChangeTheme () {
      this.messages.message = this.messages.theme
    },
    hoverMoreInfo () {
      this.messages.message = '想知道关于我的更多信息吗？'
    },
    hoverCloseBanNiang () {
      this.messages.message = this.messages.close
    },
    resetMessage () {
      this.messages.message = this.messages.welocme
    },
    goHome () {
      if (this.$route.path !== '/') {
        this.$router.push('/')
      }
    },
    changeTheme () {
      const themes = []
      for (var i = 0; i < this.myTheme.length; i++) {
        if (this.myTheme[i] != this.currentTheme) {
          themes.push(this.myTheme[i])
        }
      }
      const randomNum = Math.floor(Math.random() * (this.myTheme.length - 1))
      this.currentTheme = themes[randomNum]
      this.initBanNiang()
    },
    closeBanNiang () {
      this.isLoaded = false
      this.displayBanNiang = true
    },
    showBanNiang () {
      this.isLoaded = true
      this.displayBanNiang = false
      this.initBanNiang()
    },
    initBanNiang () {
      if (this.themeName.indexOf(this.currentTheme) === -1) {
        console.log('@vuepress-reco/vuepress-plugin-kan-ban-niang不支持主题' + this.currentTheme + ', 请检查主题名, 或前往https://vuepress-theme-reco.recoluan.com/views/plugins/kanbanniang.html 查看支持的主题')
        document.querySelector('.kanbanniang').style.display = 'none'
        return
      }
      const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
      if (isMobile) {
        this.isLoaded = false
        return console.log('mobile do not load model')
      }
      if (!window.loadlive2d) {
        const script = document.createElement('script')
        script.innerHTML = live2dJSString
        document.body.appendChild(script)
      }
      var ajax = new XMLHttpRequest()
      ajax.open('get', this.model[this.currentTheme])
      ajax.send()
      ajax.onreadystatechange = function () {
        if (ajax.status !== 200) {
          console.log('看板娘的CDN资源加载失败了，请稍后刷新页面重试！')
          document.querySelector('.kanbanniang').style.display = 'none'
        }
      }
      window.loadlive2d(
        'banniang',
        this.model[this.currentTheme]
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
@require './assets/iconfont/iconfont.css'
  .showBanNiang
    position fixed
    right 70px
    bottom 6rem
    color $accentColor
    width 48px
    height 20px
    padding 10px
    cursor pointer
    border-radius 4px
    // 其他主题识别不到变量时使用
    background-color rgba(231, 234, 241, 0.5)
    // reco主题
    box-shadow var(--box-shadow)
    background-color var(--background-color)
  .banniang-container
    position fixed
    right 50px
    bottom 100px
    color #00adb5
    .messageBox
      position fixed
      padding 10px
      height 60px
      width 160px
      border-radius 8px
      background-color lighten($accentColor, 50%)
      color $textColor
      opacity 0.8
    .operation
      width 20px
      position fixed
      display flex
      flex-direction column
      justify-content space-between
      i
        font-size 20px
        cursor pointer
        color lighten($textColor, 50%)
        &:hover
          color lighten($accentColor, 50%)
    #banniang
      z-index 99999
      pointer-events none
      position fixed
</style>
