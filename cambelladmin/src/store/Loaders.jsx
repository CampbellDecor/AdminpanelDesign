import axios from "axios";
export const userLoader = async () =>
{
    try {
        const users = await axios.get( "/api/user/" );
        console.log(users.data);
        return users.data;
    } catch (error) {
       console.log(error);
    }
   
}