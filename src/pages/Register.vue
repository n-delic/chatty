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
        <p v-for="error of v$.$errors" :key="error.$uid">
            {{ error.$message }}
            </p>
    </Card>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue';
import useAuth from '@/composables/Auth';
import { reactive } from 'vue';
import {useVuelidate} from '@vuelidate/core';
import {required, email, sameAs, helpers} from '@vuelidate/validators';

const {register: authRegister} = useAuth();

const state = reactive({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
});

const passwordValid = (value: string) => value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)?.length;

const rules = {
    username: {
        required: helpers.withMessage('Username is required', required)
    },
    email: {
        required: helpers.withMessage('Email is required',required),
        email: helpers.withMessage('Email not valid', email)
    },
    password: {
        required: helpers.withMessage('Password is required',required),
        passwordValid: helpers.withMessage('Password must be min 8 chars, alphanumeric and with special char',passwordValid)  
    },
    confirmPassword: {
        sameAs: helpers.withMessage('Passwords must match',sameAs(state.password))
    }
}

const v$ = useVuelidate(rules,state);

const register = async () => {
    await v$.value.$validate();
    //let statei = await authRegister(state.email,state.password);
    console.log(v$.value);
}
</script>