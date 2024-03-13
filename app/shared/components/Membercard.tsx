import Image from "next/image";

const Membercard = () => {
    return (
        <>
            <div className="text-center flex justify-center items-center flex-col">
                <Image
                    className="rounded-full h-40 w-40 object-cover"
                    src="https://cdn.buttercms.com/dM8KCFSYQfK7Hx2Eslkx"
                    height="200"
                    width="200"
                    alt="Member photo"
                />
                <h1 className="text-3xl my-3">Cheng Choo</h1>
                <p className="uppercase text-primary-400 text-sm">HEAD OF PEOPLE</p>
                <p className="text-gray-600 text-sm max-w-80 mx-auto mt-2">
                    Cheng is our Head of People, She takes care of other essential things in the company. Lorem Ipsum gorduas, ispecias voge.
                </p>

            </div>
            <div className="mt-2 grid grid-cols-12 max-w-72 mx-auto">
                <div className="col-span-5 h-0.5 bg-base-black my-auto"></div>
                <div className="h-1 w-1 bg-base-black rounded-full my-auto col-span-2 place-self-center"></div>
                <div className="col-span-5 h-0.5 bg-base-black my-auto"></div>
            </div>
        </>
    )
}

export default Membercard;