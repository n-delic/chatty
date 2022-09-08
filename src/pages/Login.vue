<template>
    <Card title="Login">
        <form class="flex flex-col items-center justify-center space-y-2"  @submit.prevent="">
            <div class="username ">
                <label class="block uppercase font-thin mb-2 text-sm" for="username">Username</label>
                <input class="p-2 border-2 shadow-lg rounded-md" type="text">
            </div>

            <div class="password">
                <label class="block uppercase font-thin mb-2 text-sm" for="password">Password</label>
                <input class="p-2 border-2 shadow-lg rounded-md" type="password">
            </div>

            <div class="button cursor-pointer bg-slightDarkBlue hover:bg-indigo rounded-lg py-2 px-4 text-white shadow-md">
                Login
            </div>
            
        </form>
    </Card>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue';
</script>