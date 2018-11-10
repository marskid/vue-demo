<template>
    <div class="loading la-line-scale la-2x">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
import "load-awesome/css/line-scale.css"

export default {
  name: "Loading"
}
</script>

<style lang="stylus" scoped>
.loading
    color #79bbb5
    margin 0 auto
    top calc(50% - 64px)
</style>
