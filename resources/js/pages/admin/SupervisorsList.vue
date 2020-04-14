<template>
    <v-container>
        <v-row>
            <v-col>
                <data-list
                    :items="items"
                    :dataToList="['First_Name', 'Last_Name', 'Private_Email','National_Number','Dept']"
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
                                                :items="
                                                    getListOf(
                                                        'title',
                                                        'departments'
                                                    )
                                                "
                                                v-model="newSupervisor.super"
                                                label="Dept"
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
                                                v-model="newSupervisor.password"
                                                 @click:append="
                                                        showPassword = !showPassword
                                                    "
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                 :type="
                                                        showPasswordConfirm
                                                            ? 'text'
                                                            : 'password'
                                                    "
                                                    label="Confirm Password"
                                                    title="Confirm password"
                                                    :append-icon="
                                                        !showPasswordConfirm
                                                            ? 'mdi-eye'
                                                            : 'mdi-eye-off'
                                                    "

                                                    prepend-icon="mdi-key-outline"
                                                    v-model="newSupervisor.password_confirmation"
                                                    @click:append="
                                                        showPasswordConfirm = !showPasswordConfirm
                                                    "
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
    requiredData: ['departments', 'supervisors'],
        data()
        {
         return {
            newSupervisor: {},
            showPassword: false,
            showPasswordConfirm: false
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
                department_id: this.getBy(
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
            
                const { getBy, getAll } = this
                return getAll('supervisors').map(sup => {
                    return {
                        ...sup,
                        Dept: sup.deptartment_id.
                             getBy(
                                  'title',
                                  'departments',
                                  'id',
                                  sup.department_id
                              ),
                         First_Name: sup.f_name,
                         Last_Name:sup.l_name,
                         National_number:sup.national_id,
                         Private_Email: sup.email    
                    
                } 
         })
        }
    }

}
</script>