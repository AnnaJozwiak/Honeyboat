import {ThemeProvider, Paper,TableRow,TableHead,TableContainer,TableCell,TableBody,Table, IconButton, Button} from '@mui/material';
import supabase from "./SupabaseClient";
import {useContext, useEffect, useState} from "react";

import theme from "../theme";

import ItemRow from "./ItemRow";


const BasicTable =({onAdd}) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () =>{
        const { data } = await supabase
            .from("products")
            .select();
        if(data) {
            setProducts(data);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);


    const handleDelete = (id)=> {
        setProducts(prevProducts => {
            return  prevProducts.filter(product => product.id !==id)
        } )
    }

    return (
        <ThemeProvider theme={theme}>
        <TableContainer component={Paper}
                        maxWidth="md"
                        style ={{maxWidth: '1500px', margin: '100px auto' }}>
            <Button variant='contained'
                    color='secondary'
                    sx={{
                        margin: '20px 10px',
                    }}
                    onClick={onAdd}>Dodaj</Button>
            <Table  aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell>Lp.</TableCell>
                        <TableCell>ID produktu</TableCell>
                        <TableCell >Nazwa</TableCell>
                        <TableCell >Opis</TableCell>
                        <TableCell>Ilość</TableCell>
                        <TableCell>Waga (g)</TableCell>
                        <TableCell >Cena</TableCell>
                        <TableCell >Grafika</TableCell>
                        <TableCell > </TableCell>
                        <TableCell > </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product, index) => (
                        <ItemRow
                            key={product.id}
                            product={product}
                            index = {index}
                            onDelete = {handleDelete}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </ThemeProvider>
    );
}

export default BasicTable;