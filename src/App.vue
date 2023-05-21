<template>
  <header-comp></header-comp>
  <div v-if="showFilter" class=" mx-auto flex items-center justify-center gap-8 mt-4">
    <p @click="  search='oy'" :class="{'font-semibold border-rose-600' : search =='oy'}" class="cursor-pointer select-none border-b border-transparent transition-all hover:border-rose-700 text-rose-500">oya göre</p>
    <p @click="  search='zaman'" :class="{'font-semibold border-rose-600' : search =='zaman'}" class="cursor-pointer select-none border-b border-transparent transition-all hover:border-rose-700 text-rose-500">zamana göre</p>
  </div>
<router-view></router-view>
<!-- <div @click="toggleDark" class="darkModeButton"></div> -->
</template>


<script setup>
import HeaderComp from "./components/HeaderComp.vue";
import { onMounted, onUpdated, ref } from "vue"
import store from "/src/store"
import router from "/src/router"
import { db } from "/src/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const animelistesi = ref([])

const search = ref("oy")
const showFilter = ref(false)


router.beforeResolve(to => {
  sayfaIsmiKontrol(to)
})


const sayfaIsmiKontrol = (to)=>{

if(to.name == "Home"){
  showFilter.value = false
}
else if (to.name == "Add"){
  showFilter.value = false
}
else if (to.name == "List"){
  showFilter.value = true
}
else if (to.name == "GuCollectionide"){
  showFilter.value = true
}
}

onUpdated(()=>{
  const q = query(collection(db, "listem"), orderBy(`${search.value}`, "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const animeler = [];
  querySnapshot.forEach((doc) => {
    animeler.push(doc.data());
  });
  animelistesi.value = animeler
  store.state.listem = animelistesi.value

});
})

onMounted(()=>{
    const q = query(collection(db, "listem"), orderBy(`${search.value}`, "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const animeler = [];
  querySnapshot.forEach((doc) => {
    animeler.push(doc.data());
  });
  animelistesi.value = animeler
  store.state.listem = animelistesi.value

});

})
</script>

