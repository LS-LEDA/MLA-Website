const FeatureCard = (props) => {
    return (
        <div className="flex flex-col max-w-md h-auto">
            <div className="flex gap-x-4 items-center">
                {/* Feature card icon */}
                <div className="flex bg-primary rounded-md w-12 h-12 place-items-center justify-center">
                    { props.feature.icon }
                </div>
                {/* Feature card title */}
                <div className="font-bold text-xl flex-1"> { props.feature.title } </div>
            </div>
            {/* Feature card content */}
            <div className="flex flex-col pl-16">
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