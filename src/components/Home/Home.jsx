import React from 'react';
import ExpencesIncome from './ExpencesIncome';
import { useState } from 'react';

const Home = () => {


    const [activeStatus, setActiveStatus] = useState('btn-two')

    const handleActiveClick = (prop) => {
        setActiveStatus(prop)
    }

    const handleSubmit = ({ updateValue, amount, date }) => {
        console.log(updateValue, amount, date)
    }




    return (
        <div className="relative mx-auto mt-10 w-full max-w-7xl">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <ExpencesIncome
                    handleActiveClick={handleActiveClick}
                    activeStatus={activeStatus}
                    setActiveStatus={setActiveStatus}
                    handleSubmit={handleSubmit}
                ></ExpencesIncome>
            </div>
        </div>
    );
};

export default Home;



