<template>
  <div class="app-container">
    <div class="filter-container">
      <div class="Negotiable">
        {{$t('route_menu_UsersList')}}
        <el-button
          class="filter-item"
          type="primary"
          icon="el-icon-plus"
          @click="Add"
        >{{$t('route_menu_AddUser')}}</el-button>
      </div>
      <div class="div">
        <el-tabs v-loading="loading" type="card" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="(item,i) in row" :key="i" :label="item.label" :name="item.value">
            <audit-order :value="item.value"></audit-order>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { postHexExchangeServiceIndexPhpAdminUserTypeList } from '@/api/Exchange - Admin';
import AuditOrder from './AuditOrder';
export default {
  name: 'SecuritiesList',
  components: { AuditOrder },
  data() {
    return {
      row: [],
      activeName: 'USER'
    };
  },
  computed: {
    loading() {
      return this.$store.state.user.loading;
    }
  },
  created() {
    postHexExchangeServiceIndexPhpAdminUserTypeList().then(res => {
      this.row = res.data.result;
    });
  },
  methods: {
    handleClick(tab, event) {},
    Add() {
      this.$router.push({ path: '/UserManagement/AddUser' });
    }
  }
};
</script>
<style scoped>
.Negotiable {
  margin: 21px 20px;
  font-size: 22px;
}
.Negotiable .el-button {
  float: right;
  margin: -12px 0px;
}
</style>
