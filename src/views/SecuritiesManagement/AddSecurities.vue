<template>
  <div class="app-container">
    <div class="filter-container">
      <p class="IssuingSecurities">{{$t('page_SecuritiesManagement_text_Issuingsecurities')}}</p>
      <div class="div">
        <p style>1：{{$t('page_SecuritiesManagement_text_Essentialinformation')}}</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-row class="upload" :gutter="20">
            <el-col :span="12" :xs="22">
              <el-form-item :label="$t('page_SecuritiesManagement_text_name')+'：'" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item :label="$t('page_SecuritiesManagement_text_code')+'：'" prop="code">
                <el-input v-model="ruleForm.code"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item
                :label="$t('page_SecuritiesManagement_text_Circulation')+'：'"
                prop="publish_quantity"
              >
                <el-input-number
                  style="width: 100%"
                  v-model="ruleForm.publish_quantity"
                  :precision="0"
                  :min="0"
                  :max="9999999999999998"
                ></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item :label="$t('page_SecuritiesManagement_text_price')" prop="issue_price">
                <el-input-number style="width:100%" v-model="ruleForm.issue_price" :min="0"></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item
                :label="$t('page_SecuritiesManagement_text_minCompany')+'：'"
                prop="min_unit"
              >
                <el-input-number
                  style="width: 100%"
                  v-model="ruleForm.min_unit"
                  :precision="0"
                  :min="0"
                  :max="99999999"
                ></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item
                :label="$t('page_SecuritiesManagement_text_subscription ')+'：'"
                prop="min_sub_unit"
              >
                <el-input-number
                  style="width: 100%"
                  v-model="ruleForm.min_sub_unit"
                  :precision="0"
                  :min="0"
                  :max="99999999"
                ></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item
                :label="$t('page_SecuritiesManagement_text_Issuetime')+'：'"
                prop="publish_time"
              >
                <el-date-picker
                  v-model="ruleForm.publish_time"
                  style="width: 100%;"
                  type="datetime"
                  :placeholder="$t('page_SecuritiesManagement_text_Selectiondate')"
                  :picker-options="pickerOptions0"
                  value-format="timestamp"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item :label="$t('page_SecuritiesManagement_text_Discount')+'：'">
                <el-input-number
                  style="width: 100%"
                  v-model="ruleForm.discount"
                  page_SecuritiesManagement_text_AInvestor
                  :min="0"
                  :precision="2"
                  :max="100"
                ></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="24" :xs="24">
              <el-form-item
                style="width:49%"
                :label="$t('page_SecuritiesManagement_text_Latchupperiod')+'：'"
              >
                <el-input-number
                  style="width: 100%"
                  v-model="ruleForm.lock_peried"
                  :precision="0"
                  :min="0"
                  :max="12"
                ></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item
                :label="$t('page_SecuritiesManagement_text_Securitiesdetails')+'：'"
                prop="element_url"
              >
                <div>
                  <el-upload
                    action
                    list-type="picture-card"
                    :on-remove="handleRemove"
                    :http-request="requestelement"
                    :before-upload="beforeAvatarUpload"
                  >
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <div style="height: 60px;width: 60px;" alt></div>
                  </el-dialog>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item
                :label="$t('page_SecuritiesManagement_text_Relatedcontracts')+'：'"
                prop="contract_url"
              >
                <div style=" margin: 11px 0px">
                  <el-upload
                    action
                    list-type="picture-card"
                    :on-remove="handleRemove"
                    :http-request="requestcontract"
                    :before-upload="beforeAvatarUpload"
                  >
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <div style="height: 60px;width: 60px;" alt></div>
                  </el-dialog>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item
                :label="$t('page_SecuritiesManagement_text_Issuer')+'：'"
                prop="signature_issuer_id"
              >
                <el-select
                  style="width: 100%"
                  v-model="ruleForm.signature_issuer_id"
                  :placeholder="$t('page_SecuritiesManagement_ph_Pleaseselect')"
                >
                  <el-option
                    v-for="item in signature_issuer"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item
                :label="$t('page_SecuritiesManagement_text_Lawyer')+'：'"
                prop="signature_laywer_id"
              >
                <el-select
                  style="width: 100%"
                  v-model="ruleForm.signature_laywer_id"
                  :placeholder="$t('page_SecuritiesManagement_ph_Pleaseselect')"
                >
                  <el-option
                    v-for="item in signature_laywer"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item :label="$t('page_SecuritiesManagement_text_introduction')+'：'" prop="desc">
            <el-input v-model="ruleForm.desc" type="textarea" :rows="3"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="Investor">
        <p>2：{{$t('page_SecuritiesManagement_text_AInvestor')}}</p>
        <table-content
          v-loading="loading"
          v-on:Allelection="Allelection"
          v-on:selected="selected"
          v-on:Selection="Selection"
          :table-data="tableData"
          :table-option="tableOption"
        >
          <template slot-scope="scope" slot="btnGroup">
            <el-input-number
              :min="1"
              :max="999999"
              :precision="0"
              type="number"
              :disabled="scope.row.dis"
              v-model="scope.row.count"
            ></el-input-number>
          </template>
        </table-content>
        <div class="center">
          <el-col :lg="24" :xs="0" :sm="12" :md="12">
            <el-button
              :loading="addloading"
              style="width: 250px"
              type="primary"
              @click="Release('ruleForm')"
            >{{$t('page_SecuritiesManagement_text_Release')}}</el-button>
          </el-col>
          <el-col :lg="0" :xs="24" :sm="0" :md="0">
            <el-button
              :loading="addloading"
              style="width: 100px"
              type="primary"
            >{{$t('page_SecuritiesManagement_text_Release')}}</el-button>
          </el-col>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TableContent from '@/components/TableContent/index';
