import CustomizedQuill from '../CustomizedQuill';
import { useState } from 'react';

const TextEditor = () => {
    const [text, setText] = useState('');
    return (
        <div className="text-editor">
            <CustomizedQuill
                value={text}
                onChange={setText}
            />
        </div>
    );
}

export default TextEditor;