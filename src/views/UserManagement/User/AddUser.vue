<template>
  <div class="app-container">
    <div class="filter-container">
      <div class="User">{{$t('page_UserManagement_btn_createuser')}}</div>
      <div class="div">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
          <el-row :gutter="20">
            <el-col :span="12" :xs="22">
              <el-form-item :label="$t('page_UserManagement_btn_type')" prop="user_type">
                <el-select
                  style="width:100%"
                  v-model="ruleForm.user_type"
                  :placeholder="$t('page_SecuritiesManagement_ph_Pleaseselect')"
                >
                  <el-option
                    v-for="item in row"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item :label="$t('page_SecuritiesManagement_label_name')" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item :label="$t('page_UserManagement_label_idcard')" prop="id_card_number">
                <el-input v-model="ruleForm.id_card_number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item :label="$t('page_UserManagement_label_email')" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item :label="$t('page_UserManagement_label_password')" prop="password">
                <el-input type="password" v-model="ruleForm.password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="Establish">
          <el-row>
            <el-col :xs="0" :sm="12" :md="12" :lg="24">
              <el-button
                :loading="addloading"
                style="width: 250px;"
                class="filter-item"
                type="primary"
                @click="Create('ruleForm')"
              >{{$t('page_UserManagement_btn_create')}}</el-button>
            </el-col>
            <el-col :xs="24" :sm="0" :md="0" :lg="0">
              <el-button
                :loading="addloading"
                style="width: 150px;"
                class="filter-item"
                type="primary"
                @click="Create('ruleForm')"
              >{{$t('page_UserManagement_btn_create')}}</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  postHexExchangeServiceIndexPhpAdminUserAdd,
  postHexExchangeServiceIndexPhpAdminUserTypeList
} from '@/api/Exchange - Admin';
export default {
  data() {
    var user_type = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(this.$t('page_UserManagement_err_user_type'))
        );
      }
      callback();
    };
    var name = (rule, value, callback) => {
      if (!value) {
        return callback(new Error(this.$t('page_UserManagement_err_name')));
      }
      callback();
    };
    var id_card_number = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(this.$t('page_UserManagement_err_id_card_number'))
        );
      }
      callback();
    };
    var email = (rule, value, callback) => {
      var myreg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!myreg.test(value)) {
        callback(new Error(this.$t('page_UserManagement_err_email')));
      }
      callback();
    };
    var password = (rule, value, callback) => {
      var myreg = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,20}/;
      if (!myreg.test(value)) {
        callback(new Error(this.$t('page_UserManagement_err_password')));
      }
      callback();
    };
    return {
      row: [],
      ruleForm: {
        user_type: null,
        name: null,
        id_card_number: null,
        email: null,
        password: null
      },
      addloading: false,
      rules: {
        user_type: [
          { validator: user_type, trigger: 'change', required: true }
        ],
        name: [{ validator: name, trigger: 'blur', required: true }],
        id_card_number: [
          { validator: id_card_number, trigger: 'blur', required: true }
        ],
        email: [{ validator: email, trigger: 'blur', required: true }],
        password: [{ validator: password, trigger: 'blur', required: true }]
      }
    };
  },
  created() {
    postHexExchangeServiceIndexPhpAdminUserTypeList().then(res => {
      this.row = res.data.result;
      this.row.forEach((item, i) => {
        if (item.value === 'USER') {
          this.row.splice(i, 1);
        }
      });
    });
  },
  methods: {
    Create(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const param = new FormData();
          param.append('name', this.ruleForm.name);
          param.append('id_card_number', this.ruleForm.id_card_number);
          param.append('email', this.ruleForm.email);
          param.append('password', this.ruleForm.password);
          param.append('user_type', this.ruleForm.user_type);
          this.addloading = true;
          postHexExchangeServiceIndexPhpAdminUserAdd(param).then(res => {
            this.addloading = false;
            if (res.data.status_code !== 3945) {
              this.$message.error(res.data.message);
              return;
            }
            this.$message.success(
              this.$t('page_SecuritiesManagement_op_addsuccess')
            );
            this.$router.push({ path: '/UserManagement/UserList' });
          });
        } else {
          return;
        }
      });
    }
  }
};
</script>

<style scoped>
.User {
  margin: 21px 20px;
  font-size: 22px;
}
.Establish {
  text-align: center;
  margin-top: 40px;
}
</style>

