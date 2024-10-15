<template>
    <div>
        This is Area section
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fetchAreas } from '@/services/api';

export default defineComponent({
    name: 'AreaView', 
    data() {
        return {
            areas: null
        }
    },
    methods: {
        async loadData() {
            try {
                this.data = await fetchAreas();
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
