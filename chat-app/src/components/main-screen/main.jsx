import { Stack } from "@mui/material";
import { Sidebar } from "./sidebar/sidebar";
import {  Outlet } from "react-router-dom"

export function Main(){
 

    return (
    <Stack direction="row">
        <Sidebar/>
        <Outlet />
    </Stack>

    )
}