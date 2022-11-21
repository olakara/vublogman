<script setup>
import {ref} from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

const display = ref(false);

function openDialog() {
  display.value = true;
}

</script>
<template>
  <div class="about">
    <h1>About VuBlogMan</h1>    
    <p>Sample Vue 3 application to learn new !</p>
    <Button label="Open Dialog" @click="openDialog" />
  </div>



  <Dialog header="Header" v-model:visible="display" >
	 This is simple content for the dialog!
  </Dialog>
</template>

