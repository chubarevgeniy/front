import './Button.scss'

export default function Button(props) {
    return (<>
        <button className="circleButton" onClick={props.onClick} style = {props.style} form = {props.form}>
                {props.icon}
        </button>
    </>);
}