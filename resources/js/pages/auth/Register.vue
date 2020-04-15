<template>
    <v-container>
        <v-row justify="center">
            <v-col :cols="!isMobile ? 8 : 12">
                <v-card>
                    <v-card-title class="bg-primary"
                        >Create New Account</v-card-title
                    >
                    <v-card-text>
                        <ValidationObserver
                            v-slot="{ invalid, handleSubmit }"
                            ref="form"
                        >
                            <v-form>
                                <v-container class="pl-0 pr-0">
                                    <v-row>
                                        <v-col>
                                            <ValidationProvider
                                                rules="required|alpha|minmax:2,15"
                                                name="First Name"
                                                v-slot="{ errors }"
                                            >
                                                <v-text-field
                                                    :error-messages="errors"
                                                    type="text"
                                                    label="First Name"
                                                    title="Your First Name"
                                                    prepend-icon="mdi-card-text-outline"
                                                    v-model="newAccount.f_name"
                                                ></v-text-field>
                                            </ValidationProvider>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <ValidationProvider
                                                rules="required|alpha|minmax:2,15"
                                                name="Last Name"
                                                v-slot="{ errors }"
                                            >
                                                <v-text-field
                                                    :error-messages="errors"
                                                    type="text"
                                                    label="Last Name"
                                                    title="Your Last Name"
                                                    prepend-icon="mdi-card-text-outline"
                                                    v-model="newAccount.l_name"
                                                ></v-text-field>
                                            </ValidationProvider>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <ValidationProvider
                                                rules="required|email"
                                                name="E-mail"
                                                v-slot="{ errors }"
                                            >
                                                <v-text-field
                                                    type="email"
                                                    :error-messages="errors"
                                                    label="E-mail"
                                                    title="Your Email Address"
                                                    prepend-icon="mdi-email"
                                                    v-model="newAccount.email"
                                                ></v-text-field>
                                            </ValidationProvider>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <ValidationProvider
                                                rules="required|min:8|alpha_dash|password:@Confirm"
                                                name="Password"
                                                v-slot="{ errors }"
                                            >
                                                <v-text-field
                                                    :error-messages="errors"
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
                                                    v-model="
                                                        newAccount.password
                                                    "
                                                    @click:append="
                                                        showPassword = !showPassword
                                                    "
                                                ></v-text-field>
                                            </ValidationProvider>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <ValidationProvider
                                                rules="required|alpha_dash"
                                                name="Confirm"
                                                v-slot="{ errors }"
                                            >
                                                <v-text-field
                                                    :error-messages="errors"
                                                    :type="
                                                        showPassword
                                                            ? 'text'
                                                            : 'password'
                                                    "
                                                    label="Confirm Password"
                                                    title="Confirm The Password You Have Entered!"
                                                    prepend-icon="mdi-key-plus"
                                                    v-model="
                                                        newAccount.password_confirmation
                                                    "
                                                    @click:append="
                                                        showPassword = !showPassword
                                                    "
                                                ></v-text-field>
                                            </ValidationProvider>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <ValidationProvider
                                                rules="required|digits:11"
                                                name="National ID"
                                                v-slot="{ errors }"
                                            >
                                                <v-text-field
                                                    :error-messages="errors"
                                                    type="text"
                                                    label="National ID"
                                                    title="Your National ID"
                                                    prepend-icon="mdi-id-card"
                                                    v-model="
                                                        newAccount.national_id
                                                    "
                                                ></v-text-field>
                                            </ValidationProvider>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <v-select
                                                prepend-icon="mdi-office-building"
                                                label="Department"
                                                dense
                                                :items="deptsTitleList"
                                                v-model="newAccount.department"
                                            >
                                            </v-select>
                                        </v-col>
                                    </v-row>

                                    <template>
                                        <v-row>
                                            <v-col>
                                                <ValidationProvider
                                                    rules="required"
                                                    name="Year Of Study"
                                                    v-slot="{ errors }"
                                                >
                                                    <v-select
                                                        prepend-icon="mdi-timetable"
                                                        label="Year Of Study"
                                                        :error-messages="errors"
                                                        dense
                                                        :items="yearTitleList"
                                                        v-model="
                                                            newAccount.year_of_study
                                                        "
                                                    >
                                                    </v-select>
                                                </ValidationProvider>
                                            </v-col>
                                        </v-row>

                                        <v-row>
                                            <v-col>
                                                <ValidationProvider
                                                    rules="required|numeric"
                                                    name="University ID"
                                                    v-slot="{ errors }"
                                                >
                                                    <v-text-field
                                                        :error-messages="errors"
                                                        type="text"
                                                        label="University ID"
                                                        title="Your University ID"
                                                        prepend-icon="mdi-id-card"
                                                        v-model="
                                                            newAccount.university_id
                                                        "
                                                    ></v-text-field>
                                                </ValidationProvider>
                                            </v-col>
                                        </v-row>
                                    </template>

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
                                                style="float: right;"
                                                color="primary"
                                                @click.prevent="
                                                    handleSubmit(
                                                        createNewAccount
                                                    )
                                                "
                                                :disabled="progressing"
                                            >
                                                <template v-if="progressing">
                                                    <v-progress-circular
                                                        color="wihte"
                                                        indeterminate
                                                    >
                                                    </v-progress-circular>
                                                </template>
                                                <template v-if="!progressing"
                                                    >Create</template
                                                >
                                            </v-btn>
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
            :color="createUserSuccess ? '#0c3' : '#c03'"
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
import axios from 'axios'
import Form from 'vform'
import { mapGetters, mapActions } from 'vuex'
import {
    required,
    email,
    min,
    alpha_dash,
    password,
    alpha,
    digits,
    numeric
} from 'vee-validate/dist/rules'
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'

