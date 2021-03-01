import React from 'react'
import Styles from './user.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(imageid, _id, UserName, registerdate	, Delte) {
    return { imageid, _id, UserName, registerdate, Delte };
  }
  
  const rows = [
    createData('data', 156156156, "azizjarrar", "19/8/23", "156/1565/16"),
    createData('data', 261565222, "ahlemdejbi", "24/15/23", "156/1565/16"),
    createData('data', 781269518, "ramibendeli", "12/20/23", "156/1565/16"),
    createData('data', 216916989, "faresamri", "7/20/23", "156/1565/16"),


  ];
const user = () => {
    const classes = useStyles();

    return (
        <div className={Styles.container}>
            <div className={Styles.cards}>
                <div className={Styles.card}><h2>Total User 0</h2></div>
                <div className={Styles.card}><h2>This week User 0</h2></div>
                <div className={Styles.card}><h2>Posts 0</h2></div>
            </div>
            <div className={Styles.searchForUser}>
                <div className={Styles.inputSearch}><input placeholder="search for user"/></div>
            </div>
            <div className={Styles.tableContainer}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">image</TableCell>
            <TableCell align="right">_id</TableCell>
            <TableCell align="right">userName</TableCell>
            <TableCell align="right">register date</TableCell>
            <TableCell align="right">delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
       
              <TableCell align="right"><div className={Styles.image}></div></TableCell>
              <TableCell align="right">{row._id}</TableCell>
              <TableCell align="right">{row.UserName}</TableCell>
              <TableCell align="right">{row.registerdate}</TableCell>
              <TableCell align="right"><p className={Styles.delete}>Delete</p></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        </div>
    )
}

export default user
