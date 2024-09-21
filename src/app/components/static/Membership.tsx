import Link from "next/link";





export default function Membership() {
    return(
        <div className="mx-auto py-10 container items-center justify-center flex px-8">
            <div className="bg-purple-200 py-10 text-center border w-2/4 min-w-fit border-purple-800 px-6 items-center mx-auto rounded-lg space-y-4 flex-shrink-0 flex flex-col">
                <h4 className="text-4xl text-black font-bold">Kjøp Medlemskap</h4>
                <p className="text-black text-xl">Velg medlemskap som passer for deg!</p>
                <Link
                    href="/bli-medlem"
                    className="items-center outline-none px-5 h-0 py-5 justify-center flex rounded-full text-purple-800 transition-all duration-300 bg-purple-300 hover:text-white hover:bg-purple-500"
                  >
                    Bli Medlem
                  </Link>
            </div>
        </div>
    )
}