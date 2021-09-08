import React, { useState } from 'react';
import { Image } from 'antd';

import style from './Feature.module.scss'

const Feature = () => {
    return(
    <>       
        <h1>Featured Product</h1>    

        <div className={style.feature}>    
            <div className="item" id="item-1">
                <Image preview={{ visible: false }} width={200} src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" onClick={() => setVisible(true)} />
            </div>
            <div className="item" id="item-2">
                <Image preview={{ visible: false }} width={200} src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" onClick={() => setVisible(true)} />
            </div>
            <div className="item" id="item-3">
                <Image preview={{ visible: false }} width={200} src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" onClick={() => setVisible(true)} />
            </div>
            <div className="item" id="item-4">
                <Image preview={{ visible: false }} width={200} src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" onClick={() => setVisible(true)} />
            </div>
            {/* <div className="item" id="item-5">
                <Image preview={{ visible: false }} width={200} src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" onClick={() => setVisible(true)} />
            </div> */}
        </div>
    </>    
    )
}

export default Feature