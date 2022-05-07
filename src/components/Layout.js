import React from "react";
import Drawer from "@mui/material/Drawer";
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from '@mui/material/Divider'
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 300

const useStyles = makeStyles({
    drawer: {
        width: drawerWidth
    },
    root: {
        display: 'flex'
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default function Layout({ children }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* App bar */}
            <AppBar className={classes.appbar}>
                <Toolbar>
                    {/* <SearchIcon className={classes.search} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} /> */}
                </Toolbar>
            </AppBar>

            {/* Side bar */}
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
            >
                <div>
                    <Typography variant='h5' style={{ paddingTop: '30px' }}>
                        MOVIES STORE
                        <Divider style={{ paddingTop: '20px' }} />
                    </Typography>
                </div>
            </Drawer>
            <div>
                {children}
            </div>
        </div>
    )
} 