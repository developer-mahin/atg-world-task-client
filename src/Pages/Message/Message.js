import React, { useState } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import { MdGroupAdd, MdPersonAdd } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Components/spinner/Spinner';
import "./message.css"

const Message = () => {
    const [messages, setMessages] = useState([
        { text: "Hello there!", isMine: false },
        { text: "Hi! How can I help you?", isMine: true },
        { text: "Is real time message implemented?", isMine: false },
        { text: "Sorry sir! not yet. It'll be implemented soon!!!", isMine: true },
    ]);


    const { data: users = [], isLoading } = useQuery({
        queryKey: ["userName"],
        queryFn: async () => {
            const res = await fetch("https://banao-project-server.vercel.app/all-users", {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    "content-type": "application/json"
                }
            })
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Spinner />
    }


    const handleMessageSubmit = (text) => {
        const newMessage = { text, isMine: true };
        setMessages([...messages, newMessage]);
    };

    return (
        <div className=''>
            <div className='border shadow position-sticky top-0 bg-white z-index'>
                <Navbar></Navbar>
            </div>
            <div className='mt-3'>
                <div className='container mx-auto row '>
                    <div className='col-md-5'>
                        <div style={{height:"82vh"}}className='bg-secondary bg-opacity-10 p-4 rounded overflow-scroll'>
                            <div className=' d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className=''>Message</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <MdPersonAdd className='fs-4 text-secondary' />
                                    <MdGroupAdd className='fs-3 text-secondary' />
                                </div>
                            </div>
                            <div className='position-relative'>
                                <div className='position-absolute  bottom-8px left-12px'>
                                    <BiSearchAlt2 className='fs-4 text-secondary' />
                                </div>
                                <input type="text" name='search' className='w-100 border bg-secondary bg-opacity-25 px-5 py-2 rounded'
                                    placeholder='Search Message'
                                />
                            </div>

                            <div className='mt-4'>
                                {
                                    users?.map(user => <div
                                        className='my-2 border rounded'
                                        key={user._id}>
                                        <p className='m-0 d-block text-decoration-none text-black py-2 px-3 text-hover-blue cursor-pointer'>{user.name}</p>
                                    </div>)
                                }
                            </div>
                        </div>



                    </div>
                    <div className='col-md-7'>
                        <div className="">
                            <div className="card">
                                <div className="card-header">Chat Box</div>
                                <div className="card-body">
                                    <div className="message-list">
                                        {messages.map((message, index) => (
                                            <div
                                                key={index}
                                                className={`message ${message.isMine ? 'mine' : 'other'}`}
                                            >
                                                {!message.isMine ?
                                                    <img
                                                        src="https://i.ibb.co/6yYyFsw/IMG-1487.jpg"
                                                        alt="User"
                                                        className="user-image"
                                                    /> : <img
                                                        src="https://i.ibb.co/bJHfcg3/347009991-144345801873540-3848896414872478600-n.jpg"
                                                        alt="User"
                                                        className="user-image"
                                                    />
                                                }
                                                {message.text}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <MessageInput onMessageSubmit={handleMessageSubmit} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const MessageInput = ({ onMessageSubmit }) => {
    const [inputText, setInputText] = useState('');

    const handleSubmit = () => {
        if (inputText.trim() !== '') {
            onMessageSubmit(inputText);
            setInputText('');
        }
    };

    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Type your message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <div className="input-group-append">
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Message;