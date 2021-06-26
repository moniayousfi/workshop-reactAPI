import './App.css';
import  UsersList  from './Components/UsersList';
import  {Switch,Route}from  'react-router-dom';
  import Profile from './Components/Profile'
  import {Post} from './Components/Post'
function App() {
  return (
    <div className="App">
     {/*<UsersList/>
     <Profile/>*/}
     <Switch>
     <Route exact path="/" component={UsersList} />
     <Route path="/profile/:userId" component={Profile}/>
     <Route path="/post/:postId" component={Post}/>
    
     </Switch>
    </div>
  );
}

export default App;
