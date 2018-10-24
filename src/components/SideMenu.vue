<template>
    <div class="side-menu container">
        <div id="title" class="side-menu-heading">
            <a href="#/">Demo</a>
        </div>
        <ul class="side-menu-list">
            <li class="side-menu-item">
                <router-link to="/Dashboard">Dashboard</router-link>
            </li>
            <li class="side-menu-item">
                <router-link to="/Map">Map</router-link>
            </li>
            <li class="side-menu-item">
                <router-link to="/SystemConfiguration">System Configuration</router-link>
            </li>
            <li class="side-menu-item">
                <router-link to="/DeviceManagement">Device Management</router-link>
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
    padding 1em 1em
    
    &:hover 
      background #333
  
  >a.router-link-active
    background #1f8dd6
    box-shadow 3px 0px 3px #1f8dd6
</style>

