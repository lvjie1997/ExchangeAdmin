<template>
  <div class="app-container">
    <div class="filter-container">
      <div class="Negotiable">
        {{$t('page_SecuritiesManagement_text_list')}}
        <el-button
          class="filter-item"
          type="primary"
          icon="el-icon-plus"
          @click="Add"
        >{{$t('page_SecuritiesManagement_btn_Add')}}</el-button>
      </div>
      <div class="div">
        <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="(item,i) in Order" :key="i" :label="item.label" :name="item.value">
            <list-order :value="item.value"></list-order>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import ListOrder from './ListOrder';
export default {
  name: 'SecuritiesList',
  components: { ListOrder },
  data() {
    return {
      Order: [
        {
          value: 'A',
          label: this.$t('page_SecuritiesManagement_text_whole')
        },
        {
          value: 'Y',
          label: this.$t('page_SecuritiesManagement_text_alreadyRelease')
        },
        {
          value: 'N',
          label: this.$t('page_SecuritiesManagement_text_examine')
        }
      ],
      activeName: 'A'
    };
  },
  methods: {
    handleClick(tab, event) {},
    Add() {
      this.$router.push({ path: '/SecuritiesManagement/AddSecurities' });
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

