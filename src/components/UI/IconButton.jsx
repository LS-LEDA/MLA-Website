const IconButton = (props) => {
    return(
        <button
            onClick={props.callback}
            type="button"
            className="flex justify-center bg-primary hover:bg-primary_variant dark:bg-dark_primary
        dark:hover:bg-dark_primary_variant rounded-md px-5 py-2.5 place-items-center dark:text-dark_text
        space-x-2">
            { props.icon }
            { props.download
                ? <a href={props.link} download={props.download}>{props.text}</a>
                : <a href={props.link}>{props.text}</a>
            }
        </button>
    )
}

export default IconButton;