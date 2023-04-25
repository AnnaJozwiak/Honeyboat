import React, {useState} from 'react';
import imageBack from "../assets/tlo4.png";
import {CssBaseline} from "@mui/material";
import imageTop from "../assets/wave4.svg";

import AdminHeader from "./AdminHeader";
import ProductsTable from "./ProductsTable";
import AddProduct from "./AddProduct";

const AdminPanel = ({onAdd}) => {
    const [isDisplayAdd, setIsDisplayAdd] = useState(false)

    const handleAdd = () => {
        setIsDisplayAdd(true);
    }

    return (
        <div style={{
            backgroundImage: `url(${imageBack})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            height:'100vh'
        }}>
            <CssBaseline/>
            <div style={{
                backgroundImage: `url(${imageTop})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // height:'20hv',
                backgroundPositionY:'-20px'
            }}>
                <AdminHeader/>
                {!isDisplayAdd && <ProductsTable onAdd={handleAdd}/>}
                {isDisplayAdd && <AddProduct/>}

            </div>

        </div>
    )
}

export default AdminPanel;