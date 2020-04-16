<template>
    <v-container>
        <v-row>
            <v-col>
                <data-list
                    :items="items"
                    :dataTitles="[
                      'First Name',
                      'Last Name',
                      'Department']"
                    :dataToList="[
                        'f_name',
                        'l_name',
                        'Dept'
                    ]"
                    itemEditable
                    itemDeleteable
                    itemHasDetails
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
                                                v-model="newSupervisor.Dept"
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
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                "
                                                label="Confirm Password"
                                                title="Confirm password"

                                                prepend-icon="mdi-key-outline"
                                                v-model="
                                                    newSupervisor.password_confirmation
                                                "
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field
                                                label="National Number"
                                                type="text"
                                                v-model="
                                                    newSupervisor.national_id
                                                "
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
                    <template v-slot:detailsDialog="{ item }">
                        <template v-if="item">
                            <v-card-title class="primary text-white">
                                {{ item.f_name }}'s Detials
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col>
                                            <v-list>
                                                <v-list-item>
                                                    <v-list-item-avatar
                                                        width="100px"
                                                        height="100px"
                                                    >
                                                        <v-img
                                                            class="border rounded-circle"
                                                            lazy-src="https://randomuser.me/api/portraits/men/81.jpg"
                                                            :alt="
                                                                item.f_name +
                                                                    'img'
                                                            "
                                                            src="https://randomuser.me/api/portraits/men/81.jpg"
                                                        >
                                                        </v-img>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        <v-list-item-title
                                                            :title="
                                                                `Go to ${item.f_name}'s profile`
                                                            "
                                                        >
                                                            {{
                                                                item.f_name +
                                                                    ' ' +
                                                                    item.l_name
                                                            }}
                                                        </v-list-item-title>

                                                        <v-list-item-subtitle>{{
                                                            item.user_type
                                                        }}</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                    </v-row>

                                   <v-row>
                                        <v-col>
                                            <v-list>
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>
                                                            <v-label
                                                                class="text-bold"
                                                            >
                                                                National Number:
                                                            </v-label>
                                                            {{ item.national_id }}
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-title>
                                                        <v-label>
                                                            Private Email:
                                                        </v-label>
                                                        {{ item.email }}
                                                    </v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>  
                        </template>
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
    data() {
        return {
            newSupervisor: {},
            showPassword: false,
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
                password_confirmation: this.newSupervisor.password_confirmation,
                department_id: this.getBy(
                    'id',
                    'departments',
                    'title',
                    this.newSupervisor.Dept
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
        ...mapGetters('global', ['isMobile']),
        items() {
            const { getBy, getAll } = this
            return getAll('supervisors').map(sup => {
                return {
                    ...sup,
                    Dept: getBy(
                        'title',
                        'departments',
                        'id',
                        sup.department_id
                    ),
                    First_Name: sup.f_name,
                    Last_Name: sup.l_name,
                    National_number: sup.national_id,
                    Private_Email: sup.email
                }
            })
        }
    }
}
</script>
