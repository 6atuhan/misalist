<template>
<ul class=" flex items-center justify-center gap-10 font-quicksand text-xl md:text-4xl" >
    <li class="select-none border-b border-transparent hover:border-rose-500 transition-all hover:text-rose-700">
        <router-link to="/" active-class="text-rose-600">home</router-link>

    </li>
    <li class="select-none border-b border-transparent hover:border-rose-500 transition-all hover:text-rose-700">
        <router-link to="/list" active-class="text-rose-600">my list</router-link>
    </li>
    <li class="select-none border-b border-transparent hover:border-rose-500 transition-all hover:text-rose-700">
        <router-link to="/collection" active-class="text-rose-600">my collection</router-link>
    </li>
</ul>
</template>