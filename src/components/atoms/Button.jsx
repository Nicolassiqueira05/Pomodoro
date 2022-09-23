const Button = (props) =>{
    return <button className="btn" onClick={props.function}>{props.children}</button>
}
export default Button