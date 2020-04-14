<template>
    <v-container>
        <v-row>
            <v-col>
                <data-list
                    :items="items"
                    :dataToList="['title', 'manager']"
                    itemDeleteable
                    itemEditable
                    newItemBtnLable="Create New Department"
                    maxDialogsWidth="800px"
                    @deleteItem="deleteDepartment"
                    deleteConfirmMsg="Are you sure you want to delete this Departmente? any thing is depending on this will be delete too!!!!"
                >
                    <template v-slot:newItemDialog="{ close }">
                        <v-card-title class="primary text-white">
                            Create New Department
                        </v-card-title>

                        <v-card-text>
                            <v-form>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="Title"
                                                type="text"
                                                v-model="newDepartment.title"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-select
                                                v-if="dataLoaded"
                                                :items="
                                                    getListOf(
                                                        'f_name',
                                                        'supervisors'
                                                    )
                                                "
                                                v-model="newDepartment.super"
                                                label="Manager"
                                            >
                                            </v-select>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue"
                                text
                                @click="createNewDepartment(close)"
                                >Save</v-btn
                            >
                        </v-card-actions>
                    </template>
                </data-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import DataList from '../../components/gloabal/DataList'
import { mapActions, mapGetters } from 'vuex'
export default {
    created() {
        this.request({ what: ['departments', 'supervisors'] }).then(() => {
            this.dataLoaded = true
        })
    },
    data() {
        return {
            dataLoaded: false,
            newDepartment: {}
        }
    },
    components: {
        DataList
    },
    methods: {
        ...mapActions('data', ['request', 'addNewItemTo', 'deleteItemBy']),
        async createNewDepartment(close) {
            close()
            const { data } = await axios.post('/api/departments', {
                title: this.newDepartment.title,
                dept_manager_id: this.getBy(
                    'id',
                    'supervisors',
                    'f_name',
                    this.newDepartment.super
                )
            })

            this.addNewItemTo({
                what: 'departments',
                item: data
            })
        },
        async deleteDepartment(dept) {
            await axios.delete(`/api/departments/${dept.id}`)
            await this.request({ what: 'registableProjects', force: true })
            this.deleteItemBy({ from: 'departments', by: 'id', value: dept.id })
        }
    },
    computed: {
        ...mapGetters('data', ['getAll', 'getListOf', 'getBy']),
        items() {
            if (this.dataLoaded) {
                const { getBy, getAll } = this
                return getAll('departments').map(dept => {
                    return {
                        ...dept,
                        manager: dept.dept_manager_id
                            ? getBy(
                                  'f_name',
                                  'supervisors',
                                  'id',
                                  dept.dept_manager_id
                              )
                            : 'None'
                    }
                })
            } else {
                return []
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
