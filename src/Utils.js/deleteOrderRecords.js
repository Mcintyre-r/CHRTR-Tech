import axios from 'axios'


const deleteOrderRecords =(id) => {
    axios.del(process.env.REACT_APP_API_URL_DELETE, id)
        .then(res => )
        .catch(err => console.log(err))

  }


export default deleteOrderRecords
