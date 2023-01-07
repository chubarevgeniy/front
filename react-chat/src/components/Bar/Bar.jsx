import styles from './Bar.module.scss';

export default function Bar(props){
    return (
        <>
        <div className={styles.bar}>
            {props.children}
        </div>
        </>
    );
};