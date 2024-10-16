<template>
    <div class="dashboad-page d-flex flex-wrap gap-5">
        <div class="col-5">
            <CardComponent :footer="false">
                <template v-slot:header>
                    <p>Recent Match</p>
                </template>
                <template v-slot:content>
                    <div class="text-center">
                        <h1 v-if="matches.length > 0">{{ matches[0]["home_team__name"] }} <br> vs <br> {{ matches[0]["away_team__name"] }}</h1>
                        <p v-else>No matches organised</p>
                    </div>
                </template>
            </CardComponent>
        </div>
        <div class="col-5">
            <CardComponent :footer="false">
                <template v-slot:header>
                    <p>Teams</p>
                </template>
                <template v-slot:content>
                    <CardComponent v-for="(team, index) in teams" :key="index" :footer="false" :header="false">
                        <template v-slot:content>
                            <div class="text-center">
                                <h5>{{ team.name }}</h5>
                            </div>
                        </template>
                    </CardComponent>
                </template>
            </CardComponent>
        </div>
        <div class="col-5">
            <CardComponent :footer="false">
                <template v-slot:header>
                    <p>Players</p>
                </template>
                <template v-slot:content>
                    <CardComponent v-for="(player, index) in players" :key="index" :footer="false" :header="false">
                        <template v-slot:content>
                            <div class="text-center">
                                <h5>{{ player.name }}</h5>
                            </div>
                        </template>
                    </CardComponent>
                </template>
            </CardComponent>
        </div>
        <div class="col-5">
            <CardComponent :footer="false">
                <template v-slot:header>
                    <p>Areas</p>
                </template>
                <template v-slot:content>
                    <CardComponent v-for="(area, index) in areas" :key="index" :footer="false" :header="false">
                        <template v-slot:content>
                            <div class="text-center">
                                <h5>{{ area.name }}</h5>
                            </div>
                        </template>
                    </CardComponent>
                </template>
            </CardComponent>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'; // Importing necessary functions from Vue
import { 
    fetchMatches, 
    type DataMatches, 
    fetchAllPlayers, 
    type DataPlayers, 
    fetchTeams, 
    type DataTeams, 
    fetchAreas, 
    type DataAreas 
} from "@/services/api"; // Importing API fetching functions and their respective data types
import CardComponent from '@/components/Card.vue'; // Importing the CardComponent for UI representation

/**
 * DashBoardView
 * A Vue component that serves as a dashboard view, fetching and displaying 
 * match, player, team, and area data using asynchronous API calls.
 */
export default defineComponent({
    name: "DashBoardView", // The name of the component for debugging and identification

    // Defining the component's reactive state using Vue's Composition API
    data() {
        return {
            // Reactive state variables to store fetched data
            matches: ref<DataMatches[]>([]), // Array to store match data
            areas: ref<DataAreas[]>([]), // Array to store area data
            players: ref<DataPlayers[]>([]), // Array to store player data
            teams: ref<DataTeams[]>([]), // Array to store team data
        }
    },

    // Registering the CardComponent as a child component
    components: {
        CardComponent,
    },

    // Methods for loading data from APIs
    methods: {
        /**
         * Fetches match data from the API and stores it in the 'matches' state variable.
         * Logs an error message if the fetch fails.
         */
        async loadMatches() {
            try {
                this.matches = await fetchMatches(); // Fetching match data
                console.log(this.matches); // Logging the fetched matches

            } catch (err) {
                console.error(err); // Logging the error
            }
        },

        /**
         * Fetches area data from the API and stores it in the 'areas' state variable.
         * Logs an error message if the fetch fails.
         */
        async loadAreas() {
            try {
                this.areas = await fetchAreas(); // Fetching area data
                console.log(this.areas); // Logging the fetched areas
                
            } catch (err) {
                console.error(err); // Logging the error
            }
        },

        /**
         * Fetches team data from the API and stores it in the 'teams' state variable.
         * Logs an error message if the fetch fails.
         */
        async loadteams() {
            try {
                this.teams = await fetchTeams(); // Fetching team data
                console.log(this.teams); // Logging the fetched teams

            } catch (err) {
                console.error(err); // Logging the error
            }
        },

        /**
         * Fetches player data from the API and stores it in the 'players' state variable.
         * Logs an error message if the fetch fails.
         */
        async loadPlayers() {
            try {
                this.players = await fetchAllPlayers(); // Fetching player data
                console.log(this.players); // Logging the fetched players
            } catch (err) {
                console.error(err); // Logging the error
            }
        },
    },

    /**
     * Lifecycle hook that runs when the component is mounted.
     * Calls methods to load data for matches, areas, players, and teams.
     */
    mounted() {
        this.loadMatches(); // Load matches data
        this.loadAreas(); // Load areas data
        this.loadPlayers(); // Load players data
        this.loadteams(); // Load teams data
    },
})
</script>

<style lang="scss" scoped>
.card-header[data-v-c6c3362a] {
    background-color: #1f34f0 !important;
    color: #fff;
}
</style>
