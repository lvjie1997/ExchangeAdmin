<template>
  <div>
    <el-table v-loading="loading" class="tr" :data="tableData">
      <el-table-column>
        <template slot-scope="scope">
          <p>{{scope.row.name}}</p>
          <img style="height:16px;vertical-align: middle" src="static/idcard.png">
          <span>{{scope.row.email}}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <div
            v-if="scope.row.user_type == 'USER' && scope.row.kyc_level == 2 && (scope.row.user_status == 'ready_for_kyc')"
            class="operation"
          >
            <span class="edit" @click="audit(scope.row)">{{$t('page_UserManagement_btn_audit')}}</span>
          </div>
          <div
            v-if="scope.row.user_type == 'USER' && scope.row.kyc_level == 1 && scope.row.user_status == 'verified'"
            class="operation"
          >
            <span>{{$t('page_UserManagement_text_kyc')}}</span>
          </div>
          <div
            v-if="scope.row.user_type == 'USER' && (scope.row.kyc_level == 2 && scope.row.user_status == 'kyc2_verified' || scope.row.kyc_level == 3 && scope.row.user_status == 'kyc3_verified')"
            class="operation"
          >
            <span>{{$t('page_UserManagement_text_approved')}}</span>
          </div>
          <div
            v-if="scope.row.user_type == 'USER' && scope.row.kyc_level == 0 && scope.row.user_status == 'unverified'"
            class="operation"
          >
            <span>{{$t('page_UserManagement_text_Validationemail')}}</span>
          </div>
          <div
            v-if="scope.row.user_type == 'USER' && scope.row.kyc_level == 2 && scope.row.user_status =='kyc2_verified_failed'"
            class="operation">
            <span>{{$t('page_SecuritiesManagement_text_Refuse')}}</span>
          </div>
          <div
            v-if="scope.row.user_type == 'ISSUER' || scope.row.user_type == 'LAWYER' || scope.row.user_type == 'INVESTORS'"
            class="operation"
          >
            <span class="edit" @click="edit(scope.row)">{{$t('page_UserManagement_btn_edit')}}</span>
            <span class="Bar">|</span>
            <span class="edit" @click="Delete(scope.row)">{{$t('page_UserManagement_btn_delete')}}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        :current-page.sync="page.currentPage"
        :background="true"
        :page-size="page.pageSize"
        @size-change="handleSizeChange"
        @current-change="handlePageChange"
        layout="total, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
    <audit-bounced @update="update" ref="AuditBounced"></audit-bounced>
  </div>
</template>
<script>
import AuditBounced from './AuditBounced.vue';
import {
  postHexExchangeServiceIndexPhpAdminUserList,
  postHexExchangeServiceIndexPhpAdminUserDelete
} from '@/api/Exchange - Admin';
export default {
  components: { AuditBounced },
  name: 'ListOrder',
  props: {
    value: ''
  },
  data() {
    return {
      page: {
        currentPage: 1,
        pageSize: 5
      },
      total: 0,
      tableData: []
    };
  },
  computed: {
    loading() {
      return this.$store.state.user.loading;
    }
  },
  created() {
    this.handlelist();
  },
  methods: {
    update() {
      this.handlelist();
    },
    audit(row) {
      console.log(row);
      const title = this.$t('page_UserManagement_btn_audituser');
      const user_profile_id = row.id;
      this.$refs['AuditBounced'].show(title, user_profile_id);
    },
    edit(row) {
      console.log(row);
      this.$router.push({
        path: `/UserManagement/EditUser/${row.id}`,
        query: {
          name: this.$t('page_UserManagement_label_edit') + `${row.name}`,
          id: row.id,
          user_type: row.user_type
        }
      });
    },
    Delete(row) {
      console.log(row);
      this.$confirm(
        this.$t('page_UserManagement_op_deleteuser') +
          ',' +
          this.$t('page_UserManagement_op_Whethertocontinue') +
          '?',
        this.$t('page_UserManagement_text_tip'),
        {
          confirmButtonText: this.$t('page_UserManagement_btn_determine'),
          cancelButtonText: this.$t('page_UserManagement_btn_cancel'),
          type: 'warning'
        }
      )
        .then(() => {
          const param = new FormData();
          param.append('id', row.id);
          param.append('user_type', row.user_type);
          postHexExchangeServiceIndexPhpAdminUserDelete(param).then(res => {
            if (res.data.status_code !== 3949) {
              this.$message.error(res.data.message);
              return;
            }
            this.$message.success(
              this.$t('page_UserManagement_btn_deletesuccess')
            );
            this.handlelist();
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: this.$t('page_UserManagement_op_canceldelete')
          });
        });
    },
    handleSizeChange(pageSize) {
      this.page.pageSize = pageSize;
      this.handlelist();
    },
    handlePageChange(pageNo) {
      this.page.currentPage = pageNo;
      this.handlelist();
    },
    handlelist() {
      const param = new FormData();
      param.append('page', this.page.currentPage);
      param.append('limit', this.page.pageSize);
      param.append('user_type', this.value);

      postHexExchangeServiceIndexPhpAdminUserList(param).then(res => {
        if (res.status === 200) {
          this.tableData = res.data.result;
          this.total = parseInt(res.data.total);
        }
      });
    }
  }
};
</script>
<style scoped>
.operation {
  float: right;
}
.operation p {
  padding: 0px 25px;
}
.edit {
  color: cornflowerblue;
  cursor: pointer;
  text-decoration: none;
}
.Bar {
  margin: 0px 20px;
}
</style>
<style>
.confirmbutton {
  background-color: #f56c6c;
  color: antiquewhite;
}
.confirmbutton:hover {
  background-color: #f56c6c;
  color: antiquewhite;
}
</style>

