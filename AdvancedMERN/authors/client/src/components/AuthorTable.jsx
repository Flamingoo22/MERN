import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AuthorTable = (props) => {
    const { authors, deleteHandler } = props
    const nav = useNavigate()

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Author</TableCell>
                        <TableCell>Actions available</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        authors.map((author, indx) =>{
                            return (
                            <TableRow key={author._id}>
                                <TableCell>{author.name}</TableCell>
                                <TableCell>
                                    <Stack direction="row" spacing={2}>
                                        <Button variant="outlined" onClick={()=>nav('/edit/'+author._id)} size="small" startIcon={<EditIcon/>}>
                                            Edit
                                        </Button>
                                        <Button variant="outlined" onClick={()=>deleteHandler(author._id)} size='small' startIcon={<DeleteIcon />}>
                                            Delete
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>)
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AuthorTable