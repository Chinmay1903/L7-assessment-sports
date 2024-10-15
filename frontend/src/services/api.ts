import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/'; // Replace with your API endpoint

export const fetchAreas = async () => {
    try {
        const response = await axios.get(`${BASE_URL}areas/`);
        return response.data; // Return the data from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error for handling in the component
    }
};

export const fetchMatches = async () => {
    try {
        const response = await axios.get(`${BASE_URL}matches/`);
        return response.data; // Return the data from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error for handling in the component
    }
};

export const fetchPlayers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}players/`);
        return response.data; // Return the data from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error for handling in the component
    }
};

export const fetchTeams = async () => {
    try {
        const response = await axios.get(`${BASE_URL}teams/`);
        return response.data; // Return the data from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error for handling in the component
    }
};
