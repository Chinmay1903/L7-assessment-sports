// SideNav.spec.ts
import { mount } from '@vue/test-utils'; // Importing mount from Vue Test Utils to create a wrapper for the component
import { describe, it, expect } from 'vitest'; // Importing testing utilities from Vitest
import SideNav from '@/components/SideNav.vue'; // Importing the SideNav component to test

// Grouping related tests for the SideNav component
describe('SideNav', () => {
  // Mock the RouterLink component for testing without actual routing functionality
  const MockRouterLink = {
    template: '<a><slot /></a>', // A simple mock component that renders an anchor element with the default slot content
  };

  // Test case to check if the sidebar renders correctly with all menu items
  it('renders the sidebar with menu items', () => {
    // Mount the SideNav component, providing the mocked RouterLink component globally
    const wrapper = mount(SideNav, {
      global: {
        components: {
          RouterLink: MockRouterLink, // Registering the mock component
        },
      },
    });

    // Assert that all menu items are present in the rendered output
    expect(wrapper.text()).toContain('dashboard'); // Check if 'dashboard' is rendered
    expect(wrapper.text()).toContain('matches'); // Check if 'matches' is rendered
    expect(wrapper.text()).toContain('players'); // Check if 'players' is rendered
    expect(wrapper.text()).toContain('teams'); // Check if 'teams' is rendered
    expect(wrapper.text()).toContain('areas'); // Check if 'areas' is rendered
  });

  // Test case to check the sidebar's toggle functionality
  it('toggles the sidebar collapse state', async () => {
    // Mount the SideNav component again with the mocked RouterLink
    const wrapper = mount(SideNav, {
      global: {
        components: {
          RouterLink: MockRouterLink, // Registering the mock component
        },
      },
    });

    // Get the toggle button element for interaction
    const toggleButton = wrapper.get('button');

    // Check the initial state of the sidebar
    expect(wrapper.text()).toContain('Menu'); // Assert that 'Menu' is visible initially

    // Click the toggle button to collapse the sidebar
    await toggleButton.trigger('click'); // Trigger a click event on the toggle button
    expect(wrapper.text()).not.toContain('Menu'); // Verify that the menu title is hidden

    // Click the toggle button again to expand the sidebar
    await toggleButton.trigger('click'); // Trigger a click event on the toggle button again
    expect(wrapper.text()).toContain('Menu'); // Assert that the menu title is visible again
  });
});

