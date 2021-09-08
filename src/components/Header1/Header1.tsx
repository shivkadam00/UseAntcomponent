import React from 'react';
import style from './Header1.module.scss'
import { Image,Select,Input, Space,Button } from 'antd';
import { AudioOutlined,ShoppingOutlined,HeartOutlined } from '@ant-design/icons';


const { Option } = Select;
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => alert(value);



function handleChange(value) {
    // console.log(`selected ${value}`);
    // console.log(`selected ${value}`);
    alert(`selected ${value}`);
  }


const Header1 = () =>{
    return(
        <>
            <div className={style.topheader}>
                <marquee>
                    <p>FREE HOME DELIVERY ACROSS INDIA!! DUE TO THE CURRENT SITUATION, WE ARE UNABLE TO PROCESS ORDERS RELATED TO "PERSONALISED PORTRAITS" AND "LOGOS"</p>
                </marquee>
            </div>
            <div className={style.logSection}>
                <div className="item" id="item-1">
                    <Image width={70} src="https://kazaricollection.com/wp-content/uploads/2020/08/20-kc-logo.png"/>
                </div>
                <div className="item" id="item-2">
                    {/* <span><Select defaultValue="lucy" style={{ width: 100 }} onChange={handleChange}>
                        <Option value="jack">All</Option>
                        <Option value="lucy">Apparel</Option>
                    </Select>
                    </span> */}
                   
                    <Space direction="vertical">
                        <Search placeholder="input search text" onSearch={onSearch} enterButton />
                    </Space>
                </div>
                <div className="item" id="item-3">
                    <Button type="primary" style={{background:'#560C33',borderColor:'#560C33'}}>LOGIN / REGISTAR</Button>
                </div>
                <div className="item" id="item-4">
                    <HeartOutlined style={{ fontSize: '16px', color: 'white',background:'#560C33',padding:'7px',borderRadius:'75px' }} />
                    RS:0.00
                </div>
                <div className="item" id="item-5"><ShoppingOutlined style={{ fontSize: '30px', color: '#560C33' }}/>  </div>
            </div>
        </>
    )
}

export default Header1