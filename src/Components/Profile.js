import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams ,NavLink} from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [userId]);
  console.log(profile);
  return (
    <div>
      {profile.map((el) => {
        return (
          <div>
               <NavLink to={`/Post/${el.id}`} >
           
            <h2>{el.title}</h2>
            <h4>{el.body} </h4>
            </NavLink> 
          </div>
        );
      })}
    </div>
  );
};
export default Profile;
