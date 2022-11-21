import { ref } from "vue";
import axios from "axios";

export default {
    post: ref({}),    
    getPost(id) {
        axios.get("http://localhost:3000/posts/" + id).then((response) => {
            console.log('get response', response.data);
            this.post.value = response.data;
        })
    },
    createPost(title, body) {
        axios.post("http://localhost:3000/posts",{ title, body}).then((response) => {
            console.log('create response', response.data);            
        })
    },
    updatePost(id, post) {
        axios.post("http://localhost:3000/posts",{ title, body}).then((response) => {
            console.log('update response', response.data);            
        })
    },
    deletePost(id) {
        axios.post("http://localhost:3000/posts",{ title, body}).then((response) => {
            console.log('delete response', response.data);           
        })
    }
}