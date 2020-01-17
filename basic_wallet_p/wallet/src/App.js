import React,{ useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

function App() {
  const [Id, setId] = useState({
    id: ''
  })

  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/chain').then(res => {
      let data = res.data.total_transactions
      console.log(data)
      setTransactions(data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  const changeHandler = e => {
      setId({
        ...Id,
        [e.target.name]: e.target.value
      });
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(Id)
  }

  return (
    <>
      <h1>Wallet</h1>
      <h4>Username</h4>
      <h4>Balance </h4>
      {
        transactions.map(each => {
          return <div>{each.recipient} amount: {each.amount} sender:{each.sender}</div>
        })
      }
      {/* <label>ID</label>
      <input
        type = 'text'
        name = 'id'
        onChange = {changeHandler}
        placeholder = 'id'
        value = {Id.id}
      />
      <button onClick={submitHandler}>Submit</button> */}
    </>
  );
}

export default App;
