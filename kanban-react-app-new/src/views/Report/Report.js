import React from 'react'
import Paper from '@material-ui/core/Paper'
import {Chart,PieSeries,Title} from '@devexpress/dx-react-chart-material-ui'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function Report() {
    const products = [
        { argument:'Meat', value: 44},
        { argument:'Vegetabble', value: 55},
        { argument:'Rice', value: 13}
      ]
    function createData(title, author, progress, status) {
      return { title, author, progress, status }
    }
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3)
    ]
    return (
      <div className='Report'>
        <Paper class="report-products">
          <Chart data={products}>
            <Title text="Products"/>
            <PieSeries valueField="value" argumentField='argument'/>
          </Chart>
        </Paper>
        <Paper class="report-tasks">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Progress</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map(row) => (
                  <TableRow></TableRow>
                )} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    )
}
