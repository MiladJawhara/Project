import Axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
    years: [],
    departments: [],
    registableProjects: [],
    supervisors: []
}

// getters
export const getters = {
    getListOf: state => (what, from) => {
        return state[from].map(item => item[what])
    },
    getBy: state => (what, from, by, Payload) => {
        return state[from].find(item => item[by] == Payload)[what]
    },
    getAll: state => what => {
        return state[what]
    }
}

// mutations
export const mutations = {
    [types.SET_YEARS_TITLES](state, data) {
        state.years = data
    },
    [types.SET_DEPARTMENTS](state, data) {
        state.departments = data
    },
    [types.SET_REGISTABLE_PROJECTS](state, data) {
        state.registableProjects = data
    },
    [types.SET_SUPERVISORS](state, data) {
        state.supervisors = data
    },
    [types.UPDATE_DATA](state, { what, newData }) {
        state[what] = newData
    }
}
/**
 *
 * @param {*} stateName
 * @param {*} commitType
 * @param {*} url
 * @param {*} ctx
 */
function getData(stateName, commitType, url, ctx, force = false) {
    return new Promise((resolve, reject) => {
        if (ctx.state[stateName].length == 0 || force) {
            Axios.get(url).then(res => {
                const data = res.data
                ctx.commit(commitType, data)
                resolve(data)
            })
        } else {
            resolve(ctx.state[stateName])
        }
    })
}

const mutationsCut = {
    years: types.SET_YEARS_TITLES,
    departments: types.SET_DEPARTMENTS,
    registableProjects: types.SET_REGISTABLE_PROJECTS,
    supervisors: types.SET_SUPERVISORS
}

const apis = {
    years: '/api/years',
    departments: '/api/departments',
    registableProjects: '/api/registableprojects',
    supervisors: '/api/supervisors'
}

// actions
export const actions = {
    async request(ctx, what) {
        if (what === 'all') {
            what = Object.keys(ctx.state)
        }

        if (what instanceof Array) {
            for (const key in what) {
                if (what.hasOwnProperty(key)) {
                    const element = what[key]
                    await getData(
                        element,
                        mutationsCut[element],
                        apis[element],
                        ctx
                    )
                }
            }
        } else {
            return getData(what, mutationsCut[what], apis[what], ctx)
        }
    },
    addNewItemTo(ctx, { what, item }) {
        const newData = [...ctx.state[what], item]
        ctx.commit(types.UPDATE_DATA, { what, newData })
    },
    deleteItemBy(ctx, { from, by, value }) {
        const newData = ctx.state[from].filter(data => data[by] != value)
        ctx.commit(types.UPDATE_DATA, { what: from, newData })
    },
    updateItemBy(ctx, { from, by, value, item }) {
        const newData = ctx.state[from].map(data => {
            if (data[by] === value) {
                return item
            } else {
                return data
            }
        })
        ctx.commit(types.UPDATE_DATA, { what: from, newData })
    }
}
