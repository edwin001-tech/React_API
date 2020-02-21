
import React from 'react'
import Contacts from './contacts'

var unirest = require("unirest");// install the SDK that fetches the info for us from IMDb

//sendRequest function that uses unirest to get our contacts information.
var req = unirest("GET", "https://jsonplaceholder.typicode.com/users");

req.headers({
	"x-rapidapi-host": "small-commercial-web-presence1.p.rapidapi.com",//remove this
	"x-rapidapi-key": "e35a57fab2msh57d53a678f0712bp1e713djsn28bf79d272c5",
	"content-type": "application/x-www-form-urlencoded"
});

req.form({
	"dba": "Maseno University",
	"address": "Kisumu"
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
class App extends React.Component {
  state = {     // state to store the contacts fetched
    contacts: []  
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") //will make a GET request to the Endpoint
    .then(res => res.json()) //Parses the output to JSON
    .then((data) => {
      this.setState({ contacts: data }) //sets the value of our state to the output from the API call
    })
    .catch(console.log) //logs any error we get to the console
  }
  render () {
    return (
      <div ClassName='App'>
      <Contacts contacts={this.state.contacts} />
      </div>
    );
    }
  
}
export default App;
