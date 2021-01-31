import React, { useState, useEffect } from "react";
import CreateArea from "./CreateArea";
import AdminCard from "./AdminCard";
import axios from "axios";
import { Redirect, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Admin(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    if (typeof location.state === "undefined") {
      // console.log("if.location.state:", location.state.loggedInStatus);
      // setIsLoggedIn(false);
      var a = 0;
    } else {
      setIsLoggedIn(location.state.loggedInStatus);
      console.log("usestate:", isLoggedIn);
      console.log("location.state:", location.state.loggedInStatus);
    }
  }, []);

  function addNote(newNote) {
    axios
      .post("http://localhost:4000/admin", newNote)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }

  function deleteNote(data) {
    //Adding one more key ie action="delete" to get know in backend that this note is to be deleted
    data.action = "delete";
    console.log(data);

    axios
      .post("http://localhost:4000/admin", data)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }

  //updated data array
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin")
      .then((res) => {
        // setTimeout(() => {
        setData(res.data);
        // },1000)
      })
      .catch(function (error) {
        console.log(error);
      });

    // },);
  }, []);

  //cards data
  console.log(data);

  // console.log("outside function usestate:",isLoggedIn);

  // console.log("location.state:",location.state.loggedInStatus);


  //for deleting token
  const handleLogout = () => {
    localStorage.clear();
    
    
    history.push({
      pathname: '/login',
      state: {  // location state
             },
    });

  };




  return (
    <div>
      <CreateArea onAdd={addNote} />
      {data.map((noteItem, index) => {
        return (
          <AdminCard
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            amount={noteItem.amount}
            onDelete={deleteNote}
          />
        );
      })}

      <button type="button" class="btn btn-danger btn-lg adminLogout" onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}

export default Admin;
