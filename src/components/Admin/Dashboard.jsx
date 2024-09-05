import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-bold mb-4">Total Students</h2>
          <p className="text-3xl font-semibold">120</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-bold mb-4">Total Evaluations</h2>
          <p className="text-3xl font-semibold">35</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-bold mb-4">Pending Approvals</h2>
          <p className="text-3xl font-semibold">8</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
