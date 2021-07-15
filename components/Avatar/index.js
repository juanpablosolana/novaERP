import Image from 'next/image'

import styles from "./styles.module.css"

export default function Avatar({ alt, src, text }) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        alt={alt}
        src={src}
        title={alt}
        width={49}
        height={49}/>
      {text && <strong className={styles.strong}>{text}</strong>}
    </div>
  )
}