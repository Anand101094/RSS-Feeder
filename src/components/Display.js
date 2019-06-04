import React, { Component } from 'react'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

class Display extends Component {

    state={
        urls:[],
        feed:{},
        items:[]
    }

    // https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss
    // https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F
    // https://api.rss2json.com/v1/api.json?rss_url=http://sukhmanisakhi.com/feed/
    // https://api.rss2json.com/v1/api.json?rss_url=https://aws.amazon.com/blogs/big-data/feed/

    getData = (url) => {
        fetch(`${url}`)
        .then(res=>res.json())
        .then(res=>{
            // console.log(res)
            this.setState({
                ...this.state,
                feed:res.feed,
                items:res.items
            })
        })
    }

    render() {
        return(
            <div className="display center">
                <div className="row">
                    <div className="col s3">
                        <LeftPane handleClick={this.handleClick} getData={this.getData}/>
                    </div>
                    <div className="col s9">
                        <RightPane data={this.state}/>                    
                    </div>
                </div>
            </div>
        )
    }  
}

export default Display