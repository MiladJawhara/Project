<template>
    <v-container>
        <v-row>
            <v-col>
                <data-list
                    :items="items"
                    :dataToList="['f_name', 'l_name', 'email','national_id','dept']"
                    itemDeleteable
                    itemEditable
                    newItemBtnLable="Create New Supervisor"
                    maxDialogsWidth="800px"
                    @deleteItem="deleteSupervisor"
                >
                    <template v-slot:newItemDialog="{ close }">
                        <v-card-title class="primary text-white">
                            Create New Supervisor
                        </v-card-title>

                        <v-card-text>
                            <v-form>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="First Name"
                                                type="text"
                                                v-model="newSupervisor.f_name"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="Last Name"
                                                type="text"
                                                v-model="newSupervisor.l_name"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-select
                                                v-if="dataLoaded"
                                                :items="
                                                    getListOf(
                                                        'title',
                                                        'departments'
                                                    )
                                                "
                                                v-model="newSupervisor.super"
                                                label="dept"
                                            >
                                            </v-select>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="Email"
                                                type="text"
                                                v-model="newSupervisor.email"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="password"
                                                type="text"
                                                v-model="newSupervisor.password"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="Confirm Password"
                                                type="text"
                                            ></v-text-field>
                                        </v-col>  
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="National Id"
                                                type="text"
                                                v-model="newSupervisor.national_id"
                                            ></v-text-field>
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
                                @click="createNewSupervisor(close)"
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
import Form from 'vform'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'admin-supervisors-supervisorsList',
        created() {
        this.request('supervisors').then(() => {
            this.dataLoaded = true
        })},
        data()
        {
         return {
            dataLoaded: false,
            newSupervisor: {}
                }
        },
        components: {
        DataList
        },
         methods: {
        ...mapActions('data', ['request', 'addNewItemTo', 'deleteItemBy']),
        async createNewSupervisor(close) {
            close()
            const { data } = await axios.post('/api/supervisors', {
                f_name: this.newSupervisor.f_name,
                l_name: this.newSupervisor.l_name,
                email: this.newSupervisor.email,
                national_id: this.newSupervisor.national_id,
                password: this.newSupervisor.password,
                supervisor_dept_id: this.getBy(
                    'id',
                    'departemnts',
                    'title',
                    this.newSupervisor.super
                )
            })

            this.addNewItemTo({
                what: 'supervisors',
                item: data
            })

            },
            async deleteSupervisor(sup) {
            await axios.delete(`/api/supervisors/${sup.id}`)

            this.deleteItemBy({ from: 'supervisors', by: 'id', value: sup.id })
        }
        },
        computed: {
        ...mapGetters('data', ['getAll', 'getListOf', 'getBy']),
        items() {
            if (this.dataLoaded) {
                const { getBy, getAll } = this
                return getAll('departments').map(dept => {
                    return {
                        ...sup,
                        dept: sup.supervisor_dept_id
                            ? getBy(
                                  'title',
                                  'departments',
                                  'id',
                                  sup.supervisor_dept_id
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