import React from "react";
import Header from "../components/Header";

const AdminDashboard = () => {
  return (
    <>
    <Header/>
      <div className="h-[calc(100vh-64px)] bg-black flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Admin Dashboard</h1>
      </div>
    </>
  );
};

export default AdminDashboard;
