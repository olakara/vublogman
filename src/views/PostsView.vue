<script setup>
import PostsListerVue from '../components/Posts/components/PostsLister.vue';
import {RouterLink} from 'vue-router';

function onAddPost() {
    postsState.createPost('hello','world!');
}
</script>

<template>
  <main>
    <h1>
        Posts
    </h1>
    <span>
      <router-link to="/post">Create New Post</router-link>
    </span>
    <PostsListerVue />
  </main>
</template>
