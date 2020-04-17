function importPage(path) {
    return () =>
        import ( /* webpackChunkName: '' */ '../pages/' + path).then(
            m => m.default || m
        )
}

export default [{
    path: '/',
    name: 'app',
    component: importPage('App'),
    children: [{
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
            path: '/user',
            name: 'user',
            component: importPage('user/Main'),
            children: [{
                path: 'dashboard',
                name: 'user.dashboard',
                component: importPage('user/Dashboard')
            }]
        },
        {
            path: 'admin',
            redirect: { name: 'admin.dashboard' },
            name: 'admin',
            component: importPage('admin/Main'),
            children: [{
                    path: 'projects/projectsTypes',
                    name: 'admin.projects.registableProjectsList',
                    component: importPage('admin/RegistableProjectsList')
                },
                {
                    path: 'users/students_list',
                    name: 'admin.users.students.list',
                    component: importPage('admin/StudentsList')
                },
                {
                    path: 'departments/list',
                    name: 'admin.departments.list',
                    component: importPage('admin/DepartmentsList')
                },
                {
                    path: 'dashboard',
                    name: 'admin.dashboard',
                    component: importPage('admin/Dashboard')
                },
                {
                    path: 'supervisors/list',
                    name: 'admin.supervisors.list',
                    component: importPage('admin/SupervisorsList')
                },
                {
                    path: 'advertisements/create',
                    name: 'admin.advertisements.new',
                    component: importPage('admin/NewAdverstisements')
                },
                {
                    path: 'advertisements/existed',
                    name: 'admin.advertisements.existed',
                    component: importPage('admin/ExistedAdvertisements')
                }
            ]
        }
    ]
}]