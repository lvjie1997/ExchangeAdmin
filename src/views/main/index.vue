<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import adminDashboard from './admin';
// import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: { adminDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    };
  },

  created() {
    console.log(this.roles);
    // if (!this.roles.includes('admin')) {
    //   this.currentRole = 'editorDashboard'
    // }
  }
};
</script>
