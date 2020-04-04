<template>
    <nav
        class="navbar navbar-expand-lg navbar-light"
        style="background-color: #fafafa;"
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
        }
    }
}
</script>

<style lang="scss" scoped></style>
