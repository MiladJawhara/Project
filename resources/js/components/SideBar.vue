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
                        <v-list-item-title>{{
                            userFullName
                        }}</v-list-item-title>
                        <v-list-item-subtitle>{{
                            userDept
                        }}</v-list-item-subtitle>
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
import { mapGetters, mapActions } from 'vuex'
export default {
    created() {
        this.getDepartments().then(() => {
            this.userDept = this.getBy(
                'title',
                'departments',
                'id',
                this.userDeptID
            )
        })
    },
    data() {
        return {
            drawer: false,
            userDept: 'Dept'
        }
    },
    computed: {
        ...mapGetters('auth', ['user', 'check']),
        ...mapGetters('data', ['getBy']),

        userFullName() {
            if (this.user) {
                return this.user.f_name + ' ' + this.user.l_name
            }

            return ''
        },
        userDeptID() {
            if (this.user) {
                return this.user.department_id
            }

            return 1
        }
    },
    methods: {
        ...mapActions('data', ['getDepartments'])
    }
}
</script>
<style lang="scss" scoped></style>
