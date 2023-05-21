<template>

<div class="container mx-auto flex items-center justify-center flex-col px-2 md:px-32 lg:px-64 ">

    <h1 class="font-quicksand font-extrabold tracking-widest text-4xl mt-40 select-none ">misalist</h1>

    <div class="relative w-80 md:w-[400px] h-16 border overflow-hidden border-black rounded-full flex items-center justify-evenly shadow-lg shadow-rose-200 transition-all px-4 gap-2">
        <input @keypress.enter="searchAnime" @click="searchError=false" v-model="search" type="text" placeholder="anime name" class=" w-full bg-transparent  m-2 p-2 outline-none ring-0 mx-auto font-semibold font-quicksand">
        <svg @click="searchAnime" class="fill-rose-500 cursor-pointer hover:scale-110 scale-100 transition-all" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 513.749 513.749" style="enable-background:new 0 0 513.749 513.749;" xml:space="preserve" width="32" height="32">
        <g>
        	<path d="M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"/>
        </g>
        </svg>
        <p class="select-none opacity-40 text-xs bottom-0 right-8 absolute"> developed for mislina</p>
    </div>
    <ul class="mt-10 flex items-center justify-center gap-4 flex-wrap">
        
        <h1 v-if="searchError" class="select-none font-quicksand text-center ">sorry... i cant find <br> <strong class="before:content-['`'] after:content-['`'] font-quicksand text-center select-none font-extrabold ">{{ search }}</strong> </h1>

        <li v-for="anime in animeler" :key="anime">
            <ResultCardComp :anime="anime"></ResultCardComp>
        </li>
    </ul>

</div>

</template>

<script setup>
import store from '/src/store';


import ResultCardComp from "/src/components/ResultCardComp.vue"

import axios from 'axios';
import { ref } from 'vue';

const animeler = ref([])
const search = ref("")
const searchError=ref(false)

const searchAnime=()=>{
    if(search.value.length > 2)
    {
        axios.get(`https://api.jikan.moe/v4/anime?q=${search.value}`).then(response=>{
        animeler.value= response.data.data
        searchError.value=false
        if(animeler.value.length <=0)
        {
            searchError.value=true
            setTimeout(() => {
        searchError.value=false
            
        }, 2000);
        }
    
    }).catch(error=>{

        searchError.value=true
        setTimeout(() => {
        searchError.value=false
            
        }, 2000);
    })
    }
}
</script>