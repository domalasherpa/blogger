const Avatar = ({ imageUrl, altText , className=""}) => {
    return (<img
        src={imageUrl}
        alt={altText}
        className={`h-12 w-12 rounded-full object-cover shadow-md ${className}`} />)
}


export default Avatar;