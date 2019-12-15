import axios from "axios";

export const state = () => ({
  fetchedPosts: []
});

export const mutations = {
  setPosts(state, posts) {
    state.fetchedPosts = posts;
  }
};

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    try {
      const res = await axios.get(
        "https://tech-update-4e7f6.firebaseio.com/posts.json"
      );
      const postsArr = [];
      for (const key in res.data) {
        postsArr.push({ id: key, ...res.data[key] });
      }
      vuexContext.commit("setPosts", postsArr);
    } catch (error) {
      context.error(error);
    }
  },

  setPosts(vuexContext, posts) {
    vuexContext.commit("setPosts", posts);
  }
};

export const getters = {
  fetchedPosts(state) {
    return state.fetchedPosts;
  }
};
