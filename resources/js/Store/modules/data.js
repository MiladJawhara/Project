import Axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
    yearsTitles: []
}

// getters
export const getters = {}

// mutations
export const mutations = {
    [types.SET_YEARS_TITLES](state, yearsTitle) {
        state.yearsTitles = yearsTitle
    }
}

// actions
export const actions = {
    getYears({ state, commit }) {
        return new Promise((resolve, reject) => {
            if (state.yearsTitles.length == 0) {
                Axios.get('/api/years').then(res => {
                    const data = res.data
                    commit(types.SET_YEARS_TITLES, data)
                    resolve(data)
                })
            } else {
                resolve(state.yearsTitles)
            }
        })
    }
}
