import React from "react";
function Table(properties) {
    return (
        <table>
            <tr>
                {
                    properties.headersData.map(e => <th>{e}</th>)
                }
            </tr>
                {
                    properties.rowsData.map(e=>{
                       return (
                      <tr>
                      <td >{e.firstName}</td>
                      <td >{e.lastName}</td>
                      <td>{e.city}</td>
                      <td >{e.state}</td>
                      <td >{e.zip}</td>
                      <td >{e.phoneNumber}</td>
                      <td >{e.email}</td>
                      </tr>
                       )
                    })
                }
        
        </table>
    )
}

export default Table