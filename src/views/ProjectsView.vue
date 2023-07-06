<template>
    <div v-if="projects" class="flex-container row row row-col-5">
        <ModalComp v-for="project of projects" :key="project.id" :project="project"/>
    </div>
    <div v-else>Loading...</div>
</template>
<script>

import ModalComp from '@/components/ModalComp.vue';

export default {
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },

    mounted() {
        this.$store.dispatch("getProjects")
    },

    components: { ModalComp,}
}

</script>
<style>
::-webkit-scrollbar {
  display: none;
}
    
</style>