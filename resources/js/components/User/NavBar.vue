<template>
    <v-app-bar dense color="primary">
        <v-app-bar-nav-icon class="mr-5"
            ><v-icon>mdi-airplane</v-icon></v-app-bar-nav-icon
        >
        <v-toolbar-items>
            <v-list-item :to="{ name: 'user.dashboard' }">
                <v-list-item-content>
                    <v-list-item-title class="text-white">
                        Dashboard
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{}">
                <v-list-item-content>
                    <v-list-item-title class="text-white">
                        Groups
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-1">
            <v-icon color="yellow">mdi-bell</v-icon>
        </v-btn>
        <v-btn icon :to="{ name: 'user.profile' }">
            <v-avatar size="35">
                <v-img
                    src="https://randomuser.me/api/portraits/men/81.jpg"
                ></v-img>
            </v-avatar>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
