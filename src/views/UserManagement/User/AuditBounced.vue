<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible">
      <el-form style="text-align: center">
        <el-form-item>
          <el-radio v-model="is_approve" label="Y">{{$t('page_UserManagement_tips_through')}}</el-radio>
          <el-radio v-model="is_approve" label="N">{{$t('page_UserManagement_tips_nothrough')}}</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" style="float:right;margin-top: -30px" class="dialog-footer">
        <el-button @click="Close()">{{$t('page_UserManagement_btn_cancel')}}</el-button>
        <el-button @click="Submission()" type="primary">{{$t('page_UserManagement_btn_Submission')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { postHexAccountServiceIndexPhpAdminKycApprove } from '@/api/Exchange - Admin';
export default {
  name: 'AuditBounced',
  data() {
    return {
      dialogVisible: false,
      title: '',
      is_approve: 'Y',
      user_profile_id: null
    };
  },
  methods: {
    Submission() {
      console.log(this.is_approve);
      const param = new FormData();
      param.append('user_profile_id', this.user_profile_id);
      param.append('is_approve', this.is_approve);
      postHexAccountServiceIndexPhpAdminKycApprove(param).then(res => {
        if (res.data.status_code !== 1900) {
          this.$message.error(res.data.message);
          return;
        }
        this.$message.success(this.$t('page_UserManagement_op_auditsuccess'));
        this.dialogVisible = false;
        this.$emit('update');
      });
    },
    Close() {
      this.dialogVisible = false;
    },
    show(title, user_profile_id) {
      this.title = title;
      this.user_profile_id = user_profile_id;
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

