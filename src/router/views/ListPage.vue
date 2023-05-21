<template>
    <div v-if="listpage.toggleSil" class="fixed font-quicksand top-0 backdrop-blur-sm left-0 h-screen w-screen  flex items-center z-[999] justify-center bg-black/50">
        <div class="aspect-video w-96 bg-rose-100 border border-rose-800 drop-shadow-sm flex flex-row items-center justify-start p-2 gap-2">
            <img :src="listpage.img" class="object-cover drop-shadow-lg  w-1/2 h-full" alt="">
            <div class="h-full w-1/2 flex items-center justify-between flex-col">
                <p class="font-bold">{{ listpage.name }}</p>
                <div class="flex items-center justify-center w-full">
                    <div @click="vazgeç" class="bg-rose-200 w-1/2 font-extrabold text-center hover:bg-rose-400 hover:text-outline transition-all h-10 select-none cursor-pointer border-rose-800 border p-1 text-blue-500"> vazgeç</div>
                    <div @click="silOnay" class="bg-rose-200 w-1/2 font-extrabold text-center hover:bg-rose-400 hover:text-outline transition-all h-10 select-none cursor-pointer border-rose-800 border p-1 text-red-500"> sil </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto flex items-center justify-center font-quicksand">

        <table class=" mt-10">
            <thead class="bg-rose-400">
                <th>foto</th>
                <th>name</th>
                <th>rating</th>
            </thead>
            <tbody>
                <tr v-for=" i in store.state.listem" :key="i" class="bg-rose-200 border-b border-rose-900">
                <th class="font-medium p-0 py-2 md:p-2  w-56">
                    <img :src="i.anime.images.jpg.large_image_url" class="h-56 w-56 shadow-md shrink-0 shadow-black object-cover bg-red-500" alt="">

                </th>
                <td class="px-6 py-4 text-black font-bold relative">
                    <div @click="sil(i.anime.mal_id,i.anime.images.jpg.large_image_url,i.anime.title)" class="drop-shadow-md hover:scale-110 group scale-95 transition-all cursor-pointer w-6 h-6 absolute top-2 left-1/2">
                        <svg class="fill-red-400 saturate-200 group-hover:fill-red-800 transition-all" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm4.707,15.293-1.414,1.414L12,13.414,8.707,16.707,7.293,15.293,10.586,12,7.293,8.707,8.707,7.293,12,10.586l3.293-3.293,1.414,1.414L13.414,12Z"/></svg>

                    </div>
                    <p class="max-w-sm">{{ i.anime.title }}</p>
                </td>
                <td class="px-6 py-4">
                    <div class="flex flex-col md:flex-row items-center justify-center gap-1"  >
                    <svg v-for="oy in i.oy" :key="oy" class=" fill-rose-600"  xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="24" height="24"><path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z"/></svg>
                    <svg v-for="oy1 in 5 - i.oy" :key="oy1"  class="fill-rose-600 " xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><path d="M23.836,8.794a3.179,3.179,0,0,0-3.067-2.226H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832L4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6A3.177,3.177,0,0,0,23.836,8.794Zm-2.343,1.991-4.144,3.029a1,1,0,0,0-.362,1.116L18.562,19.8a1.227,1.227,0,0,1-1.895,1.365l-4.075-3a1,1,0,0,0-1.184,0l-4.075,3a1.227,1.227,0,0,1-1.9-1.365L7.013,14.93a1,1,0,0,0-.362-1.116L2.507,10.785a1.227,1.227,0,0,1,.724-2.217h5.1a1,1,0,0,0,.952-.694l1.55-4.831a1.227,1.227,0,0,1,2.336,0l1.55,4.831a1,1,0,0,0,.952.694h5.1a1.227,1.227,0,0,1,.724,2.217Z"/></svg>
                    
                     </div>

                </td>
            </tr>
            </tbody>
        </table>

</div>
</template>

<script setup>
import { doc, deleteDoc } from "firebase/firestore";
import {db} from "/src/firebase"

import { reactive } from "vue"
import store from "/src/store"

const listpage = reactive({
    toggleSil:false,
    id:0,
    img:"",
    name:"",

})

const sil =(id,img,name)=>{
listpage.id=id
listpage.toggleSil=true
listpage.name=name
listpage.img=img
}
const vazgeç =()=>{
listpage.id=0
listpage.toggleSil=false
listpage.name=""
listpage.img=""
}
const silOnay =()=>{
 deleteDoc(doc(db, "listem", `${listpage.id}`)).then(vazgeç());
}
</script>