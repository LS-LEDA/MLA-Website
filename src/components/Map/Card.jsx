const Card = (props) => {
    return (
        <div className="flex flex-col w-full bg-white rounded-md shadow-lg p-5">
            <span className="text-gray-500">
                { props.event.date }
            </span>
            <p className="text-base">
                { props.event.message }
            </p>
        </div>
    );
}

export { Card };