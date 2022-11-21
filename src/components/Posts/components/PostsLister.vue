<script setup>
import postsState from '../state/posts';
import PostSummary from './PostSummary.vue';
import {RouterLink} from 'vue-router';

postsState.loadPosts();

</script>
<template>   
    <ul>
        <li v-for="post in postsState.posts.value" :key="post.id">            
            <PostSummary>
                <template v-slot:title>
                    {{post.title}}
                </template>
                <template v-slot:body>
                    {{post.body}}
                </template>
            </PostSummary>
            
            <span>
                <router-link :to="{path: 'post/'+post.id+'/edit/' }">Edit</router-link> &VerticalBar;
                <router-link :to="{path: 'post/'+post.id }">Read</router-link>
            </span> 

        </li>
    </ul>
</template>