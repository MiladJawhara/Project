const mobileScreenLimit = 1000

export const state = {
    screenWidth: window.screen.width,
    mobileScreen: false,
    showSideBar: false
}

export const mutations = {
    SET_SCREEN_WIDTH(state) {
        state.screenWidth = window.screen.width
        this.commit('global/SET_MOBILE_SCREEN')
    },
    SET_MOBILE_SCREEN(state) {
        if (state.screenWidth > mobileScreenLimit) {
            state.mobileScreen = false
        } else {
            state.mobileScreen = true
        }
    },
    TOGGLE_SIDE_BAR(state) {
        state.showSideBar = !state.showSideBar
    }
}

export const actions = {
    toggleSideBar(context) {
        context.commit('TOGGLE_SIDE_BAR')
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
