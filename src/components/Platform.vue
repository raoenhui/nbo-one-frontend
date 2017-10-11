<template>
  <div class="platform">
    <PlatformHead />
    <router-view></router-view>

  </div>
</template>
<script>
  import PlatformHead from "src/components/platform/Head.vue"
  export default {
    name: 'program',
    data () {
      return {

      }
    },
    methods: {

    },
    components:{PlatformHead}
  }
</script>


<style lang="scss" scoped>
  @import 'src/components/Platform';
</style>
