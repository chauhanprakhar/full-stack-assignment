import { useMemo,React, useEffect, useState } from "react"
import Table from './Table'
import styled from 'styled-components'

function LeaderBoard() {
    const [record,setRecord] = useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/records/')
        .then(data => data.json())
        .then(data => setRecord(data))
        .catch(err => console.log(err))
    },[])

const Styles = styled.div`
  margin-left:30%;

  align-self:center;
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

    const columns = useMemo(
        () => [
          {
            Header: 'Personal Info',
            columns: [
                {
                Header: 'Roll No.',
                accessor: 'rollno'
                },
              {
                Header: 'First Name',
                accessor: 'firstname',
              },
              {
                Header: 'Last Name',
                accessor: 'lastname',
              },
            ],
          },
          {
            Header: 'Marks',
            columns: [
              {
                Header: 'Maths',
                accessor: 'mathmarks',
              },
              {
                Header: 'Physics',
                accessor: 'physicsmarks',
              },
              {
                Header: 'Chemistry',
                accessor: 'chemistrymarks',
              },
            ],
          },
        ],
        []
      )
    console.log(record)

    function compare( a, b ) {
      if ( a.firstname < b.firstname ){
        return -1;
      }
      if ( a.firstname > b.firstname ){
        return 1;
      }
      return 0;
    }

    record.sort(compare)
    return(
      <div className="home" style={{width:'100%',color:'white'}}>
        <Styles>
            <Table columns={columns} data={record} />
        </Styles>
      <p>* Search by name is implemented </p>
      <p>* Entries are sorted by name of student</p>
      </div>
    )
}
export default LeaderBoard