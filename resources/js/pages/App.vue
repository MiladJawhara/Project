<template>
    <v-app>
        <!-- NavBar -->
        <!-- <nav-bar /> -->
        <!-- NavBar -->

        <v-content>
            <side-bar>
                <v-list-item :to="{ name: 'login' }">
                    <v-list-item-content>Login</v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'register' }">
                    <v-list-item-content>Register</v-list-item-content>
                </v-list-item>
            </side-bar>
            <v-container class="p-0">
                <v-row>
                    <!-- main -->
                    <v-col>
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </v-col>
                    <!-- main -->
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'
import Cookie from 'js-cookie'
export default {
    name: 'App',

    created() {
        window.addEventListener('resize', this.handleResize)
        this.$store.commit('global/SET_SCREEN_WIDTH')
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    components: {
        SideBar,
        NavBar
    },

    data: () => ({
        showSideBar: false
    }),
    computed: {
        ...mapGetters('global', ['isMobile'])
    },
    methods: {
        handleResize() {
            this.$store.commit('global/SET_SCREEN_WIDTH')
        }
    }
}
</script>

<style>
.bg-primary {
    background-color: #1976d2;
    color: azure;
}
.bg-proto {
    background-color: #c97414;
    color: azure;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
