<template>
    <div class="bg-white rounded-2xl shadow-lg p-8 max-w-6xl opacity-80 backdrop-blur-lg space-y-5">
        <h1 class="font-bold text-4xl">{{title}}</h1>
        <section>
            <slot/>
        </section>
    </div> 
</template>

<script setup lang="ts">
    defineProps({
        title: String
    });
</script>