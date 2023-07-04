<template>
    <div v-if="project" class="project_details">
        <div class="card mx-auto">
            <div class="card text-black border-white border-2 text-center ">
            <img :src="project.image" :alt="project.name"/>
            <h2 class="fs-4">
                {{ project.name }}
            </h2>
                <div class="card-body m-2">
                    <p>{{ project.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        project() {
            return this.$store.state.project
        },
        id () {
            return this.$route.params.id
        }
        
    },

    mounted() {
        this.$store.dispatch("getProject", this.id)
    },
    
}
</script>
<style>
    
</style>