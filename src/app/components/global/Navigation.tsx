import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";


const Navigation = () => {
    return(
        <header className="fixed z-10 w-full mx-auto bg-white items-center justify-center px-8 md:px-0 transition-all duration-300">
            <div className="container mx-auto items-center justify-center">
                <div className="w-full relative flex items-center justify-between mx-auto py-5">

                    <Link href="/" className=" font-bold text-lg">
                        Gym
                    </Link>

                    <ul className="list-none hidden md:flex flex-row gap-12">
                            <li>
                               <Link href="/">Medlemskap</Link>
                            </li>
                            <li>
                               <Link href="/">Priser</Link>
                           </li>
                           <li>
                               <Link href="/">Artikkler</Link>
                          </li>
                      </ul>

                    <ClerkLoading>
                        loading...
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignedOut>
                            <SignUpButton
                                mode="modal"
                            >
                                 <div
                                    className="items-center cursor-pointer outline-none px-5 h-0 py-5 justify-center flex rounded-full text-purple-800 transition-all duration-300 bg-purple-300 hover:text-white hover:bg-purple-500"
                                >
                                    Bli Medlem
                                </div>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </ClerkLoaded>

                </div>
            </div>
        </header>
    )
}

export default Navigation