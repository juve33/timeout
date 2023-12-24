import '../styles/sideBar.css';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <button>List</button>
            <div className='optionbar'>
                <button ononClick={''} >All Tasks</button>
                <button ononClick={''} >Critic</button>
                <button ononClick={''} > Scheduled for Today</button>
                <button ononClick={''} >Planned</button>
                <button ononClick={''} >Incomplete</button>
            </div>
            <label>tags</label>
            <div>
                tags
            </div>
        </div>
    );
}

export default SideBar;
