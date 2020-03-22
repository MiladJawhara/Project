<template>
    <v-container>
        <v-row justify="center">
            <v-col :cols="!isMobile ? 8 : 12">
                <v-card>
                    <v-card-title class="bg-primary"
                        >Create New Account</v-card-title
                    >
                    <v-card-text>
                        <v-form>
                            <v-container class="pl-0 pr-0">
                                <v-row>
                                    <v-col>
                                        <v-select
                                            label="Account Type"
                                            dense
                                            :items="accountTypes"
                                            v-model="form.accountType"
                                        >
                                        </v-select>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            type="text"
                                            label="First Name"
                                            title="Your First Name"
                                            prepend-icon="mdi-card-text-outline"
                                            v-model="form.f_name"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            type="text"
                                            label="Last Name"
                                            title="Your Last Name"
                                            prepend-icon="mdi-card-text-outline"
                                            v-model="form.l_name"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            type="email"
                                            label="E-mail"
                                            title="Your Email Address"
                                            prepend-icon="mdi-email"
                                            v-model="form.email"
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
                                            title="Enter New Password"
                                            prepend-icon="mdi-key-outline"
                                            :append-icon="
                                                !showPassword
                                                    ? 'mdi-eye'
                                                    : 'mdi-eye-off'
                                            "
                                            v-model="form.password"
                                            @click:append="
                                                showPassword = !showPassword
                                            "
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
                                            label="Confirm Password"
                                            title="Confirm The Password You Have Entered!"
                                            prepend-icon="mdi-key-plus"
                                            :append-icon="
                                                !showPassword
                                                    ? 'mdi-eye'
                                                    : 'mdi-eye-off'
                                            "
                                            v-model="form.password_confirmation"
                                            @click:append="
                                                showPassword = !showPassword
                                            "
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            type="text"
                                            label="National ID"
                                            title="Your National ID"
                                            prepend-icon="mdi-id-card"
                                            v-model="form.national_id"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col :cols="isMobile ? 12 : 'auto'">
                                        <router-link :to="{ name: 'login' }"
                                            >have an account already?
                                            login</router-link
                                        >
                                    </v-col>
                                    <v-col>
                                        <v-btn
                                            :block="isMobile"
                                            style="float: right"
                                            color="primary"
                                            @click.prevent="createNewAccount"
                                            >Create</v-btn
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
import Form from 'vform'
import { mapGetters } from 'vuex'
export default {
    name: 'Register',
    middleware: 'guest',
    data() {
        return {
            form: new Form({
                accountType: '',
                email: '',
                password: ''
            }),
            showPassword: false,
            accountTypes: ['Student', 'Supervaisor']
        }
    },
    computed: {
        ...mapGetters('global', ['isMobile'])
    }
}
</script>

<style lang="scss" scoped></style>
