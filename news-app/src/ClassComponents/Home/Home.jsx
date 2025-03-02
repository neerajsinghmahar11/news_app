import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'

export default class Home extends Component {

  constructor(){
    super()
    this.state={
      articles:[],
      totalResults:0,
    }
  }

    
  async getAPIData(){
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&sortBy=publishedAt&apiKey=0d4d0ee992ac4ec7872a5bde00a5baf2`)
    response=await response.json();

    this.setState({
      articles: response.articles.filter(x=>x.titel!=="[Removed]"),
      totalResults: response.totalResults
    })
  }

  componentDidMount(){
    this.getAPIData()
  }

  componentDidUpdate(prevProps){
    console.log("hero ")
    if(this.props!==prevProps)
      this.getAPIData();
  }
  render() {
    return (
      <div className='container-flud'>
        <h5 className='background text-light text-center p-2 m-2'>{this.props.q} Articals</h5>
        <div className="row">
          {
            this.state.articles?.map((item,index)=>{
              return <NewsItem
                key={index}
                source={item.source.name??"N/A"}
                title={item.title}
                description={item.description}
                pic={item.urlToImage}
                url={item.url}
                date={item.publishedAt}
              />
            })
          }
        </div>
      </div>
    )
  }
}
