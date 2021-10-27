import React, { Component } from 'react'
import './style.css'

export default class NewForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
        performerApiUrl: 'https://api.seatgeek.com/2/performers?q=',
        id: '',
        name: '', 
        type: '', 
        searchResult: []
    }
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.name)
    this.findPerformer(this.state.name)
    
  }

    //searches SeatGeek API for performer similar to user search
  findPerformer = (name) =>{
      fetch(this.state.performerApiUrl + name + this.props.apikey)
        .then(res =>{
            return res.json()
        }).then(data => {
            console.log("api fetch performer result: " , data.performers)
            let performerResult = data.performers.filter(performer => {
              let skip = false
              this.props.currentPerformers.forEach(currentPerformer =>{
                if(currentPerformer.id === performer.id){
                  skip = true
                }
              })
              if(performer.name.toLowerCase().includes(name.toLowerCase()) && !skip){
                return performer
              }
            })
            console.log("api fetch similar performer result: " , performerResult)

            this.setState({
                searchResult: performerResult
            }) 
        })
  }

  addPerformerToUser = (performer) =>{
    console.log(performer)
    fetch(this.props.baseUrl + '/users/addArtist', {
        method: 'PUT',
        body: JSON.stringify({id: performer.id, name: performer.name, type: performer.type}),
        headers: {
          'Content-Type': 'application/json'
        }, 
        credentials:"include",
    }).then( res => {
        return res.json()
    }).then( data => {
      // console.log(data)
      this.props.addPerformer(data)
      this.setState({
        id: '',
        name: '', 
        type: ''
      })
    }).catch (error => console.error({'Error': error}))
  }

  //for testing
//   componentDidMount=()=>{
//       this.findPerformer('group')
//   }


  render() {
      console.log("results: ", this.state.searchResult)
      console.log("this.props.currentPerformers: ", this.props.currentPerformers)
    return (
        <>
          <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" name="name" onChange={ (e) => this.handleChange(e)} value={this.state.name} />
              <input className="btn-info" type="submit" placeholder="Performer's name" value="Search for performer" />
          </form>

          {this.state.searchResult.length > 0 &&
          <table className="user-table table table-hover w-75">
              <thead>
                  <tr className="row row-cols-3">
                      <th className=" table-primary col">Performer Name</th>
                      <th className=" table-primary col">Type: </th>
                      <th className=" table-primary col"> </th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.searchResult.map((performer, i) =>{
                      return(
                          <tr className="row" key={performer.id}>
                              <td className="table-light col">{performer.name}</td>
                              <td className="table-light col">{performer.type}</td>
                              <td className="table-light col"><button className="btn-secondary" onClick={() =>this.addPerformerToUser(performer)}>Add Artist</button></td>
                          </tr>
                      )
                  })}
              </tbody>
          </table>
          }
      </>
    )
  }

}
