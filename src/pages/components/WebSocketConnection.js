import {useState, useEffect} from "react";

import {DataGrid} from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import Cookies from "js-cookie";
import { Table } from "@mui/material";
function WebSocketConnection() {

  const token = Cookies.get('token')
  const [socketData, setSocketData] = useState(null)
  const [table, setTable] = useState(null)


  useEffect(() => {
    showTable(socketData);
  }, [socketData])


  const socketQuery = () => {
   const ws = new WebSocket(`ws://127.0.0.1:8000/ws/?token=${token}`);
   ws.onmessage = function (event) {
     const json = JSON.parse(event.data);
     // console.log(json)
     try {
       if (json['topic'] === 'ePosition.') {
         // console.log(json['data'])
         setSocketData(json['data'])
       }
     } catch (err) {
       console.log(err);
     }
   }
   }

  function showTable(socket_res) {
    // add id for the raw_data
    if (socket_res !== null) {
      socket_res['id'] = 0
      // map the list to column
      let field_dictionary = Object.keys(socket_res).map((x) => ({'field': x}));
      console.log(socket_res)
      // set the table
      setTable(
        <div style={{height: 300, width: '100%'}}>
          <DataGrid
            rows={[socket_res]}
            columns={field_dictionary}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      )
    }
    else {
      setTable(
         <div style={{ height: 200, width: '100%' }}>
          <Table  aria-label="simple table">
          </Table>
         </div>
      )
    }
  }

  const handleSocket = () => {
      // read the data from query
      socketQuery();

  }

  return (
     <div>
       <Button variant="outlined" onClick={() => handleSocket()}>Update tick </Button>
       {table}
     </div>
  )

}
export default WebSocketConnection