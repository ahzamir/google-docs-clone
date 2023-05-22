import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';

const CustomizedQuill = ({ value, onChange }) => {
  const TOOLBAR_OPTIONS = [
    ['undo', 'redo', 'print', 'spell-check', 'paint-format', 'zoom'],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline', { color: [] }, { background: [] }],
    ['link', 'comment', 'image'],
    [{ align: [] }, 'line-and-paragraph-spacing', 'checklist', { list: 'bullet' }, { list: 'ordered' }, { indent: '-1' }, { indent: '+1' }, 'clean'],
    ['editing'],
  ];

  const icons = ReactQuill.Quill.import('ui/icons');
  icons.undo = `<svg viewbox="0 0 18 18">
        <path xmlns="http://www.w3.org/2000/svg" fill="#444746" d="M13.5 10c0-1.38-1.12-2.5-2.5-2.5H5.87l1.94 1.94-1.06 1.06L3 6.75 6.75 3l1.06 1.06L5.87 6H11c2.21 0 4 1.79 4 4s-1.79 4-4 4H5v-1.5h6c1.38 0 2.5-1.12 2.5-2.5z"/>
      </svg>`;
  icons.redo = `<svg viewbox="0 0 18 18">
    <path xmlns="http://www.w3.org/2000/svg" fill="#444746" d="M4.5 10c0-1.38 1.12-2.5 2.5-2.5h5.13l-1.94 1.94 1.06 1.06L15 6.75 11.25 3l-1.06 1.06L12.13 6H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h6v-1.5H7c-1.38 0-2.5-1.12-2.5-2.5z"/>
    </svg>`;
  icons.print = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path xmlns="http://www.w3.org/2000/svg" d="M13.5 7V4.5h-7V7H5V3h10v4Zm-10 1.5h13.021H5Zm11.25 2q.312 0 .531-.219.219-.219.219-.531 0-.312-.219-.531Q15.062 9 14.75 9q-.312 0-.531.219Q14 9.438 14 9.75q0 .312.219.531.219.219.531.219Zm-1.25 5v-3h-7v3ZM15 17H5v-3H2V9q0-.833.583-1.417Q3.167 7 4 7h12q.833 0 1.417.583Q18 8.167 18 9v5h-3Zm1.521-4.5V9.292q0-.334-.25-.563-.25-.229-.583-.229H4.292q-.334 0-.563.229-.229.229-.229.563V12.5H5V11h10v1.5Z" fill="#444746"/>
    </svg>`;
  icons.background = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" d="m7 14 .42-.42c.28.25.63.39.99.39.38 0 .77-.15 1.06-.44l7.09-7.09c.59-.59.59-1.54 0-2.12l-1.88-1.88c-.59-.59-1.54-.59-2.12 0L5.47 9.53c-.56.56-.57 1.46-.05 2.05L3 14h4Zm3.12-7L12 8.88l-3.59 3.59-1.88-1.88L10.12 7Z" fill="#444746"/>
    </svg>`;
  icons['spell-check'] = `<svg xmlns="http://www.w3.org/2000/svg">
    <path d="M7.3375 10H9L5.50073242 0H3.50933838L0 10h1.64770508L2 8h5l.3375 2zM3 6l1.5-4L6 6H3zm11.1925.6925L8.125 13l-2.7525-3-1.0575 1.0575L8.125 15l7.125-7.25-1.0575-1.0575z" id="spellcheck_18_a"/>
    </svg>`;
  icons.clean = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" fill="#444746" fill-rule="evenodd" d="M0.27,1.55 L5.43,6.7 L3,12 L5.5,12 L7.14,8.42 L11.73,13 L13,11.73 L1.55,0.27 L0.27,1.55 L0.27,1.55 Z M3.82,0 L5.82,2 L7.58,2 L7.03,3.21 L8.74,4.92 L10.08,2 L14,2 L14,0 L3.82,0 L3.82,0 Z" transform="translate(2 3)"/>
    </svg>`;
  icons.underline = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" fill="#444746" d="M6,12 C8.76,12 11,9.76 11,7 L11,0 L9,0 L9,7 C9,8.75029916 7.49912807,10 6,10 C4.50087193,10 3,8.75837486 3,7 L3,0 L1,0 L1,7 C1,9.76 3.24,12 6,12 Z M0,13 L0,15 L12,15 L12,13 L0,13 Z" transform="translate(3 3)"/>
    </svg>`;
  icons.link = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" fill="#444746" d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/>
    </svg>`;
  icons.bold = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" fill="#444746" d="M11.96 8.84v-.13c.59-.29 1.61-1.04 1.61-2.58C13.56 4.1 11.57 3 9.9 3H5v11.99h5.06c1.41 0 3.94-.75 3.94-3.33 0-1.98-1.58-2.65-2.04-2.82zM7.5 5.5h2.42c.68 0 1.13.4 1.13.99 0 .47-.31 1.01-1.2 1.01H7.5v-2zm2.38 7H7.5v-2h2.32c1.09 0 1.25.63 1.25 1.01 0 .37-.16.99-1.19.99z"/>
    </svg>`;
  icons.comment = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12zM7 11h4v4h2v-4h4V9h-4V5h-2v4H7v2z" fill="#444746"/>
    </svg>`;
  icons.italic = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" d="M5 16v-2h2.375l3.187-8H8V4h7v2h-2.271l-3.208 8H12v2Z" fill="#444746"/>
    </svg>`;
  icons.checklist = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" d="M22 7h-9v2h9V7zm0 8h-9v2h9v-2zM5.54 11 2 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L5.54 11zm0 8L2 15.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L5.54 19z" fill="#444746"/>
    </svg>`;
  icons['paint-format'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" d="M12 19H9q-.417 0-.708-.292Q8 18.417 8 18v-4q0-.417.292-.708Q8.583 13 9 13h.75v-3H3.5q-.625 0-1.062-.438Q2 9.125 2 8.5V5.25q0-.625.438-1.062.437-.438 1.062-.438H5V3q0-.417.292-.708Q5.583 2 6 2h9q.417 0 .708.292Q16 2.583 16 3v3q0 .417-.292.708Q15.417 7 15 7H6q-.417 0-.708-.292Q5 6.417 5 6v-.75H3.5V8.5h6.25q.625 0 1.062.438.438.437.438 1.062v3H12q.417 0 .708.292.292.291.292.708v4q0 .417-.292.708Q12.417 19 12 19ZM6.5 3.5v2Zm3 14h2v-3h-2Zm-3-12h8v-2h-8Zm3 12h2-2Z" fill="#444746"/>
    </svg>`;
  icons.image = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7-3 3.72L9 13l-3 4h12l-4-5z" fill="#444746"/>
    </svg>`;
  icons['line-and-paragraph-spacing'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" fill="#444746" fill-rule="evenodd" d="M9,14 L18,14 L18,12 L9,12 L9,14 L9,14 Z M9,2 L9,4 L18,4 L18,2 L9,2 L9,2 Z M7.5,4 L4,0.5 L0.5,4 L3,4 L3,12 L0.5,12 L4,15.5 L7.5,12 L5,12 L5,4 L7.5,4 L7.5,4 Z M9,9 L18,9 L18,7 L9,7 L9,9 L9,9 Z" transform="translate(0 1)"/>
    </svg>`;
  icons.zoom = '100%';
  icons.editing = 'Editing';

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={{
        toolbar: TOOLBAR_OPTIONS,
      }}
    />
  );
};

CustomizedQuill.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomizedQuill;
