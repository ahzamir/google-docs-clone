import calendar from './icons/calendar.png';
import keep from './icons/keep.png';
import tasks from './icons/tasks.png';
import contacts from './icons/contacts.png';
import maps from './icons/maps.png';
import get_add_ons from './icons/get-add-ons.png';
import './Sidebar.css';

const Sidebar = ({ sidebarCollapsed }) => {
    return (

        <div className={`sidebar sidebar-body ${sidebarCollapsed ? 'sidebar-body-collapsed' : ''}`}>
            <ul>
                <li><a href="https://calendar.google.com/" target='blank'><img src={calendar} alt="Calender" /></a></li>
                <li><a href="https://keep.google.com/" target='blank'><img src={keep} alt="Keep" /></a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.google.android.apps.tasks&hl=en&gl=US&pli=1" target='blank'><img src={tasks} alt="Tasks" /></a></li>
                <li><a href="https://contacts.google.com/" target='blank'><img src={contacts} alt="Contacts" /></a></li>
                <li><a href="https://www.google.com/maps/" target='blank'><img src={maps} alt="Maps" /></a></li>
                <li className="sidebar-separator"></li>
                <li><a href="https://www.google.com/" target='blank'><img src={get_add_ons} alt="Get Add-ons" /></a></li>
            </ul>
        </div>
    );
}

export default Sidebar;