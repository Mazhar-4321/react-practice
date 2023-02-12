import React from "react";
function Paragraph(properties) {
    console.log(properties.data);
    return (

        <p>{properties.data}</p>
    )
}
export default Paragraph;