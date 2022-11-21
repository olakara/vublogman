<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>    
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> &VerticalLine;
        <RouterLink to="/about">About</RouterLink> &VerticalLine;
        <RouterLink to="/posts">Posts</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

