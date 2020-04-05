<template>
    <v-container class="p-0">
        <v-row justify="center">
            <v-col>
                <v-tabs v-model="deptsTab" grow background-color="#add8e6">
                    <v-tab
                        @change="changeDept(dept.id)"
                        v-for="dept in departments"
                        :key="dept.id"
                    >
                        {{ dept.name }}
                    </v-tab>
                </v-tabs>
            </v-col>
        </v-row>
        <v-row justify="start">
            <v-col cols="12" sm="8" md="4">
                <v-overflow-btn
                    @click:prepend="addNewYear()"
                    prepend-icon="mdi-plus"
                    class=""
                    @change="yearChanged()"
                    v-model="selectedYear"
                    :items="yearsList"
                    label="Year"
                    title="Select a year to manage settings"
                    dense
                ></v-overflow-btn>
            </v-col>
        </v-row>
        <v-row v-if="selectedYear !== null">
            <v-col>
                <v-form>
                    <v-container class="p-0">
                        <v-row>
                            <v-col cols="12" sm="8" md="4">
                                <label>Member Per Group:</label>
                            </v-col>
                            <v-col cols="12" sm="4" md="8">
                                <v-range-slider
                                    v-model="range"
                                    title="Set the min amd max allowed group member"
                                    min="1"
                                    max="7"
                                    thumb-label="always"
                                    :thumb-size="24"
                                >
                                </v-range-slider>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-dialog v-model="newYearDialog" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Create New Year Settings</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        label="Year Name"
                                        v-model="newYearName"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="8" md="4">
                                    <label>Member Per Group:</label>
                                </v-col>
                                <v-col cols="12" sm="4" md="8">
                                    <v-range-slider
                                        v-model="newYearRange"
                                        title="Set the min amd max allowed group member"
                                        min="1"
                                        max="7"
                                        thumb-label="always"
                                        :thumb-size="24"
                                    >
                                    </v-range-slider>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="newYearDialog = false"
                            >Close</v-btn
                        >
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="resolveNewYear()"
                            >Save</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
import Form from 'vform'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'admin-groupsGlobalSettings',

    created() {
        this.getDepartments().then(data => {
            this.departments = data
            this.changeDept(0)
        })
    },
    data() {
        return {
            deptsTab: null,
            selectedDept: 0,
            yearsList: [],
            selectedYear: null,
            range: [2, 4],
            departments: [],
            // dialogs
            newYearDialog: false,
            newYearName: '',
            newYearRange: [2, 4]
        }
    },
    methods: {
        ...mapActions('data', ['getDepartments']),
        changeDept(id) {
            this.selectedYear = null
            this.yearsList = []
            this.selectedDept = id
            this.yearsList = this.departments[id].settings.map(
                year => year.name
            )
        },
        yearChanged() {
            if (this.selectedYear !== null) {
                this.range = this.departments[this.selectedDept].settings.find(
                    year => year.name === this.selectedYear
                ).range
            }
        },
        addNewYear() {
            this.newYearDialog = true
        },
        resolveNewYear() {
            const { selectedDept } = this
            this.departments[selectedDept].settings.push({
                id: this.departments[selectedDept].settings.length,
                name: this.newYearName,
                range: this.newYearRange
            })
            const selectedYear = this.selectedYear
            this.changeDept(selectedDept)
            this.newYearDialog = false
            this.selectedYear = selectedYear
            this.yearChanged()
            this.newYearName = ''
            this.newYearRange = [2, 4]
        }
    },
    computed: {
        ...mapGetters('global', ['isMobile'])
    }
}
</script>

<style lang="scss" scoped></style>
