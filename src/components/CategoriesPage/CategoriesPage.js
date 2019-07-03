import React from 'react';
import './CategoriesPage.css';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Breakpoint, { BreakpointProvider } from 'react-socks';

const useStyles = makeStyles(theme => ({
 
    heading: {
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        alignSelf: 'center',
    },
    toolbar: {
        height: 'max-content',
        border: '3px solid',
        borderColor: '#fff',
        borderTopWidth: 20,
        borderBottomStyle: 'dotted',
        padding:10,
    }
  }));

function CategoriesPage() {
    const classes = useStyles();
  return (
    <BreakpointProvider>  
    <div className="homeContainer">     
        <Breakpoint small down>  
            <div className="sportsContainerMobile">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h3"  className={classes.heading}>
                    <Link variant="string" color="inherit" underline="none" component = {RouterLink} to="/Sports">
                    Sports 
                    </Link>
                    </Typography>
                </Toolbar>
            </div>
        </Breakpoint> 
        <Breakpoint medium only>  
            <div className="sportsContainerTablet">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h3" className={classes.heading}>
                    <Link variant="string" color="inherit" underline="none" component = {RouterLink} to="/Sports">
                    Sports 
                    </Link>
                    </Typography>
                </Toolbar>
            </div>
        </Breakpoint> 
        <Breakpoint large up>  
            <div className="sportsContainerDesktop">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h2" className={classes.heading}>
                    <Link variant="string" color="inherit" underline="none" component = {RouterLink} to="/Sports">
                    Sports 
                    </Link>
                    </Typography>
                </Toolbar>
            </div>
        </Breakpoint> 
        <Breakpoint small down>
            <div className="technologyContainerMobile">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h3"  className={classes.heading}>
                        <Link variant="string"  color="inherit" underline="none" component = {RouterLink} to="/Technology">
                            Technology
                        </Link>                
                    </Typography>
                </Toolbar>        
            </div>
        </Breakpoint>
        <Breakpoint medium only>
            <div className="technologyContainerTablet">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h3" className={classes.heading}>
                        <Link variant="string" color="inherit" underline="none" component = {RouterLink} to="/Technology">
                            Technology
                        </Link>                
                    </Typography>
                </Toolbar>        
            </div>
        </Breakpoint>
        <Breakpoint large up>
            <div className="technologyContainerDesktop">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h2" className={classes.heading}>
                        <Link variant="string" color="inherit" underline="none" component = {RouterLink} to="/Technology">
                            Technology
                        </Link>                
                    </Typography>
                </Toolbar>        
            </div>
        </Breakpoint>
        <Breakpoint small down>
            <div className="businessContainerMobile">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h3" className={classes.heading}>
                        <Link variant="string" color="inherit" underline="none" component = {RouterLink} to="/Business">
                            Business
                        </Link>                
                    </Typography>
                </Toolbar>          
            </div>
        </Breakpoint>
        <Breakpoint medium only>
            <div className="businessContainerTablet">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h3" className={classes.heading}>
                        <Link variant="string" color="inherit" underline="none" component = {RouterLink} to="/Business">
                            Business
                        </Link>                
                    </Typography>
                </Toolbar>          
            </div>
        </Breakpoint>
        <Breakpoint large up>
            <div className="businessContainerDesktop">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h2" className={classes.heading}>
                        <Link variant="string" color="inherit" underline="none" component = {RouterLink} to="/Business">
                            Business
                        </Link>                
                    </Typography>
                </Toolbar>          
            </div>
        </Breakpoint>
        <Breakpoint small down>
            <div className="entertainmentContainerMobile">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h4" className={classes.heading}>
                        <Link variant="string" color="inherit" underline="none" component = {RouterLink} to="/Entertainment">
                            Entertainment
                        </Link>                
                    </Typography>
                </Toolbar>          
            </div>
        </Breakpoint>    
        <Breakpoint medium only>
            <div className="entertainmentContainerTablet">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h3" className={classes.heading}>
                        <Link variant="string" color="inherit" underline="none" component = {RouterLink} to="/Entertainment">
                            Entertainment
                        </Link>                
                    </Typography>
                </Toolbar>          
            </div>
        </Breakpoint>     
        <Breakpoint large up>
            <div className="entertainmentContainerDesktop">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h2" className={classes.heading}>
                        <Link variant="string" color="inherit" underline="none" component = {RouterLink} to="/Entertainment">
                            Entertainment
                        </Link>                
                    </Typography>
                </Toolbar>          
            </div>
        </Breakpoint>     
    </div>
    </BreakpointProvider>
  );
}

export default CategoriesPage;
