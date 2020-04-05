<template>
    <div>
        <nav-bar :pLinks="links"></nav-bar>

        <v-container class="p-0">
            <v-row>
                <!-- <v-col elevation="20" :cols="isMobile ? 12 : 3">
                    <v-card shaped v-if="!isMobile">
                        <v-card-title class="bg-primary">Options</v-card-title>
                        <v-card-text>
                            <v-list rounded>
                                <v-list-item
                                    v-for="(link, i) in links"
                                    :key="i"
                                    :to="{ name: link.name }"
                                >
                                    <v-list-item-content>{{
                                        link.title
                                    }}</v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                    <template v-else>
                        <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="bg-primary"
                                    >Option</v-expansion-panel-header
                                >

                                <v-expansion-panel-content>
                                    <v-list rounded>
                                        <v-list-item
                                            v-for="(link, i) in links"
                                            :key="i"
                                            :to="{ name: link.name }"
                                        >
                                            <v-list-item-content>{{
                                                link.title
                                            }}</v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                </v-col> -->
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
                    title: 'Groups',
                    data: [
                        {
                            title: 'Gloabal Settings',
                            data: 'admin.groups.globalSettings'
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
                                    return (
                                        element.title + ': ' + subElement.title
                                    )
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
