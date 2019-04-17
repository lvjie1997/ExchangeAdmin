/**
 * todo: utils 方法里面的要全部翻译、还有一下提醒
 * 多语言配置，配置规则，按模块开头+下划线+类型+具体的key，每个模块写在一起，不要分开，不好找。eg:
 * 1. menu_nav_bottom_job
 * 2. menu_nav_bottom_chat
 * 3. menu_nav_bottom_dynamic
 * 4. menu_nav_bottom_resume
 * 5. menu_nav_bottom_mine
 * 6. page_login_text_title
 * 7. page_login_btn_login
 * 8. page_login_btn_sendcode
 * 9. page_login_link_forgot
 * 10.page_login_link_register
 * 11.page_login_tab_phone
 * 12.page_login_tab_password
 * 13.page_login_ph_phone
 * 14.page_login_ph_code
 * 15.page_login_ph_username
 * 16.page_login_ph_password
 *
 * 模块跟进业务来定, 可以直接根据页面来划分，每个页面起一个，eg:
 * global    全局
 * page_login     登录模块
 * page_settings  设置模块
 * ...
 *
 * 类型不同类型的消息
 * menu  菜单
 * label 标签, 主要用在表单
 * op    操作，弹框提示
 * btn   按钮名称
 * text  文本
 * tab   tab
 * link  链接名称
 * tips  tooltips
 * alt   alt
 * ph    placeholder
 * err   错误消息类
 */
