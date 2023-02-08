import axios from "axios";
import {useState} from "react";
import Button from '@mui/material/Button';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Cookies from "js-cookie";
function Subscribe() {
  const token = Cookies.get('token')
  const [subConfig, setSubConfig] = useState({
    'exchange':null,
    'symbol':null
  });
  function subscribe(exchange, symbol) {
  axios({
      method: "POST",
      url:`/tick/${symbol}.${exchange}`,
      headers : {"Authorization": "Bearer " + token}
    }).then((response)=>{
    console.log(response)
    }).catch((error) => {
      if (error.response) {
        console.log("Bearer " + token);
        console.log(error.response);
        }
    })
  }

  const handleSubscribe = e => {
    e.preventDefault();
    subscribe(subConfig['exchange'], subConfig['symbol']);
  }
  const handleExchange = (e) => {
    setSubConfig({...subConfig, "exchange":e.target.value});
  }
  const handleSymbol = (e) => {
    setSubConfig({...subConfig, "symbol":e.target.value});
  }

  return (
      <div className='subscribe'>
        <p> Enter the code of the stock to subscribe</p>
        {/*<input*/}
        {/*type='text'*/}
        {/*onChange={(e) => setStock(e.target.value)}*/}
        {/*/>*/}
      <Stack spacing={2}>
      <FormControl sx={{ width:0.2 }}>
        <InputLabel id="demo-simple-select-label">Exchange</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subConfig['exchange']}
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
          <Button variant="outlined" onClick={handleSubscribe}>Subscribe</Button>
        </FormControl>
      </Stack>
      </div>
  )

}
export default Subscribe