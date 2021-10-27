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

    // getUser = () =>{
    //     fetch(baseUrl + '/users',{
    //         credentials:"include"
    //     })
    //     .then(res =>{
    //         if(res.status === 200){
    //             return res.json()
    //         }else{
    //             return []
    //         }
    //     }).then(data => {
    //         console.log(data)
    //     })
    // }

    getEvents = () =>{
        let performerIds = this.state.performers.map(id => id.id)
        console.log(this.state.apiUrl + this.state.query + performerIds.join(',') + this.state.apikey )
        fetch(this.state.apiUrl + this.state.query + performerIds.join(',') + this.state.apikey)
        .then(res => {
            return res.json()
        }).then(data =>{
            console.log(data)
            this.setState({
                events: data
            })
        })
    }

    addPerformer = (newPerformer) =>{
        const copyPerformers = [...this.state.performers]
        copyPerformers.push(newPerformer)
        this.setState({
            performers: copyPerformers
        })
        console.log("this.state.performers: ", this.state.performers)
    }
    componentDidMount = () =>{
        
    }




    render(){
        return(
            <>
                <h1>Hello {this.props.username}!</h1>
                <h2>Your performers:</h2>
                {this.props.performers.length > 0 &&
                <table className="user-table table table-hover w-75">
                    <thead>
                        <tr className="row row-cols-3">
                            <th className=" table-primary col">Performer Name</th>
                            <th className=" table-primary col">Type: </th>
                            <th className=" table-primary col"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.performers.map((performer, i) =>{
                            return(
                                <tr className="row" key={performer.id}>
                                    <td className="table-light col">{performer.name}</td>
                                    <td className="table-light col">{performer.type}</td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                }

                <NewPerformer baseUrl={baseUrl} apiUrl={this.state.apiUrl} apikey={this.state.apikey} addPerformer={this.addPerformer}/>

            </>
        )
    }
}

export default UserPage