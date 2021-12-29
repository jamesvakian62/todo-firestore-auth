import React from "react";
import { useEffect, useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
// #3a Import onSnapshot,collection from 'firebase/firestore
// #3b import db from './utils/firebase
import { onSnapshot, collection } from "firebase/firestore";
import db from "../utils/firebase";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const data = [];

function Dashboard() {
  const [tasks, setTasks] = useState(data);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  // Uses Sidebar properties as a parameters for useState
  const [isOpen, setIsOpen] = useState(false);
  //Function used to toggle and change the useState
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const logout = async () => {
    try {
      await signOut(auth).then(() => {
        console.log("signout successful");
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "tasks"), (snapshot) => {
      let todos = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const handleFilter = () => {
        if (filterStatus === "active") {
          console.log("FILTER STATUS IS ACTIVE");
          return setFilteredTasks(
            todos.filter((task) => task.status === false)
          );
        } else if (filterStatus === "completed") {
          console.log("STATUS IS COMPLETED");
          // If the filter status is completed I should setFilteredTasks to only the todos that have the status of true
          return setFilteredTasks(todos.filter((task) => task.status === true));
        } else {
          console.log("IS ALL");
          // If the status is all setFilteredTasks to todos
          return setFilteredTasks(todos);
        }
      };
      handleFilter();
    });
    return unsub;
  }, [tasks, filterStatus]);

  return (
    <>
      <div>
        <Navbar toggle={toggle} />
        <div className="Dashboard">
          <div className="container">
            <div className="header">
              <div className="title">
                <button onClick={logout}>Logout</button>{" "}
              </div>
              <Sidebar isOpen={isOpen} toggle={toggle} />

              <div className="title">TODO </div>
              <div className="theme">
                <img src="./images/icon-sun.svg" alt="theme" />
              </div>
            </div>

            <TaskInput tasks={tasks} setTasks={setTasks} />

            <TaskList
              tasks={tasks}
              setTasks={setTasks}
              setFilterStatus={setFilterStatus}
              filterStatus={filterStatus}
              filteredTasks={filteredTasks}
              setFilteredTasks={setFilteredTasks}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
