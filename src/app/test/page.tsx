import { ClerkLoaded, UserButton } from "@clerk/nextjs";
import { getUser } from "../../../db/queries";




export default async function Page() {
    const getUserId = await getUser();
    
    console.log(getUserId);

    return(
        <div className="flex items-center justify-center mx-auto">
            {
                JSON.stringify(getUserId)
            }
            <ClerkLoaded>
                <UserButton />
            </ClerkLoaded>
        </div>
    )
}