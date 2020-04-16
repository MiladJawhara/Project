<template>
    <v-container class=" m-0 p-0">
        <v-row justify="center" dense>
            <v-col class="m-0 p-0" cols="12" sm="8" md="6" v-if="searchable">
                <v-toolbar-items>
                    <v-text-field
                        class="m-0 p-0"
                        type="text"
                        label="Search"
                        dense
                        append-icon="mdi-magnify"
                        outlined
                        v-model="search"
                        height="20px"
                    ></v-text-field>
                </v-toolbar-items>
            </v-col>
            <v-col class="mt-0 p-0" cols="12">
                <v-data-table
                    :search="search"
                    :headers="headers"
                    :items="items"
                    class="elevation-2"
                >
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <v-spacer></v-spacer>

                            <v-dialog
                                v-if="itemHasDetails"
                                v-model="detailsDialog"
                                :max-width="maxDialogsWidth"
                            >
                                <v-card class="pb-2">
                                    <v-icon
                                        @click="closeDetailsDialog()"
                                        class="close-mark"
                                        >mdi-close</v-icon
                                    >
                                    <slot
                                        name="detailsDialog"
                                        :item="selectedItem"
                                        :close="closeDetailsDialog"
                                    ></slot>
                                </v-card>
                            </v-dialog>
                            <v-dialog
                                v-if="itemEditable"
                                v-model="editDialog"
                                :max-width="maxDialogsWidth"
                            >
                                <v-card class="pb-2">
                                    <v-icon
                                        @click="closeEditDialog()"
                                        class="close-mark"
                                        >mdi-close</v-icon
                                    >
                                    <slot
                                        name="editDialog"
                                        :item="selectedItem"
                                        :close="closeEditDialog"
                                    ></slot>
                                </v-card>
                            </v-dialog>

                            <v-dialog
                                v-if="newItemBtnLable"
                                v-model="newItemDialog"
                                :max-width="maxDialogsWidth"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" color="primary">
                                        <template v-if="!isMobile"
                                            >{{ newItemBtnLable }}
                                        </template>
                                        <template v-else>
                                            <v-icon>mdi-plus</v-icon>
                                        </template>
                                    </v-btn>
                                </template>
                                <v-card class="pb-2">
                                    <v-icon
                                        @click="closeNewItemDialog()"
                                        class="close-mark"
                                        >mdi-close</v-icon
                                    >
                                    <slot
                                        name="newItemDialog"
                                        :close="closeNewItemDialog"
                                    ></slot>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template
                        v-if="itemManagable"
                        v-slot:item.actions="{ item }"
                    >
                        <v-icon
                            v-if="itemHasDetails"
                            small
                            class="mr-2"
                            @click="showItem(item)"
                        >
                            mdi-eye
                        </v-icon>
                        <v-icon
                            v-if="itemEditable"
                            small
                            class="mr-2"
                            @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            v-if="itemDeleteable"
                            small
                            color="red"
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:no-data>
                        <h3>No Data Found!</h3>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props: {
        items: {
            type: Array,
            require: true
        },
        dataToList: {
            type: Array,
            require: true
        },
        dataTitles: {
            type: Array
        },
        newItemBtnLable: {
            type: String
        },
        maxDialogsWidth: {
            type: String,
            default: '500px'
        },
        itemDeleteable: {
            type: Boolean
        },
        itemEditable: {
            type: Boolean
        },
        itemHasDetails: {
            type: Boolean
        },
        deleteConfirmMsg: {
            type: String,
            default: 'Are you sure you want to delete?'
        },
        searchable: {
            type: Boolean
        }
    },
    created() {
        if (this.dataToList) {
            this.headers = this.dataToList.map((data, i) => {
                let res = {
                    text: this.dataTitles
                        ? this.dataTitles[i]
                            ? this.dataTitles[i]
                            : data
                        : data,
                    value: data
                }
                if (i == 0) {
                    res = {
                        ...res,
                        align: 'start'
                    }
                }
                return res
            })

            if (this.itemManagable) {
                this.headers.push({
                    text: 'Actions',
                    value: 'actions',
                    align: 'end',
                    sortable: false
                })
            }
        }
    },
    data() {
        return {
            headers: [],
            detailsDialog: false,
            editDialog: false,
            newItemDialog: false,
            selectedItem: null,
            currentDialog: 'newItemDialog',
            search: ''
        }
    },
    methods: {
        editItem(item) {
            this.selectedItem = { ...item }
            this.editDialog = true
        },
        deleteItem(item) {
            const answer = confirm(this.deleteConfirmMsg)
            if (answer) {
                this.selectedItem = { ...item }
                this.$emit('deleteItem', item)
            }
        },
        showItem(item) {
            this.selectedItem = { ...item }
            this.detailsDialog = true
        },
        closeNewItemDialog() {
            this.newItemDialog = false
        },
        closeEditDialog() {
            this.editDialog = false
        },
        closeDetailsDialog() {
            this.detailsDialog = false
        }
    },
    components: {},
    computed: {
        ...mapGetters('global', ['isMobile']),
        itemManagable() {
            return (
                this.itemDeleteable || this.itemEditable || this.itemHasDetails
            )
        }
    }
}
</script>

<style lang="scss" scoped>
.close-mark {
    position: absolute;
    right: 10px;
    top: 10px;
    color: wheat;
}
</style>
