import axios from "axios";

const url: string = "https://checkout-zt02.onrender.com/api";

export const donateMoney = async (data: any) => {
  try {
    return await axios
      .post(`${url}/pay-with-PayStack`, {
        email: data.email,
        amount: data.amount,
      })
      .then((res: any) => {
        return res.data.data.data;
      });
  } catch (error) {
    console.error("Error in donateMoney:", error);
  }
};

export const donateMoneyWallet = async (data: any) => {
  try {
    return await axios.post(`${url}/pay-with-wallet`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
