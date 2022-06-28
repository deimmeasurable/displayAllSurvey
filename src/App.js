import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  const [dataTable, setDataTable] = useState([' '])

  useEffect(() => {
    axios('http://localhost:8000/api/displaysurvey')
    .then(res => setDataTable(res.data))
    .catch(err => console.log(err))
  }, [])
  console.log(dataTable);

  const column = [
    {heading: 'Name', value:'name'},
    {heading: 'Country', value:'country'},
    {heading: 'Email', value:'email'},
    {ratings:'Ratings', value:'ratings'},
  ]

  return (
    <div className='App'>
      <h1>Display data</h1>
      <Table data={dataTable} column={column} />
    </div>
  );
}

export default App;
