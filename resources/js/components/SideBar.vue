<template>
    <div>
        <v-btn
            class="mt-2"
            small
            dark
            color="teal"
            @click="drawer = !drawer"
            fixed
            style="z-index: 1 ;left: -25px; padding-left: 25px"
        >
            <v-icon dark>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
        <v-navigation-drawer v-model="drawer" color="primary" fixed dark>
            <v-list dense nav class="py-0">
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
