import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
                <div className="card">
                    <img src={props.pic} className="card-img-top" height={200} alt="image not found"/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <hr />
                            <div className="source-date">
                                <p>{props.source}</p>
                                <p>{new Date(props.date).toLocaleDateString()}</p>
                            </div>
                            <hr/>
                            <p className="card-text">{props.description}</p>
                            <a href={props.url} target='blank' rel='npreferrer' className="btn btn-primary background center" >Read Full article</a>
                        </div>
                </div>
            </div>
  )
}
