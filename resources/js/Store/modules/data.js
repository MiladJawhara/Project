import Axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
    years: [],
    departments: [],
}

// getters
export const getters = {}

// mutations
export const mutations = {
    [types.SET_YEARS_TITLES](state, years) {
        state.years = years
    },
    [types.SET_DEPARTMENTS](state, departments) {
        state.departments = departments
    },
}
/**
 *
 * @param {*} stateName
 * @param {*} commitType
 * @param {*} url
 * @param {*} ctx
 */
function getData(stateName, commitType, url, ctx) {
    return new Promise((resolve, reject) => {
        if (stateName.length == 0) {
            Axios.get(url).then((res) => {
                const data = res.data
                ctx.commit(commitType, data)
                resolve(data)
            })
        } else {
            resolve(stateName)
        }
    })
}
// actions
export const actions = {
    getYears(ctx) {
        return getData(state.years, types.SET_YEARS_TITLES, '/api/years', ctx)
    },
    getDepartments(ctx) {
        return getData(
            state.departments,
            types.SET_DEPARTMENTS,
            '/api/admin/groups/globalSettings',
            ctx
        )
    },
}
