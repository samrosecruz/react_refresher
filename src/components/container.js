import React from "react"
import style from "./container.module.css"

export default ({ children }) => (
  <div className={style.container}>{children}
  </div>
)
