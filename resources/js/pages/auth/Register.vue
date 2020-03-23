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
                                            prepend-icon="mdi-account-cog-outline"
                                            label="Account Type"
                                            dense
                                            :items="accountTypes"
                                            v-model="form.user_type"
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
                                    <v-col>
                                        <v-select
                                            prepend-icon="mdi-office-building"
                                            label="Department"
                                            dense
                                            :items="departments"
                                            v-model="form.department"
                                        >
                                        </v-select>
                                    </v-col>
                                </v-row>

                                <template v-if="form.user_type == 'Student'">
                                    <v-row>
                                        <v-col>
                                            <v-select
                                                prepend-icon="mdi-timetable"
                                                label="Year Of Study"
                                                dense
                                                :items="yearsOfStudy"
                                                v-model="form.year_of_study"
                                            >
                                            </v-select>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                type="text"
                                                label="University ID"
                                                title="Your University ID"
                                                prepend-icon="mdi-id-card"
                                                v-model="form.university_id"
                                            ></v-text-field>
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
                                            style="float: right"
                                            color="primary"
                                            @click.prevent="createNewAccount"
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
                user_type: 'Student',
                department: 'none'
            }),
            showPassword: false,
            accountTypes: ['Student', 'Supervisor'],
            yearsOfStudy: ['first year', 'second year', 'theard year'],
            departments: ['none'],
            progressing: false
        }
    },
    watch: {
        selectedAccountType(value) {
            if (value == this.accountTypes[1]) {
                if (this.form.year_of_study !== undefined) {
                    delete this.form.year_of_study
                }

                if (this.form.university_id !== undefined) {
                    delete this.form.university_id
                }
            }
        }
    },
    computed: {
        selectedAccountType() {
            return this.form.user_type
        },
        ...mapGetters('global', ['isMobile'])
    },
    methods: {
        async createNewAccount() {
            if (this.progressing) return
            this.progressing = true
            try {
                const { data } = await this.form.post('/api/auth/register')
                console.log(data)
            } catch (err) {
            } finally {
                this.progressing = false
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
