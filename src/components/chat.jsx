
// export default Chatbot;
// @llamaindex/chat-ui
import React, { useEffect, useRef, useState } from "react";
import { ChatSection, ChatMessages, ChatInput } from '@llamaindex/chat-ui';
import { useChat } from 'ai/react';
import aihead from "../assets/images/ai/babycat.jpg";
import userhead from "../assets/images/ai/user-head.jpg";
import pdf from "../assets/images/icons/pdf.png";


import "/src/index.css";
import "../assets/css/chat.css";

const ChatExample = () => {
    const handler = useChat();

    console.log(handler.input);


    // can drag the ChatMessages box
    const messagesEndRef = useRef(null);
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [handler.messages]);

    //In the begining, ai will send a messages first.
    if (handler.messages.length === 0) {
        handler.append({
            role: "assistant",
            content: "您好，我是寶寶AI，有問題可以問我",
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('觸發gettext');
        console.log(handler.input); //empty


        const inputText = handler.input;
        console.log(inputText);

        //add:important >> because you want to get rid of the chat ui
        console.log(inputText);
        if (!inputText) return;
        await handler.append({
            role: "user",
            content: inputText,
        });



        //不管原本是字串、數字、布林值，它都會自動轉成字串
        // const handlermessages = handler.messages[handler.messages.length - 1]?.content || '';
        // console.log(handlermessages);

        const bottext = {
            //handlermessages,
            // handlermessages: inputText, // ✨ 直接用 inputText
            inputText: inputText,
        }

        console.log('bottext', bottext); //{handlermessages: '11111'}
        //console.log('handlermessages', handlermessages);





        try {
            //下面失敗
            const response = await fetch('http://127.0.0.1:80/chatbotrouter/messages', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bottext)
            })

            if (!response.ok) {
                throw new Error('伺服器錯誤: ' + response.status);
            }

            const result = await response.json();
            console.log('後端回應:', result);

            if (result.success) {
                // ✅ 將 AI 回答也放進 handler 中
                handler.append({
                    role: "assistant",
                    content: result.message
                });
            }
            console.log(handler); //input變成空字串
            handler.setInput(" ");

        } catch (error) {
            console.error(error);
        }
    }


    //add
    // 鍵盤事件處理：Enter 提交，Shift+Enter 換行
    // const handleKeyDown = (e) => {
    //     if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
    //         e.preventDefault();       // 防止在 textarea 插入換行
    //         handleSubmit();               // 呼叫提交函式，送出聊天訊息
    //     }
    // };

    return <ChatSection handler={handler}>
        <ChatMessages className="chatmessages min-h-[240px] max-h-[360px] overflow-y-auto p-4">
            {handler.messages.map((msg, i) => {
                return (
                    <div key={i} className={`fade-in ${msg.role === 'user' ? 'user-msg' : 'ai-msg'}`}>
                        {/* <strong>{msg.role === 'user' ? '你：' : '寶寶：'}</strong> */}
                        {/* css is in the home_customer.css */}
                        <img className={`${msg.role === 'user' ? 'user-head' : 'ai-head'} h-[24px] object-cover`} src={msg.role === 'user' ? (userhead) : (aihead)} alt={`${msg.role === 'user' ? 'user-head' : 'ai-head'}`} />
                        <div className="text-sm ml-2">
                            {msg.content}
                            {/* add to sen the borchore to user */}
                            {msg.role === 'assistant' && msg.content.includes("DM_BXP-300-CHT") ? <a href="/public/DM_BXP-300-CHT.pdf" download><img src={pdf} className="w-[40px]"></img>請點擊下載播放器BXP-300型錄</a> : ""}
                            {msg.role === 'assistant' && msg.content.includes("DM_SignEffex-CHT") ? <a href="/public/DM_SignEffex-CHT.pdf" download><img src={pdf} className="w-[40px]"></img>請點擊下載播放器管理軟體SignEffex型錄</a> : ""}
                            {msg.role === 'assistant' && msg.content.includes("23Y三星QBC英文型錄") ? <a href="/public/23Y三星QBC英文型錄.pdf" download><img src={pdf} className="w-[40px]"></img>請點擊下載顯示器型錄</a> : ""}
                        </div>
                    </div>
                )
            })}
            {/* 抓的是client裡面的pdf??? */}
            {/* If ai answer the catalogname, the create the catalogname href to download */}
            {/* <a href="/public/DM_BXP-300-CHT.pdf" download>型錄</a> */}
            <div ref={messagesEndRef} />
        </ChatMessages >

        <form className="border border-gray-500 rounded-3xl" onSubmit={handleSubmit}>
            {/* <ChatInput.Field type="textarea" value={handler.input} onChange={(e) => handler.setInput(e.target.value)} onKeyDown={handleKeyDown} /> */}
            <div className="flex h-[50px] p-1">
                <input type="textarea" className="pl-5 w-[85%] outline-none focus:outline-none" value={handler.input} onChange={(e) => handler.setInput(e.target.value)} placeholder="請輸入問題" />
                <button className="test-button flex justify-center w-[44px] rounded-full bg-[#c4c2c2]" type="submit"><img src="../src/assets/images/ai/sendicon.png" className="w-[20px] object-contain" alt="sendicon" /></button>
            </div>
        </form>

    </ChatSection>


}
export default ChatExample;

