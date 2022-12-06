import './Bar.scss';

export default function Bar(props){
    return (
        <>
        <div className='bar'>
            {props.value}
        </div>
        </>
    );
};