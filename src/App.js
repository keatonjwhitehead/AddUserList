import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const DummyData = [
    {name: "Max", age: 18, id: "4dc3"},
    {name: "Adam", age: 125, id: "34fc"}
  ]
  const [userList, setUsersList] = useState(DummyData);

  const addUserListHandler = (uName,uAge, uKey) => {
    setUsersList((prev) => {
      return [...prev, {name:uName, age: uAge, id: uKey}];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserListHandler} />
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
