<template>
  <div class="app-container">
    <div v-if="tableOption" class="filter-container">
      <el-form
        v-if="tableOption.setup"
        style="background: #f2f2f2;padding: 10px 11px;margin: 16px 0px;padding-bottom: 0px"
        ref="searchForm"
        :inline="true"
        :model="searchForm"
        label-width="labelWidth"
      >
        <div>
          <el-form-item v-for="(item,i) in tableOption.table" :key="i" :label="$t(item.label)+'：'">
            <el-input v-model="searchForm[item.prop]"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="filter-item"
              type="primary"
              icon="el-icon-search"
              @click="Search"
            >{{$t('page_public_btn_search')}}</el-button>
            <el-button
              class="filter-item"
              icon="el-icon-delete"
              @click="Empty"
            >{{$t('page_public_btn_Empty')}}</el-button>
          </el-form-item>
        </div>
      </el-form>
      <div>
        <template>
          <slot name="button"></slot>
        </template>
      </div>
    </div>
    <el-table
      :data="tableData"
      ref="multipleTable"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @select="onTableSelect"
      @select-all="selection"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        align="center"
        v-for="(item,i) in tableOption.table"
        :key="i"
        :label="$t(item.label)"
        :prop="item.prop"
      ></el-table-column>
      <el-table-column
        :width="tableOption.optionWidth"
        align="center"
        :label="$t('page_SecuritiesManagement_text_count')"
      >
        <template slot-scope="scope">
          <slot :row="scope.row" name="btnGroup"></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'TableContent',
  props: {
    tableData: Array,
    tableOption: Object
  },
  data() {
    return {
      searchForm: {}
    };
  },
  methods: {
    selection(Allelection) {
      this.$emit('Allelection', Allelection);
    },
    onTableSelect(rows, row) {
      const selected = rows.length && rows.indexOf(row) !== -1;
      this.$emit('selected', selected, row);
    },
    handleSelectionChange(val) {
      this.$emit('Selection', val);
    },
    Search() {
      for (var i in this.searchForm) {
        if (typeof this.searchForm[i] === 'string') {
          if (this.searchForm[i] === '' || this.searchForm[i] == null) {
            this.searchForm[i] = null;
          }
        }
      }
      console.log(this.searchForm);
    },
    Empty() {
      for (var i in this.searchForm) {
        if (
          typeof this.searchForm[i] === 'string' ||
          typeof this.searchForm[i] === 'number'
        ) {
          this.searchForm[i] = null;
        } else if (
          typeof this.searchForm[i] === 'object' &&
          this.searchForm[i] != null
        ) {
          this.searchForm[i] = [];
        }
      }
    }
  }
};
</script>

