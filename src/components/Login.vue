<template>
    <div id="login">
        <div class="container d-flex justify-content-center align-items-center h-100">
            <v-card
                class="card p-5"
            >
                <h2 class="card-title font-weight-bold text-center mb-0">AFFILIATE DASHBOARD</h2>
                <p class="card-subtitle text-center mb-4">Nextive Solution</p>
                <v-form
                    ref="loginForm"
                    v-model="valid"
                    lazy-validation
                    class="my-5"
                    @submit.prevent="logIn"
                >
                    <v-text-field
                        v-model="email"
                        prepend-inner-icon="mdi-email"
                        placeholder="user@email.com"
                        rounded
                        :rules="emailRules"
                        required                        
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        prepend-inner-icon="mdi-key"
                        placeholder="****"
                        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPass ? 'text' : 'password'"
                        @click:append="showPass = !showPass"
                        rounded
                        :rules="passwordRules"
                        required
                    ></v-text-field>
                    <v-btn
                        block
                        rounded
                        dark
                        class="btn mt-3 py-6"
                        type="submit"
                    >
                        Login
                    </v-btn>
                </v-form>

                <div class="d-flex justify-content-end mt-3">
                    <v-btn
                        text
                        color="primary"
                        class="p-0 forgetPassBtn"
                    >
                        Forget Password?
                    </v-btn>                    
                </div>
            </v-card>
        </div>
        <v-snackbar
            v-model="credentialError"
            :timeout="timeout"
            absolute
            top
            center
        >
            {{ credErrorText }}
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="orange"
                    text
                    v-bind="attrs"
                    @click="credentialError = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Login', 
        data: () => ({
            valid: false,
            email: '',
            password: '', 
            emailRules: [
                v => !!v || 'This field cannot be empty!',
                v => /.+@.+/.test(v) || 'Invalid email format!',
            ],
            passwordRules: [
                v => !!v || 'This field cannot be empty!'
            ],
            showPass: false, 
            credentialError: false, 
            credErrorText: 'Credential mismatches!',
            timeout: 2000,
        }),
        methods: { 
            async logIn(){
                if(this.$refs.loginForm.validate()){
                    let result = await axios.get(`https://github.com/SaimaAkter-CSECU/next-aff-db/db.json/users?email=${this.email}&password=${this.password}`); 
                    if(result.status == 200 && result.data.length > 0){
                        localStorage.setItem("user-info", JSON.stringify(result.data[0]) );  
                        this.$router.push({name: "DashboardVendors"}); 
                    }
                    else{
                        this.credentialError = !this.credentialError;
                    }
                }
            }
        },
    }
</script>
