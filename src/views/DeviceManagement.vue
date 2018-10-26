<template>
    <div id="deviceManagement">
        <section class="pure-g title">
            <div class="pure-u-1 pure-u-lg-1-3">
                <h3>Devices</h3>
            </div>
            <div class="pure-u-1 pure-u-lg-2-3">
                <form class="pure-form">
                    <input class="input pure-input-rounded pure-input-1-2" type="text" name="search" placeholder="Search for" />
                    <button type="submit" class="pure-button pure-button-primary">Search</button>
                </form>
            </div>
        </section>
        <section class="pure-g">
            <div class="pure-u-1">
                <table class="pure-table pure-table-horizontal">
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Gateway</th>
                        <th>Adapter</th>
                        <th>State</th>
                        <th>IP/Name</th>
                        <th>Memory</th>
                        <th>Download</th>
                        <th>Last Cron Time</th>
                        <th>Enable</th>
                        <th>Operations</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in devices" :key="item.index" class="device" :class="item.enable ? 'enable': 'disable'">
                            <td>{{ item.index }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.gateway }}</td>
                            <td>{{ item.adapter }}</td>
                            <td>{{ item.state }}</td>
                            <td>{{ item.addr }}</td>
                            <td>{{ item.memory }}%</td>
                            <td>{{ item.download }}</td>
                            <td>{{ item.lastcrontime }}</td>
                            <td>
                                <label :for="'device-'+item.index" class="pure-checkbox">
                                    <input :id="'device-'+item.index" type="checkbox" v-model="item.enable">
                                    <span class="checkbox-label">{{ item.enable ? 'Yes' : 'No' }}</span>
                                </label>
                            </td>
                            <td>
                                <a class="operation" href="javascript:void(0);"><pencil-icon title="Edit"/></a>
                                <a class="operation" href="javascript:void(0);"><package-down-icon title="Download"/></a>
                                <a class="operation" href="javascript:void(0);"><delete-forever-icon title="Delete"/></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
import PencilIcon from 'icons/Pencil'
import PackageDownIcon from 'icons/PackageDown'
import DeleteForeverIcon from 'icons/DeleteForever'

export default {
    name: 'DeviceManagement',
    components: {
        PencilIcon,
        PackageDownIcon,
        DeleteForeverIcon
    },
    computed: {
        devices() {
            return this.$store.state.devices
        }
    }
}
</script>

<style lang="stylus" scoped>
#deviceManagement
  width 100%
  max-width 1500px
  height calc( 100% - 40px )

  >section
    padding 0 30px 30px 30px

.title
  padding 0 30px
  
  >div
    height 50px

.pure-form
  padding-top 15px
  float right
  
  input[name="search"]
    width 250px

.pure-table
  width 100%

  .device.disable
    color #909090

  tr.device:hover
    background-color #dafdf3

  a
    color #d05050

  .checkbox-label
    padding-left 1em

  .operation
    margin-left .5em
</style>

