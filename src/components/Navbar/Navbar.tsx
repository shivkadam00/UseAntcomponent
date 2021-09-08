import React from 'react'
import style from './Navbar.module.scss'


import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;


const Navbar = () => {
    return(
        <div>
            <Layout style={{height:'10px'}}>
                <Header style={{ position: 'initial', zIndex: 1, width: '100%', backgroundColor: '#560C33' }}>
                    <div className="logo" />
                    <Menu mode="horizontal" defaultSelectedKeys={['2']} style={{backgroundColor: '#560C33',color:'white'}}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">About Us</Menu.Item>
                        <Menu.Item key="3">Home Decore</Menu.Item>
                        <Menu.Item key="4">Personalize</Menu.Item>
                        <Menu.Item key="5">Apparel</Menu.Item>
                        <Menu.Item key="6">Bags</Menu.Item>
                        <Menu.Item key="7">Contact Us</Menu.Item>
                        <Menu.Item key="8">Knowledge Center</Menu.Item>
                    </Menu>
                </Header>
            </Layout>                
        </div>
    )
}

export default Navbar