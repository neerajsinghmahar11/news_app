import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import NewsItem from '../NewsItem/NewsItem'


export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0,
      page:1
    }
  }

  async getAPIData() {
    this.setState({page:1})
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&language=${this.props.language}&pageSize=24&page=${this.state.page}&sortBy=publishedAt&apiKey=0d4d0ee992ac4ec7872a5bde00a5baf2`)
    response = await response.json();

    this.setState({
      articles: response.articles.filter(x => x.titel !== "[Removed]"),
      totalResults: response.totalResults
    })
  }

  fetchData=async ()=>{
    this.setState({page:this.state.page+1})
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&language=${this.props.language}&pageSize=24&page=${this.state.page}&sortBy=publishedAt&apiKey=0d4d0ee992ac4ec7872a5bde00a5baf2`)
    response = await response.json();


    if(response?.status==='ok'){
      this.setState({articles:this.state.articles.concat(response.articles.filter(x => x.title !=="[Removed]"))})
  }
  }

  componentDidMount() {
    this.getAPIData()
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps)
      this.getAPIData();
  }
  render() {
    return (
      <div className='container-flud'>
        <h5 className='background text-light text-center p-2 m-2'>{this.props.q} Articals</h5>
        <InfiniteScroll
          dataLength={this.state.articles?.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles?.length<this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className="row">
            {
              this.state.articles?.map((item, index) => {
                return <NewsItem
                  key={index}
                  source={item.source.name ?? "N/A"}
                  title={item.title}
                  description={item.description}
                  pic={item.urlToImage}
                  url={item.url}
                  date={item.publishedAt}
                />
              })
            }
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}
