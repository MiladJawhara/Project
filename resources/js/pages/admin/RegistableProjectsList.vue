<template>
    <v-container class="p-0">
        <v-row>
            <v-col>
                <data-list
                    :items="listOfItems"
                    :dataToList="[
                        'title',
                        'open',
                        'department',
                        'year',
                        'minGM',
                        'maxGM'
                    ]"
                    newItemBtnLable="Create Registable Project"
                    maxDialogsWidth="800px"
                    itemHasDetails
                    itemEditable
                    itemDeleteable
                    @deleteItem="deleteItem"
                >
                    <template v-slot:detailsDialog="{ item }">
                        <template v-if="item">
                            <v-card-title class="primary text-white">
                                Project:&nbsp;
                                <span style="color: #22ff11">{{
                                    item.title
                                }}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-title>
                                            <v-icon>mdi-office-building</v-icon>
                                            Departmnet:&nbsp;
                                            <span style="color: #22ff11">
                                                {{ item.department }}
                                            </span>
                                        </v-list-item-title>
                                    </v-list-item>

                                    <v-list-item>
                                        <v-list-item-title
                                            >Year:&nbsp;
                                            {{ item.year }}</v-list-item-title
                                        >
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>
                                            Every Group has to consist of (
                                            {{ item.minGM }} -
                                            {{ item.maxGM }} ) Students
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title
                                            >Created:&nbsp;
                                            {{ item.created_at }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                        </template>
                    </template>

                    <template v-slot:editDialog="{ item, close }">
                        <template v-if="item">
                            <v-card-title class="primary text-white">
                                Project:&nbsp;
                                <span style="color: #22ff11">{{
                                    item.title
                                }}</span>
                            </v-card-title>
                            <v-card-text>
                                <v-form>
                                    <v-container>
                                        <v-row>
                                            <v-col>
                                                <v-text-field
                                                    type="text"
                                                    label="Title"
                                                    v-model="item.title"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" md="6">
                                                <v-select
                                                    :items="
                                                        getListOf(
                                                            'title',
                                                            'departments'
                                                        )
                                                    "
                                                    label="Department"
                                                    v-model="item.department"
                                                ></v-select>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <v-select
                                                    :items="
                                                        getListOf(
                                                            'title',
                                                            'years'
                                                        )
                                                    "
                                                    label="Year"
                                                    v-model="item.year"
                                                ></v-select>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="auto">
                                                <v-checkbox
                                                    v-model="item.is_open"
                                                    label="Set As Open"
                                                    dense
                                                >
                                                </v-checkbox>
                                            </v-col>
                                        </v-row>
                                        <v-divider></v-divider>
                                        <v-row>
                                            <v-col>
                                                <h3>Groups Settings</h3>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" md="4">
                                                <h5>Groups Members Range</h5>
                                            </v-col>
                                            <v-col cols="12" md="8">
                                                <v-range-slider
                                                    min="1"
                                                    max="7"
                                                    thumb-label="always"
                                                    thumb-size="20"
                                                    v-model="item.range"
                                                ></v-range-slider>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="blue"
                                    @click="
                                        updateRegistableProject(item, close)
                                    "
                                    >Save</v-btn
                                >
                            </v-card-actions>
                        </template>
                    </template>
                    <template v-slot:newItemDialog="{ close }">
                        <v-card-title class="primary text-white">
                            Create New Registable Project
                        </v-card-title>
                        <v-card-text>
                            <v-form>
                                <v-container>
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                type="text"
                                                label="Title"
                                                v-model="
                                                    newRegistableProject.title
                                                "
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-select
                                                :items="
                                                    getListOf(
                                                        'title',
                                                        'departments'
                                                    )
                                                "
                                                label="Department"
                                                v-model="
                                                    newRegistableProject.department
                                                "
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-select
                                                :items="
                                                    getListOf('title', 'years')
                                                "
                                                label="Year"
                                                v-model="
                                                    newRegistableProject.year
                                                "
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="auto">
                                            <v-checkbox
                                                v-model="
                                                    newRegistableProject.isOpen
                                                "
                                                label="Set As Open"
                                                dense
                                            >
                                            </v-checkbox>
                                        </v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col>
                                            <h3>Groups Settings</h3>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" md="4">
                                            <h5>Groups Members Range</h5>
                                        </v-col>
                                        <v-col cols="12" md="8">
                                            <v-range-slider
                                                min="1"
                                                max="7"
                                                thumb-label="always"
                                                thumb-size="20"
                                                v-model="
                                                    newRegistableProject.range
                                                "
                                            ></v-range-slider>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="blue"
                                @click="createNewRegistableProject(close)"
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
    name: 'admin-projects-registableProjects',

    created() {
        this.request('all')
    },
    data() {
        return {
            registableProjects: [],
            newRegistableProject: {
                range: [2, 4],
                isOpen: true
            }
        }
    },
    methods: {
        ...mapActions('data', [
            'request',
            'addNewItemTo',
            'deleteItemBy',
            'updateItemBy'
        ]),
        async updateRegistableProject(item, close) {
            const answer = confirm('Are you sure you want to save changes?')
            if (answer) {
                const { getBy } = this
                const form = new Form({
                    id: item.id,
                    department_id: getBy(
                        'id',
                        'departments',
                        'title',
                        item.department
                    ),
                    year_id: getBy('id', 'years', 'title', item.year),
                    is_open: item.is_open,
                    range: item.range,
                    title: item.title
                })

                close('editDialog')
                const { data } = await form.put('/api/putTest')

                this.updateItemBy({
                    from: 'registableProjects',
                    by: 'id',
                    value: item.id,
                    item: data
                })
            }
        },
        async createNewRegistableProject(close) {
            const { getBy } = this
            const form = new Form({
                department_id: getBy(
                    'id',
                    'departments',
                    'title',
                    this.newRegistableProject.department
                ),
                year_id: getBy(
                    'id',
                    'years',
                    'title',
                    this.newRegistableProject.year
                ),
                is_open: this.newRegistableProject.isOpen,
                range: this.newRegistableProject.range,
                title: this.newRegistableProject.title
            })
            close('newItemDialog')
            const res = await form.post('/api/postTest')
            this.addNewItemTo({
                what: 'registableProjects',
                item: res.data
            })

            //Make some kind of allert

            this.newRegistableProject = {
                range: [2, 4],
                isOpen: true
            }
        },
        async deleteItem(item) {
            axios
                .delete(`/api/deleteTest`, {
                    data: {
                        id: item.id
                    }
                })
                .then(res => {
                    console.log(res.data)
                    this.deleteItemBy({
                        from: 'registableProjects',
                        by: 'id',
                        value: item.id
                    })
                })
        }
    },
    computed: {
        ...mapGetters('data', ['getListOf', 'getBy', 'getAll']),
        listOfItems() {
            return this.getAll('registableProjects').map(item => {
                return {
                    ...item,
                    department: this.getBy(
                        'title',
                        'departments',
                        'id',
                        item.department_id
                    ),
                    year: this.getBy('title', 'years', 'id', item.year_id),
                    range: [
                        item.groups_setting.min_group_members_count,
                        item.groups_setting.max_group_members_count
                    ],
                    minGM: item.groups_setting.min_group_members_count,
                    maxGM: item.groups_setting.max_group_members_count,
                    open: item.is_open ? 'YES' : 'NO'
                }
            })
        }
    },
    components: {
        DataList
    }
}
</script>

<style lang="scss" scoped></style>
