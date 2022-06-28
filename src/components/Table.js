import React from 'react'
import './table.css'

const Table = ({data, column}) => {
  return (
    <table>
        <thead>
            {/* <tr> */}
                { column.map((item, index) => 
                  <th key={index}>{item.value}</th>
                )}
            
            {/* </tr> */}
        </thead>
        <tbody>
               {/* {data.map((item, index) => <TableRow item={item} column={column} key={index}/>)} */}
               {data.map((item, index) =>
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.country}</td>
                    <td>{item.email}</td>
                    <td>{item.ratings}</td>
                  </tr>
                  
                )}
        </tbody>
    </table>
  )
}

// const TableHeader = ({ item }) => <th>{item.heading}</th>
// const TableRow = ({item, column}) => {
//     <tr>
//        {column.map((columnItem, index) => {
//         return <td key={index}>{item[`${columnItem.value }`]}</td>
//        })}  
//     </tr>
// }



export default Table