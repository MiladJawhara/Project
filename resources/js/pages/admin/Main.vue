<template>
    <v-container>
        <v-row>
            <v-col elevation="20" :cols="isMobile ? 12 : 3">
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
            </v-col>
            <v-col>
                <transition name="fade">
                    <v-card v-if="getTitle !== ''">
                        <v-card-title class="bg-primary">
                            {{ getTitle }}</v-card-title
                        >
                        <v-card-text>
                            <router-view></router-view>
                        </v-card-text>
                    </v-card>
                </transition>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'admin',

    data() {
        return {
            links: [
                {
                    title: 'Settings',
                    name: 'admin.settings'
                },
                {
                    title:'Dashboard',
                    name: 'admin.Dashboard'
                },
                {
                    title:'Add professor',
                    name:'admin.AddAdmin'
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

                    if (element.name === name) {
                        return element.title
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
