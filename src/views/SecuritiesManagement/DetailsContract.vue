<template>
  <div>
    <el-dialog :visible.sync="dialogVisible">
      <iframe :src="url" width="100%" height="500px"></iframe>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'DetailsContract',
  data() {
    return {
      dialogVisible: false,
      url: null
    };
  },
  methods: {
    Close() {
      this.dialogVisible = false;
    },
    show(url) {
      this.url = url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style>
/* .aa li:hover {
  background-color: yellow;
} */
</style>

