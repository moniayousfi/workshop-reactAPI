import React,{useEffect,useState} from 'react'
import axios from "axios"
import { useParams } from 'react-router';
export const Post = () => {
    const [post, setPost] = useState([]);
    const { postId } = useParams();
  
    useEffect(() => {
      const fetchData = () => {
        axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((res) => {
          setPost(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [postId]);
  console.log(post);
        
    return (
        <div>
           {post.map(el=>{
             return  (
                 <div>
             <h1>{el.email}</h1>
             <h1>{el.body}</h1>
             </div>
             )
           }
               
           )}
        </div>
    )
}
