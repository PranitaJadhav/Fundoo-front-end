import React, { Component } from 'react';
import PaletteIcon from '@material-ui/icons/Palette';
import { isPinUnpin } from './NoteService';


class PinUnpin extends Component {
    constructor(props){
        super(props);
      
        // this.emailid
    } 
    // componentDidMount(){
    //     this.getNotes()
    // }

    getPinUnpin = (id)=>
    {console.log('get trash',id)
        let ID= {}
        ID.nid=id

        console.log('id is',ID)
        isPinUnpin(ID).then(Response =>{
            
            console.log(Response,"Done")
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
                    <PaletteIcon onClick={()=>this.getPinUnpin(this.props.value)}></PaletteIcon>

            </div>
        );
    }
}

export default PinUnpin;