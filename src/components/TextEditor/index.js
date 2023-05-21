import CustomizedQuill from '../CustomizedQuil';
import { useState } from 'react';
import './TextEditor.css';

const TextEditor = ({ sidebarCollapsed }) => {
    const [text, setText] = useState('');
    return (
        <div className={`text-editor ${sidebarCollapsed? '' : 'sidebar-open'}`}>
            <CustomizedQuill
                value={text}
                onChange={setText}
            />
        </div>
    );
}

export default TextEditor;