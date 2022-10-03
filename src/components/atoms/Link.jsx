const Link = (props) =>{
    return <a className="link" target="_blank" href={props.link}>{props.children}</a>
}
export default Link