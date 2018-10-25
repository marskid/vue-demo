<template>
    <baidu-map class="bm-view" :center="center" :zoom="zoom" :scroll-wheel-zoom="true" @ready="readyHandler" ak="wacp4mOFLbBTG1YWyibcNkbf6kgYEcf3"></baidu-map>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

export default {
    name: 'Map',
    data () {
        return {
            center: { lng: 0, lat: 0 },
            zoom: 0
        }
    },
    components: {
        BaiduMap
    },
    methods: {
        // eslint-disable-next-line 
        readyHandler ({BMap, map}) {
            this.center.lng = 116.404
            this.center.lat = 39.915
            this.zoom = 13
        }
    }
}
</script>

<style lang="stylus">
.bm-view 
  width 100%
  height calc(100% - 40px)

</style>

