<template>
  <div>
    <el-table v-loading="loading" class="tr" :data="tableData">
      <el-table-column>
        <template slot-scope="scope">
          <p>{{scope.row.code}}</p>
          <div>
            <img style="height:16px;vertical-align: middle" src="static/idcard.png">
            <b style="font-size: 16px">{{scope.row.name}}</b>
          </div>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <div class="operation">
            <p v-for="(item,i) in status" :key="i">
              <span v-if="item.value == scope.row.status">{{item.label}}</span>
            </p>
            <el-button
              round
              @click="Details(scope.row)"
            >{{$t('page_SecuritiesManagement_btn_lookdetails')}}</el-button>
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
  </div>
</template>
<script>
import { postHexExchangeServiceIndexPhpAdminSecuritiedCompanyList } from '@/api/Exchange - Admin';
export default {
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
      tableData: [],
      status: [
        {
          value: 'N',
          label: this.$t('page_SecuritiesManagement_text_examine')
        },
        {
          value: 'Y',
          label: this.$t('page_SecuritiesManagement_text_alreadyRelease')
        }
      ]
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
      if (this.value === 'Y' || this.value === 'N') {
        param.append('status', this.value);
      }
      postHexExchangeServiceIndexPhpAdminSecuritiedCompanyList(param).then(
        res => {
          if (res.status === 200) {
            this.tableData = res.data.result;
            this.total = parseInt(res.data.total);
          }
        }
      );
    },
    Details(row) {
      this.$router.push({
        path: `/SecuritiesManagement/SecuritiesDetails/${row.id}`,
        query: {
          name:
            `${row.name}` + this.$t('page_SecuritiesManagement_label_details'),
          id: row.id
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
</style>
