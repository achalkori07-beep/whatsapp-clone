import React, { useState } from 'react';
import { Search, MoreVertical, MessageSquare, Phone, Video, Send, Paperclip, Smile } from 'lucide-react';

// Sample dummy chat list data
const dummyChats = [
  { id: 1, name: 'John Doe', lastMsg: 'Hey! How is the project going?', time: '10:45 AM', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' },
  { id: 2, name: 'Design Team', lastMsg: 'Sarah sent a photo', time: '09:30 AM', avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100' },
  { id: 3, name: 'Alex Smith', lastMsg: 'See you tomorrow!', time: 'Yesterday', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100' },
];

export default function ChatDashboard({ user, onLogout }) {
  const [activeChat, setActiveChat] = useState(dummyChats[0]);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey there! Welcome to the chat.', sender: 'them', time: '10:40 AM' },
    { id: 2, text: 'Hey! Thanks, the UI looks awesome.', sender: 'me', time: '10:42 AM' },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    // Add new message
    const newMsg = {
      id: Date.now(),
      text: messageText,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMsg]);
    setMessageText('');
  };

  return (
    <div className="flex h-screen bg-[#111b21] text-[#e9edef] overflow-hidden">
      
      {/* --- LEFT SIDEBAR: CHAT LIST --- */}
      <div className="w-full md:w-[380px] border-r border-[#2a3942] flex flex-col bg-[#111b21]">
        
        {/* Sidebar Header */}
        <div className="h-16 bg-[#202c33] px-4 flex items-center justify-between border-b border-[#2a3942]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center font-bold text-white uppercase">
              {user?.email?.[0] || 'U'}
            </div>
            <span className="font-semibold text-sm truncate max-w-[150px]">{user?.email || 'User'}</span>
          </div>
          <div className="flex items-center gap-3 text-[#aebac1]">
            <button title="New Chat" className="p-2 hover:bg-[#374248] rounded-full transition"><MessageSquare className="w-5 h-5" /></button>
            <button onClick={onLogout} title="Logout" className="p-2 hover:bg-[#374248] rounded-full transition"><MoreVertical className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-2 bg-[#111b21]">
          <div className="relative bg-[#202c33] rounded-lg flex items-center px-3 py-1.5">
            <Search className="w-4 h-4 text-[#8696a0] mr-3" />
            <input 
              type="text" 
              placeholder="Search or start new chat" 
              className="bg-transparent text-sm w-full focus:outline-none placeholder-[#8696a0]"
            />
          </div>
        </div>

        {/* Chat List Items */}
        <div className="flex-1 overflow-y-auto">
          {dummyChats.map((chat) => (
            <div 
              key={chat.id} 
              onClick={() => setActiveChat(chat)}
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-[#202c33] transition border-b border-[#222d34] ${activeChat.id === chat.id ? 'bg-[#2a3942]' : ''}`}
            >
              <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-semibold text-sm truncate">{chat.name}</h4>
                  <span className="text-xs text-[#8696a0]">{chat.time}</span>
                </div>
                <p className="text-xs text-[#8696a0] truncate mt-0.5">{chat.lastMsg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- RIGHT PANEL: ACTIVE CHAT AREA --- */}
      <div className="hidden md:flex flex-1 flex-col bg-[#0b141a] relative">
        
        {/* Chat Header */}
        <div className="h-16 bg-[#202c33] px-4 flex items-center justify-between border-b border-[#2a3942] z-10">
          <div className="flex items-center gap-3">
            <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold text-sm">{activeChat.name}</h3>
              <p className="text-xs text-[#8696a0]">online</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[#aebac1]">
            <Video className="w-5 h-5 cursor-pointer hover:text-white" />
            <Phone className="w-5 h-5 cursor-pointer hover:text-white" />
            <Search className="w-5 h-5 cursor-pointer hover:text-white" />
            <MoreVertical className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-[#0b141a]">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[65%] px-3 py-2 rounded-lg text-sm relative ${
                  msg.sender === 'me' 
                    ? 'bg-[#005c4b] text-[#e9edef] rounded-tr-none' 
                    : 'bg-[#202c33] text-[#e9edef] rounded-tl-none'
                }`}
              >
                <p className="pr-12">{msg.text}</p>
                <span className="text-[10px] text-[#8696a0] absolute bottom-1 right-2">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input Footer */}
        <form onSubmit={handleSendMessage} className="h-16 bg-[#202c33] px-4 flex items-center gap-3">
          <Smile className="w-6 h-6 text-[#8696a0] cursor-pointer hover:text-white" />
          <Paperclip className="w-6 h-6 text-[#8696a0] cursor-pointer hover:text-white" />
          <input 
            type="text" 
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Type a message" 
            className="flex-1 bg-[#2a3942] text-sm text-[#e9edef] placeholder-[#8696a0] px-4 py-2.5 rounded-lg focus:outline-none"
          />
          <button type="submit" className="bg-[#00a884] p-2 rounded-full text-white hover:bg-[#029071] transition">
            <Send className="w-5 h-5" />
          </button>
        </form>

      </div>
    </div>
  );
}