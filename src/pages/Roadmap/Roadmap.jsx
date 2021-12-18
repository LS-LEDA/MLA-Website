import {Map} from "../../components/Map/Map";

const Roadmap = () => {
    return (
        <section id="roadmap" className="flex w-full bg-indigo-200">
            <div className="flex flex-col w-1/2 align-middle m-auto pl-20">
                <h1 className="font-black text-9xl">
                    MLA
                </h1>
                <h1 className="font-black text-9xl">
                    Development
                </h1>
                <h1 className="font-black text-9xl">
                    Roadmap
                </h1>
            </div>

            <div className="flex w-1/2">
                <Map/>
            </div>
        </section>
    );
}

export { Roadmap }