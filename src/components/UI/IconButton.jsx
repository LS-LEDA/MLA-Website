const IconButton = (props) => {
    return(
        <button className="flex bg-primary hover:bg-primary_variant dark:bg-dark_primary dark:hover:bg-dark_primary_variant rounded-md px-5 py-2 place-items-center dark:text-dark_text">
            { props.icon }
            <span className="ml-2 dark:text-dark_text">
                { props.text }
            </span>
        </button>
    )
}

export default IconButton;