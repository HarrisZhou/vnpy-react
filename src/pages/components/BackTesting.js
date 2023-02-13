import axios from "axios";
import Cookies from "js-cookie";
import Button from "@mui/material/Button";

function BackTesting() {
  const token = Cookies.get('token')
  const config = {
    vt_symbol :"AAPL.NASDAQ",
    interval : "1h",
    start:"2022-01-01",
    end:"2023-01-01",
    rate :0.3 / 10000,
    slippage:0.2,
    size:300,
    pricetick:0.2,
    capital:1_000_000,
  }

  function backTestingQuery(props) {
    axios({
      method: "POST",
      url: '/backtesting',
      data: props,
      headers: {
        "Authorization": "Bearer " + token,
        'accept': 'application/json'
      }
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      if (error.response) {
        console.log("Bearer " + token);
        console.log(error.response);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      }
    })
  }

  return (
    <>
    <Button sx={{ width:0.2 }} onClick={() => {backTestingQuery(config); console.log(config)}}>BackTesting</Button>
    </>
  )
}

export default BackTesting