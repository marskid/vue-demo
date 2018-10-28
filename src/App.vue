<template>
  <div id="layout">
    <div id="menu" class="pure-menu" :class="{ active: showMenu }">
      <Side-Menu id="side-menu" @click.native="showMenu = false"></Side-Menu>
    </div>
    <div id="main">
      <vue-element-loading :active="isLoading">
        <div class="loading la-line-scale la-2x">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </vue-element-loading>
      <header>
        <a class="menu-link" :class="{ active: showMenu }" href="javascript:void(0);" @click="showMenu = !showMenu">
          <menu-icon v-show="!showMenu"/>
          <close-icon v-show="showMenu"/>
        </a>
        <ul class="breadcrumb">
          <li v-for="(item, index) in breadcrumb" :key="index"><span>{{ item }}</span></li>
        </ul>
      </header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import 'purecss'
import 'purecss/build/grids-responsive.css'
import 'vue-material-design-icons/styles.css'
import 'load-awesome/css/line-scale.css'
import CloseIcon from 'icons/Close'
import MenuIcon from 'icons/Menu'
import VueElementLoading from 'vue-element-loading'
import SideMenu from './components/SideMenu.vue'

export default {
  name: 'layout',
  data() {
    return {
      isLoading: true,
      showMenu: false,
      breadcrumb: ['']
    }
  },
  components: {
    CloseIcon,
    MenuIcon,
    VueElementLoading,
    SideMenu
  },
  mounted() {
    // eslint-disable-next-line
    this.$router.beforeEach((to, from, next) => {
      this.isLoading = true
      next()
    })
    // eslint-disable-next-line
    this.$router.afterEach((to, from) => {
      this.breadcrumb = [ to.name ]
      this.isLoading = false
    })
  }
}
</script>

<style lang="stylus">
html,body,#layout,#main
  height 100%

body
  overflow auto

#layout
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  padding-left: 200px
  left: 0

  @media print
    padding-left: 0

  @media screen and (max-width: 600px)
    padding-left: 0

#menu
  position: fixed
  width: 200px
  margin-left -200px
  top: 0
  left: 200px
  bottom: 0
  background-color: #191818
  box-shadow 3px 0px 3px #888888
  overflow-y auto
  z-index 1000

  @media print
    left 0
    box-shadow none

  @media screen and (max-width: 600px)
    left 0
    box-shadow none

    &.active
      left 200px
      box-shadow 3px 0px 3px #888888

#layout, #menu
    transition all 0.2s ease-out

#main
  padding-left 3px

  @media screen and (max-width: 600px)
    padding-left 0

.loading
  color #79bbb5

header
  height 40px
  border-bottom 1px solid rgba(0,0,0,.1)
  margin-bottom -1px
  background #f9f9f9
  overflow hidden
  white-space nowrap

.menu-link
  display inline-block
  text-decoration none
  width 40px
  height 40px
  text-align center
  font-size 2em
  color #888888
  background-color #191818
  z-index 1000

  @media screen and (max-width: 600px)
    &.active
      position fixed
      top 0
      left 0

      &+ul
        margin-left 40px

  @media screen and (min-width: 600px)
    display none

ul.breadcrumb
  display inline-block
  padding 0 1em
  margin 0
  list-style-type none
  vertical-align top

  li
    display inline-block
    line-height 40px
  li + li:before
    color #CCCCCC
    content "/ "
    padding 0 5px

</style>
