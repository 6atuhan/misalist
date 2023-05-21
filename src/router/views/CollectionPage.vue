<template>
    <div class="container mx-auto flex items-center justify-center gap-6 flex-wrap pt-20">
        <collection-card-comp v-for="anime in store.state.listem" :key="anime" :anime="anime" ></collection-card-comp>

    </div>
</template>

<script setup>
import store from '/src/store';
import CollectionCardComp from "/src/components/CollectionCardComp.vue"
</script>