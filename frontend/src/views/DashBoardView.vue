<template>
    <div>
        <h2>Test</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fetchMatches } from "@/services/api";

export default defineComponent({
    name: "DashBoardView",
    data() {
        return {
            data: null,
            error: ""
        }
    },
    methods: {
        async loadData() {
            try {
                this.data = await fetchMatches();
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
