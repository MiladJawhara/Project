function importPage(path) {
    return () =>
        import(/* webpackChunkName: '' */ '../pages/' + path).then(
            m => m.default || m
        )
}

export default [
    {
        path: '/',
        name: 'app',
        component: importPage('App'),
        children: [
            {
                path: '/login',
                name: 'login',
                component: importPage('auth/Login')
            },
            {
                path: '/register',
                name: 'register',
                component: importPage('auth/Register')
            },
            {
                path: '/admin',
                name: 'admin',
                component: importPage('admin/Main'),
                children: [
                    {
                        path: 'settings',
                        name: 'admin.settings',
                        component: importPage('admin/settings')
                    }
                ]
            }
        ]
    }
]
