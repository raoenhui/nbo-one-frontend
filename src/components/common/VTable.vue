<template>
  <table class="table table-striped">
    <thead>
    <tr>
      <th v-for="headerItem in option.header">
        {{ headerItem.name }}
      </th>
      <th v-if="option.rowEvents">操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in tableData">
      <td v-for="headerItem in option.header">{{item[headerItem.field]}}</td>
      <td v-if="option.rowEvents">操作</td>
    </tr>
    </tbody>
  </table>
  <!--{{JSON.stringify(dataObj)}}-->
</template>

<script>
  import * as API from 'src/service/handleData'
  export default {
    name: 'vTable',
    props: ['option'],
    data(){
      return {
        tableData:[]
      }
    },
    beforeCreate:function () {
        console.log('beforeCreate');
    },
    created:function () {
        console.log('created');
    },
    beforeMount:function () {
      console.log('beforeMount');
      API[this.option.apiName]().then((data) => {
        this.tableData=data;
      }).catch(function (e) {
        toastr.error('API调用错误')
      })
    },
    mounted:function () {
        console.log('mounted');
    },
    beforeUpdate:function () {
        console.log('beforeUpdate');
    },
    updated:function () {
        console.log('updated');
    },
    activated:function () {
        console.log('activated');
    },
    deactivated:function () {
        console.log('deactivated');
    },
    beforeDestroy:function () {
        console.log('beforeDestroy');
    },
    destroyed:function () {
        console.log('destroyed');
    },
    methods: {

    },
/*    watch: {
      'dataObj': function (n, o) {
          console.log('dataObj')
        this.dataObj = n
        console.log(JSON.stringify(this.dataObj))
      }
    },*/
  }
</script>

<style lang="scss" scoped>

</style>
