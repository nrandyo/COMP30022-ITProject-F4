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
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state
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
                      
                    <Menu.Item
                        as = {Link} to= '/'
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                   
                    <Menu.Item
                        as = {Link} to= '/artifacts'
                        name='artifacts'
                        active={activeItem === 'artifacts'}
                        onClick={this.handleItemClick}
                        link
                    />
                    <Menu.Item
                        as = {Link} to= '/timeline'
                        name='timeline'
                        active={activeItem === 'timeline'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as = {Link} to= '/familytree'
                        name='family tree'
                        active={activeItem === 'family tree'}
                        onClick={this.handleItemClick}
                    />
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