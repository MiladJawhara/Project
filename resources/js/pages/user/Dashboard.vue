<template>
    <v-container>
        <v-row>
            <v-col>
                Welcome
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('auth', ['user', 'check']),
        userFirstName() {
            return this.check ? this.user.f_name : ''
        }
    }
}
</script>

<style lang="scss" scoped></style>
