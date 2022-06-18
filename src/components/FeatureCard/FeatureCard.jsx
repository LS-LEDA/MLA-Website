const FeatureCard = (props) => {
    return (
        <div className="flex w-full h-auto hover:bg-primary p-5 rounded-lg hover:cursor-pointer space-x-6"
             onMouseEnter={() => { props.select(props.id) }}
        >
            <div className="flex">
                {/* Feature card icon */}
                <div className="flex bg-primary rounded-md w-12 h-12 place-items-center justify-center">
                    { props.feature.icon }
                </div>
            </div>

            {/* Feature card content */}
            <div className="flex flex-col w-full">
                {/* Feature card title */}
                <div className="flex font-bold text-xl"> { props.feature.title } </div>
                <p className="max-w-full"> { props.feature.description } </p>
                <span className="place-self-end font-bold text-sm mt-4">
                    <a href="#">
                        { props.feature.extra}
                    </a>
                </span>
            </div>
        </div>
    );
}

export { FeatureCard };