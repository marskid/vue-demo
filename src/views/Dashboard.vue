<template>
    <div id="dashboard">
        <section class="pure-g title">
            <div class="pure-u-1">
                <h3>Sensor Statistics</h3>
            </div>
        </section>
        <section class="pure-g">
            <div class="table pure-u-1 pure-u-lg-3-5">
                <div class="table-responsive">
                    <table class="pure-table pure-table-horizontal">
                        <thead>
                            <tr><th colspan="3">Sensor Download Types(#)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>SensorType</td><td>Scheduled</td><td>Manual</td></tr>
                            <tr><td>GPS</td><td>19</td><td>11</td></tr>
                            <tr><td>SX300</td><td>17</td><td>7</td></tr>
                            <tr><td>G4</td><td>10</td><td>23</td></tr>
                            <tr><td>Total</td><td>46</td><td>23</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="echart pure-u-1 pure-u-lg-2-5">
                <v-chart id="echart-pie1" :options="echartPie1"/>
            </div>
        </section>
        <section class="pure-g">
            <div class="table pure-u-1 pure-u-lg-3-5">
                <div class="table-responsive">
                    <table class="pure-table pure-table-horizontal">
                        <thead>
                            <tr><th colspan="5">Scheduled Sensor Status(#)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>SensorType</td><td>Active</td><td>Delayed</td><td>Disabled</td><td>Offline</td></tr>
                            <tr><td>GPS</td><td>9</td><td>1</td><td>5</td><td>4</td></tr>
                            <tr><td>SX300</td><td>7</td><td>7</td><td>7</td><td>4</td></tr>
                            <tr><td>G4</td><td>1</td><td>3</td><td>5</td><td>7</td></tr>
                            <tr><td>Total</td><td>6</td><td>3</td><td>14</td><td>9</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="echart pure-u-1 pure-u-lg-2-5">
                <v-chart id="echart-pie2" :options="echartPie2"/>
            </div>
        </section>
    </div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'

export default {
    name: 'Dashboard',
    components: {
        'v-chart': ECharts
    },
    data() {
        return {
            echartPie1: {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['GPS','SX300','G4']
                },
                series: [
                    {
                        name:'Total',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:30, name:'GPS'},
                            {value:24, name:'SX300'},
                            {value:33, name:'G4'},
                        ]
                    }
                ]
            },
            echartPie2: {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['Active','Delayed','Disabled', 'Offline']
                },
                series: [
                    {
                        name:'Total',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:30, name:'Active'},
                            {value:24, name:'Delayed'},
                            {value:33, name:'Disabled'},
                            {value:40, name:'Offline'},
                        ]
                    }
                ]
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
#dashboard
  width 100%
  max-width 1500px
  height calc( 100% - 40px )

  >section
    padding 0 30px 30px 30px

.title
    padding 0 30px

.table-responsive
  overflow auto
  border 1px solid #ddd

.pure-table
  width 100%

  tbody tr:last-child, thead tr:first-child
    background-color #dddddd

#echart-pie1, #echart-pie2
  width 200px
  height 200px
  margin 0 auto
</style>

