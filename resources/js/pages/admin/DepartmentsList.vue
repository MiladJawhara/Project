<template>
    <v-container>
        <v-row>
            <v-col>
                <data-list
                    :items="items"
                    :dataTitles="['Title', 'Manager']"
                    :dataToList="['title', 'manager']"
                    itemDeleteable
                    itemEditable
                    newItemBtnLable="Create New Department"
                    maxDialogsWidth="800px"
                    @deleteItem="deleteDepartment"
                    deleteConfirmMsg="Are you sure you want to delete this Departmente? any thing is depending on this will be delete too!!!!"
                >
                    <!-- New Department Dialog -->

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

                    <!-- New Department Dialog -->

                    <!-- Edite Department Dialog -->

                    <template v-slot:editDialog="{ item, close }">
                        <template v-if="item">
                            <v-card-title class="primary text-white">
                                Edite Department
                            </v-card-title>

                            <v-card-text>
                                <v-form>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="6">
                                                <v-text-field
                                                    label="Title"
                                                    type="text"
                                                    v-model="item.title"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <v-select
                                                    :items="
                                                        getListOf(
                                                            'f_name',
                                                            'supervisors'
                                                        )
                                                    "
                                                    v-model="item.manager"
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
                                    @click="updateDepartment(item, close)"
                                    >Save</v-btn
                                >
                            </v-card-actions>
                        </template>
                    </template>
                </data-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Form from 'vform'
import DataList from '../../components/gloabal/DataList'
import { mapActions, mapGetters } from 'vuex'
export default {
    requiredData: ['departments', 'supervisors'],
    created() {},
    data() {
        return {
            newDepartment: {}
        }
    },
    components: {
        DataList
    },
    methods: {
        ...mapActions('data', [
            'request',
            'addNewItemTo',
            'deleteItemBy',
            'updateItemBy'
        ]),
        async createNewDepartment(close) {
            close()
            const { data } = await new Form({
                title: this.newDepartment.title,
                dept_manager_id: this.getBy(
                    'id',
                    'supervisors',
                    'f_name',
                    this.newDepartment.super
                )
            }).post(`/api/departments`)

            this.newDepartment = {}
            this.addNewItemTo({
                what: 'departments',
                item: data
            })
        },
        async updateDepartment(item, close) {
            close()
            const { data } = await new Form({
                title: item.title,
                dept_manager_id: this.getBy(
                    'id',
                    'supervisors',
                    'f_name',
                    item.manager
                )
            }).put(`/api/departments/${item.id}`)

            this.updateItemBy({
                from: 'departments',
                by: 'id',
                value: item.id,
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
        }
    }
}
</script>

<style lang="scss" scoped></style>
