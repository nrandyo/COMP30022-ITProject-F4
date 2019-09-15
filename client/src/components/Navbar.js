import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import {

    Container,
    Divider,
    Grid,
    Header,

    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'
import logo from '../logo.svg';
import './styles.css'

class Navbar extends Component {
    render(){
        return (
                        // <Menu>
            //     <Menu.Menu>
            //         <Menu.Item link>
            //             Fantastic 4 <img src={logo} alt='logo' className='Navbar-logo'/>
            //         </Menu.Item>
            //         <Menu.Item link>
            //             Timeline
            //         </Menu.Item>
            //         <Menu.Item link>
            //             Artifacts
            //         </Menu.Item>
            //         <Menu.Item link>
            //             Family Tree
            //         </Menu.Item>
            //     </Menu.Menu>
            //     <Menu.Menu position="right">
            //         <Menu.Item link>
            //         <i class="google icon"></i> Login 
            //         </Menu.Item>
            //     </Menu.Menu>
            // </Menu>
            <Responsive>

              <Segment
                // inverted
                textAlign='center'
                style={{ minHeight: 90, padding: '0em 0em' }}
                vertical
              >
                <Menu
                  color = "blue"
                  fixed
                  pointing
                  secondary
                  size='large'
                >
                  <Container>
                    <Menu.Item as='a' active>
                      Home
                    </Menu.Item>
                    <Menu.Item as='a'>Artifacts</Menu.Item>
                    <Menu.Item as='a'>Timeline</Menu.Item>
                    <Menu.Item as='a'>Family Tree</Menu.Item>
                    <Menu.Item position='right'>
                      <Button animated='fade'>
                        <Button.Content visible><i class="google icon"></i></Button.Content>
                        <Button.Content hidden>Login</Button.Content>
                      </Button>
                      
                    </Menu.Item>
                  </Container>
                </Menu>
              </Segment>

          </Responsive>
        );
    }
}

export default Navbar;