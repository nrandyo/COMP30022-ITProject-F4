import React from 'react';
import homeStyle from './homeStyle.css';
import Grid from '@material-ui/core/Grid';
import insertImage from '../images/insertImage.png';
import { Icon } from 'semantic-ui-react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';


const IconExampleLoading = () => (
    <div>
        <Icon loading name='spinner' />
        <Icon loading name='certificate' />
        <Icon loading name='asterisk' />
    </div>
)

class Home extends React.Component {
    render() {
        return (
            <div id="pageWrapper">


                <List id="midIcons">
                    <ListItem>
                        <Avatar style={{backgroundColor: "#8fb4c4"}} >
                            <i className="keyboard icon"></i>
                        </Avatar>
                    </ListItem>
                    <div className="line"></div>
                    <ListItem>
                        <Avatar style={{backgroundColor: "#8fb4c4"}}>
                            <i className="add icon"></i>
                        </Avatar>
                    </ListItem>
                    <div className="line"></div>
                    <ListItem>
                        <Avatar style={{backgroundColor: "#8fb4c4"}}>
                            <i className="eye icon"></i>
                        </Avatar>
                    </ListItem>
                </List>

            <div className="homeContent">
            <Grid container justify="center" alignItems="center">




            <Grid container item xs={10} className="homeGrid" justify="center" alignItems="center">
            <Grid item xs={5}>
            <h1>1. Register</h1>

        <p>Register with your google account and create your profile</p>
        </Grid>
        <Grid item xs={5}>
            <img className="insertImageRight" src={insertImage}/>
        </Grid>
        </Grid>

        <Grid container item xs={10} className="homeGrid" justify="center" alignItems="center">
            <Grid item xs={5}>
            <img className="insertImageLeft" src={insertImage}/>
        </Grid>
        <Grid item xs={5}>
            <h1>2. Add Artifacts</h1>
        <p>Add artifacts that you want to share with the Sterlings!</p>
        </Grid>
        </Grid>

        <Grid container item xs={10} className="homeGrid" justify="center" alignItems="center">
            <Grid item xs={5}>
            <h1>3. View Timeline</h1>
        <p>Check out all the artifacts posted by your family and friends on the timeline</p>
        </Grid>
        <Grid item xs={5}>
            <img className="insertImageRight" src={insertImage}/>
        </Grid>
        </Grid>


        </Grid>
        </div>


        </div>
    )
    }
}

export default Home;
