<template>
  <div class="container">
        <LoaderComponent v-if="isLoading" class="mt-5"/>
    <div class="row" v-else>
            <postCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
// IMPORTIAMO AXIOS
import axios from 'axios'
import postCard from '../components/MainComponents/PostCard.vue'
import LoaderComponent from '../components/MainComponents/LoaderComponent.vue'

export default {
components: {
        postCard,
        LoaderComponent
    },
data : function(){
        return{
            posts : [],
            isLoading : true
        }
    },

methods: {
        getPost : function(){
            axios.get('api/post')
            .then((element)=> {
                this.posts = element.data.resoult ;
                this.isLoading = false;
                console.log(this.posts);
            })
            .catch((error) => {
                console.log(error);
            })
        },
    },
 created(){
       this.getPost();
    }

}
</script>

<style>

</style>