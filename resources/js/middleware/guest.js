import store from '../Store/index'

export default (to, from, next) => {
    if (store.getters['auth/check']) {
        next({ name: 'user.dashboard' })
    } else {
        next()
    }
}
