import { useState } from "react"
import style from "./OnOff.module.css"

export function OnOff() {

    const [isOn, setIsOn] = useState(false)

    const onClickHandlerOn = () => {
        setIsOn(true)
    }

    const onClickHandlerOff = () => {
        setIsOn(false)
    }

    const stylesOn = {
        backgroundColor: isOn ?  "green" : "#fff"
    }

    const stylesOff = {
        backgroundColor: isOn ? "#fff" : "red"
    }

    const stylesLightBulb = {
        backgroundColor: isOn ? "green" : "red"
    }

    return(
        <div className={style.wrapper}>
            <div className={style.button} style={stylesOn} onClick={onClickHandlerOn}>
                on
            </div>
            <div className={style.button} style={stylesOff} onClick={onClickHandlerOff}>
                off
            </div>
            <div className={style.lightBulb}
                 style={stylesLightBulb} />
        </div>
        
    )
} 