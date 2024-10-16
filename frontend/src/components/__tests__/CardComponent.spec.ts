// CardComponent.spec.ts
import { mount } from '@vue/test-utils'; // Importing mount from Vue Test Utils to create a wrapper for the component
import { describe, it, expect } from 'vitest'; // Importing testing utilities from Vitest
import CardComponent from '@/components/Card.vue'; // Importing the CardComponent to test

// Grouping related tests for the CardComponent
describe('CardComponent', () => {

  // Test case to check if the component renders correctly with default props
  it('renders correctly with default props', () => {
    const wrapper = mount(CardComponent); // Mount the component

    // Check if the card structure is present
    expect(wrapper.classes()).toContain('card'); // Assert that the card class is present
    expect(wrapper.find('.card-header').exists()).toBe(true); // Assert that the header is rendered
    expect(wrapper.find('.card-footer').exists()).toBe(true); // Assert that the footer is rendered
  });

  // Test case to check if the content slot renders correctly
  it('renders content slot correctly', () => {
    const wrapper = mount(CardComponent, {
      slots: {
        content: 'This is the card content', // Providing content to the content slot
      },
    });

    // Assert that the provided content is rendered in the card body
    expect(wrapper.find('.card-body').text()).toBe('This is the card content');
  });

  // Test case to check if the header slot renders correctly when header prop is true
  it('renders header slot correctly when header prop is true', () => {
    const wrapper = mount(CardComponent, {
      slots: {
        header: 'Card Header', // Providing content to the header slot
      },
    });

    // Assert that the provided header text is rendered
    expect(wrapper.find('.card-header').text()).toBe('Card Header');
  });

  // Test case to check if the footer slot renders correctly when footer prop is true
  it('renders footer slot correctly when footer prop is true', () => {
    const wrapper = mount(CardComponent, {
      slots: {
        footer: 'Card Footer', // Providing content to the footer slot
      },
    });

    // Assert that the provided footer text is rendered
    expect(wrapper.find('.card-footer').text()).toBe('Card Footer');
  });

  // Test case to check that the header is not rendered when header prop is false
  it('does not render header when header prop is false', () => {
    const wrapper = mount(CardComponent, {
      props: {
        header: false, // Setting header prop to false
      },
      slots: {
        header: 'Card Header', // Attempting to provide header content
      },
    });

    // Assert that the header is not present
    expect(wrapper.find('.card-header').exists()).toBe(false);
  });

  // Test case to check that the footer is not rendered when footer prop is false
  it('does not render footer when footer prop is false', () => {
    const wrapper = mount(CardComponent, {
      props: {
        footer: false, // Setting footer prop to false
      },
      slots: {
        footer: 'Card Footer', // Attempting to provide footer content
      },
    });

    // Assert that the footer is not present
    expect(wrapper.find('.card-footer').exists()).toBe(false);
  });
});
