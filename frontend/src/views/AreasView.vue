<template>
    <div>
        <h2>Teams</h2>
        <div class="team-page-view d-flex justify-content-evenly flex-wrap">
            <div v-for="(team, index) in areas" :key="index">
                <CardComponent :header="false">
                    <template v-slot:content>
                        <h3>{{ team.name }}</h3>
                    </template>
                    <template v-slot:footer>
                        <p>City: {{ team.city }}</p>
                    </template>
                </CardComponent>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'; // Import necessary functions from Vue
import { fetchAreas, type DataAreas } from '@/services/api'; // Import the function to fetch areas and the DataAreas type
import CardComponent from '@/components/Card.vue'; // Import the CardComponent to be used within this view

/**
 * AreaView
 * A Vue component responsible for displaying area data fetched from an API.
 * This component utilizes the CardComponent to render the area information.
 */
export default defineComponent({
    name: 'AreaView', // The name of the component for debugging and development

    /**
     * The data function returns an object containing the component's reactive state.
     * @returns {Object} The state of the component, including areas and error message.
     */
    data() {
        return {
            areas: ref<DataAreas[]>([]), // A reactive reference to store area data retrieved from the API
        }
    },

    /**
     * Registering child components used within this component.
     */
    components: {
        CardComponent, // Register the CardComponent for use in this view
    },

    /**
     * Methods that belong to this component.
     */
    methods: {
        /**
         * Fetches area data from the API and assigns it to the areas state.
         * In case of an error, an error message is logged and assigned to the error state.
         */
        async loadData() {
            try {
                this.areas = await fetchAreas(); // Call the API function to fetch area data
                console.log(this.areas); // Log the fetched areas for debugging
            } catch (err) {
                // Handle any errors that occur during the API call
                console.error(err); // Log the error to the console
            }
        }
    },

    /**
     * Lifecycle hook that is called after the component is mounted.
     * This is where the initial data fetching occurs.
     */
    mounted () {
        this.loadData(); // Invoke the loadData method to fetch areas when the component is mounted
    },
});
</script>

<style scoped>

</style>
