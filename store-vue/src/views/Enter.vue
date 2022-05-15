<template>
    <div class="enter">
        <vee-form class="col-6" :validation-schema="rules" @submit="sendData">
            <div>
               <vee-field name="name" type="email" placeholder="E-mail"/>
               <vee-error name="name"/>
            </div>
            <div>
                <vee-field name="password" type="password" placeholder="Пароль" />
                <vee-error name="password"/>
            </div>
            <div>
                <label><input type="checkbox" cheked>Запомнить</label>
            </div>
            <input class="entbut" type="submit" value="Войти">
            <p class="complete hide">Успешный вход</p>
            <p class="fail hide">Ошибка входа (неверно указан e-mail или пароль)</p>
        </vee-form>
        
    </div>
</template>

<script>
import {Form, Field, ErrorMessage, configure} from 'vee-validate';
import * as yup from 'yup';
import {mapGetters} from 'vuex';

configure({
    validateOnInput: true
});

export default {
    name: 'Enter',
    components: {
        VeeForm: Form,
        VeeField: Field,
        VeeError: ErrorMessage
    },
    data(){
        return{
            rules: yup.object({
                name: yup.string().trim().required('Введите email').email('Укажите email в формате qwerty@gmail.com'),
                password: yup.string().required('Введите пароль').min(6, 'Минимум 6 символов').typeError('Пароль должен состоять из цифр')
            })
        }
    },

    computed: {
        ...mapGetters(['getUsers'])
    },

    methods: {
        sendData(value){
            console.log(value);
            for(let user of this.getUsers){
                if(value.name === user.name && value.password === user.password){
                    document.querySelector('.complete').classList.toggle('hide');
                } else {
                    document.querySelector('.fail').classList.toggle('hide');
                }
            }
        }
    }
}
</script>

<style scoped>

.enter {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

form {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 10px;
}

input {
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid lightgreen;
    outline-style: none;

    border-radius: 10px;
}

.entbut {
    width: 150px;
    background-color: lightgreen;
}

.complete {
    color: lightgreen;
}

.fail {
    color: red;
}

.hide {
    display: none;
}

</style>