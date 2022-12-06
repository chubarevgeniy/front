import './AvatarBig.scss'

export default function AvatarBig(props) {
    return (
        <>
        <div>
        <img src={props.value} style={{width: "15px", height: "15px"}}></img>
        </div>
        </>
    )
}