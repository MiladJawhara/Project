<template>
    <div class="pt-2 m-0  border-bottom w-100">
        <v-list-item class="d-inline w-100" link>
            {{ item[mainDataToShow] }}</v-list-item
        >

        <template v-if="!isMobile">
            <v-icon
                @click="handleDelete(item.id)"
                v-if="deleteable"
                color="red"
                class="item-icon"
                >mdi-close</v-icon
            >
            <v-icon
                @click="handleEdeit(item.id)"
                v-if="editeable"
                class="item-icon"
                >mdi-pen</v-icon
            >
            <v-icon
                @click="handleShow(item.id)"
                v-if="detials"
                color="blue"
                class="item-icon"
                >mdi-eye</v-icon
            >
        </template>
        <template v-else>
            <v-icon class="item-icon">mdi-menu</v-icon>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        item: {
            type: Object,
            require: true
        },
        mainDataToShow: {
            type: String,
            default: 'title'
        },
        editeable: {
            type: Boolean
        },
        detials: {
            type: Boolean
        },
        deleteable: {
            type: Boolean
        }
    },
    computed: {
        ...mapGetters('global', ['isMobile'])
    },
    methods: {
        handleDelete(id) {
            this.$emit('delete', id)
        },
        handleEdeit(id) {
            this.$emit('edite', id)
        },
        handleShow(id) {
            this.$emit('show', id)
        }
    }
}
</script>

<style lang="scss" scoped>
.item-icon {
    float: inline-end;
}
.new-item-btn {
    text-align: start;
}
</style>
