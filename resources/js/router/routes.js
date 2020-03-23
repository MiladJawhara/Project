function importPage(path) {
    return () =>
        import ( /* webpackChunkName: '' */ '../pages/' + path).then(
            m => m.default || m
        )
}

export default [{
        path: '/login',
        name: 'login',
        component: importPage('auth/Login')
    },
    {
        path: '/register',
        name: 'register',
        component: importPage('auth/Register')
    }

]