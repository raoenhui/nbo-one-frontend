<template>
  <div class="project">
    我的项目:
    <VTable :option="tableOption" />
  </div>
</template>
<script>
  import VTable from 'src/components/common/VTable.vue'
  import {ApiGetMyProject} from 'src/service/handleData'
  export default {
    name: 'project',
    data () {
      return {
          tableOption:{
              apiName:'ApiGetMyProject',
              header: [
                {name: "项目名称", width: "25%", field: "name"},
                {name: "命名空间", width: "20%", field: "namespace"},
                {name: "负责人", width: "15%", field: "createUserName"},
                {name: "创建时间", width: "15%", field: "insertTime", sortable: false},
              ],
            rowEvents:[
              {
                name:"查看项目",class:"btn-success",
                click:function(row){
                 console.log(111)
                }
              }
            ]
          }
      }
    },
    mounted: function () {
//      this.getMyProject();
    },
    methods: {
      getMyProject(){
        ApiGetMyProject().then((data) => {
          this.myProjectData=data;
          toastr.success('getMyProjectSuccess')
        }).catch(function (e) {
          toastr.error('getMyProjectError')
        })
      }
    },
    components:{VTable}
  }
</script>


<style lang="scss" scoped>

</style>
