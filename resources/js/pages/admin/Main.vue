<template>
    <div class="colored">
        <nav-bar :pLinks="links"></nav-bar>

        <v-container :class="isMobile ? 'p-0' : 'p-0'">
            <v-row justify="center">
                <v-col>
                    <v-card color="#f8f8f8" v-if="getTitle !== ''">
                        <transition name="slide-fade" mode="out-in">
                            <v-card-title v-text="getTitle" class="bg-primary">
                            </v-card-title>
                        </transition>
                        <v-card-text>
                            <transition name="slide-fade" mode="out-in">
                                <router-view />
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
                    title: 'Departments',
                    data: [
                        {
                            title: 'Departments List',
                            data: 'admin.departments.list'
                        }
                    ]
                },
                {
                    title: 'Users',
                    data: [
                        {
                            title: 'Supervisors List',
                            data: 'admin.supervisors.list'
                        },
                        {
                            title: 'Students List',
                            data: 'admin.users.students.list'
                        }
                    ]
                },
                {
                    title: 'Advertisement Board',
                    data: [
                        {
                            title: 'Advertise',
                            data: 'admin.advertisements.new'
                        },
                        {
                            title: 'Existed Advertisements',
                            data: 'admin.advertisements.existed'
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
