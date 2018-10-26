<template>
    <div class="side-menu container">
        <div id="title" class="side-menu-heading">
            <div>
                <img class="logo" src="../assets/logo.png"/>
            </div>
            <div>
                <a href="javascript:void(0);">Demo</a>
            </div>
        </div>
        <ul class="side-menu-list">
            <li class="side-menu-item">
                <router-link to="/Dashboard"><view-dashboard-icon /><span>Dashboard</span></router-link>
            </li>
            <li class="side-menu-item">
                <router-link to="/Map"><map-marker-icon /><span>Map</span></router-link>
            </li>
            <li class="side-menu-item">
                <router-link to="/SystemConfiguration"><settings-icon /><span>System Configuration</span></router-link>
            </li>
            <li class="side-menu-item">
                <router-link to="/DeviceManagement"><view-list-icon /><span>Device Management</span></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import ViewDashboardIcon from 'icons/ViewDashboard'
import MapMarkerIcon from 'icons/MapMarker'
import SettingsIcon from 'icons/Settings'
import ViewListIcon from 'icons/ViewList'

export default {
    name: 'SideMenu',
    components: {
        ViewDashboardIcon,
        MapMarkerIcon,
        SettingsIcon,
        ViewListIcon
    }
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
  
  .logo
    width 50px

  a
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
  
  >a.router-link-active
    background #1f8dd6
    box-shadow 3px 0px 3px #1f8dd6

.material-icons
  vertical-align middle
</style>

