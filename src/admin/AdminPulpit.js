import React, {useState} from 'react';
import imageBack from "../assets/tlo4.png";
import {CssBaseline} from "@mui/material";


import AdminHeader from "./AdminHeader";
import AddProduct from "./AddProduct";
import BasicTable from "./Table";


const AdminPulpit = ({onAdd, onCancel}) => {
    const [isDisplayAdd, setIsDisplayAdd] = useState(false);

    const handleAdd = () => {
        setIsDisplayAdd(true);
    }

    const handleCancel = () => {
        setIsDisplayAdd(false)
    }

    return (
        <div style={{
            backgroundImage: `url(${imageBack})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            height:'100vh'
        }}>
            <CssBaseline/>
            <AdminHeader/>
            {!isDisplayAdd && <BasicTable onAdd={handleAdd}/>}
            {isDisplayAdd && <AddProduct onCancel = {handleCancel}/>}

        </div>
    )
}

export default AdminPulpit;