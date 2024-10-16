<template>
    <div class="card">
        <div class="card-header" v-if="header">
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <slot name="content"></slot>
        </div>
        <div class="card-footer" v-if="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; // Importing the defineComponent function from Vue to create a component

/**
 * CardComponent
 * A reusable card component that can optionally display a header and footer.
 * The component is designed to encapsulate content and present it in a visually appealing format.
 */
export default defineComponent({
    name: 'CardComponent', // The name of the component for debugging purposes

    // Defining the props that can be passed to this component
    props: {
        // Prop to control the visibility of the header
        header: {
            type: Boolean, // The type of the prop, indicating it should be a Boolean
            default: true // The default value for the header prop is true, meaning the header will be shown unless specified otherwise
        },
        // Prop to control the visibility of the footer
        footer: {
            type: Boolean, // The type of the prop, indicating it should be a Boolean
            default: true // The default value for the footer prop is true, meaning the footer will be shown unless specified otherwise
        },
    },
});
</script>

<style lang="scss" scoped>
.card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    max-width: 400px;
    margin: 20px auto;
    border: 1px solid #e0e0e0;
}

.card-header {
    background-color: #f7f7f7;
    padding: 10px 15px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
}

.card-body {
    padding: 15px;
    font-size: 1rem;
    color: #333;
}

.card-footer {
    background-color: #f7f7f7;
    padding: 10px 15px;
    text-align: right;
    border-top: 1px solid #e0e0e0;
}
</style>
