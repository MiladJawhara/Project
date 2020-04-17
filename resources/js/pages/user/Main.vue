<template>
    <div>
        <nav-bar />
        <user-layout>
            <template v-slot:main>
                <v-card width="100%" elevation="5" color="#f3f3f3">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </v-card>
            </template>
            <template v-slot:side>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="12">
                            <tree-view title="My Groups"></tree-view>
                        </v-col>
                        <v-col cols="12" sm="6" md="12">
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
