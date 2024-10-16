<template>
    <div>
        <h2>Players</h2>
        <div class="mt-5">
            <div class="input-group mb-3">
                <label class="input-group-text" for="team-select">Teams</label>
                <select class="form-select" id="team-select" @change="onSelectChange($event)">
                    <option v-for="(item, index) in arr" :key="index" :value="item.value">
                        {{ item.key }}
                    </option>
                </select>
            </div>
            <div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(player, index) in players" :key="index">
                            <th scope="row">{{ player.id }}</th>
                            <td>{{ player.name }}</td>
                            <td>{{ player.age }}</td>
                            <td>{{ player.team }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue'; // Import necessary functions from Vue
import { fetchAllPlayers, fetchPlayersByTeamId, type DataPlayers, fetchTeams } from '@/services/api'; // Import API functions and types

// Define the interface for team selection options
interface List {
    key: string; // Name of the team
    value: number | null; // ID of the team, or null for "All"
}

/**
 * PlayersView
 * A Vue component that fetches and displays a list of players.
 * This component allows filtering players based on the selected team.
 */
export default defineComponent({
    name: 'PlayersView', // The name of the component for debugging and development

    /**
     * The data function returns the reactive state for the component.
     */
    data() {
        return {
            players: ref<DataPlayers[]>([]), // Reactive reference to hold the list of players
            arr: ref<List[]>([ // Reactive reference to hold the list of teams for selection
                {
                    key: "All", // Default option to show all players
                    value: null // Null value indicates all players
                }
            ]),
        }
    },

    /**
     * The methods section contains functions for fetching data and handling events.
     */
    methods: {
        /**
         * Loads the list of players based on the selected team ID.
         * If no team ID is provided, all players are fetched.
         * Handles errors if the data fetching fails.
         * 
         * @param teamId - The ID of the selected team or null to fetch all players
         */
        async loadPlayers(teamId: number | null) {
            try {
                if (!teamId) {
                    this.players = await fetchAllPlayers(); // Fetch all players if no team is selected
                } else {
                    this.players = await fetchPlayersByTeamId(teamId); // Fetch players by team ID
                }
                console.log(this.players); // Log the fetched players for debugging
            } catch (err) {
                // Handle any errors during data fetching
                console.error(err); // Log the error
            }
        },

        /**
         * Loads the list of teams and populates the selection options.
         * Handles errors if the data fetching fails.
         */
        async loadTeams() {
            try {
                const teams = await fetchTeams(); // Fetch the list of teams from the API
                console.log(teams); // Log the fetched teams for debugging
                teams.forEach((item) => {
                    this.arr.push({ // Add each team to the selection array
                        key: item.name, // Team name
                        value: item.id // Team ID
                    });
                });
                console.log(this.arr); // Log the updated team selection array for debugging
            } catch (err) {
                // Handle any errors during data fetching
                console.error(err); // Log the error
            }
        },

        /**
         * Handles the change event for the team selection dropdown.
         * Loads players based on the selected team ID.
         * 
         * @param event - The event object containing the selected value
         */
        onSelectChange(event: Event) {
            const selectedValue = Number((event.target as HTMLSelectElement).value); // Get the selected value
            console.log("Selected Value:", selectedValue); // Log the selected value for debugging
            this.loadPlayers(selectedValue); // Load players based on the selected value
        }
    },

    /**
     * The mounted lifecycle hook is called after the component is mounted.
     * It initiates data loading for teams and players.
     */
    mounted() {
        this.loadTeams(); // Load the list of teams when the component is mounted
        this.loadPlayers(null); // Load all players when the component is mounted
    },
})
</script>

<style scoped></style>
