import {IconButton, TableCell, TableRow} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {Link} from 'react-router-dom';

import supabase from "./SupabaseClient";

import {ShopContext} from "../components/shop/ShopContext";

const ItemRow = ({product, index, onDelete}) => {

    //usuniecie z bazy
    const handleDelete = async () => {
        const { data} = await supabase
            .from('products')
            .delete()
            .eq('id', product.id)

        onDelete(product.id)
    }

    return (
        <TableRow

            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {index + 1 }
            </TableCell>
            <TableCell >{product.id}</TableCell>
            <TableCell >{product.name}</TableCell>
            <TableCell >{product.description}</TableCell>
            <TableCell >{product.count}</TableCell>
            <TableCell >{product.weight}</TableCell>
            <TableCell >{product.price}</TableCell>
            <TableCell >{product.img}</TableCell>
            <TableCell align="right">
                <Link to={'/admin/'+product.id}>
                    <IconButton>
                        <EditIcon sx={{fontSize:'22px'}}/>
                    </IconButton>
                </Link>
            </TableCell>
            <TableCell >
                <IconButton  >
                    <DeleteIcon sx={{fontSize:'22px'}}
                                onClick={handleDelete}
                    />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default ItemRow;