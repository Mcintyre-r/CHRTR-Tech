import { Button } from "react-bootstrap"
function OrderLine(props){
    return(
        <tr>
          <td>{props.id}</td>
          <td>{props.orderId}</td>
          <td>{props.amount}</td>
          <td>{props.rewards}</td>
          <td><Button variant="outline-danger" size="sm" onClick={()=> {
            props.setShow(true) 
            props.setCurrentOrder({orderId:props.orderId,id:props.id})
          }}>X</Button></td>
        </tr>
    )
}

export default OrderLine

