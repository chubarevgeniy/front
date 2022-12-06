import './Avatar.scss'

export default function Avatar(props) {
    return (
        <>
            <img src={props.value} style={{
                width: "35px", 
                height: "35px",
                borderRadius: "50%"
                }} alt = "hi"></img>
        </>
    )
}