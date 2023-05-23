import PropTypes from 'prop-types';
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
      type="button"
    >
      {sidebarCollapsed ? <MdOutlineKeyboardArrowLeft /> : <MdOutlineKeyboardArrowRight />}
    </button>
  );
};

SidebarToggle.propTypes = {
  sidebarCollapsed: PropTypes.bool.isRequired,
  setSidebarCollapsed: PropTypes.func.isRequired,
};

export default SidebarToggle;
