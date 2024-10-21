<template>
  <div id="sidebar" class="bg-light border-end">
    <div class="sidebar-header p-3 d-flex justify-content-between">
      <h4 v-if="!isCollapsed">Menu</h4>
      <button :class="['btn', 'toggle-btn', !isCollapsed ? '' : 'rotated']" @click="toggleSidebar" aria-expanded="true"
        aria-controls="sidebar">
        <i class="bi bi-caret-left-fill"></i>
      </button>
    </div>
    <div class="list-group list-group-flush">
      <RouterLink v-for="(item, index) in menuItems" :to="item.link" :key="index"
        class="list-group-item list-group-item-action p-3 text-capitalize">
        <i :class="item['icon-class']"></i>
        <span class="ms-2" v-if="!isCollapsed">{{ item.name }}</span>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'; // Import necessary functions from Vue
import { RouterLink } from 'vue-router'; // Import RouterLink to handle navigation

/**
 * SideNav
 * A Vue component representing a collapsible sidebar navigation menu.
 * This component contains links to different sections of the application.
 */
export default defineComponent({
  name: "SideNav", // The name of the component for debugging and development

  /**
   * Registering child components used within this component.
   */
  components: {
    RouterLink, // Register the RouterLink component for navigation
  },

  /**
   * The setup function is where the component's reactive state and methods are defined.
   */
  setup() {
    // Reactive reference to manage the collapsed state of the sidebar
    const isCollapsed = ref(false);

    /**
     * Toggles the collapsed state of the sidebar.
     * It updates the 'collapsed' class on the sidebar element based on its current state.
     */
    const toggleSidebar = () => {
      isCollapsed.value = !isCollapsed.value; // Invert the collapsed state
      const sidebar = document.getElementById('sidebar'); // Get the sidebar element by ID
      if (isCollapsed.value) {
        sidebar?.classList.add('collapsed'); // Add the collapsed class if sidebar is collapsed
      } else {
        sidebar?.classList.remove('collapsed'); // Remove the collapsed class if sidebar is expanded
      }
    };

    // A reactive array containing the menu items with their names, links, and icon classes
    const menuItems = ref([
      { 'name': 'dashboard', 'link': '/', 'icon-class': 'bi bi-clipboard-data-fill' },
      { 'name': 'matches', 'link': '/matches', 'icon-class': 'bi bi-person-arms-up' },
      { 'name': 'players', 'link': '/players', 'icon-class': 'bi bi-people-fill' },
      { 'name': 'teams', 'link': '/teams', 'icon-class': 'bi bi-microsoft-teams' },
      { 'name': 'areas', 'link': '/areas', 'icon-class': 'bi bi-globe-central-south-asia' }
    ]);

    // Return values to the template
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

  .sidebar-header {
    .toggle-btn {
      transition: transform 0.3s ease;
    }

    .toggle-btn.rotated {
      transform: rotate(180deg);
      padding: 0;
    }
  }
}

#sidebar.collapsed {
  width: 60px;
}

#main-content {
  transition: margin-left 0.3s ease;
  margin-left: 250px;
}

#sidebar.collapsed+#main-content {
  margin-left: 60px;
}

.list-group-item {
  cursor: pointer;
}

button {
  margin-bottom: 20px;
}
</style>
