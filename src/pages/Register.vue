<template>
    <Card title="Register">
        <form class="flex flex-col items-center justify-center space-y-2" @submit.prevent="register" novalidate>
            <div class="username">
                <label class="block uppercase font-thin mb-2 text-sm" for="username">Username</label>
                <input class="p-2 border-2 shadow-lg rounded-md" v-model="v$.username.$model" type="text">
            </div>

            <div class="email">
                <label class="block uppercase font-thin mb-2 text-sm" for="email">Email</label>
                <input class="p-2 border-2 shadow-lg rounded-md" v-model="v$.email.$model" type="email">
            </div>

            <div class="password">
                <label class="block uppercase font-thin mb-2 text-sm" for="password">Password</label>
                <input class="p-2 border-2 shadow-lg rounded-md" v-model="state.password" type="password">
            </div>

            <div class="confirmPassword">
                <label class="block uppercase font-thin mb-2 text-sm" for="confirmPassword">Confirm Password</label>
                <input class="p-2 border-2 shadow-lg rounded-md"  v-model="state.confirmPassword" type="password">
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
import { reactive } from 'vue';
import {useVuelidate} from '@vuelidate/core';
import {required, email} from '@vuelidate/validators';

const {register: authRegister} = useAuth();

const state = reactive({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
});

const rules = {
    username: {required},
    email: {required, email}
}

const v$ = useVuelidate(rules,state);

const register = async () => {
    //let statei = await authRegister(state.email,state.password);
    console.log(v$.value);
}
</script>