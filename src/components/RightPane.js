import React from 'react'
import { Link } from 'react-router-dom'

function RightPane(props) {
    const items = props.data.items
    const feed = props.data.feed

    // console.log(feed)
    // console.log(items)
    
    const itemslist = items.length ? (
        items.slice(0, 5).map((item, index) => {
            return (
                <div className="card hoverable light-blue accent-3" key={index}>
                    <div className="card-image">
                        <img className='responsive-img' src={item.thumbnail} />
                    </div>
                    <div className="card-content">
                        <a href={item.link} target='_blank'><span className="card-title black-text">{item.title}</span></a>
                        <p className='white-text'>{item.description}</p>
                    </div>
                    <div className="card-action">
                        <Link to='#'>{item.author}</Link>
                        <Link to='#'>{item.pubDate}</Link>
                    </div>
                </div>
            )
        })
    ) : (
            <div className="center">
                <img src='https://mk0herothemesupv2k6v.kinstacdn.com/wp-content/uploads/wordpress-rss-feed-plugin.png' className='responsive-img' />
                <h4 className='indigo-text text-darken-4'>Enter the Feed URL buddy to get the latest stuff...</h4>
            </div>
        )

    return (
        <div className='container'>
            <h4 className='indigo-text text-darken-3'>{feed.description}</h4>
            {itemslist}
        </div>
    )
}

export default RightPane