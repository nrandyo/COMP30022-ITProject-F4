import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import logo from '../logo.svg';
import './styles.css'

class Navbar extends Component {
    render(){
        return (
            <Menu>
                <Menu.Menu>
                    <Menu.Item link>
                        Fantastic 4 <img src={logo} alt='logo' className='Navbar-logo'/>
                    </Menu.Item>
                    <Menu.Item link>
                        Timeline
                    </Menu.Item>
                    <Menu.Item link>
                        Artifacts
                    </Menu.Item>
                    <Menu.Item link>
                        Family Tree
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position="right">
                    <Menu.Item link>
                    <i class="google icon"></i> Login 
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Navbar;