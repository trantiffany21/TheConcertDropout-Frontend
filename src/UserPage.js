import React, {Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
import NewPerformer from './NewPerformer'
import Header from './Header'
import Footer from './Footer'
import './style.css'

let baseUrl = process.env.REACT_APP_BASEURL

class UserPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            apiUrl:'https://api.seatgeek.com/2/events?',
            apikey: "&client_id=" + process.env.REACT_APP_SEATGEEK_API_KEY,
            sessionSecret: "&client_secret=" + process.env.REACT_APP_SECRET_SESSION,
            query: 'performers.id=',
            performers: [],
            events: [],
            searchUrl: '',
            userPageState: 'performers',
            redirectHome: false
        }
    }

    getEventsAll = async () => {
        let performerIds = this.state.performers.map(id => id.id)
        console.log("test: " + performerIds)
        console.log(this.state.apiUrl + this.state.query + performerIds.join(',') + this.state.apikey )
        try{
          const response = await fetch(this.state.apiUrl + this.state.query + performerIds.join(',') + this.state.apikey )
          const data = await response.json()
          console.log(response)
          if(response.status ===200){
            this.setState({
              events: data.events
            })
            console.log(this.state.events)
          }
        
      }catch(err){
        console.log('Error => ', err)
      }
    }

    getPerformers = async (username) =>{
        try{fetch(baseUrl + "/users/" + username,{
            credentials: "include"
          })
          .then(res => {
            if(res.status === 200) {
              return res.json()
            } else {
              return [{performers:''}]
            }
          }).then(data => {
            console.log(data)
            this.setState({ performers: data[0].performers })
          })
        }catch(err){
          this.setState({redirectHome: true})
          console.log('Error =>' + err)
        }
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
    setUserPageState = (pageType) =>{
        this.setState({
            userPageState: pageType
        })
    }
    componentDidMount = () =>{
        this.getPerformers(this.props.username)
    }




    render(){
      if(this.state.redirectHome){
        return <Redirect to='/login' />
      }
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return(
            <>
            <Header />
            <h1>Hello {this.props.username}!</h1>
              <div className="dropdown" onClick={this.toggleOpen}>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  My Account:
                </button>
                <div className={menuClass} aria-labelledby="dropdownMenuButton">
                  <button className="dropdown-item"  onClick={() => this.setUserPageState('performers')}>
                  View My Performers
                  </button>
                  <button className="dropdown-item" onClick={() => {this.setUserPageState('events');this.getEventsAll();}} >
                  View My Upcoming Events
                  </button>
                </div>
              </div>
              {this.state.userPageState === 'performers' &&
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
                                        <td className="table-light col-sm-2"><button className="btn-outline-danger rounded" onClick={() =>this.deletePerformer(performer.id)}>Remove</button></td>
                                        
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    }
                </div>
                }
                {this.state.userPageState === 'events' &&
                
                    this.state.events.map(event => {
                        return (
                          <ul>
                            <li>Date: {event.datetime_local.substring(0,10)}</li>
                            <li>Event: {event.short_title}</li>
                            <li>Performers: 
                              {event.performers.map(performer => {return <li>{performer.name}</li>})}
                            </li>
                            <li>@ the {event.venue.name}</li>
                          </ul>
                        )
                    })
                    
                
                
                }
                <Footer />
            </>
        )}
    }


export default UserPage