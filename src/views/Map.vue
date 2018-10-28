<template>
    <baidu-map class="bm-view" :center="center" :zoom="zoom" :scroll-wheel-zoom="true" @ready="readyHandler" ak="wacp4mOFLbBTG1YWyibcNkbf6kgYEcf3"></baidu-map>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

export default {
    name: 'Map',
    data () {
        return {
            center: { lng: 116.404, lat: 39.915 },
            zoom: 13
        }
    },
    components: {
        BaiduMap
    },
    methods: {
        readyHandler ({BMap, map}) {
            map.addEventListener("resize", () => {
                map.setCenter(new BMap.Point(this.center.lng, this.center.lat))
            })
            map.addEventListener("moveend", () => {
                let center = map.getCenter()
                this.center.lng = center.lng
                this.center.lat = center.lat
            })
        }
    }
}
</script>

<style lang="stylus">
.bm-view 
  width 100%
  height calc(100% - 40px)

</style>

