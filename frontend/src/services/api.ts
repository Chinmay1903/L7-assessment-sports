import axios from 'axios'; // Import axios for making HTTP requests

// Define the base URL for the API endpoint
const BASE_URL = 'http://127.0.0.1:8000/api/'; // Replace with your API endpoint

/**
 * DataTeams
 * Represents the structure of a team object.
 */
export interface DataTeams {
    id: number; // Unique identifier for the team
    name: string; // Name of the team
    coach: string; // Name of the team's coach
}

/**
 * DataAreas
 * Represents the structure of an area object.
 */
export interface DataAreas {
    id: number; // Unique identifier for the area
    name: string; // Name of the area
    city: string; // City where the area is located
}

/**
 * DataMatches
 * Represents the structure of a match object.
 */
export interface DataMatches {
    id: number; // Unique identifier for the match
    away_team__name: string; // Name of the away team
    home_team__name: string; // Name of the home team
    date: string; // Date of the match
    location__name: string; // Name of the match location
}

/**
 * DataPlayers
 * Represents the structure of a player object.
 */
export interface DataPlayers {
    id: number; // Unique identifier for the player
    name: string; // Name of the player
    age: string; // Age of the player
    team: string; // Team the player belongs to
}

/**
 * Fetches the list of areas from the API.
 * 
 * @returns {Promise<DataAreas[]>} A promise that resolves to an array of area objects.
 * @throws Will throw an error if the API request fails.
 */
export const fetchAreas = async (): Promise<DataAreas[]> => {
    try {
        const response = await axios.get<DataAreas[]>(`${BASE_URL}areas/`);
        return response.data; // Return the data from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error for handling in the component
    }
};

/**
 * Fetches the list of matches from the API.
 * 
 * @returns {Promise<DataMatches[]>} A promise that resolves to an array of match objects.
 * @throws Will throw an error if the API request fails.
 */
export const fetchMatches = async (): Promise<DataMatches[]> => {
    try {
        const response = await axios.get<DataMatches[]>(`${BASE_URL}matches/`);
        return response.data; // Return the data from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error for handling in the component
    }
};

/**
 * Fetches all players from the API.
 * 
 * @returns {Promise<DataPlayers[]>} A promise that resolves to an array of player objects.
 * @throws Will throw an error if the API request fails.
 */
export const fetchAllPlayers = async (): Promise<DataPlayers[]> => {
    try {
        const response = await axios.get<DataPlayers[]>(`${BASE_URL}players/`);
        return response.data; // Return the data from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error for handling in the component
    }
};

/**
 * Fetches players by their team ID from the API.
 * 
 * @param {number} teamId - The ID of the team for which to fetch players.
 * @returns {Promise<DataPlayers[]>} A promise that resolves to an array of player objects belonging to the specified team.
 * @throws Will throw an error if the API request fails.
 */
export const fetchPlayersByTeamId = async (teamId: number): Promise<DataPlayers[]> => {
    try {
        const response = await axios.get<DataPlayers[]>(`${BASE_URL}players/${teamId}/`);
        return response.data; // Return the data from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error for handling in the component
    }
};

/**
 * Fetches the list of teams from the API.
 * 
 * @returns {Promise<DataTeams[]>} A promise that resolves to an array of team objects.
 * @throws Will throw an error if the API request fails.
 */
export const fetchTeams = async (): Promise<DataTeams[]> => {
    try {
        const response = await axios.get<DataTeams[]>(`${BASE_URL}teams/`);
        return response.data; // Return the data from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error for handling in the component
    }
};
