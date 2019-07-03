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
        height: 'max-content',
        border: '3px solid',
        borderColor: '#fff',
        //borderTopWidth: 10,
        alignSelf:'flex-start',
        borderBottomStyle: 'dotted',
        padding:10,
        color: '#d53369',
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

function EntertainmentNews({item}) {
    const classes = useStyles();
return (
    
    <div className="EntertainmentNewsMainContainer">
        <div className="EntertainmentNewsCardContainer">
            <Toolbar className="EntertainmentNewsToolbar">
                <Typography gutterBottom variant="h5" component="h2" align="left" className={classes.title}>
                    {item.title}
                </Typography>
                <img src={item.urlToImage} alt="Not available"  className="imageView" />
                <Typography  variant="body1"  className={classes.description}>
                    {item.description}
                </Typography>
                <Button variant="outlined" target=".blank" href={item.url} size="large" color="primary" className={classes.button}>
                    Read More
                </Button>
            </Toolbar>
        </div>
    </div>
);
}
export default EntertainmentNews;
