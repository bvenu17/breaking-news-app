import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
 
    title: {
       // color: '#2f3640',
        color:'#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        alignSelf: 'flex-start',
    },
    button: {
       /* backgroundColor:'#2f3542',
        fontWeight: 'bold',
        alignSelf:'flex-start',
        borderRadius: 10,
        color:'#eccc68',
        marginTop:10*/
        height: 'max-content',
        border: '3px solid',
        borderColor: '#fff',
        //borderTopWidth: 10,
        alignSelf:'flex-start',
        borderBottomStyle: 'dotted',
        padding:10,
        color: 'rgb(204, 48, 79)',
        backgroundColor:'#fff',
        marginTop:10,
        
    },
    description: {
        alignSelf: 'flex-start',
        color: '#fff',
        fontStyle: 'italic',
        marginTop: 10,
        fontSize:20
    },
  }));

function SportsNews({item}) {
    const classes = useStyles();
return (
    
    <div className="SportsNewsMainContainer">
        <div className="SportsNewsCardContainer">
            <Toolbar className="SportsNewsToolbar">
                <Typography gutterBottom variant="h5" component="h2" align="left" className={classes.title}>
                    {item.title}
                </Typography>
                <img src={item.urlToImage} alt="Not available"  className="imageView" />
                <Typography  variant="body1"  className={classes.description}>
                    {item.description}
                </Typography>
                <Button variant="outlined"  target=".blank" href={item.url} size="large"  className={classes.button}>
                    Read More
                </Button>
            </Toolbar>
        </div>
    </div>
);
}
export default SportsNews;
