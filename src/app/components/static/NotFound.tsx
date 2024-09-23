import Link from "next/link"



export async function NotFound() {
    return(
        <div className="flex gap-6 justify-center items-center h-screen flex-col">
            <h4 className="text-2xl text-black leading-normal font-bold">This slug was not detected in the sanity</h4>
            <Link
                href="/bli-medlem"
                className="items-center outline-none px-5 h-0 py-5 justify-center flex rounded-full text-purple-800 transition-all duration-300 bg-purple-300 hover:text-white hover:bg-purple-500"
              >
                Gå Hjem
              </Link>
        </div>  
    )
}

export default NotFound