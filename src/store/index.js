import { createStore } from 'vuex'

export default createStore({
  state: {
    testimonials: null,
    testimonial: null,
  },

  mutations: {
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setTestimonial: (state, testimonial) => {
      state.testimonial = testimonial;
  },
},
  actions: {
    getTestimonials: async (context) => {
      fetch("http://localhost:3000/testimonials")
      .then((res) => res.json())
      .then((testimonials) => context.commit("setTestimonials", testimonials));
    },
    getTestimonial: async (context, id) => {
      fetch("http://localhost:3000/testimonials" + id)
      .then((res) => res.json())
      .then((testimonial) => context.commit("setTestimonial", testimonial))
  },
    getProjects: async (context) => {
      fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((projects) => context.commit("setProjects", projects));
    },
    getProject: async (context, id) => {
      fetch("http://localhost:3000/projects" + id)
      .then((res) => res.json())
      .then((project) => context.commit("setProject", project))
  }
  },
},

{
  state: {
    projects: null,
    project: null
  },

  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setProject: (state, project) => {
      state.project = project;
  }
  },

  actions: {
    getProjects: async (context) => {
      fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((projects) => context.commit("setProjects", projects));
    },
    getProject: async (context, id) => {
      fetch("http://localhost:3000/projects" + id)
      .then((res) => res.json())
      .then((project) => context.commit("setProject", project))
  }
  },
},
)
