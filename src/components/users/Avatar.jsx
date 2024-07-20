const Avatar = ({ imageUrl, altText }) => {
    return (<img
        src={imageUrl}
        alt={altText}
        className="h-12 w-12 rounded-full object-cover shadow-md" />)
}


export default Avatar;