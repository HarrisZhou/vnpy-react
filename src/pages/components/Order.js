import {useState} from "react";

import axios from "axios";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Cookies from "js-cookie";


function Order() {

  const token = Cookies.get('token')
  const [orderResult, setOrderResult] = useState()
  const [orderConfig, setOrderConfig] = useState({
    "symbol":"",
    "exchange": "",
    "direction": "",
    "type": "",
    "volume": 0,
    "price": 0,
    "offset": "",
    "reference": "WebTrader"
  })



  function orderQuery(props) {
    axios({
      method: "POST",
      url:'/order',
      data:props,
      headers : {"Authorization": "Bearer " + token,
       'accept': 'application/json'}
    }).then((response)=>{
      console.log(response.data);
      setOrderResult(response.data)
    }).catch((error) => {
      if (error.response) {
        console.log("Bearer " + token);
        console.log(error.response);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        }
    })
  }
  // const order_test = {
  //   "symbol": "SM305",
  //   "exchange": "CZCE",
  //   "direction": "多",
  //   "type": "限价",
  //   "volume": 1,
  //   "price": 69500,
  //   "offset": "开",
  //   "reference": "WebTrader"
  // };

  //
  const handleExchange = (e: SelectChangeEvent) => {
    setOrderConfig({...orderConfig, "exchange":e.target.value});
  }
  const handleSymbol = (e: SelectChangeEvent) => {
    setOrderConfig({...orderConfig, "symbol":e.target.value});
  }
  const handleVolume = (e: SelectChangeEvent) => {
    setOrderConfig({...orderConfig, "volume":e.target.value});
  }
  const handlePrice = (e: SelectChangeEvent) => {
    setOrderConfig({...orderConfig, "price":e.target.value});
  }
  const handleDirection = (e: SelectChangeEvent) => {
    setOrderConfig({...orderConfig, "direction":e.target.value});
  }
  const handleType = (e: SelectChangeEvent) => {
    setOrderConfig({...orderConfig, "type":e.target.value});
  }
  const handleOffset= (e: SelectChangeEvent) => {
    setOrderConfig({...orderConfig, "offset":e.target.value});
  }

  return (
    <div>
      <Stack spacing={2}>
      <FormControl sx={{ width:0.2 }}>
        <InputLabel id="demo-simple-select-label">Exchange</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={orderConfig['exchange']}
          onChange={handleExchange}
        >
          <MenuItem value="CFFEX">CFFEX</MenuItem>
          <MenuItem value="SHFE">SHFE</MenuItem>
          <MenuItem value="CZCE">CZCE</MenuItem>
          <MenuItem value="DCE">DCE</MenuItem>
          <MenuItem value="INE">INE</MenuItem>
          <MenuItem value="SSE">SSE</MenuItem>
          <MenuItem value="NASDAQ">NASDAQ</MenuItem>
          <MenuItem value="NYSE">NYSE</MenuItem>
          <MenuItem value="SEHK">SEHK</MenuItem>
        </Select>
      </FormControl>

        <FormControl sx={{ width:0.2 }}>
       <TextField
          required
          id="outlined-required"
          label="Symbol"
          defaultValue=""
          onChange={handleSymbol}
        />
      </FormControl>

        <FormControl sx={{ width:0.2 }}>
       <TextField
          required
          id="outlined-required"
          label="Volume"
          defaultValue=""
          onChange={handleVolume}
        />
      </FormControl>

        <FormControl sx={{ width:0.2 }}>
       <TextField
          required
          id="outlined-required"
          label="Price"
          defaultValue=""
          onChange={handlePrice}
        />
      </FormControl>
      <FormControl sx={{ width:0.2}}>
        <InputLabel id="demo-simple-select-label">Direction</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={orderConfig['direction']}
          onChange={handleDirection}
        >
          <MenuItem value={"多"}>LONG</MenuItem>
          <MenuItem value={"少"}>SHORT</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ width:0.2 }}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={orderConfig['type']}
          onChange={handleType}
        >
          <MenuItem value={"限价"}>Limit</MenuItem>
          <MenuItem value={"市价"}>Market</MenuItem>
          <MenuItem value={"Stop"}>Stop</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ width:0.2 }}>
        <InputLabel id="demo-simple-select-label">Offset</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={orderConfig['offset']}
          onChange={handleOffset}
        >
          <MenuItem value={"开"}>Yes</MenuItem>
          <MenuItem value={"关"}>No</MenuItem>
        </Select>
      </FormControl>

      <Button sx={{ width:0.2 }} onClick={() => {orderQuery(orderConfig); console.log(orderConfig)}}>Order</Button>
        result:{orderResult}
      </Stack>
    </div>
  )
}
export default Order