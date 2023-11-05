import { getSessionStorage} from './SessionStorage';
export const Breadcrumbreducer = (state, action) =>
{
    switch (action.type)
    {
        case "SELFADMIN": {
            const user = getSessionStorage('current');
            const pathname = action.payload;
            return {
                pageTitle: user.username,
                urlset: [
                    {
                        path: '/admins',
                        name: "Admins",
                        isactive: false
                    }, {
                        path: pathname,
                        name: "Account",
                        isactive: true
                    }
                ]
            };
        }
        case "ONEADMIN": {
            return {
                pageTitle: 'Cambell Admin',
                urlset: [
                    {
                        path: '/admins',
                        name: 'Admins',
                        isactive: false
                    }, {
                        path: action.payload,
                        name: 'profile',
                        isactive: true

                    }
                ]

            };
        }
        case "ADDADMIN": {
            return {
                pageTitle: 'ADD Admin',
                urlset: [
                    {
                        path: '/admins',
                        name: 'Admins',
                        isactive: false
                    }, {
                        path: action.payload,
                        name: 'add',
                        isactive: true

                    }
                ]

            };
        }
        case "EDITADMIN": {
            return {
                pageTitle: 'Edit Admin',
                urlset: [
                    {
                        path: '/admins',
                        name: 'Admins',
                        isactive: false
                    }, {
                        path: action.payload,
                        name: 'Prof',
                        isactive: false

                    }, {

                        path: action.payload,
                        name: 'edit',
                        isactive: true

                    }

                ]

            }
            }
        default: return null;
}
}
