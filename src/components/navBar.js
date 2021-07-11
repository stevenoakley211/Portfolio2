
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles';

import { AppBar,Tabs,Tab, } from '@material-ui/core';

function NavBar(props) {
    const theme= createTheme({
        palette: {
            primary: {
                main: "#ff4747",
            }
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed" color="primary"style={{backgroundColor:"#Be2a25",opacity:0.8}}>
                
                <Tabs value={props.activeTab} onChange={props.onTabChange} >
                    <Tab label="About"  style={{marginLeft:'auto'}} component={Link} to="/about"/>
                    <Tab label="Projects" component={Link} to="/projects"/>
                    
                    <Tab label="Messages"/>
                </Tabs>
               
            
            </AppBar>
        </ThemeProvider>
    )
}

export default NavBar;