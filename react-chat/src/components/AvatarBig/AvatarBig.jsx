import './AvatarBig.scss'

export default function AvatarBig(props) {
    return (
        <>
        <div>
        <img src={props.value} style={{width: "175px", height: "175px"}}></img>
        </div>
        </>
    )
}