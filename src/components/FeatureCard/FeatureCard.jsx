const FeatureCard = (props) => {
    return (
        <div className="flex">
            <div className="bg-indigo-200 p-2 rounded-md">
                { props.icon }
            </div>
            <div className="flex flex-col">
                <div className="font-bold"> { props.title } </div>
                <p> { props.description } </p>
            </div>
        </div>
    );
}

export { FeatureCard };