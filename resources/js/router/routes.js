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
                path: 'admin',
                name: 'admin',
                component: importPage('admin/Main'),
                children: [
                    {
                        path: 'groups/globalSettings',
                        name: 'admin.groups.globalSettings',
                        component: importPage('admin/GroupsGloabalSettings')
                    },
                    {
                        path: 'dashboard',
                        name: 'admin.dashboard',
                        component: importPage('admin/Dashboard')
                    }
                ]
            }
        ]
    }
]
