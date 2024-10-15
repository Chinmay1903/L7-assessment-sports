<template>
    <div class="d-flex">
        <!-- Sidebar -->
        <div id="sidebar" class="bg-light border-end">
            <div class="sidebar-header p-3">
                <h4>Sidebar Menu</h4>
                <button class="btn btn-outline-secondary" @click="toggleSidebar" aria-expanded="true"
                    aria-controls="sidebar">
                    Toggle Sidebar
                </button>
            </div>
            <div class="list-group list-group-flush"> 
                <RouterLink v-for="(item, index) in menuItems" :to="item.link" :key="index"
                    class="list-group-item list-group-item-action p-3 text-capitalize">
                    {{ item.name }}
                </RouterLink>
            </div>
          </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
    name: "SideNav",
    components: {
      RouterLink,
    },
    setup() {
    const isCollapsed = ref(false);

    const toggleSidebar = () => {
      isCollapsed.value = !isCollapsed.value;
      const sidebar = document.getElementById('sidebar');
      if (isCollapsed.value) {
        sidebar?.classList.add('collapsed');
      } else {
        sidebar?.classList.remove('collapsed');
      }
    };

    const menuItems = ref([
      {'name' : 'dashboard', 'link' : '/'},
      {'name' : 'matches', 'link' : '/matches'},
      {'name' : 'players', 'link' : '/players'},
      {'name' : 'teams', 'link' : '/teams'},
      {'name' : 'areas', 'link' : '/areas'}
    ]);

    return { isCollapsed, toggleSidebar, menuItems };
  },
});
</script>

<style lang="scss" scoped>
/* Sidebar Styles */
#sidebar {
  width: 250px;
  height: 100%;
  transition: width 0.3s ease;
}

#sidebar.collapsed {
  width: 60px;
}

#main-content {
  transition: margin-left 0.3s ease;
  margin-left: 250px;
}

#sidebar.collapsed + #main-content {
  margin-left: 60px;
}

.list-group-item {
  cursor: pointer;
}

button {
  margin-bottom: 20px;
}
</style>
