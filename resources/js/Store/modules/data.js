import Axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
    years: []
}

// getters
export const getters = {}

// mutations
export const mutations = {
    [types.SET_YEARS](state, years) {
        state.years = years
    }
}

// actions
export const actions = {
    getYears({ state, commit }) {
        return new Promise((resolve, reject) => {
            if (state.years.length == 0) {
                Axios.get('/api/years').then(res => {
                    const data = res.data
                    commit(types.SET_YEARS, data)
                    resolve(data)
                })
            } else {
                resolve(state.years)
            }
        })
    }
}
