<template>
  <div id="layout">
    <div id="menu" :class="{ active: showMenu }">
      <a id="menuLink" class="menu-link" href="javascript:void(0);" @click="toggleMenu"><i class="material-icons">{{ showMenu ? 'clear' : 'menu' }}</i></a>
      <Side-Menu id="side-menu"></Side-Menu>
    </div>
    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue'

export default {
  name: 'layout',
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  },
  components: {
    SideMenu
  }
}
</script>


<style lang="stylus">
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

    &.active
      left 0

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
  color #ffffff
  background #191818
  text-align center
  vertical-align middle
  
  >i
    line-height 40px

  .active
    left 200px

  @media screen and (min-width: 600px)
    display none

#main
  padding-left 3px
</style>
