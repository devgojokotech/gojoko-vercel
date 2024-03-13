import Container from "../Container";
import Membercard from "../Membercard";

const TeamsSection = () => {
    return (
        <div className="bg-gray-25">
            <Container>
                <h1 className="text-base-black text-center text-6xl">Our Team</h1>
                <div className="grid grid-cols-12 gap-y-10 my-10">
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 place-self-center">
                        <Membercard />
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 place-self-center">
                        <Membercard />
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 place-self-center">
                        <Membercard />
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 place-self-center">
                        <Membercard />
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 place-self-center">
                        <Membercard />
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-4 place-self-center">
                        <Membercard />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TeamsSection;