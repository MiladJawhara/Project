<template>
    <v-container>
        <v-row justify="center">
            <v-col :cols="!isMobile ? 8 : 12">
                <v-card>
                    <v-card-title class="bg-primary"
                        >General Settings</v-card-title
                    >
                    <v-card-text>
                        <v-form>
                            <v-container class="pl-0 pr-0">
                                <v-row>
                                    <v-col>
                                        <v-select
                                            prepend-icon="mdi-account-cog-outline"
                                            label="Year"
                                            dense
                                            :items="yearsOfStudy"
                                            v-model="form.Year"
                                        >
                                        </v-select>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-select
                                            prepend-icon="mdi-account-cog-outline"
                                            label="Dept"
                                            dense
                                            :items="departments"
                                            v-model="form.Dept"
                                        >
                                        </v-select>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-select
                                            prepend-icon="mdi-account-cog-outline"
                                            label="#students per group"
                                            dense
                                            :items="num"
                                            v-model="form.Num"
                                        >
                                        </v-select>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            type="text"
                                            label="New Dept"
                                            title="Add New Dept"
                                            prepend-icon="mdi-id-card"
                                            v-model="form.new_dept"
                                        ></v-text-field>
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
    name: 'admin-settings',
    data() {
        return {
            form: new Form({
                department: 'none',
                year: 'first year',
                numberOfStudents: 0
            }),
            yearsOfStudy: [
                'first year',
                'second year',
                'third year',
                'forth year',
                'fifth year'
            ],
            departments: ['none', 1, 2, 3, 4],
            num: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    },
    computed: {
        selectedYear() {
            return this.form.Year
        },
        selectedDept() {
            return this.form.Dept
        },
        selectedNumber() {
            return this.form.Num
        },
        ...mapGetters('global', ['isMobile'])
    }
}
</script>

<style lang="scss" scoped></style>
