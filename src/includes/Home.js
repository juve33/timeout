import React from 'react';
import SideBar from '../components/SideBar';
import TasksList from '../features/tasks/tasksListe';
import { useNavigate } from 'react-router-dom';
import '../styles/add.css'

const Home = () => {
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/home/newTask');
    };

    return (
        <main>
            <nav><SideBar /></nav>
            <section>
                <TasksList />
                <button className='add' onClick={handleAddClick}>+</button>
            </section>
        </main>
    );
};

export default Home;
