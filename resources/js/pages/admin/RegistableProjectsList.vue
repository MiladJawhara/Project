<template>
    <v-container class="p-0">
        <v-row>
            <v-col>
                <data-list
                    :items="registableProjects"
                    :dataToList="[
                        'title',
                        'department',
                        'year',
                        'minGM',
                        'maxGM'
                    ]"
                    newItemBtnLable="Create Registable Project"
                    maxDialogsWidth="800px"
                    itemHasDetails
                    itemEditable
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

                    <template v-slot:editDialog="{ item }">
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
                                                    @change="rangeChanged(item)"
                                                ></v-range-slider>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-form>
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
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'admin-projects-registableProjects',

    created() {
        this.request('all').then(() => {
            this.registableProjects = this.getAll('registableProjects').map(
                item => {
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
                        maxGM: item.groups_setting.max_group_members_count
                    }
                }
            )
        })
    },
    data() {
        return {
            registableProjects: []
        }
    },
    methods: {
        ...mapActions('data', ['request']),
        rangeChanged(item) {
            item.minGM = item.range[0]
            item.maxGM = item.range[1]
        }
    },
    computed: {
        ...mapGetters('data', ['getListOf', 'getBy', 'getAll'])
    },
    components: {
        DataList
    }
}
</script>

<style lang="scss" scoped></style>