extend('required', {
    ...required,
    message: "{_field_} can't be empty!"
})

extend('email', {
    ...email,
    message: 'Please enter a valid email address'
})
extend('min', {
    validate(value, { min }) {
        return value.length >= min
    },
    params: ['min'],
    message: 'The {_field_} field must have at least {min} characters '
})
extend('alpha_dash', {
    ...alpha_dash
})
extend('alpha', {
    ...alpha
})
extend('digits', {
    ...digits,
    message: 'The {_field_} field must consest of just {length} digits '
})
extend('numeric', {
    ...numeric,
    message: 'The {_field_}  field may only contain numeric characters'
})
extend('minmax', {
    validate(value, { min, max }) {
        return value.length >= min && value.length <= max
    },
    params: ['min', 'max'],
    message:
        'The {_field_} field must have at least {min} characters and {max} characters at most'
})
extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target
    },
    message: 'Password confirmation does not match'
})

export default {
    name: 'Register',
    middleware: 'guest',
    requiredData: ['years', 'departments'],
    created() {},
    mounted() {},
    data() {
        return {
            newAccount: {
                department: 'none'
            },
            showPassword: false,
            accountTypes: ['Student', 'Supervisor'],
            progressing: false,
            // snackbar
            snackbarMessage: '',
            createUserSuccess: false,
            snackbar: false
        }
    },
    watch: {},
    computed: {
        yearTitleList() {
            return this.getListOf('title', 'years')
        },
        deptsTitleList() {
            return this.getListOf('title', 'departments')
        },
        ...mapGetters('global', ['isMobile']),
        ...mapGetters('data', ['getListOf', 'getBy'])
    },
    methods: {
        async createNewAccount() {
            if (this.progressing) return
            this.progressing = true
            const form = new Form({
                ...this.newAccount,
                department_id: this.getBy(
                    'id',
                    'departments',
                    'title',
                    this.newAccount.department
                ),
                year_id: this.newAccount.year_of_study
                    ? this.getBy(
                          'id',
                          'years',
                          'title',
                          this.newAccount.year_of_study
                      )
                    : null
            })
            try {
                const { data } = await form.post('/api/auth/register')
                this.$router.push({ name: 'login' })
            } catch (err) {
                const errors = form.errors.errors
                this.createUserSuccess = false
                this.snackbarMessage = errors[Object.keys(errors)[0]][0]
                this.snackbar = true
            } finally {
                this.progressing = false
            }
        }
    },
    components: {
        ValidationProvider,
        ValidationObserver
    }
}
</script>

<style lang="scss" scoped></style>
