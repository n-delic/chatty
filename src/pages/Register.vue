<template>
    <Card title="Register">
        <form class="flex flex-col items-center justify-center space-y-2" @submit.prevent="register">
            <div class="username">
                <label class="block uppercase font-thin mb-2 text-sm" for="username">Username</label>
                <input class="p-2 border-2 shadow-lg rounded-md" v-model="username" type="text">
            </div>

            <div class="email">
                <label class="block uppercase font-thin mb-2 text-sm" for="email">Email</label>
                <input class="p-2 border-2 shadow-lg rounded-md" v-model="email" type="email">
            </div>

            <div class="password">
                <label class="block uppercase font-thin mb-2 text-sm" for="password">Password</label>
                <input class="p-2 border-2 shadow-lg rounded-md" v-model="password" type="password">
            </div>

            <div class="confirmPassword">
                <label class="block uppercase font-thin mb-2 text-sm" for="confirmPassword">Confirm Password</label>
                <input class="p-2 border-2 shadow-lg rounded-md"  v-model="confirmPassword" type="password">
            </div>

            <button type="submit" class="button cursor-pointer bg-slightDarkBlue hover:bg-indigo rounded-lg py-2 px-4 text-white shadow-md">
                Register
            </button>
        </form>
    </Card>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue';
import useAuth from '@/composables/Auth';
import { ref } from 'vue';

const {register: authRegister} = useAuth();

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");


const register = async () => {
    let state = await authRegister(email.value,password.value);
    console.log(state);
}
</script>