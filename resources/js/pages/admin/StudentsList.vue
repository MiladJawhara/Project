<template>
    <v-container>
        <v-row>
            <v-col>
                <data-list
                    :items="items"
                    :dataTitles="[
                        'First Name',
                        'Last Name',
                        'Department',
                        'Verified'
                    ]"
                    :dataToList="['f_name', 'l_name', 'dept', 'emailVerified']"
                    itemEditable
                    itemDeleteable
                    itemHasDetails
                    searchable
                    maxDialogsWidth="650px"
                >
                    <template v-slot:detailsDialog="{ item, close }">
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
                                                            :lazy-src="
                                                                item.profile_img_url
                                                                    ? item.profile_img_url
                                                                    : `https://randomuser.me/api/portraits/men/81.jpg`
                                                            "
                                                            :alt="
                                                                item.f_name +
                                                                    'img'
                                                            "
                                                            :src="
                                                                item.profile_img_url
                                                                    ? item.profile_img_url
                                                                    : `https://randomuser.me/api/portraits/men/81.jpg`
                                                            "
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
                                                                Year Of Study:
                                                            </v-label>
                                                            {{ item.year }}
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-title>
                                                        <v-label>
                                                            Department:
                                                        </v-label>
                                                        {{ item.dept }}
                                                    </v-list-item-title>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-title>
                                                        <v-label>
                                                            Email:
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

                    <template v-slot:editDialog="{ item, close }">
                        <template v-if="item">
                            <v-card-title class="primary text-white">
                                Edit Student
                            </v-card-title>
                        </template>
                    </template>
                </data-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DataList from '../../components/gloabal/DataList'
export default {
    requiredData: ['students', 'departments', 'years'],
    computed: {
        ...mapGetters('data', ['getAll', 'getListOf', 'getBy']),
        items() {
            return this.getAll('students').map(student => {
                return {
                    ...student,
                    dept: this.getBy(
                        'title',
                        'departments',
                        'id',
                        student.department_id
                    ),
                    year: this.getBy('title', 'years', 'id', student.year_id),
                    emailVerified: student.email_verified_at ? 'Yes' : 'No'
                }
            })
        }
    },
    methods: {},
    components: {
        DataList
    }
}
</script>

<style lang="scss" scoped></style>
