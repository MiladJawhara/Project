<template>
    <div>
        <v-card color="#fcfcfc" width="100%" height="300px" max-height="400px">
            <v-card-title class="border-bottom title">
                {{ title }}
            </v-card-title>

            <v-card-text class="card-scroll overflow-auto overflow-scroll">
                <v-treeview dense :items="items">
                    <template v-slot:label="{ item, leaf }">
                        <template v-if="leaf">
                            <router-link :to="{}">{{ item.name }}</router-link>
                        </template>
                        <template v-else>
                            {{ item.name }}
                        </template>
                    </template>
                </v-treeview>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    },
    data: () => ({
        items: [
            {
                id: 1,
                name: 'Applications :',
                children: [
                    { id: 2, name: 'Calendar : app' },
                    { id: 3, name: 'Chrome : app' },
                    { id: 4, name: 'Webstorm : app' }
                ]
            },
            {
                id: 5,
                name: 'Documents :',
                children: [
                    {
                        id: 6,
                        name: 'vuetify :',
                        children: [
                            {
                                id: 7,
                                name: 'src :',
                                children: [
                                    { id: 8, name: 'index : ts' },
                                    { id: 9, name: 'bootstrap : ts' }
                                ]
                            }
                        ]
                    },
                    {
                        id: 10,
                        name: 'material2 :',
                        children: [
                            {
                                id: 11,
                                name: 'src :',
                                children: [
                                    { id: 12, name: 'v-btn : ts' },
                                    { id: 13, name: 'v-card : ts' },
                                    { id: 14, name: 'v-window : ts' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 15,
                name: 'Downloads :',
                children: [
                    { id: 16, name: 'October : pdf' },
                    { id: 17, name: 'November : pdf' },
                    { id: 18, name: 'Tutorial : html' }
                ]
            },
            {
                id: 19,
                name: 'Videos :',
                children: [
                    {
                        id: 20,
                        name: 'Tutorials :',
                        children: [
                            { id: 21, name: 'Basic layouts : mp4' },
                            { id: 22, name: 'Advanced techniques : mp4' },
                            { id: 23, name: 'All about app : dir' }
                        ]
                    },
                    { id: 24, name: 'Intro : mov' },
                    { id: 25, name: 'Conference introduction : avi' }
                ]
            }
        ]
    })
}
</script>

<style lang="scss" scoped>
@media (min-width: 960px) {
}
.title {
    background-color: aliceblue;
}

.card-scroll {
    height: 100%;
    max-height: 78%;
}
</style>
