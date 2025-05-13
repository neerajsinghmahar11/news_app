import React, {  useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import NewsItem from '../NewsItem/NewsItem'
import { useLocation, useSearchParams } from 'react-router-dom';



export default function Home(props) {

  let  [articles,setArticles]=useState([]);
  let  [totalResults,setTotalResults]=useState(0);
  let [page,setPage]=useState(1);
  let search= useLocation().search;
  let query=new URLSearchParams(search);



  async function getAPIData() {
    setPage(1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&pageSize=24&sortBy=publishedAt&apiKey=0d4d0ee992ac4ec7872a5bde00a5baf2`)
    response = await response.json();

    if(response?.status==="ok"){
      setArticles(response.articles.filter(x => x.titel !== "[Removed]"))
      setTotalResults(response.totalResults)
    }
  }

  let fetchData=async () => {
    setPage(page+1);
    let response = await fetch(`https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&language=${props.language}&pageSize=24&page=${page}&sortBy=publishedAt&apiKey=0d4d0ee992ac4ec7872a5bde00a5baf2`)
    response = await response.json();


    if (response?.status ==='ok') {
      setArticles( articles.concat(response.articles.filter(x => x.title !== "[Removed]")))
    }
  }

  useEffect(()=>{
    setQ(query.get("q")??"All")
    setLanguage(query.get("language")??"hi")
    getAPIData(query.get("q")??"All",query.get("language")??"hi")
  },[search])

    return (
      <div className='container-flud'>
        <h5 className='background text-light text-center p-2 m-2'>{props.q} Articals</h5>
        <InfiniteScroll
          dataLength={articles?.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles?.length <totalResults}
          loader={<div className='my-5 text-center'>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>}
        >
          <div className="row">
            {
              articles?.map((item, index) => {
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
