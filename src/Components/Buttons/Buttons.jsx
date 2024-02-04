import styles from "./Buttons.module.css";


const Buttons = (props) => {
  return (
    <>
        <button className={props.isOutline ? styles.outline_btn :styles.primary_btn}>
        {props.icon} {props.text}  </button>
    </>
  )
}

export default Buttons