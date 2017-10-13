<template>
  <!-- Modal -->
  <div ref="minModal" class="modal fade">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
            aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">提示</h4>
        </div>
        <div class="modal-body">
          {{message}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-primary" @click="modalCheck">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vModel',
    props: ['message','check'],
    data(){
      return {
        positionY: 0,
        timer: null,
      }
    },
    methods: {
      showModal: function () {
        $(this.$refs['minModal']).modal('show')
      },closeModal: function () {
        $(this.$refs['minModal']).modal('hide')
      },
      modalCheck:function(){
        this.check();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
