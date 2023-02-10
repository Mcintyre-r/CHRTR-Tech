import {Table} from 'react-bootstrap'
import OrderLine from './OrderLine'

function OrdersTable(props){
    return(
        <Table striped boardered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Order Id</th>
                    <th>Order Amount</th>
                    <th>Reward Points</th>
                </tr>
            </thead>
            <tbody>
                {props.orders.map(order => {
                    return <OrderLine id={order.id} orderId={order.orderId} amount={order.amount} rewards={order['reward points']} setCurrentOrder={props.setCurrentOrder} setShow={props.setShow}/>
                })}
            </tbody>

        </Table>
    )
}

export default OrdersTable