<template>
     <div>
        <h2>Matches</h2>
        <div class="team-page-view d-flex justify-content-evenly flex-wrap">
            <div v-for="(match, index) in matches" :key="index">
                <CardComponent>
                    <template v-slot:header>
                        <h5>{{ match.date }}</h5>
                    </template>
                    <template v-slot:content >
                        <div class="text-center">
                            <h3>{{ match.home_team__name }} <br> vs <br> {{ match.away_team__name }}</h3>
                        </div>
                    </template>
                    <template v-slot:footer>
                        <p>At: {{ match.location__name }}</p>
                    </template>
                </CardComponent>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'; // Import necessary functions from Vue
import { fetchMatches, type DataMatches } from '@/services/api'; // Import the function to fetch matches and the DataMatches type
import CardComponent from '@/components/Card.vue'; // Import the CardComponent to be used within this view

/**
 * MatchesView
 * A Vue component responsible for displaying match data fetched from an API.
 * This component utilizes the CardComponent to render match information.
 */
export default defineComponent({
    name: 'MatchesView', // The name of the component for debugging and development

    /**
     * The data function returns an object containing the component's reactive state.
     * @returns {Object} The state of the component, including matches and error message.
     */
    data() {
        return {
            matches: ref<DataMatches[]>([]), // A reactive reference to store match data retrieved from the API
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
         * Fetches match data from the API and assigns it to the matches state.
         * In case of an error, an error message is logged and assigned to the error state.
         */
        async loadData() {
            try {
                this.matches = await fetchMatches(); // Call the API function to fetch match data
                console.log(this.matches); // Log the fetched matches for debugging
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
        this.loadData(); // Invoke the loadData method to fetch matches when the component is mounted
    },
});
</script>

<style scoped>

</style>