export default {
  // 菜单
  route_menu_main: '首页',
  route_menu_SecuritiesManagement: '证券管理',
  route_menu_SecuritiesList: '证券列表',
  route_menu_UserManagement: '用户管理',
  route_menu_UsersList: '用户列表',
  route_menu_dashboard: '首页',
  route_menu_AddSecurities: '发布证券',
  route_menu_SecuritiesDetails: '证券详情',
  route_menu_AddUser: '创建用户',
  route_menu_EditUser: '编辑用户',
  route_menu_UserList: 'app用户',
  route_menu_Issuer: '发行人',
  route_menu_investors: '投资人',
  route_menu_lawyer: '律师',

  // 登录
  page_login_text_logOut: '退出登录',
  page_login_text_title: '系统登录',
  page_login_text_logIn: '登录',
  page_login_text_username: '账号',
  page_login_text_password: '密码',

  // 首页
  page_navbar_text_screenfull: '全屏',
  page_navbar_text_theme: '换肤',
  page_navbar_text_size: '布局大小',
  page_appmain_text_welcome: '欢迎来到交易所管理后台',
  page_view_text_exchange: '大羚羊交易所',

  // 标签
  page_tagsView_text_refresh: '刷新',
  page_tagsView_text_close: '关闭',
  page_tagsView_text_closeOthers: '关闭其它',
  page_tagsView_text_closeAll: '关闭所有',

  // 公共组件
  page_public_btn_search: '搜索',
  page_public_btn_Empty: '清空',
  // 证券管理
  page_SecuritiesManagement_btn_Add: '发布新证券',
  page_SecuritiesManagement_text_state: '状态',
  page_SecuritiesManagement_text_list: '证券列表',
  page_SecuritiesManagement_text_whole: '全部',
  page_SecuritiesManagement_text_alreadyRelease: '已通过',
  page_SecuritiesManagement_text_Refuse: '已拒绝',
  page_SecuritiesManagement_text_examine: '待审核',
  page_SecuritiesManagement_btn_lookdetails: '查看详情',
  page_SecuritiesManagement_text_Issuingsecurities: '发布证券',
  page_SecuritiesManagement_text_Essentialinformation: '基本信息',
  page_SecuritiesManagement_text_name: '证券名称',
  page_SecuritiesManagement_text_code: '证券代码',
  page_SecuritiesManagement_text_Circulation: '发行量',
  page_SecuritiesManagement_text_minCompany: '最小单位',
  page_SecuritiesManagement_text_subscription: '最小认购单位',
  page_SecuritiesManagement_text_Latchupperiod: '闭锁期',
  page_SecuritiesManagement_text_Issuetime: '发行时间',
  page_SecuritiesManagement_text_Selectiondate: '选择日期',
  page_SecuritiesManagement_text_Discount: '优惠折扣',
  page_SecuritiesManagement_text_Securitiesdetails: '证券详情(上传pdf文件)',
  page_SecuritiesManagement_text_Relatedcontracts: '相关合同(上传pdf文件)',
  page_SecuritiesManagement_text_Issuer: '签名方(发行人)',
  page_SecuritiesManagement_text_Lawyer: '签名方(律师)',
  page_SecuritiesManagement_text_introduction: '证券简介',
  page_SecuritiesManagement_text_AInvestor: '一级投资人',
  page_SecuritiesManagement_text_Investor: '投资人',
  page_SecuritiesManagement_text_count: '数量',
  page_SecuritiesManagement_btn_AddInvestor: '添加投资人',
  page_SecuritiesManagement_text_Release: '发布',
  page_SecuritiesManagement_text_Return: '返回',
  picture_op_updatesuccess: '上传成功',
  picture_err_updatefail: '上传失败',
  page_SecuritiesManagement_label_details: '的详情',
  page_SecuritiesManagement_ph_Pleaseselect: '请选择',
  page_SecuritiesManagement_err_name: '证券名称不能为空',
  page_SecuritiesManagement_err_code: '证券代码不能为空',
  page_SecuritiesManagement_err_publish_quantity: '发行量不能为空',
  page_SecuritiesManagement_err_min_unit: '最小单位不能为空',
  page_SecuritiesManagement_err_min_sub_unit: '最小认购单位不能为空',
  page_SecuritiesManagement_err_publish_time: '发布时间不能为空',
  page_SecuritiesManagement_err_element_url: '请上传证券详情',
  page_SecuritiesManagement_err_contract_url: '请上传相关合同',
  page_SecuritiesManagement_err_signature_issuer_id: '请上选择发行方',
  page_SecuritiesManagement_err_signature_laywer_id: '证券名称不能为空',
  page_SecuritiesManagement_err_desc: '简介不能为空',
  page_SecuritiesManagement_label_name: '姓名',
  page_SecuritiesManagement_op_addsuccess: '添加成功',
  page_SecuritiesManagement_text_nodata: '暂无数据',
  page_SecuritiesManagement_err_validationcode: '只能输入字母和数字',
  page_SecuritiesManagement_err_limitpdf: '上传文件大小不能超过5MB!',
  page_SecuritiesManagement_err_limitcode: '长度不能超过八位',
  page_SecuritiesManagement_text_price: '发行价格',
  page_SecuritiesManagement_op_price: '发行价格不能为空',
  page_SecuritiesManagement_err_Lessthantime: '发布时间不能小于当前时间',
  // 用户
  page_UserManagement_op_deleteuser: '删除该用户',
  page_UserManagement_op_Whethertocontinue: '是否继续',
  page_UserManagement_text_tip: '提示',
  page_UserManagement_btn_determine: '确定',
  page_UserManagement_btn_cancel: '取消',
  page_UserManagement_op_canceldelete: '取消删除',
  page_UserManagement_label_edit: '编辑',
  page_UserManagement_btn_audit: '审核',
  page_UserManagement_text_kyc: '未提交kyc2审核',
  page_UserManagement_text_approved: '已审核通过',
  page_UserManagement_text_Validationemail: '未验证邮箱',
  page_UserManagement_btn_edit: '编辑',
  page_UserManagement_btn_delete: '删除',
  page_UserManagement_btn_audituser: '审核用户',
  page_UserManagement_btn_deletesuccess: '删除成功',
  page_UserManagement_btn_createuser: '创建用户',
  page_UserManagement_btn_type: '类型',
  page_UserManagement_label_idcard: '护照号码',
  page_UserManagement_label_email: '邮箱',
  page_UserManagement_label_password: '密码',
  page_UserManagement_btn_create: '创建',
  page_UserManagement_err_user_type: '请选择证券类型',
  page_UserManagement_err_name: '姓名不能为空',
  page_UserManagement_err_id_card_number: '护照号码不能为空',
  page_UserManagement_err_email: '请输入正确邮箱格式',
  page_UserManagement_err_password: '密码至少八位，包含字母和数字，开头字母大写',
  page_UserManagement_label_edituser: '编辑用户',
  page_UserManagement_btn_update: '提交修改',
  page_UserManagement_btn_editsuccess: '编辑成功',

  page_UserManagement_tips_through: '通过',
  page_UserManagement_tips_nothrough: '不通过',
  page_UserManagement_btn_Submission: '确定',
  page_UserManagement_op_auditsuccess: '审核成功'
};
