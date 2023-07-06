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
      fetch("https://ayesha8221.github.io/ayesha8821.github.io/db.json")
      .then((res) => res.json())
      .then((data) => context.commit("setTestimonials", data.testimonials));
    },

    // Projects
    getProjects: async (context) => {
      fetch("https://ayesha8221.github.io/ayesha8821.github.io/db.json")
      .then((res) => res.json())
      .then((data) => context.commit("setProjects", data.projects));
    },
  },
})
