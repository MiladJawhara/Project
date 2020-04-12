<template>
    <div>
        <nav-bar :pLinks="links"></nav-bar>

        <v-container class="">
            <v-row>
                <v-col>
                    <v-card v-if="getTitle !== ''">
                        <transition name="fade">
                            <v-card-title class="bg-primary">
                                {{ getTitle }}
                            </v-card-title>
                        </transition>
                        <v-card-text>
                            <transition name="fade">
                                <router-view></router-view>
                            </transition>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from '../../components/Admin/NavBar'
export default {
    name: 'admin',
    middleware: '',
    components: {
        NavBar
    },
    data() {
        return {
            links: [
                {
                    title: 'Dashboard',
                    data: 'admin.dashboard'
                },
                {
                    title: 'Projects',
                    data: [
                        {
                            title: 'Registable Projects List',
                            data: 'admin.projects.registableProjectsList'
                        }
                    ]
                },
                {
                    title: 'Departemnts',
                    data: [
                        {
                            title: 'Departemnts List',
                            data: 'admin.departments.list'
                        }
                    ]
                }
            ]
        }
    },

    computed: {
        getTitle() {
            let name = this.$route.name

            for (const link in this.links) {
                if (this.links.hasOwnProperty(link)) {
                    const element = this.links[link]

                    if (element.data instanceof Array) {
                        for (const subLink in element.data) {
                            if (element.data.hasOwnProperty(subLink)) {
                                const subElement = element.data[subLink]
                                if (subElement.data == name) {
                                    return `${element.title}:\n ${subElement.title}`
                                }
                            }
                        }
                    } else {
                        if (element.data == name) {
                            return element.title
                        }
                    }
                }
            }

            return ''
        },

        ...mapGetters('global', ['isMobile'])
    }
}
</script>

<style lang="scss" scoped></style>
