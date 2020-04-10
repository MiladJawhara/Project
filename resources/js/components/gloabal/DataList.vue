<template>
    <v-data-table :headers="headers" :items="items" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-spacer></v-spacer>

                <v-dialog v-model="detialsDialog" :max-width="maxDialogsWidth">
                    <v-card>
                        <slot name="detialsDialog" :item="selectedItem"></slot>
                        <v-card-actions>
                            <slot
                                name="detialsDialog.actions"
                                :item="selectedItem"
                            ></slot>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="editDialog" :max-width="maxDialogsWidth">
                    <v-card>
                        <slot name="editDialog" :item="selectedItem"></slot>
                        <v-card-actions>
                            <slot
                                name="editDialog.actions"
                                :item="selectedItem"
                            ></slot>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="showItem(item)">
                mdi-eye
            </v-icon>
            <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
            </v-icon>
            <v-icon small color="red" @click="deleteItem(item)">
                mdi-delete
            </v-icon>
        </template>
        <template v-slot:no-data>
            <h3>No Data Found!</h3>
        </template>
    </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props: {
        items: {
            type: Array
        },
        dataToList: {
            type: Array
        },
        newItemBtnLable: {
            type: String,
            default: 'New Item'
        },
        maxDialogsWidth: {
            type: String,
            default: '500px'
        }
    },
    created() {
        this.headers = this.dataToList.map((data, i) => {
            let res = {
                text: data,
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

        this.headers.push({
            text: 'Actions',
            value: 'actions',
            align: 'end',
            sortable: false
        })
    },
    data() {
        return {
            headers: [],
            detialsDialog: false,
            editDialog: false,
            selectedItem: null
        }
    },
    methods: {
        editItem(item) {
            this.selectedItem = item
            this.editDialog = true
        },
        deleteItem(item) {
            this.selectedItem = item
        },
        showItem(item) {
            this.selectedItem = item
            this.detialsDialog = true
        }
    },
    components: {},
    computed: {
        ...mapGetters('global', ['isMobile'])
    }
}
</script>

<style lang="scss" scoped></style>
