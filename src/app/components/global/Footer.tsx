import Link from "next/link";



export default async function Footer() {
    return(
    <footer className="w-full bg-purple-200 mx-auto bg-inherit py-4 md:py-8 px-8 lg:px-0">
            <div className="container flex space-y-7 flex-col justify-center items-center mx-auto">
                <p className="text-base text-black">&copy;2024. Gym levert av Nikolas</p>
            </div>
        </footer>
    )
}