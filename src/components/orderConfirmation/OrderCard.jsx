import React from 'react'
import styles from "./OrderCard.module.css"

const OrderCard = (props) => {
  return (
    <div className={styles.orderCard  + " " + props.className} style={props.style}>
        <h3 className={styles.orderTitle}>{props.title}</h3>
        <div>{props.children}</div>
    </div>
  )
}


export default OrderCard