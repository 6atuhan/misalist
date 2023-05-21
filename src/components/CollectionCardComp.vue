<template>
    <div  class="border relative font-semibold border-black group font-quicksand bg-zinc-200 h-64 w-36 flex flex-col items-center p-2 justify-start gap-2">

        <div class="flex items-center justify-center relative self-start -ml-4 -mt-4 ">
            <h1 class="text-center font-quicksand text-xl z-20 font-bold select-none text-outline text-white">{{ anime.oy }}</h1>
            <svg :class="{'fill-rose-200' : anime.oy == 1 ,'fill-rose-300' : anime.oy == 2 ,'fill-rose-400' : anime.oy == 3 ,'fill-rose-500' : anime.oy == 4 ,'fill-rose-600' : anime.oy == 5 ,}" class=" stroke-1 stroke-black absolute " xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="32" height="32"><path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z"/></svg>
        </div>

        <img :src="anime.anime.images.jpg.large_image_url" class="w-32 h-40 z-30 object-cover group-hover:absolute  bg-red-500" alt="">
        <p class=" transition-all duration-700 hyphens-auto break-words h-8 w-full group-hover:text-white group-hover:bg-black/50 group-hover:h-full group-hover:backdrop-blur-sm z-40 text-center overflow-hidden" lang="en">
            {{ anime.anime.title }}
        </p>
    </div>
</template>


<script setup>
import store from '/src/store';
import router from '/src/router'

defineProps({
    anime:Object,
})
</script>