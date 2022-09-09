<template>
    <header class="fixed top-0 w-full  bg-primary py-4 shadow-shadow shadow-md">
        <div class="container flex items-center justify-between mx-auto">
            <RouterLink to="/">
                <!-- <img class="h-12" src="../assets/logo.svg" /> -->
                <h1 class="text-2xl font-bold">Chatty!</h1>
            </RouterLink>
            
            <div class="space-x-4">

                <RouterLink to="/login">
                    <span
                        class="rounded-full transition-colors bg-teritary hover:bg-fourth py-2 px-4 font-semibold cursor-pointer text-white">Login</span>
                </RouterLink>

                <RouterLink to="/register">
                    <span
                        class="rounded-full transition-colors bg-teritary hover:bg-fourth  py-2 px-4 font-semibold cursor-pointer text-white">Register</span>
                </RouterLink>

            </div>

            <div class="flex items-center space-x-4 hidden">
                <RouterLink to="/login">
                    <span
                        class="rounded-full bg-teritary  py-2 px-4 font-semibold cursor-pointer text-white">Logout</span>
                </RouterLink>

                <img class="rounded-full h-12" src="https://avatars.githubusercontent.com/u/101582574?s=400&u=06be3c1cde5b904e7a890064e26174482781a3a2&v=4" />
            </div>

        </div>
    </header>
    <main class="bg-primary h-screen flex place-items-center justify-center pt-24 p-8">
        <RouterView />
    </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>