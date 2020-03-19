<template>
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        <slot name="title"></slot>
                    </h5>
                    <button
                        type="button"
                        :class="closeStyle"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Save changes
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style lan="scss" scoped>
.ar {
    margin: -1rem auto -1rem -1rem;
}
</style>

<script>
export default {
    data() {
        return {
            errors: new Errors()
        };
    },
    computed: {
        closeStyle: function() {
            if (document.documentElement.dir === "rtl") {
                return "close ar";
            }

            return "close";
        }
    },
    mounted() {
        this.errors.sayHello();
    }
};
</script>
