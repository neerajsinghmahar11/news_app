import React, { Component } from 'react'

export default class Home extends Component {

  constructor(){
    super()
    this.state={
      articals:[],
      totalResults:0,
    }
  }

  async getAPIData(){
    let response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-11-10&sortBy=publishedAt&apiKey=0d4d0ee992ac4ec7872a5bde00a5baf2`)
    response=await response.json();
    console.log(response)

    this.setState({
      articals: response.articals,
      totalResults: response.totalResults
    })

  }

  componentDidMount(){
    this.getAPIData()
  }

  render() {
    return (
      <div className='container-flud'>
        <h5 className='background text-light text-center p-2 m-2'>{this.props.q} Articals</h5>
      </div>
    )
  }
}
