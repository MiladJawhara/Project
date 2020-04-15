import store from '../Store/index'

export default (to, from, next) => {
    let promeses = []
    to.matched.forEach(element => {
        if (element.components) {
            if (typeof element.components.default === 'function') {
                promeses.push(element.components.default())
            }
        }
    })

    Promise.all(promeses).then(data => {
        promeses = []
        data.forEach(item => {
            if (item.requiredData) {
                promeses.push(
                    store.dispatch('data/request', {
                        what: item.requiredData
                    })
                )
            }
        })
    })

    Promise.all(promeses).then(() => {
        setTimeout(next, 100)
    })
}
