import React, { Component } from 'react';
import axios from 'axios';

class GetDemo extends Component {
    constructor(props){
        super(props)
        this.state = {
            post : [],
            errormsg:''
        }
    }
    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts')

        .then(response =>{
            console.log(response.data)
            this.setState({post:response.data})
            alert(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render() {
        const {post} = this.state
        return (
            <div>   
                List of posts{
                    post.length ? 
                    post.map(post => <div key = {post.id}>{post.title}</div>):
                    null
                }
            </div>
        );
    }
}

export default GetDemo;