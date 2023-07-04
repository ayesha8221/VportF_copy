<template>
    <div v-if="testimonial" class="testimonial_details">
        <div class="card mx-auto">
            <div class="card text-black border-white border-2 text-center ">
            <img :src="testimonial.image" :alt="testimonial.name"/>
            <h2 class="fs-4">
                {{ testimonial.name }}
            </h2>
                <div class="card-body m-2">
                    <p>{{ testimonial.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        testimonial() {
            return this.$store.state.testimonial
        },
        id () {
            return this.$route.params.id
        }
        
    },

    mounted() {
        this.$store.dispatch("getTestimonial", this.id)
    },
    
}
</script>
<style>
    
</style>