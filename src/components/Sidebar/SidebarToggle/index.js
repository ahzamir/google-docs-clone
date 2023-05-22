import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';

import './SidebarToggle.css';

const SidebarToggle = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  return (
    <button
      className="sidebar-footer-button"
      onClick={handleSidebarToggle}
    >
      {sidebarCollapsed ? <MdOutlineKeyboardArrowLeft /> : <MdOutlineKeyboardArrowRight />}
    </button>
  );
};

export default SidebarToggle;
