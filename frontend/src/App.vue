<template>
  <div class="d-flex main-content">
    <div class="left-section">
      <SideNav />
    </div>
  
    <div class="right-section p-5">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import SideNav from '@/components/SideNav.vue'

export default defineComponent({
  components: {
    RouterView,
    SideNav
  }
})
</script>


<style scoped>
.main-content {
  .left-section, .right-section {
    min-height: 100vh;
  }
}
</style>
