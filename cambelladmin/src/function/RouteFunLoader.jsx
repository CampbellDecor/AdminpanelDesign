import axios from 'axios';
export async function ProfileLoader ({ params })
{
    try {
const aid = params.aid === 'self' ? 'self' : params.aid
        const admin = await axios.get('/api/admin/' + aid);
        return admin.data;
    } catch (error) {
        console.error(error);
    }
}
export async function editAdminLoader ({params})
{
try {
    const admin = await axios.get('/api/admin/' + params.aid)
    return admin.data;
} catch (error) {
console.error(error);
}


}
export async function addAdminLoader ({ parmas })
{
return null;
}

export async function adminchatList ()
{
    try {
        const chat = await axios.get('/api/adminchat');
        return chat.data;
    } catch (error) {
        throw error;
    }
}
export async function normalchatList () {
    try
    {
        const chat = await axios.get('/api/adminchat');
    return chat.data
  } catch (error) {
    throw error
  }
}
