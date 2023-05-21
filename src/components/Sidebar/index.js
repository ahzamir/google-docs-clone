import calendar from './icons/calendar.png';
import keep from './icons/keep.png';
import tasks from './icons/tasks.png';
import contacts from './icons/contacts.png';
import maps from './icons/maps.png';
import get_add_ons from './icons/get-add-ons.png';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-body">
                <ul>
                    <li><a href="https://www.google.com/"><img src={calendar} alt="Calender" /></a></li>
                    <li><a href="https://www.google.com/"><img src={keep} alt="Keep" /></a></li>
                    <li><a href="https://www.google.com/"><img src={tasks} alt="Tasks" /></a></li>
                    <li><a href="https://www.google.com/"><img src={contacts} alt="Contacts" /></a></li>
                    <li><a href="https://www.google.com/"><img src={maps} alt="Maps" /></a></li>
                    <li className="sidebar-separator"></li>
                    <li><a href="https://www.google.com/"><img src={get_add_ons} alt="Get Add-ons" /></a></li>
                </ul>
            </div>
            <div className="sidebar-footer">
                <button>A</button>
            </div>
        </div>
    );
}

export default Sidebar;