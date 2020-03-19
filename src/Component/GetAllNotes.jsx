import React, { Component } from 'react';
import { add, getAll } from './NoteService';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import NoteOperation from './NoteOperation';
import DashBoardcss from './DashBoardcss.css'






class GetAllNotes extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            
            store:[]
        }
        // this.emailid
    } 
    componentDidMount(){
        this.getNotes()
        console.log('------------------------>')
    }
    getNotes = ()=>
    {
        
           console.log('heyyyy') 
        
        getAll().then(Response =>{
            this.setState({
                store:Response.data
            })

            console.log(Response,"Done")
            //alert(Response.data.message)
        })
        .catch((error) =>
        {
            alert(error.response)
            console.log(error.response)

           // alert(Response.data.message)
        })
    
        
    } 
    render() {
        return (
            <div style={{display:'flex',flexDirection:'row' ,flexWrap:'Wrap'}} className='getNotes' >
                {this.state.store.map(o =>(

                    <Card id='getNotesCards'>
                        <div color='red'>
                            {o.title}
                        </div>
                        <div>
                            {o.description}

                        </div>
                       
                        <NoteOperation data={o.nid}/>


                    </Card>
                           
                    
                ))
    }
               
                
                
                </div>
                
           
        );
    }
}

export default GetAllNotes;