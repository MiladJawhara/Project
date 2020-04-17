<template>
    <div>
        <div class="d-flex flex-column flex-md-row mt-3 me-10 ms-5">
            <div
                class="d-flex justify-center justify-md-start order-last order-md-first m-w-75"
            >
                <slot name="main"></slot>
            </div>
            <v-spacer></v-spacer>
            <div
                class=" d-flex order-first order-md-last justify-center justify-md-end m-w-25"
            >
                <slot name="side"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
[class*='m-w'] {
    width: 100%;
    max-width: 100%;
}
@media (min-width: 960px) {
    .m-w-25 {
        max-width: 25%;
        width: 25%;
    }
    .m-w-75 {
        max-width: 75%;
        width: 75%;
    }
}
</style>
