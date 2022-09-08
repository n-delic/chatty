<template>
    <header class="fixed top-0 w-full z-10 bg-indigo py-4">
        <div class="container flex items-center justify-between mx-auto">
            <RouterLink to="/">
                <img class="h-12" src="../assets/logo.svg" />
            </RouterLink>
            
            <div class="space-x-4">

                <RouterLink to="/login">
                    <span
                        class="rounded-full transition-colors bg-slightDarkBlue hover:bg-[#48cae4] py-2 px-4 font-semibold cursor-pointer text-white">Login</span>
                </RouterLink>

                <RouterLink to="/register">
                    <span
                        class="rounded-full transition-colors bg-slightDarkBlue hover:bg-[#48cae4]  py-2 px-4 font-semibold cursor-pointer text-white">Register</span>
                </RouterLink>

            </div>

            <div class="flex items-center space-x-4 hidden">
                <RouterLink to="/login">
                    <span
                        class="rounded-full bg-slightDarkBlue  py-2 px-4 font-semibold cursor-pointer text-white">Logout</span>
                </RouterLink>

                <img class="rounded-full h-12" src="https://avatars.githubusercontent.com/u/101582574?s=400&u=06be3c1cde5b904e7a890064e26174482781a3a2&v=4" />
            </div>

        </div>
    </header>
    <main class="bg-slightDarkBlue h-screen flex place-items-center justify-center pt-24 p-8">
        <RouterView />
    </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>