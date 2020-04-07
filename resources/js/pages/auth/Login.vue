<template>
    <v-container>
        <v-row justify="center">
            <v-col :cols="!isMobile ? 8 : 12">
                <v-card>
                    <v-card-title class="bg-primary">Login</v-card-title>
                    <v-card-text class="">
                        <ValidationObserver
                            v-slot="{ invalid, handleSubmit }"
                            ref="form"
                        >
                            <v-form>
                                <v-container class="pl-0 pr-0">
                                    <v-row>
                                        <v-col>
                                            <ValidationProvider
                                                v-slot="{ errors }"
                                                name="Email"
                                                rules="required|email"
                                                ref="vEmail"
                                            >
                                                <v-text-field
                                                    type="email"
                                                    label="E-mail"
                                                    title="email"
                                                    :error-messages="errors"
                                                    prepend-icon="mdi-email"
                                                    v-model="form.email"
                                                    required
                                                ></v-text-field>
                                            </ValidationProvider>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <ValidationProvider
                                                v-slot="{ errors }"
                                                name="Password"
                                                rules="required"
                                            >
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
                                                    prepend-icon="mdi-key-outline"
                                                    :error-messages="errors"
                                                    v-model="form.password"
                                                    @click:append="
                                                        showPassword = !showPassword
                                                    "
                                                ></v-text-field>
                                            </ValidationProvider>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="end">
                                        <v-col cols="auto">
                                            <v-switch
                                                v-model="remember"
                                                label="Remember me?"
                                                dir="ltr"
                                            ></v-switch>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col :cols="isMobile ? 12 : 'auto'">
                                            <router-link to="/">
                                                Forget your
                                                password?</router-link
                                            >
                                        </v-col>
                                        <v-col>
                                            <v-btn
                                                :disabled="
                                                    invalid && !firstTime
                                                "
                                                :block="isMobile"
                                                style="float: right"
                                                color="primary"
                                                @click.prevent="
                                                    handleSubmit(login)
                                                "
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
                                            <router-link
                                                :to="{ name: 'register' }"
                                            >
                                                Don't have an account? make
                                                one</router-link
                                            >
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </ValidationObserver>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-snackbar
            :color="form.successful ? '#0c3' : '#c03'"
            v-model="snackbar"
            :timeout="6000"
            buttom
            :multi-line="isMobile"
            :right="!isMobile"
        >
            {{ snackbarMessage }}
            <v-btn dark text @click="snackbar = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
import Form from 'vform'
import { mapGetters, mapActions } from 'vuex'
import { required, email, min } from 'vee-validate/dist/rules'
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'

extend('required', {
    ...required,
    message: "{_field_} can't be empty!"
})

extend('email', {
    ...email,
    message: 'Please enter a valid email address'
})

export default {
    name: 'Login',
    middleware: 'guest',
    data() {
        return {
            form: new Form({
                email: '',
                password: ''
            }),
            showPassword: false,
            snackbarMessage: '',
            snackbar: false,
            remember: false,
            firstTime: true
        }
    },
    computed: {
        ...mapGetters('global', ['isMobile']),
        ...mapGetters('auth', ['user'])
    },
    methods: {
        async login() {
            this.firstTime = false
            this.snackbar = false
            try {
                const { data } = await this.form.post('/api/auth/login')

                this.saveToken({
                    token: data.token,
                    remember: this.remember
                })
                await this.fetchUser()
                console.log(this.user)
                if (this.user.user_type == 'Admin') {
                } else {
                    this.$router.push({ name: 'user.dashboard' })
                }
                this.snackbarMessage = 'Welcome back ' + data.user.f_name
                this.snackbar = true
            } catch (err) {
                this.snackbarMessage = 'Looks like your data is not correct!'
                this.snackbar = true
                this.form.email = ''
                this.form.password = ''
                this.$refs.form.reset()

                console.log(err)
            }
        },
        ...mapActions('auth', ['saveToken', 'fetchUser'])
    },
    components: {
        ValidationProvider,
        ValidationObserver
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
