<template>
  <div class="app-container">
    <div class="filter-container">
      <div class="User">{{$t('page_UserManagement_label_edituser')}}</div>
      <div class="div">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          v-loading="loading"
          class="demo-form-inline"
        >
          <el-row :gutter="20">
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
              <el-form-item :label="$t('page_UserManagement_label_email')">
                <el-input disabled v-model="ruleForm.email"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :xs="22">
              <el-form-item :label="$t('page_UserManagement_label_password')" prop="password">
                <el-input type="password" v-model="ruleForm.password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="Edit">
          <el-row>
            <el-col :xs="0" :sm="12" :md="12" :lg="24">
              <el-button
                class="Return"
                plain
                @click="Return"
              >{{$t('page_SecuritiesManagement_text_Return')}}</el-button>
              <el-button
                :loading="addloading"
                style="width:250px"
                type="primary"
                @click="Submit('ruleForm')"
              >{{$t('page_UserManagement_btn_update')}}</el-button>
            </el-col>
            <el-col :xs="24" :sm="0" :md="0" :lg="24">
              <el-button
                class="Returnmove"
                plain
                @click="Return"
              >{{$t('page_SecuritiesManagement_text_Return')}}</el-button>
              <el-button
                :loading="addloading"
                style="width:100px"
                type="primary"
                @click="Submit('ruleForm')"
              >{{$t('page_UserManagement_btn_update')}}</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  postHexExchangeServiceIndexPhpAdminUserGet,
  postHexExchangeServiceIndexPhpAdminUserEdit
} from '@/api/Exchange - Admin';
export default {
  data() {
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
        name: null,
        id_card_number: null,
        email: null,
        password: null,
        user_type: null
      },
      addloading: false,
      rules: {
        name: [{ validator: name, trigger: 'blur', required: true }],
        id_card_number: [
          { validator: id_card_number, trigger: 'blur', required: true }
        ],
        password: [{ validator: password, trigger: 'blur', required: true }]
      }
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
    param.append('user_type', this.$route.query.user_type);
    postHexExchangeServiceIndexPhpAdminUserGet(param).then(res => {
      this.ruleForm.name = res.data.result.name;
      this.ruleForm.id_card_number = res.data.result.id_card_number;
      this.ruleForm.email = res.data.result.email;
      this.ruleForm.password = res.data.result.password;
      this.ruleForm.user_type = res.data.result.user_type;
      this.ruleForm.userpassword_type = res.data.result.password;
    });
  },
  methods: {
    Submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const param = new FormData();
          param.append('name', this.ruleForm.name);
          param.append('id_card_number', this.ruleForm.id_card_number);
          param.append('id', this.$route.query.id);
          param.append('password', this.ruleForm.password);
          param.append('user_type', this.ruleForm.user_type);
          this.addloading = true;
          postHexExchangeServiceIndexPhpAdminUserEdit(param).then(res => {
            this.addloading = false;
            if (res.data.status_code !== 3947) {
              this.$message.error(res.data.message);
              return;
            }
            this.$message.success(
              this.$t('page_UserManagement_btn_editsuccess')
            );
            this.$router.push({ path: '/UserManagement/UserList' });
          });
        } else {
          return;
        }
      });
    },
    Return() {
      this.$router.push({ path: '/UserManagement/UserList' });
    }
  }
};
</script>

<style scoped>
.User {
  margin: 21px 20px;
  font-size: 22px;
}
.Edit {
  text-align: center;
  margin-top: 40px;
}
.Return {
  width: 250px;
  color: #0080ff;
  border: 1px solid #409eff;
}
.Returnmove {
  width: 100px;
  color: #0080ff;
  border: 1px solid #409eff;
}
</style>

