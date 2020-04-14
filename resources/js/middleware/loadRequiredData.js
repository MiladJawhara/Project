import store from '../Store/index'

export default (to, from, next) => {
    to.matched.forEach(element => {
        if (element.components) {
            if (typeof element.components.default === 'function') {
                element.components.default().then(data => {
                    if (data.requiredData) {
                        store
                            .dispatch('data/request', {
                                what: data.requiredData
                            })
                            .then(() => {
                                next()
                            })
                    } else {
                        next()
                    }
                })
            } else {
                next()
            }
        } else {
            next()
        }
    })
}
