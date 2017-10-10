<template>
  <div class="project">
    projects

  </div>
</template>
<script>
  import {ApiGetMyProject} from 'src/service/handleData'
  export default {
    name: 'project',
    data () {
      return {

      }
    },
    mounted:function(){
      this.getMyProject();
  },
    methods: {
      getMyProject(){
        ApiGetMyProject().then((data) => {
          console.info(data)
          toastr.success('getMyProjectSuccess')
        }).catch(function (e) {
          toastr.error('getMyProjectError')
        })
      }
    }
  }
</script>


<style lang="scss" scoped>

</style>
