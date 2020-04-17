<template>
    <v-card :to="to ? to : null" class="$class m-card">
        <v-card-title :style="`background-color:${color}`" class="text-white">
            {{ title }}:<v-spacer></v-spacer>
            <v-chip color="white">{{ amount }}</v-chip>
        </v-card-title>
    </v-card>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        amount: {
            type: [Number, String],
            required: true
        },
        color: {
            type: String,
            default: '#1976d2'
        },
        to: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
.m-card {
    text-decoration: none;
}
</style>
