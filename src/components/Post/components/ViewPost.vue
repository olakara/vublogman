<script setup>
import { onMounted } from 'vue'
import { useRoute, RouterLink} from 'vue-router'
import postState from '../state/post.js';

const route = useRoute();

onMounted(() => {
    postState.getPost(route.params.id);
})
</script>
<template>    
    <h1>{{postState.post.value.title}}</h1>
    <div>
        {{postState.post.value.body}}
    </div>
    <router-link :to="{path: 'post/'+post.id }">Read</router-link>
</template>