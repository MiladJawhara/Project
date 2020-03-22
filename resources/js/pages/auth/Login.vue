<template>
    <v-container>
        <v-row justify="center">
            <v-col :cols="!isMobile ? 8 : 12">
                <v-card>
                    <v-card-title class="bg-primary">Login</v-card-title>
                    <v-card-text class="">
                        <v-form>
                            <v-container class="pl-0 pr-0">
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            type="email"
                                            label="E-mail"
                                            title="email"
                                            prepend-icon="mdi-email"
                                            v-model="email"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            :type="
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            "
                                            label="Password"
                                            title="password"
                                            :append-icon="
                                                !showPassword
                                                    ? 'mdi-eye'
                                                    : 'mdi-eye-off'
                                            "
                                            class="ml-8"
                                            v-model="password"
                                            @click:append="
                                                showPassword = !showPassword
                                            "
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col :cols="isMobile ? 12 : 'auto'">
                                        <router-link to="/">
                                            Forget your password?</router-link
                                        >
                                    </v-col>
                                    <v-col>
                                        <v-btn
                                            :block="isMobile"
                                            style="float: right"
                                            color="primary"
                                            @click.prevent="login"
                                            >login</v-btn
                                        >
                                    </v-col>
                                </v-row>
                                <v-row
                                    justify="center"
                                    align="center"
                                    style="text-align: center;"
                                >
                                    <v-col>
                                        <router-link :to="{ name: 'register' }">
                                            Don't have an account? make
                                            one</router-link
                                        >
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Login',
    middleware: 'guest',
    data() {
        return {
            email: '',
            password: '',
            showPassword: false
        }
    },
    computed: {
        ...mapGetters('global', ['isMobile'])
    },
    methods: {
        login() {
            axios
                .post('/api/auth/login', {
                    email: this.email,
                    password: this.password
                })
                .then(res => {
                    const { data } = res
                    alert('welcome' + data.user.f_name)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style scoped>
.ppt-3 {
    padding-top: 38px;
}
.ml-30 {
    margin-left: 30px;
}
</style>
