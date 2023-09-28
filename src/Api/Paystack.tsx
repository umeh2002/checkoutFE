import axios from "axios"

const url:string ="http://localhost:5555/api"

export const donateMoney = async (data:any) => {
    try {
      return await axios.post(`${url}/pay-with-PayStack`, {amount:data}).then((res:any)=>{
        
        console.log(res.data.data.data)
        return res.data.data.data
      })
    } catch (error) {
      console.error('Error in donateMoney:', error);
    }
  };
  
  
export const donateMoneyWallet =async(data:any)=>{
    try {
        return await axios.post(`${url}/pay-with-wallet`, data).then((res:any)=>{
            // return res.data.data
            console.log(res.data.data)
        })
    } catch (error) {
    console.log(error)
    }
    }