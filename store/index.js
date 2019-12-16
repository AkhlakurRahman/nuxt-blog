import axios from "axios";

export const state = () => ({
  fetchedPosts: []
});

export const mutations = {
  setPosts(state, posts) {
    state.fetchedPosts = posts;
  },
  addPost(state, post) {
    state.fetchedPosts.push(post);
  },
  editPost(state, editedPost) {
    const postIndex = state.fetchedPosts.findIndex(
      post => post.id === editedPost.id
    );
    state.fetchedPosts[postIndex] = editedPost;
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

  async addPost(vuexContext, post) {
    try {
      const newPost = { ...post, createdAt: new Date() };
      const res = await axios.post(
        "https://tech-update-4e7f6.firebaseio.com/posts.json",
        newPost
      );
      return vuexContext.commit("addPost", { ...newPost, id: res.data.name });
    } catch (error) {
      console.log(error);
    }
  },

  async editPost(vuexContext, editedPost) {
    try {
      await axios.put(
        `https://tech-update-4e7f6.firebaseio.com/posts/${editedPost.id}.json`,
        editedPost
      );

      return vuexContext.commit("editPost", editedPost);
    } catch (error) {
      console.log(error);
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
