<template>
    <v-app-bar style="z-index:999999" app color="primary" dark>
        <v-list>
            <v-list-item>Login</v-list-item>
            <v-list-item>Register</v-list-item>
        </v-list>
        <h3>PMP</h3>
    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        value: {}
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            authenticated: 'auth/check'
        })
    },
    watch: {},
    methods: {}
}
</script>

<style lang="scss" scoped>
* {
    color: azure;
}
</style>
