import React, {Component} from 'react'
import NewPerformer from './NewPerformer'
import './style.css'

let baseUrl = 'http://localhost:3003'

class UserPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            apiUrl:'https://api.seatgeek.com/2/events?',
            apikey: "&client_id=" + process.env.REACT_APP_SEATGEEK_API_KEY,
            sessionSecret: "&client_secret=" + process.env.REACT_APP_SECRET_SESSION,
            query: 'performers.id=',
            performers: [],
            searchUrl: '',
        }
    }

    getEvents = () =>{
        let performerIds = this.state.performers.map(id => id.id)
        // console.log(this.state.apiUrl + this.state.query + performerIds.join(',') + this.state.apikey )
        fetch(this.state.apiUrl + this.state.query + performerIds.join(',') + this.state.apikey)
        .then(res => {
            return res.json()
        }).then(data =>{
            // console.log(data)
            this.setState({
                events: data
            })
        })
    }

    getPerformers = (username) =>{
        fetch(baseUrl + "/users/" + username,{
            credentials: "include"
          })
          .then(res => {
            if(res.status === 200) {
              return res.json()
            } else {
              return []
            }
          }).then(data => {
            this.setState({ performers: data[0].performers })
          })
    }

    addPerformer = (newPerformer) =>{
        console.log("here " + newPerformer)
        const copyPerformers = [...this.state.performers]
        copyPerformers.push(newPerformer)
        this.setState({
            performers: copyPerformers
        })
        console.log("this.state.performers: ", this.state.performers)
    }

    deletePerformer = (id) => {
        // console.log(performer)
        fetch(baseUrl + '/users/removeArtist/', {
        method: 'DELETE',
        body:JSON.stringify({id:id}),
        headers: {
            'Content-Type': 'application/json'
          },
        credentials: "include"
      }).then( res => {
        // console.log(res)
        // if I checked for a 200 response code
        const findIndex = this.state.performers.findIndex(performer => performer.id === id)
        const copyPerformers = [...this.state.performers]
        copyPerformers.splice(findIndex, 1)
        this.setState({
          performers: copyPerformers
        })
      })
    }

    componentDidMount = () =>{
        this.getPerformers(this.props.username)
    }




    render(){
        return(
            <>
                <h1>Hello {this.props.username}!</h1>
                <div className="user-form">
                    <NewPerformer baseUrl={baseUrl} apiUrl={this.state.apiUrl} apikey={this.state.apikey} addPerformer={this.addPerformer} currentPerformers={this.state.performers}/>
                    <h2>Your performers:</h2>
                    {this.state.performers.length > 0 &&
                    <table className="user-table table w-75">
                        <thead>
                            <tr className="row row-cols-3">
                                <th className=" table-primary col">Performer Name</th>
                                <th className=" table-primary col">Type: </th>
                                <th className=" table-primary col-sm-2"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.performers.map((performer, i) =>{
                                return(
                                    <tr className="row" key={performer.id}>
                                        <td className="table-light col">{performer.name}</td>
                                        <td className="table-light col">{performer.type}</td>
                                        <td className="table-light col-sm-2"><button className="btn-outline-danger" onClick={() =>this.deletePerformer(performer.id)}>Remove</button></td>
                                        
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    }
                </div>
            </>
        )
    }
}

export default UserPage