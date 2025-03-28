import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import { assets } from "../../assets/assets";
import { Context } from '../../context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        onSent(prompt);
    }

    return (
        <div className='sidebar'>
            {/* Top Section */}
            <div className='top'>
                <img src={assets.menu_icon} onClick={() => setExtended(prev => !prev)} className='menu' alt='menu_icon' />
                <div onClick={()=> newChat()} className='new-chat'>
                    <img src={assets.plus_icon} alt='plus_icon' />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        {
                            prevPrompts.map((item, index) => {
                                return (
                                    <div className='recent-entry' key={index} onClick={() => loadPrompt(item)}>
                                        <img src={assets.message_icon} alt='message_icon' />
                                        <p>{item.slice(0, 18)}...</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    : null}
            </div>

            {/* Bottom Section */}
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon} alt='question_icon' />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon} alt='history_icon' />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon} alt='setting_icon' />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
