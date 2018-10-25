<template>
  <div id="layout">
    <div id="menu" :class="{ active: showMenu }">
      <a id="menuLink" class="menu-link" href="javascript:void(0);" @click="toggleMenu"><i class="material-icons">{{ showMenu ? 'clear' : 'menu' }}</i></a>
      <Side-Menu id="side-menu"></Side-Menu>
    </div>
    <div id="main">
      <header>
        <ul class="breadcrumb">
          <li v-for="(item, index) in breadcrumb" :key="index">{{ item }}</li>
        </ul>
      </header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue'

export default {
  name: 'layout',
  data() {
    return {
      showMenu: false,
      breadcrumb: []
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  },
  components: {
    SideMenu
  },
  mounted() {
    // eslint-disable-next-line 
    this.$router.afterEach((to, from) => {
      this.breadcrumb = [ to.name ]
    })
  }
}
</script>


<style lang="stylus">
html,body,#layout,#main
  height 100%

#layout
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  padding-left: 200px
  left: 0

  @media screen and (max-width: 600px)
    padding-left: 0

#menu
  position: fixed
  width: 200px
  top: 0
  left: 0
  bottom: 0
  background: #191818
  box-shadow 3px 0px 3px #888888
  overflow-y auto
  z-index 1000

  @media screen and (max-width: 600px)
    left -200px
    box-shadow none

    &.active
      left 0
      box-shadow 3px 0px 3px #888888

      >#menuLink
        left 160px

#menuLink
  position fixed
  display inline-block
  top 0
  left 0
  width 40px
  height 40px
  text-decoration none
  color #888888
  background-color #191818
  text-align center
  z-index 1000
  
  >i
    line-height 40px

  .active
    left 200px

  @media screen and (min-width: 600px)
    display none

#main
  padding-left 3px

  @media screen and (max-width: 600px)
    padding-left 0

header
  border-bottom 1px solid rgba(0,0,0,.1)
  @media screen and (max-width: 600px)
    padding-left 40px
    overflow hidden

.breadcrumb
  height 39px
  padding 0 1em
  margin 0
  line-height 39px
  list-style-type none
  background #f9f9f9

  li
    display inline-block
  li + li:before
    color #CCCCCC
    content "/ "
    padding 0 5px
</style>
