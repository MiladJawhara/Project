<template>
    <div>
        <nav-bar />
        <user-layout>
            <template v-slot:main>
                <router-view></router-view>
            </template>
            <template v-slot:side>
                <v-container>
                    <v-row>
                        <v-col cols="6" md="12">
                            <tree-view title="My Groups"></tree-view>
                        </v-col>
                        <v-col cols="6" md="12">
                            <tree-view title="My Projects"></tree-view>
                        </v-col>
                    </v-row>
                </v-container>
            </template>
        </user-layout>
    </div>
</template>

<script>
import NavBar from '../../components/User/NavBar'
import TreeView from '../../components/gloabal/TreeView'
import UserLayout from '../../components/layouts/UserLayout'
export default {
    middleware: '',
    components: {
        NavBar,
        UserLayout,
        TreeView
    }
}
</script>

<style lang="scss" scoped></style>
