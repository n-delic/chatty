import { ref } from "vue";

const errMsg = ref("");


const useError = () => {

    const updateMsg = (code: string) => {
        switch(code) {
            case 'auth/email-already-exists':
                errMsg.value = 'Sorry, this email is already in use';
                break;
            case 'auth/user-not-found':
                errMsg.value = 'User with that credentials has not been found';
                break;
            default:
                errMsg.value = 'Internal server error';
        }
    }

    return {updateMsg,errMsg}
}

export default useError;