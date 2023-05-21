import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const CustomizedQuill = ({ value, onChange }) => {
    const TOOLBAR_OPTIONS = [
        ['undo', 'redo', 'print', 'spell-check', 'paint-format', 'zoom'],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', { 'color': [] }, { 'background': [] }],
        ['link', 'comment', 'image'],
        [{ 'align': [] }],
        ['line-and-paragraph-spacing'],
        ['checklist'],
        [{ 'list': 'bullet' }, { 'list': 'ordered' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['clean']
    ];

    return <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={{
            toolbar: TOOLBAR_OPTIONS
        }}
    />
}

export default CustomizedQuill;