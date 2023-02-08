import {useState, useEffect} from "react";
import axios from "axios";
import {DataGrid} from "@mui/x-data-grid";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie'
import Grid from "@mui/material/Grid";
import { Table, TableCell, TableRow } from "@mui/material";


function DataQuery() {

  const token = Cookies.get('token')

  // for query
  const [tick, setTick] = useState(null)
  const [tableTick, setTableTick] = useState(null)
  const [contract, setContract] = useState(null)
  const [tableContract, setTableContract] = useState(null)
  const [account, setAccount] = useState(null)
  const [tableAccount, setTableAccount] = useState(null)
  const [position, setPosition] = useState(null)
  const [tablePosition, setTablePosition] = useState(null)
  const [order, setOrder] = useState(null)
  const [tableOrder, setTableOrder] = useState(null)
  const [trade, setTrade] = useState(null)
  const [tableTrade, setTableTrade] = useState(null)



  useEffect(() => {
      updateTable( tick, 'tick')
    }, [tick]);
  useEffect(() => {
      updateTable( contract, 'contract')
    }, [contract]);
  useEffect(() => {
      updateTable( account, 'account')
    }, [account]);
  useEffect(() => {
      updateTable( position, 'position')
    }, [position]);
  useEffect(() => {
      updateTable( order, 'order')
    }, [order]);
  useEffect(() => {
      updateTable( trade, 'trade')
    }, [trade]);

  function queryGet(name) {
    axios({
      method: "GET",
      url: `/${name}`,
      headers: {"Authorization": "Bearer " + token}
    }).then((response) => {
      console.log(response)
      if (name === 'tick') setTick(response.data)
      else if (name === 'contract') setContract(response.data)
      else if(name === 'account') setAccount(response.data)
      else if(name === 'position') setPosition(response.data)
      else if(name === 'order') setOrder(response.data)
      else if(name === 'trade') setTrade(response.data)
    }).catch((error) => {
      if (error.response) {
        console.log("Bearer " + token);
        console.log(error.response);
      }
    })
  }

  function updateTable(result_list, name) {
    // add id for the raw_data
    let table;
    if (result_list !== null && result_list.length !== 0) {
      result_list.forEach((element, index) => {
        element['id'] = index
      })

      // map the list to column
      let field_dictionary = Object.keys(result_list[0]).map((x) => ({'field': x}));

      table =
         <div style={{ height: 200, width: '100%' }}>
              <DataGrid
                rows={result_list.slice(0, 100)}
                columns={field_dictionary}
                pageSize={5}
                rowsPerPageOptions={[5]}
                // checkboxSelection
              />
         </div>
        }
    else {
      table =
         <div style={{ height: 200, width: '100%' }}>
          <Table  aria-label="simple table">
          </Table>
         </div>
      }
    if (name === 'tick') setTableTick(table)
    else if (name === 'contract') setTableContract(table)
    else if(name === 'account') setTableAccount(table)
    else if(name === 'position') setTablePosition(table)
    else if(name === 'order') setTableOrder(table)
    else if(name === 'trade') setTableTrade(table)

  }

  
  const  handleQuery = (props) => {
    queryGet(props)
  }
  const  handleAllQuery = () => {
    queryGet('tick');
    queryGet('contract');
    queryGet('account');
    queryGet('position');
    queryGet('order');
    queryGet('trade');
  }

  return (
      <Grid container spacing={0}>
        <Grid item md={12}>
          <Button variant="outlined" onClick={handleAllQuery}>Update all </Button>
        </Grid>
        <Grid item md={6}>
          <div className='tick'>
            {/*<Button variant="outlined" onClick={() => handleQuery('tick')}>Show tick </Button>*/}
            <h2>Tick</h2>
            {tableTick}
          </div>
        </Grid>
        <Grid item md={6}>
          <div className='contract'>
            {/*<Button variant="outlined" onClick={() => handleQuery('contract')}>Show contract </Button>*/}
            <h2>Contract</h2>
            {tableContract}
          </div>
        </Grid>
        <Grid item md={6}>
          <div className='account'>
            {/*<Button variant="outlined" onClick={() => handleQuery('account')}>Show account </Button>*/}
            <h2>Account</h2>
            {tableAccount}
          </div>
        </Grid>
        <Grid item md={6}>
          <div className='position'>
            {/*<Button variant="outlined" onClick={() => handleQuery('position')}>Show position </Button>*/}
            <h2>Position</h2>
            {tablePosition}
          </div>
        </Grid>
        <Grid item md={6}>
          <div className='order'>
            {/*<Button variant="outlined" onClick={() => handleQuery('order')}>Show order </Button>*/}
            <h2>Order</h2>
            {tableOrder}
          </div>
        </Grid>
        <Grid item md={6}>
          <div className='trade'>
            {/*<Button variant="outlined" onClick={() => handleQuery('trade')}>Show trade </Button>*/}
            <h2>Trade</h2>
            {tableTrade}
          </div>
        </Grid>
      </Grid>
  )
}
export default DataQuery