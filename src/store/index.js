import { createStore } from 'vuex'

export default createStore({
  state: {
    testimonials: null,
    testimonial: null,
    projects: null,
    project: null
  },

  mutations: {
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },

    // Projects
    setProjects: (state, projects) => {
      state.projects = projects;
    },

  },
  actions: {
    getTestimonials: async (context) => {
      fetch("http://localhost:3000/testimonials")
      .then((res) => res.json())
      .then((testimonials) => context.commit("setTestimonials", testimonials));
    },

    // Projects
    getProjects: async (context) => {
      fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((projects) => context.commit("setProjects", projects));
    },
  },
})
