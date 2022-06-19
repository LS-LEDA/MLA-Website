import {Map} from "../../components/Map/Map";

const Roadmap = () => {
    return (
        <section id="roadmap" className="flex w-full bg-primary">
            <div className="flex flex-col w-1/2 align-middle m-auto pl-20 hidden lg:block">
                <h1 className="font-black text-7xl 2xl:text-9xl">
                    MLA
                </h1>
                <h1 className="font-black text-7xl 2xl:text-9xl">
                    Development
                </h1>
                <h1 className="font-black text-7xl 2xl:text-9xl">
                    Roadmap
                </h1>
            </div>

            <div className="flex w-full lg:w-1/2">
                <Map/>
            </div>
        </section>
    );
}

export { Roadmap }