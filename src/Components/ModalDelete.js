import { Modal, Button } from "react-bootstrap"

import axios from "axios";

function ModalSubmit(props){
    return(
        <Modal show={props.show} onHide={()=> props.setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Order Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you would like to delete {props.currentOrder.orderId}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=> props.setShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() =>{
                    console.log(props.currentOrder)
                    axios.delete(process.env.REACT_APP_API_URL_DEL, { data:{id:props.currentOrder.id}})
                        .then(res => {
                            props.setShow(false) 
                            props.setCurrentOrder({orderId:0,id:0})
                        })
                        .catch(err => console.log(err))
                }}>
                    Delete Order Record
                </Button>
            </Modal.Footer>
        </Modal>
        )
    }
    
export default ModalSubmit