import {
  postHexExchangeServiceIndexPhpAdminSecuritiedCompanyAdd,
  postHexExchangeServiceIndexPhpAdminUserList,
  postHexExchangeServiceIndexPhpAdminSecuritiedElementUpload,
  postHexExchangeServiceIndexPhpAdminSecuritiedContractUpload
} from '@/api/Exchange - Admin';
export default {
  components: { TableContent },
  data() {
    var name = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(this.$t('page_SecuritiesManagement_err_name'))
        );
      }
      callback();
    };
    var code = (rule, value, callback) => {
      var myreg = /^[0-9a-zA-Z]+$/;
      var myreg1 = /^.{0,8}$/;
      if (!value) {
        return callback(
          new Error(this.$t('page_SecuritiesManagement_err_code'))
        );
      }
      if (!myreg.test(value)) {
        callback(
          new Error(this.$t('page_SecuritiesManagement_err_validationcode'))
        );
      }
      if (!myreg1.test(value)) {
        return callback(
          new Error(this.$t('page_SecuritiesManagement_err_limitcode'))
        );
      }
      callback();
    };
    var publish_quantity = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(this.$t('page_SecuritiesManagement_err_publish_quantity'))
        );
      }
      callback();
    };
    var min_unit = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(this.$t('page_SecuritiesManagement_err_min_unit'))
        );
      }
      callback();
    };
    var min_sub_unit = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(this.$t('page_SecuritiesManagement_err_min_sub_unit'))
        );
      }
      callback();
    };
    var publish_time = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(this.$t('page_SecuritiesManagement_err_publish_time'))
        );
      }
      if (value < new Date()) {
        return callback(
          new Error(this.$t('page_SecuritiesManagement_err_Lessthantime'))
        );
      }
      callback();
    };
    var element_url = (rule, value, callback) => {
      if (this.element_url.length === 0) {
        return callback(
          new Error(this.$t('page_SecuritiesManagement_err_element_url'))
        );
      }
      callback();
    };
    var contract_url = (rule, value, callback) => {
      if (this.contract_url.length === 0) {
        return callback(
          new Error(this.$t('page_SecuritiesManagement_err_contract_url'))
        );
      }
      callback();
    };
    var signature_issuer_id = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t('page_SecuritiesManagement_err_signature_issuer_id')
          )
        );
      }
      callback();
    };
    var signature_laywer_id = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(
            this.$t('page_SecuritiesManagement_err_signature_laywer_id')
          )
        );
      }
      callback();
    };
    var issue_price = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(this.$t('page_SecuritiesManagement_op_price'))
        );
      }
      callback();
    };
    var desc = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(this.$t('page_SecuritiesManagement_err_desc'))
        );
      }
      callback();
    };
    return {
      element_url: [],
      contract_url: [],
      loading: true,
      dialogImageUrl: '',
      dialogVisible: false,
      tableOption: {
        setuop: false,
        table: [
          {
            prop: 'name',
            label: 'page_SecuritiesManagement_label_name'
          }
        ]
      },
      tableData: [],
      multipleSelection: [],
      input: '',
      investors: [],
      ruleForm: {
        name: null,
        code: null,
        publish_quantity: null,
        min_unit: null,
        min_sub_unit: null,
        lock_peried: null,
        publish_time: null,
        discount: null,
        element_url: null,
        contract_url: null,
        signature_issuer_id: null,
        signature_laywer_id: null,
        desc: null,
        issue_price: null
      },
      signature_issuer: [],
      signature_laywer: [],
      addloading: false,
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      rules: {
        name: [{ validator: name, trigger: 'blur', required: true }],
        code: [{ validator: code, trigger: 'blur', required: true }],
        publish_quantity: [
          { validator: publish_quantity, trigger: 'blur', required: true }
        ],
        min_unit: [{ validator: min_unit, trigger: 'blur', required: true }],
        min_sub_unit: [
          { validator: min_sub_unit, trigger: 'blur', required: true }
        ],
        publish_time: [
          { validator: publish_time, trigger: 'blur', required: true }
        ],
        element_url: [
          { validator: element_url, trigger: 'blur', required: true }
        ],
        contract_url: [
          { validator: contract_url, trigger: 'blur', required: true }
        ],
        signature_issuer_id: [
          { validator: signature_issuer_id, trigger: 'change', required: true }
        ],
        signature_laywer_id: [
          { validator: signature_laywer_id, trigger: 'change', required: true }
        ],
        desc: [{ validator: desc, trigger: 'blur', required: true }],
        issue_price: [
          { validator: issue_price, trigger: 'blur', required: true }
        ]
      }
    };
  },
  created() {
    const param = new FormData();
    param.append('user_type', 'ISSUER');
    postHexExchangeServiceIndexPhpAdminUserList(param).then(res => {
      this.signature_issuer = res.data.result;
    });
    const param1 = new FormData();
    param1.append('user_type', 'LAWYER');
    postHexExchangeServiceIndexPhpAdminUserList(param1).then(res => {
      this.signature_laywer = res.data.result;
    });
    this.loading = true;
    const param2 = new FormData();
    param2.append('user_type', 'INVESTORS');
    postHexExchangeServiceIndexPhpAdminUserList(param2).then(res => {
      this.tableData = res.data.result;
      this.loading = false;
      for (var i = 0; i < this.tableData.length; i++) {
        this.tableData[i].dis = true;
        this.tableData[i].count = 1;
      }
    });
  },
  methods: {
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 5;
      if (!isLt2M) {
        this.$message.error(this.$t('page_SecuritiesManagement_err_limitpdf'));
      }
      return isLt2M;
    },
    async requestelement(config) {
      const file = config.file;
      const param = new FormData();
      param.append('element_file', file);
      var res = await postHexExchangeServiceIndexPhpAdminSecuritiedElementUpload(
        param
      );
      const data = res.data;
      if (res.data.status_code !== 3939) {
        this.$message.error(res.data.message);
        return;
      }
      this.$message.success(this.$t('picture_op_updatesuccess'));
      this.element_url.push(data.result.element_url.join(','));
      console.log(this.element_url);
    },
    async requestcontract(config) {
      const file = config.file;
      const param = new FormData();
      param.append('contract_file', file);
      var res = await postHexExchangeServiceIndexPhpAdminSecuritiedContractUpload(
        param
      );
      const data = res.data;
      if (res.data.status_code !== 3939) {
        this.$message.error(res.data.message);
        return;
      }
      this.$message.success(this.$t('picture_op_updatesuccess'));
      this.contract_url.push(data.result.contract_url.join(','));
      console.log(this.contract_url);
    },
    handleError(err, file, fileList) {
      this.$message.error(this.$t('picture_err_updatefail'));
    },
    Release(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.investors = [];
          const Screen = [];
          for (var i = 0; i < this.tableData.length; i++) {
            for (var j = 0; j < this.multipleSelection.length; j++) {
              if (this.tableData[i].id === this.multipleSelection[j].id) {
                Screen.push(this.tableData[i]);
              }
            }
          }
          for (var z = 0; z < Screen.length; z++) {
            this.investors.push({
              investors_id: Screen[z].id,
              quantity: Screen[z].count
            });
          }
          var formData = new FormData();
          formData.append('name', this.ruleForm.name);
          formData.append('code', this.ruleForm.code);
          formData.append('publish_quantity', this.ruleForm.publish_quantity);
          formData.append('min_unit', this.ruleForm.min_unit);
          formData.append('min_sub_unit', this.ruleForm.min_sub_unit);
          formData.append('lock_peried', this.ruleForm.lock_peried);
          formData.append('publish_time', this.ruleForm.publish_time / 1000);
          formData.append('discount', this.ruleForm.discount);
          formData.append('issue_price', this.ruleForm.issue_price);
          formData.append('element_url', JSON.stringify(this.element_url));
          formData.append('contract_url', JSON.stringify(this.contract_url));
          formData.append(
            'signature_issuer_id',
            this.ruleForm.signature_issuer_id
          );
          formData.append(
            'signature_laywer_id',
            this.ruleForm.signature_laywer_id
          );
          formData.append('desc', this.ruleForm.desc);
          if (this.investors.length !== 0) {
            formData.append('investors', JSON.stringify(this.investors));
          }
          this.addloading = true;
          postHexExchangeServiceIndexPhpAdminSecuritiedCompanyAdd(
            formData
          ).then(res => {
            this.addloading = false;
            if (res.data.status_code !== 3907) {
              this.$message.error(res.data.message);
              return;
            }
            this.$message.success(
              this.$t('page_SecuritiesManagement_op_addsuccess')
            );
            this.$router.push({ path: '/SecuritiesManagement/SecuritiesList' });
          });
        } else {
          return;
        }
      });
    },
    checkTime(i) {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    },
    Allelection(Allelection) {
      if (Allelection.length === 0) {
        for (var i = 0; i < this.tableData.length; i++) {
          this.tableData[i].dis = true;
          this.tableData[i].count = null;
        }
      }
    },
    selected(selected, row) {
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].id === row.id) {
          if (selected === false || selected === 0) {
            this.tableData[i].dis = true;
            this.tableData[i].count = null;
          }
        }
      }
    },
    Selection(val) {
      for (var i = 0; i < val.length; i++) {
        val[i].dis = false;
      }
      this.multipleSelection = val;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    }
  }
};
</script>
<style scoped>
.Investor {
  background: #ffffff;
  padding: 50px 60px;
  border-radius: 20px;
  margin-top: 50px;
}
.Investor p {
  margin: 22px 37px;
}
.i {
  margin-top: 48px;
}
.center {
  text-align: center;
}
.IssuingSecurities {
  margin: 21px 20px;
  font-size: 22px;
}
.div {
  background: #ffffff;
  padding: 30px 60px;
  border-radius: 20px;
}
</style>
