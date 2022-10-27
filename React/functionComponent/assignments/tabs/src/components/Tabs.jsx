import React, { useState } from 'react'

const Tabs = () => {

    const [tabs, setTabs] = useState([
        {
            icon:'logo-github',
            header:'Git Hub',
            content:'https://github.com/Flamingoo22',
            class:'list active'
        },
        {
            icon:'logo-linkedin',
            header:'Linkedin',
            content:'https://www.linkedin.com/in/yifan-qiu-9813bb232/',
            class:'list'
        },
        {
            icon:'mail-outline',
            header:'Gmail',
            content:'yif.chu22@gmail.com',
            class:'list'
        }
    ]);

    const [tabContent, setTabContent] = useState('Choose a tab')

    const showTabs = (e, tab, index) =>{
        console.log(tabs)
        setTabContent(tab);
        tabs.map((tab) => tab.class = 'list');
        // setTabs([[...tabs][index].class = 'list active'])
        const newTab = [...tabs];
        newTab[index].class = 'list active';
        setTabs(newTab);
    }

    return (
        <>
            <div className='tabs'>
                <ul>
                { //when using index as key, it can create error when reassign/reordering the elements.
                    tabs.map((tab, indx) =>
                            <li key={indx} className={tab.class}>
                                <a>
                                    <span className='icon'>
                                        <ion-icon name={tab.icon} ></ion-icon>
                                    </span>
                                    <span  onClick={ (e)=>showTabs(e, tab.content, indx) } className='text'>{tab.header}</span>
                                </a>
                            </li>
                    )
                }
                <div className='indicator'></div>
                </ul>
            </div>
            <p className='content'>{tabContent}</p>
        </>
    )
}

export default Tabs