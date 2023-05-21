<template>
    <div  :class="{'-translate-y-3 z-50 shadow-md shadow-black':store.state.seçiliAnime==anime  }"  class="border font-semibold border-black group font-quicksand bg-zinc-200 h-64 w-36 flex flex-col items-center p-2 justify-start gap-2">
        <img :src="anime.images.jpg.large_image_url" class="w-32 h-40 object-cover group-hover:absolute z-0 bg-red-500" alt="">
        <p class="hyphens-auto break-words h-8 w-full group-hover:text-white group-hover:bg-black/50 group-hover:h-full group-hover:backdrop-blur-sm z-10 text-center overflow-hidden" lang="en">
            {{ anime.title }}
        </p>
        <div @click="store.state.seçiliAnime==anime ? goEkle() : seç(anime) "  :class="store.state.seçiliAnime==anime ? 'bg-pink-500 hover:bg-pink-600 text-white' : 'bg-lime-400 hover:bg-lime-500'" class="border  border-black rounded-lg w-full text-center cursor-pointer  transition-all">
            {{ store.state.seçiliAnime==anime ? 'ekle' : 'seç' }}
        </div>
    </div>
</template>


<script setup>
import store from '/src/store';
import router from '/src/router'
const seç=anime=>{
    store.state.seçiliAnime=anime
}

const goEkle =()=>{
    router.push("add")
}

defineProps({
    anime:Object,
})
</script>