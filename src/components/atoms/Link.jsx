const Link = (props) =>{
    return <a className="link" rel="noreferrer" target="_blank" href={props.link}>{props.children}</a>
}
export default Link