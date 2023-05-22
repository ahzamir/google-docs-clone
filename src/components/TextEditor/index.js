import { useState } from 'react';
import PropTypes from 'prop-types';
import CustomizedQuill from '../CustomizedQuill';
import './TextEditor.css';

const TextEditor = ({ sidebarCollapsed }) => {
  const [text, setText] = useState('');
  return (
    <div className={`text-editor ${sidebarCollapsed ? '' : 'sidebar-open'}`}>
      <CustomizedQuill
        value={text}
        onChange={setText}
      />
    </div>
  );
};

TextEditor.propTypes = {
  sidebarCollapsed: PropTypes.bool.isRequired,
};

export default TextEditor;
