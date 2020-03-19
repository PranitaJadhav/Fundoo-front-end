import React, { Component } from 'react';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import { isUnArchive } from './NoteService';




class Unarchive extends Component {
    constructor(props){
        super(props);
      
        // this.emailid
    } 
    // componentDidMount(){
    //     this.getNotes()
    // }

    getUnArchive = (id)=>
    {console.log('get Unarchive',id)
        let ID= {}
        ID.nid=id

        console.log('id is',ID)
        isUnArchive(ID).then(Response =>{
            
            console.log(Response,"Unarchived")
           // alert(Response.data.message)
        })
        .catch((error) =>
        {
            //alert(error.response)
            console.log(error.response)

           // alert(Response.data.message)
        })
    
        
    } 
    render() {
        return (
            <div>
                <UnarchiveIcon className="personaddicon" onClick={()=>this.getUnArchive(this.props.value)}></UnarchiveIcon>

            </div>
        );
    }
}

export default Unarchive;