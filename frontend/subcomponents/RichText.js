import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import { EditorState } from 'draft-js'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false }
)

const RichText = () => {

    const [editorStates, setEditorStates] = useState({})

    useEffect(()=>{
        setEditorStates(EditorState.createEmpty())
        console.log("start")
    },[])

    const onEditorStateChange = (editorState) => {
        setEditorStates(editorState)
    }

    return (
        <div>

            <Editor
                editorState={editorStates}
                onEditorStateChange={onEditorStateChange}
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: { uploadCallback: uploadImageCallBack},
                }}
            />
            {/* {editorStates} */}
        </div>
    )
}

const uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
        
        const data = new FormData()
        data.append('file', file)
        // console.log("size : ", images.size)
        axios.post("http://localhost:4000/ckupload", data)
            .then(res => {
                resolve({ data: { link: res.data.url } });
            }).catch(err => {
                reject(err)
            })
        // const xhr = new XMLHttpRequest();
        // xhr.open('POST', 'http://localhost:4000/ckupload');
        // xhr.setRequestHeader('Authorization', 'Client-ID ##clientid###');
        // const data = new FormData();
        // data.append('image', file);
        // xhr.send(data);
        // xhr.addEventListener('load', () => {
        //     const response = JSON.parse(xhr.responseText);
        //     console.log(response)
        //     resolve(response);
        // });
        // xhr.addEventListener('error', () => {
        //     const error = JSON.parse(xhr.responseText);
        //     console.log(error)
        //     reject(error);
        // });
    }
    );
}


export default RichText