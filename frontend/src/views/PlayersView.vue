<template>
    <div>
this is players section
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fetchPlayers } from '@/services/api';

export default defineComponent({
    name: 'PlayersView', 
    data() {
        return {
            areas: null
        }
    },
    methods: {
        async loadData() {
            try {
                this.data = await fetchPlayers();
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
})
</script>

<style scoped>

</style>
