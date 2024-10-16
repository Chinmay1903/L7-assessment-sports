<template>
    <div>
        <h2>Teams</h2>
        <div class="team-page-view">
            <div v-if="teams.length > 0" class="d-flex justify-content-evenly flex-wrap">
                <div v-for="(team, index) in teams" :key="index">
                    <CardComponent :header="false">
                        <template v-slot:content>
                            <h3>{{ team.name }}</h3>
                        </template>
                        <template v-slot:footer>
                            <p>Coach: {{ team.coach }}</p>
                        </template>
                    </CardComponent>
                </div>
            </div>
            <h5 v-else class="text-center">No Team Registering</h5>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'; // Import necessary functions from Vue
import { fetchTeams, type DataTeams } from '@/services/api'; // Import API function and type
import CardComponent from '@/components/Card.vue'; // Import the CardComponent for displaying team data

/**
 * TeamView
 * A Vue component that fetches and displays a list of teams.
 * This component is responsible for managing the state of teams and handling errors during data fetching.
 */
export default defineComponent({
    name: 'TeamView', // The name of the component for debugging and development

    /**
     * The data function returns the reactive state for the component.
     */
    data() {
        return {
            teams: ref<DataTeams[]>([]), // Reactive reference to hold the list of teams
        }
    },

    /**
     * The components section registers any child components used in this component.
     */
    components: {
        CardComponent, // Register the CardComponent to be used for displaying team data
    },

    /**
     * The methods section contains functions for fetching data and handling events.
     */
    methods: {
        /**
         * Loads the list of teams from the API.
         * Handles errors if the data fetching fails.
         */
        async loadData() {
            try {
                this.teams = await fetchTeams(); // Fetch the list of teams from the API
                console.log(this.teams); // Log the fetched teams for debugging
            } catch (err) {
                // Handle any errors during data fetching
                console.error(err); // Log the error
            }
        }
    },

    /**
     * The mounted lifecycle hook is called after the component is mounted.
     * It initiates data loading for teams.
     */
    mounted() {
        this.loadData(); // Load the list of teams when the component is mounted
    },
});
</script>

<style lang="scss" scoped>

</style>
