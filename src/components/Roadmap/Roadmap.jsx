import {Card} from "./Card";

const Roadmap = () => {
    const roadmap = [
        {
            message: "Windows platform release v1.0.0 .",
            date: "December 12th, 2021"
        },
        {
            message: "macOS & Linux platforms release v1.0.0 .",
            date: "To Be Announced"
        },
        {
            message: "Micro-services back-end with API. Better data processing performance and additional features.",
        },
        {
            message: "Mobile application for `on the go` use."
        }
    ];

    return (
        <div className="min-h-screen bg-indigo-200 py-6 flex flex-col justify-center sm:py-12">
            <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
                <div className="relative text-gray-700 antialiased text-sm font-semibold">
                    {/* Middle vertical bar*/}
                    <div className="hidden sm:block w-1 bg-indigo-400 absolute h-full left-1/2 transform -translate-x-1/2">
                    </div>

                    {
                        roadmap.map( (event, index) => {
                            return (
                                <div className="mt-10 sm:mt-0 sm:mb-12">
                                    <div className="flex flex-col sm:flex-row items-center">
                                        {/* Event card */}
                                        <div className={`flex w-full mx-auto items-center
                                                        ${ index % 2 !== 0 ? "justify-start" : "justify-end"}`}>
                                            <div className={`w-full sm:w-1/2 ${index % 2 !== 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                                                <Card event={event} key={index}/>
                                            </div>
                                        </div>
                                        {/* Circle */}
                                        <div className="rounded-full bg-indigo-300 border-white border-4 w-10 h-10
                                                        absolute left-1/2 -translate-y-4 sm:translate-y-0 transform
                                                        -translate-x-1/2 flex items-center justify-center">
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export { Roadmap };