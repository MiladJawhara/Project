<template>
    <div>
        <h1>Welcome to your Dashboard {{ userFirstName }}</h1>
    </div>
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
