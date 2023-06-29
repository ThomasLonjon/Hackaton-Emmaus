import React from 'react'
import emmaus from "../../images/emmaus.png"

function TopBar() {
  return (
    <div className = "topbar">
        <div className = "topBar-first">
            <img src={emmaus} className="emmaus-logo" alt=""/>
            <h3> Se connecter </h3>
        </div>
      
    </div>
  )
}

export default TopBar
