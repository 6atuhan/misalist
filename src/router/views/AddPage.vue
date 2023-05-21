<template>
    <div class="container mx-auto flex items-center justify-center flex-col pt-20 font-quicksand text-center ">
        <div class="border  border-black w-64  flex flex-col items-center justify-start py-2">
            <img :src="store.state.seçiliAnime.images.jpg.large_image_url" class="h-56 object-cover bg-red-500" alt="">
            <div class="relative w-12 h-12 my-2 flex items-center justify-center">
                <svg class="fill-rose-600 absolute " xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="48" height="48"><path d="M23.836,8.794a3.179,3.179,0,0,0-3.067-2.226H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832L4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6A3.177,3.177,0,0,0,23.836,8.794Zm-2.343,1.991-4.144,3.029a1,1,0,0,0-.362,1.116L18.562,19.8a1.227,1.227,0,0,1-1.895,1.365l-4.075-3a1,1,0,0,0-1.184,0l-4.075,3a1.227,1.227,0,0,1-1.9-1.365L7.013,14.93a1,1,0,0,0-.362-1.116L2.507,10.785a1.227,1.227,0,0,1,.724-2.217h5.1a1,1,0,0,0,.952-.694l1.55-4.831a1.227,1.227,0,0,1,2.336,0l1.55,4.831a1,1,0,0,0,.952.694h5.1a1.227,1.227,0,0,1,.724,2.217Z"/></svg>
                <h1 class="text-center absolute font-quicksand text-2xl font-bold select-none text-outline text-white">
            {{ vote }}
                </h1>
            </div>
        <h1>{{ store.state.seçiliAnime.title }}</h1>
        <div class="flex items-center justify-center gap-4">
            <label for="rating_1">
                <svg :class="{'fill-rose-500 scale-105 opacity-100 hover:fill-rose-500':vote >= 1, 'fill-stone-600 hover:fill-rose-400 opacity-40': vote <1 }" class=" cursor-pointer   scale-100 hover:scale-110 transition-all"  xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="24" height="24"><path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z"/></svg>
                <input v-model="vote" id="rating_1" type="radio" name="rating" value="1" class="hidden">
            </label>
            <label for="rating_2">
                <svg :class="{'fill-rose-500 scale-105 opacity-100 hover:fill-rose-500':vote >= 2, 'fill-stone-600 hover:fill-rose-400 opacity-40': vote < 2 }" class=" cursor-pointer   scale-100 hover:scale-110 transition-all"  xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="24" height="24"><path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z"/></svg>
                <input v-model="vote" id="rating_2" type="radio" name="rating" value="2" class="hidden">
            </label>
            <label for="rating_3">
                <svg :class="{'fill-rose-500 scale-105 opacity-100 hover:fill-rose-500':vote >= 3, 'fill-stone-600 hover:fill-rose-400 opacity-40': vote < 3 }" class=" cursor-pointer   scale-100 hover:scale-110 transition-all"  xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="24" height="24"><path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z"/></svg>
                <input v-model="vote" id="rating_3" type="radio" name="rating" value="3" class="hidden">
            </label>
            <label for="rating_4">
                <svg :class="{'fill-rose-500 scale-105 opacity-100 hover:fill-rose-500':vote >= 4, 'fill-stone-600 hover:fill-rose-400 opacity-40': vote < 4 }" class=" cursor-pointer   scale-100 hover:scale-110 transition-all"  xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="24" height="24"><path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z"/></svg>
                <input v-model="vote" id="rating_4" type="radio" name="rating" value="4" class="hidden">
            </label>
            <label for="rating_5">
                <svg :class="{'fill-rose-500 scale-105 opacity-100 hover:fill-rose-500':vote >= 5, 'fill-stone-600 hover:fill-rose-400 opacity-40': vote < 5 }" class=" cursor-pointer   scale-100 hover:scale-110 transition-all"  xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="24" height="24"><path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z"/></svg>
                <input v-model="vote" id="rating_5" type="radio" name="rating" value="5" class="hidden">
            </label>
        </div>
        <div class=" flex items-center justify-center w-full gap-4 px-4 mt-2">
            <div @click="sil" class="border select-none cursor-pointer hover:scale-105 scale-100 transition-all hover:text-zinc-900 hover:bg-red-600 border-black rounded-full text-center font-semibold basis-1/2 w-full bg-red-500">sil</div>
            <div @click="ekle" class="border select-none cursor-pointer hover:scale-105 scale-100 transition-all hover:text-zinc-900 hover:bg-green-600 border-black rounded-full text-center font-semibold basis-1/2 w-full bg-green-500">ekle</div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

import router from "/src/router";
import store from "/src/store"
import {db} from "/src/firebase"
import { doc, setDoc, onSnapshot } from "firebase/firestore"; 

const vote =ref(1)


const sil =()=>{
    store.state.seçiliAnime = []
    router.push("/")
}


const ekle =()=>{
    const veri = {
        anime:store.state.seçiliAnime,
        oy: vote.value * 1,
        zaman: Date.now()
    }
    veriKontrol(veri)

}

//firebasede bu anime kaydedilmiş mi ? kontrolü
const veriKontrol=(veri)=>{

    const animeVeri = veri
        const malid = store.state.seçiliAnime.mal_id

    onSnapshot(doc(db,"listem", `${malid}`), (result) => {
    const currentData = result.data()
    if(currentData == undefined)
    {

        setDoc(doc(db, "listem", `${malid}`), animeVeri).then(()=>{
            store.state.seçiliAnime = []
            router.push("/collection")
        });

    }
    else if(currentData != undefined)
    {

        router.push("/collection")
    }
    });
}

</script>