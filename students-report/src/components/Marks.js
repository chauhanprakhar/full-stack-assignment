import React, { Component} from 'react';

class Marks extends Component {

  state = {
    credentials: {
    rollno:'',
    firstname:'',
    lastname:'',
    mathmarks: '',
    physicsmarks: '',
    chemistrymarks: ''}
  }

  register = event => {
    fetch('http://127.0.0.1:8000/api/records/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data);
      }
    )
    .catch( error => console.error(error))
    this.clearState()
  }
  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  clearState = () =>{
      this.setState({
        credentials: {
            rollno:'',
            firstname:'',
            lastname:'',
            mathmarks: '',
            physicsmarks: '',
            chemistrymarks: ''}
        }
      )
  }

  render() {
    return (
      <div className="home" style={{paddingTop:'40px',color:'white'}}>

        <label>
          Roll No:
          <input type="text" name="rollno" className="input"
           value={this.state.credentials.rollno}
           onChange={this.inputChanged}/>
        </label>
        <br/>
        <label>
          First Name:
          <input type="text" name="firstname" className="input"
           value={this.state.credentials.firstname}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <label>
          Last Name:
          <input type="text" name="lastname" className="input"
           value={this.state.credentials.lastname}
           onChange={this.inputChanged}/>
        </label>
        <br/>
        <label>
          Math Marks:
          <input type="text" name="mathmarks" className="input"
           value={this.state.credentials.mathmarks}
           onChange={this.inputChanged}/>
        </label>
        <br/>
        <label>
          Physics Marks:
          <input type="text" name="physicsmarks" className="input"
           value={this.state.credentials.physicsmarks}
           onChange={this.inputChanged}/>
        </label>
        <br/>
        <label>
          Chemistry Marks:
          <input type="text" name="chemistrymarks" className="input"
           value={this.state.credentials.chemistrymarks}
           onChange={this.inputChanged}/>
        </label>
        <br/>
        <span>Percentage: {((parseInt(this.state.credentials.mathmarks)+ parseInt(this.state.credentials.physicsmarks)+ parseInt(this.state.credentials.chemistrymarks))/3)}</span>
        <br></br>
        <span>Total:{(parseInt(this.state.credentials.mathmarks)+ parseInt(this.state.credentials.physicsmarks)+ parseInt(this.state.credentials.chemistrymarks))} </span>
        <br></br>
        <button onClick={this.register}>Submit</button>
      </div>
    );
  }
}

export default Marks;




