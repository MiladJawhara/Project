<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="6" md="3">
                <small-numeric-info title="Students" :amount="numStudents"
            /></v-col>
            <v-col cols="12" sm="6" md="3"
                ><small-numeric-info
                    color="#008080"
                    title="Departments"
                    :amount="numDepartments"
                />
            </v-col>
            <v-col cols="12" sm="6" md="3"
                ><small-numeric-info
                    color="#5319d2"
                    title="Supervisors"
                    :amount="numSupervisors"
                />
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <small-numeric-info
                    color="#19afd2"
                    title="RegProjects"
                    :amount="numRegProjects"
            /></v-col>
        </v-row>
    </v-container>
</template>

<script>
import SmallNumericInfo from '../../components/gloabal/SmallNumericInfo'
import { mapGetters } from 'vuex'
import $ from 'jquery'
export default {
    name: 'admin-dashboard',
    requiredData: 'all',
    created() {
        console.log($('div'))
    },
    components: {
        SmallNumericInfo
    },
    computed: {
        ...mapGetters('data', ['getAll']),
        numStudents() {
            return this.getAll('students').length
        },
        numDepartments() {
            return this.getAll('departments').length
        },
        numSupervisors() {
            return this.getAll('supervisors').length
        },
        numRegProjects() {
            return this.getAll('registableProjects').length
        }
    }
}
</script>

<style lang="scss" scoped></style>
