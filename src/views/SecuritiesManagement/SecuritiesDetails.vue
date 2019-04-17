<template>
  <div class="app-container">
    <div class="filter-container">
      <div class="div">
        <el-tabs v-loading="loading" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane
            :label="$t('page_SecuritiesManagement_text_Essentialinformation')+'：'"
            name="first"
          >
            <el-form class="upload" ref="form">
              <el-row :gutter="20">
                <el-col :span="12" :xs="22">
                  <el-form-item :label="$t('page_SecuritiesManagement_text_name')+'：'">
                    <el-input disabled v-model="row.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="22">
                  <el-form-item :label="$t('page_SecuritiesManagement_text_code')+'：'">
                    <el-input disabled v-model="row.code"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="22">
                  <el-form-item :label="$t('page_SecuritiesManagement_text_Circulation')+'：'">
                    <el-input disabled v-model="row.publish_quantity "></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="22">
                  <el-form-item :label="$t('page_SecuritiesManagement_text_price')+'：'">
                    <el-input disabled v-model="row.issue_price "></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="22">
                  <el-form-item :label="$t('page_SecuritiesManagement_text_minCompany')+'：'">
                    <el-input disabled v-model="row.min_unit"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="22">
                  <el-form-item :label="$t('page_SecuritiesManagement_text_subscription')+'：'">
                    <el-input disabled v-model="row.min_sub_unit"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="22">
                  <el-form-item :label="$t('page_SecuritiesManagement_text_Issuetime')+'：'">
                    <el-date-picker
                      disabled
                      v-model="publish_time"
                      style="width: 100%;"
                      type="datetime"
                      :placeholder="$t('page_SecuritiesManagement_text_Selectiondate')"
                      value-format="timestamp"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="22">
                  <el-form-item :label="$t('page_SecuritiesManagement_text_Discount')">
                    <el-input disabled v-model="row.discount"></el-input>
                  </el-form-item>
                </el-col>
                <el-col>
                  <el-form-item
                    style="width:49%"
                    :label="$t('page_SecuritiesManagement_text_Latchupperiod')+'：'"
                  >
                    <el-input disabled v-model="row.lock_peried"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="22">
                  <el-form-item :label="$t('page_SecuritiesManagement_text_Securitiesdetails')+'：'">
                    <div>
                      <div
                      v-for="(item,i) in row.element_url"
                      :key="i"
                      :class="'floating'"
                      class="contract"
                      @click="Details(item)"
                    ></div>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="22">
                  <el-form-item :label="$t('page_SecuritiesManagement_text_Relatedcontracts')+'：'">
                    <div
                      v-for="(item,i) in row.contract_url"
                      :key="i"
                      :class="'floating'"
                      class="contract"
                      @click="Details(item)"
                    ></div>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="22">
                  <el-form-item :label="$t('page_SecuritiesManagement_text_Issuer')+'：'">
                    <el-input disabled :value="row.signature_issuer_name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="22">
                  <el-form-item :label="$t('page_SecuritiesManagement_text_Lawyer')+'：'">
                    <el-input disabled :value="row.signature_laywer_name"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item :label="$t('page_SecuritiesManagement_text_introduction')+'：'">
                <el-input disabled v-model="row.desc " type="textarea" :rows="3"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane :label="$t('page_SecuritiesManagement_text_AInvestor')+'：'" name="second">
            <div v-if="row.investors_list != undefined  && row.investors_list.length > 0">
              <el-row :gutter="20">
                <div v-for="(item,i) in row.investors_list" :key="i">
                  <el-col :span="12" :xs="22">
                    <el-input disabled style="margin-top:20px" v-model="item.name"></el-input>
                  </el-col>
                  <el-col :span="12" :xs="22">
                    <el-input disabled style="margin-top:20px" v-model="item.quantity"></el-input>
                  </el-col>
                </div>
              </el-row>
            </div>
            <div v-else>
              <p style="text-align:center">{{$t('page_SecuritiesManagement_text_nodata')}}</p>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="operation">
          <el-row>
            <el-col :xs="0" :sm="12" :md="12" :lg="24">
              <el-button
                style="width: 250px"
                @click="Release"
              >{{$t('page_SecuritiesManagement_text_Return')}}</el-button>
            </el-col>
            <el-col :xs="24" :sm="0" :md="0" :lg="24">
              <el-button
                style="width: 150px"
                @click="Release"
              >{{$t('page_SecuritiesManagement_text_Return')}}</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
      <details-contract ref="DetailsContract"></details-contract>
    </div>
  </div>
</template>
<script>
import DetailsContract from './DetailsContract.vue';
import { postHexExchangeServiceIndexPhpAdminSecuritiedCompanyGet } from '@/api/Exchange - Admin';
export default {
  components: { DetailsContract },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      activeName: 'first',
      row: {},
      signature_issuer: [],
      signature_laywer: [],
      investors_list: [],
      publish_time: null
    };
  },
  computed: {
    loading() {
      return this.$store.state.user.loading;
    }
  },
  created() {
    const param = new FormData();
    param.append('id', this.$route.query.id);
    postHexExchangeServiceIndexPhpAdminSecuritiedCompanyGet(param).then(res => {
      this.row = res.data.result;
      this.publish_time = this.row.publish_time * 1000;
    });
  },
  methods: {
    Details(row) {
      const url = row.url;
      this.$refs['DetailsContract'].show(url);
    },
    handleClick(tab, event) {},
    Release() {
      this.$router.push({ path: '/SecuritiesManagement/SecuritiesList' });
    }
  }
};
</script>
<style scoped>
.operation {
  text-align: center;
  margin-top: 25px;
}
.operation .el-button {
  color: #0080ff;
  border: 1px solid #409eff;
}
.floatfalse {
  float: none;
}
.floating {
  float: left;
}
.contract {
  width: 60px;
  height: 60px;
  background: #dedede;
  margin-left: 5px;
  cursor: pointer;
  text-decoration: none;
}
</style>

