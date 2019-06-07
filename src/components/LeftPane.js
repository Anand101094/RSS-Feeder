import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { connect } from 'react-redux'
import {addUrl} from '../store/Actions/addUrl';
import deleteUrl from '../store/Actions/deleteUrl';

class LeftPane extends Component {

    state={
        content:''
    }

    handleClick = (e) => {
        // console.log('clicked')
        e.preventDefault()
        const url={}
        url.id=Math.random()+this.props.urls.length+1
        url.content=this.state.content
        // if(url.content){
        //     this.setState({
        //         ...this.state,
        //         urls:[...this.state.urls,url],
        //         content:''
        //     })
        // }
        this.props.addurl(url)
        this.setState({content:''})

        // setTimeout(()=>console.log(this.props),500)
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            content:e.target.value
        })
    }

    deleteUrl = (id) => {
        const newurls=this.props.urls.filter((item)=>{
            return(item.id!==id)
        })
        // this.setState({
        //     ...this.state,
        //     urls:newurls
        // })
        this.props.deleteurl(newurls)
    }

    render() {
        // console.log(this.props)
        const urllist=this.props.urls.map(item=>{
            return (
                <Link to='#' key={item.id} onClick={() => { this.props.getData(item.content) }}>
                    <div className="urls">
                        <li className="collection-item items teal black-text" >{item.content}<i className='fa fa-trash center' onClick={()=>{this.deleteUrl(item.id)}}></i></li>
                    </div>
                </Link>
            )
        })

        return (
            <React.Fragment>
                <form>
                    <div className="input-field">
                        <input type='text' id='search' onChange={this.handleChange} value={this.state.content}/>
                        <label htmlFor='search'>Search URL</label>
                        <a href='#'><i className="fa fa-search prefix blue-text"></i></a>
                    </div>
                    <div className="input-field">
                        <button className="btn green darken-3 center hoverable" onClick={this.handleClick}>Add Feed</button>
                    </div>
                </form>
                <ul className="collection">
                    {urllist}
                </ul>
                
            </React.Fragment >
        )
    }
}

const mapStateToProps = (state) => {
    return({
        urls:state.addrss.urls
    })
}

const mapDispatchToProps = (dispatch) => {
    return{
        addurl: (url) => dispatch(addUrl(url)),
        deleteurl: (newurls) => dispatch(deleteUrl(newurls)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane)