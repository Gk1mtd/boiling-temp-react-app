import React from "react";
import BoilingVerdict from "./BoilingVerdict";

function Calculator (props) {
    const [temperature, setTemperature] = React.useState()
    const handleChange = ((event) => {
        setTemperature(event.target.value)
    })
    return (
        <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input value={temperature} onChange={handleChange}></input>
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    )
}

export default Calculator