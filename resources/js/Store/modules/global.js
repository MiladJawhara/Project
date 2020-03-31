import * as types from '../mutation-types'
const mobileScreenLimit = 1000

export const state = {
    screenWidth: window.screen.width,
    mobileScreen: false,
    showSideBar: false
}

export const mutations = {
    [types.SET_SCREEN_WIDTH](state) {
        state.screenWidth = window.screen.width
    },
    [types.TOGGLE_SIDE_BAR](state) {
        state.showSideBar = !state.showSideBar
    }
}

export const actions = {
    toggleSideBar({ commit }) {
        commit(types.TOGGLE_SIDE_BAR)
    },
    setScreenWidth({ commit }) {
        commit(types.SET_SCREEN_WIDTH)
    }
}

export const getters = {
    screenWidth(state) {
        return state.screenWidth
    },
    isMobile(state) {
        return state.mobileScreen
    },
    shouldShowSideBar(state) {
        return state.showSideBar
    }
}
