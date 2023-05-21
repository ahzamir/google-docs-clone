import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const CustomizedQuill = ({ value, onChange }) => {
    return <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
    />
}

export default CustomizedQuill;