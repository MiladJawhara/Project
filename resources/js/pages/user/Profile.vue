<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="auto">
                <v-avatar size="150">
                    <v-img
                        class="btn"
                        title="Edit Profile image"
                        @click="showProfileImgEditDialog()"
                        src="https://randomuser.me/api/portraits/men/81.jpg"
                    >
                    </v-img>
                </v-avatar>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col>
                <v-form>
                    <v-container>
                        <v-row justify="center">
                            <v-col cols="12" lg="4">
                                <v-text-field dense outlined label="First Name">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" lg="4">
                                <v-text-field dense outlined label="Last Name">
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    methods: {
        showProfileImgEditDialog() {
            console.log('Edit Profile image Clicked')
        }
    }
}
</script>

<style lang="scss" scoped></style>
