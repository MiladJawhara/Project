<template>
    <div>
        <h1>Welcome to your Dashboard {{ user.f_name }}</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('auth', ['user'])
    }
}
</script>

<style lang="scss" scoped></style>
