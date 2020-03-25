<template>
    <v-container>
        <v-row>
            <v-col elevation="12" :cols="isMobile ? 12 : 3">
                <v-card shaped v-if="!isMobile">
                    <v-card-title :style="navigationHeaderstyle"
                        >Options</v-card-title
                    >
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
                            <v-expansion-panel-header
                                :style="navigationHeaderstyle"
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
            <v-col cols="auto">
                <router-view></router-view>
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
                }
            ]
        }
    },

    computed: {
        navigationHeaderstyle() {
            return 'background-color: lightgray;'
        },
        ...mapGetters('global', ['isMobile'])
    }
}
</script>

<style lang="scss" scoped></style>
