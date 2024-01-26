import '../styles/sideBar.css';
import LogoutBtn from './logOutBtn';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <button>List</button>
            <div className='optionbar'>
                <button >All Tasks</button>
                <button >Critic</button>
                <button > Scheduled for Today</button>
                <button >Planned</button>
                <button >Incomplete</button>
            </div>
            <label>tags</label>
            <div>
                tags
            </div>
            <LogoutBtn />
        </div>
    );
}

export default SideBar;
