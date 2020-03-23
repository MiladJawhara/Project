import store from '../Store/index'

export default async (to, from, next) => {
    if (!store.getters['auth/check']) {
        next({ name: 'login' })
    } else {
        next()
    }
}
