import React from 'react';
import Sidebar from "../layouts/Sidebar";

import ChartData from '../components/ChartData';

const Dashboard = () => {
    return (
        <div>
            <Sidebar>
                <ChartData />
            </Sidebar>
        </div>
    );
};

export default Dashboard;

