import {getSessionStorage} from './SessionStorage'
export async function ProfileLoader ({ params })
{
    if (params.aid === 'self')
    {
        return getSessionStorage('current');
    } else
    {
        return false;
    }
}
