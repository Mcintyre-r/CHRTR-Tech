import axios from 'axios'


const fetchOrders = async (setOrders) => {
    try{const res = await axios.get(process.env.REACT_APP_API_URL)
        setOrders(res.data)
    } catch (err){
      console.log(err)
    }
  }


export default fetchOrders
