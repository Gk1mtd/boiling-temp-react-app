import React from "react";

function BoilingVerdict (props) {
    if (props.celsius >= 100)
        return <p>The warter would boil.</p>
    else
        return <p>The warter would not boil.</p>
}


export default BoilingVerdict