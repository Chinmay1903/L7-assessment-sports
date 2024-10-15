<template>
    <div>
        this is teams section
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fetchTeams } from '@/services/api';

export default defineComponent({
    name: 'TeamView', 
    data() {
        return {
            areas: null
        }
    },
    methods: {
        async loadData() {
            try {
                this.data = await fetchTeams();
                console.log(this.data);
                
            } catch (err) {
                this.error = 'Failed to fetch data. Please try again later.';
                console.error(err);
            }
        }
    },
    mounted () {
        this.loadData();
    },
});
</script>

<style scoped>

</style>
