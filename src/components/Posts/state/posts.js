import { ref } from "vue";
import axios from "axios";

export default {
    posts: ref([]),
    loadPosts() {
        axios.get("http://localhost:3000/posts").then((response) => {
            this.posts.value = response.data;
        });
    },
    createPost(title, body) {
        axios.post("http://localhost:3000/posts",{ title, body}).then((response) => {
            console.log('response', response.data);
            this.posts.value.push({
                title, body
            });
        })
    },
    updatePost(id, post) {
        axios.post("http://localhost:3000/posts",{ title, body}).then((response) => {
            console.log('response', response.data);
            this.posts.value.push({
                title, body
            });
        })
    }
}