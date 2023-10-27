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
 path:pathname,
     name: "Account",
     isactive: true
                    }
                ]
            };
        }
        case "NONE": {
            return {
                pageTitle: "Hi"
            }
            }
        default: return null;
}
}
