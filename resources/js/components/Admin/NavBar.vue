<template>
    <nav
        class="navbar navbar-expand-lg navbar-light shadow-sm"
        style="background-color: #dddddd;"
    >
        <a class="navbar-brand">Admin</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li
                    :class="getNavItemClass(link)"
                    v-for="(link, i) in links"
                    :key="i"
                >
                    <template v-if="isNavArray(link)">
                        <div
                            class="nav-link dropdown-toggle"
                            :class="isActive(link.data)"
                            :id="link.title"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            {{ link.title }}
                        </div>
                        <div
                            class="dropdown-menu"
                            :aria-labelledby="link.title"
                        >
                            <router-link
                                tag="a"
                                v-for="(subLink, i) in link.data"
                                :key="i"
                                class="dropdown-item"
                                :to="{ name: subLink.data }"
                            >
                                {{ subLink.title }}
                            </router-link>
                        </div>
                    </template>
                    <router-link
                        v-else
                        class="nav-link"
                        :class="isActive(link.data)"
                        :to="{ name: link.data }"
                    >
                        {{ link.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'nav-bar',
    props: {
        pLinks: {
            required: true,
            type: Array,
            default: null
        }
    },
    data() {
        return {
            links: this.pLinks
        }
    },
    methods: {
        getNavItemClass(link) {
            let res = 'nav-item'
            if (this.isNavArray(link)) {
                res += ' dropdown'
            }

            return res
        },
        isNavArray(link) {
            return link.data instanceof Array
        },
        isActive(data) {
            if (data instanceof Array) {
                for (const subLink in data) {
                    if (data.hasOwnProperty(subLink)) {
                        const element = data[subLink]
                        const subData = element.data
                        if (subData == this.$route.name) {
                            return 'active'
                        }
                    }
                }
            }

            if (data == this.$route.name) {
                return 'active'
            }
        }
    },
    computed: {}
}
</script>

<style lang="scss" scoped></style>
