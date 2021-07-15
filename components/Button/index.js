import styles from "./styles.module.css"
export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>

    </>
  )
}