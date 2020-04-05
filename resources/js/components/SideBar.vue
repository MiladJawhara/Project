<template>
    <div>
        <v-btn
            class="mt-2"
            small
            dark
            color="teal"
            @click="drawer = !drawer"
            fixed
            style="z-index: 10 ;left: -25px; padding-left: 25px"
        >
            <v-icon dark>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
        <v-navigation-drawer
            style="z-index: 99"
            v-model="drawer"
            color="primary"
            fixed
            dark
            temporary
        >
            <v-btn icon fixed right style="z-index: 10" @click="drawer = false"
                ><v-icon style="rigth:15px">mdi-close</v-icon>
            </v-btn>

            <v-list dense nav>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img
                            src="https://randomuser.me/api/portraits/men/81.jpg"
                        />
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Application</v-list-item-title>
                        <v-list-item-subtitle>Subtext</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <!-- Links -->
                <slot></slot>
                <!-- Links -->
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer: false
        }
    },
    computed: {}
}
</script>
<style lang="scss" scoped></style>
