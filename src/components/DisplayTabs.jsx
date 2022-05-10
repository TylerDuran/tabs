import React, {useState} from 'react'

const DisplayTabs = (props) => {
    const [displayTabContent, setDisplayTabContent] = useState() // Remember that anything dynamic needs a state variable to be able to alter it 

    const tabButton = (e) => {
        console.log(e.content)
        setDisplayTabContent(e.content)
    }

    return (
        <div>
            <div className='Tab-Bar'>
                {
                props.tabs.map((tab, index) => {
                    return (
                        <div key={index}>
                            <button className='Tab-Button' onClick={() => tabButton(tab)}>{tab.title}</button>
                        </div>
                    )
                    })
                }
            </div>
            <div className='Display-Border'>
                {displayTabContent}
            </div>
        </div>
    )
}

export default DisplayTabs