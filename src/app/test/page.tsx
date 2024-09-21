import { getUser } from "../../../db/queries";




export default async function Page() {
    const getUserId = await getUser();
    
    console.log(getUserId);

    return(
        <div>
            {
                JSON.stringify(getUserId)
            }
        </div>
    )
}