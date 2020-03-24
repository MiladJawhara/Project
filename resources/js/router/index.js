import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'
Vue.use(Router)

// The middleware for every page of the application.
const globalMiddleware = ['test']
// ***********************************************************

function resolveMiddleware(requireContext) {
    return requireContext
        .keys()
        .map(file => {
            const res = [
                file.replace(/(^.\/)|(\.js$)/g, ''),
                requireContext(file)
            ]

            return res
        })
        .reduce(
            (guards, [name, guard]) => ({ ...guards, [name]: guard.default }),
            {}
        )
}
// ***********************************************************

// Load middleware modules dynamically.
const routeMiddleware = resolveMiddleware(
    require.context('../middleware', false, /.*\.js$/)
)
// ***********************************************************

function resolveComponents(components) {
    return Promise.all(
        components.map(component => {
            return typeof component === 'function' ? component() : component
        })
    )
}
// ***********************************************************

function getMiddleware(components) {
    const middleware = [...globalMiddleware]

    components
        .filter(c => c.middleware)
        .forEach(component => {
            if (Array.isArray(component.middleware)) {
                middleware.push(...component.middleware)
            } else {
                middleware.push(component.middleware)
            }
        })

    return middleware
}

// ***********************************************************
function callMiddleware(middleware, to, from, next) {
    const stack = middleware.reverse()

    const _next = (...args) => {
        // Stop if "_next" was called with an argument or the stack is empty.
        if (args.length > 0 || stack.length === 0) {
            return next(...args)
        }

        const middleware = stack.pop()

        if (typeof middleware === 'function') {
            middleware(to, from, _next)
        } else if (routeMiddleware[middleware]) {
            routeMiddleware[middleware](to, from, _next)
        } else {
            throw Error(`Undefined middleware [${middleware}]`)
        }
    }

    _next()
}

// ***********************************************************
async function beforeEach(to, from, next) {
    let components = []
    try {
        // Get the matched components and resolve them.
        components = await resolveComponents(
            router.getMatchedComponents({ ...to })
        )
    } catch (error) {
        if (/^Loading( CSS)? chunk (\d)+ failed\./.test(error.message)) {
            window.location.reload(true)
            return
        }
    }

    if (components.length === 0) {
        return next()
    }

    // Get the middleware for all the matched components.
    const middleware = getMiddleware(components)

    // Call each middleware.
    callMiddleware(middleware, to, from, (...args) => {
        next(...args)
    })
}
// ***********************************************************

async function afterEach(to, from, next) {}

// ***********************************************************
// router
const router = new Router({
    mode: 'history',
    routes
})
router.beforeEach(beforeEach) // theis will be called before any route
router.afterEach(afterEach) // theis will be called after any route
export default router
