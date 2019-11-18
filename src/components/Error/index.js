import React from 'react'
import styles from './styles.module.scss'

const Error = ({ touched, message }) => {
    if (!touched || !message) return null
    return (
      <div className={styles.errorMessage}>{message}</div>
    )
}

export default Error