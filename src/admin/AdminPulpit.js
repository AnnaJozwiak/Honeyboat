import React, {useState} from 'react';
import imageBack from "../assets/tlo4.png";
import {CssBaseline} from "@mui/material";
import imageTop from "../assets/wave4.svg";
import { Route, Routes, Link, BrowserRouter} from 'react-router-dom';

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
    const handleSave = () => {
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
            <div style={{
                // backgroundImage: `url(${imageTop})`,
                // backgroundRepeat: 'no-repeat',
                // backgroundSize: 'cover',
                // // height:'20hv',
                // backgroundPositionY:'-20px'
            }}>
                <AdminHeader/>
                {!isDisplayAdd && <BasicTable onAdd={handleAdd}/>}
                {isDisplayAdd && <AddProduct onCancel = {handleCancel}/>}
            </div>

        </div>
    )
}

export default AdminPulpit;