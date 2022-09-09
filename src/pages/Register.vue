<template>
    <Card title="Register">
        <div class="flex flex-col space-y-8 md:flex-row md:space-x-8">
            <form class="flex flex-col max-w-min items-begin space-y-2 appearance-none" @submit.prevent="register" novalidate>
                <div class="username">
                    <label class="block uppercase font-thin mb-2 text-sm" for="username">Username</label>
                    <input class="p-2 border-2 shadow-lg rounded-md" v-model="state.username" type="text">
                    <p  v-for="error of v$.username.$errors" class="text-xs text-teritary mt-1">{{error.$message}}</p>
                </div>

                <div class="email">
                    <label class="block uppercase font-thin mb-2 text-sm" for="email">Email</label>
                    <input class="p-2 border-2 shadow-lg rounded-md" v-model="state.email" type="email">
                    <p v-for="error of v$.email.$errors" class="text-xs text-teritary mt-1">{{error.$message}}</p>
                </div>

                <div class="password">
                    <label class="block uppercase font-thin mb-2 text-sm" for="password">Password</label>
                    <input class="p-2 border-2 shadow-lg rounded-md" v-model="state.password" type="password">
                    <p v-for="error of v$.password.$errors" class="text-xs text-teritary mt-1">{{error.$message}}</p>
                </div>

                <div class="confirmPassword">
                    <label class="block uppercase font-thin mb-2 text-sm" for="confirmPassword">Confirm Password</label>
                    <input class="p-2 border-2 shadow-lg rounded-md" v-model="state.confirmPassword" type="password">
                    <p v-for="error of v$.confirmPassword.$errors" class="text-xs text-teritary mt-1">{{error.$message}}</p>
                </div>

                <button type="submit"
                    class="button cursor-pointer bg-teritary hover:bg-fourth hover:disabled:bg-teritary  rounded-lg py-2 px-4 text-white shadow-md">
                    Register
                </button>
            </form>
            <div class="border-t-[1px] md:border-l-[1px] md:border-t-0"></div>
            <div>
                <h1>This is your time to shine</h1>
            </div>
        </div>

    </Card>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue';
import useAuth from '@/composables/Auth';
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, helpers } from '@vuelidate/validators';
import { computed } from '@vue/reactivity';

const { register: authRegister } = useAuth();

const state = reactive({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
});

const passwordValid = (value: string) => value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)?.length;
const passwordRef = computed(()=>state.password);

const rules = {
    username: {
        required: helpers.withMessage('Username is required', required)
    },
    email: {
        required: helpers.withMessage('Email is required', required),
        email: helpers.withMessage('Email not valid', email)
    },
    password: {
        required: helpers.withMessage('Password is required', required),
        passwordValid: helpers.withMessage('Password must be min 8 chars, alphanumeric and with special char', passwordValid)
    },
    confirmPassword: {
        sameAs: helpers.withMessage('Passwords must match', sameAs(passwordRef))
    }
}

const v$ = useVuelidate(rules, state);

const register = async () => {
    let isValidated = await v$.value.$validate();
    console.log(isValidated);
    console.log(v$.value);
    if (isValidated) {
        let statei = await authRegister(state.username,state.email,state.password);
        console.log(statei);
    }
    
}
</script>