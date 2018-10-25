<template>
    <div class="side-menu container">
        <div id="title" class="side-menu-heading">
            <a href="#/">Demo</a>
        </div>
        <ul class="side-menu-list">
            <li class="side-menu-item">
                <router-link to="/Dashboard"><i class="material-icons">dashboard</i><span>Dashboard</span></router-link>
            </li>
            <li class="side-menu-item">
                <router-link to="/Map"><i class="material-icons">place</i><span>Map</span></router-link>
            </li>
            <li class="side-menu-item">
                <router-link to="/SystemConfiguration"><i class="material-icons">settings</i><span>System Configuration</span></router-link>
            </li>
            <li class="side-menu-item">
                <router-link to="/DeviceManagement"><i class="material-icons">list</i><span>Device Management</span></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SideMenu'
}
</script>

<style lang="stylus">
.side-menu.container a
    white-space nowrap
    text-decoration none

.side-menu-heading
  display inline-block
  font-size 110%
  width 100%
  text-align center
  text-transform uppercase
  padding 1em 0
  
  >a
    color #ffffff
    font-weight bold

.side-menu-list
  list-style-type none
  margin 0
  padding 0

.side-menu-item
  >a
    display block
    color #ffffff
    padding 1em .5em
    
    &:hover 
      background #333

    >span
      padding-left 3px
      vertical-align middle
  
  >a.router-link-active
    background #1f8dd6
    box-shadow 3px 0px 3px #1f8dd6

.material-icons
  vertical-align middle
</style>

