import React from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { createNote } from '../service/service'
import { Container, ClickAwayListener } from '@material-ui/core';
import Icons from './Icons';
import MiniNote from './MiniNote';
import Note from './Note';

export default function CreateNote() {

const [state, setstate] = React.useState(false);
const [note, setnote] = React.useState("");
const [notein, setnotein] = React.useState({ tittle: '', description: '' })
const [clickaway, setclickaway] = React.useState(false);
const openfile = () => {
setstate(true);
console.log(state)
}
const onclickaway = () => {
setclickaway(true);
console.log(clickaway, "click")
}
console.log(clickaway)
function onhandlechange(event) {
console.log("helllololo", event.target.name, event.target.value);
// let fields = notein;
// fields[event.target.name] = event.target.value;
setnotein({
...notein, [event.target.name]: event.target.value
}
)
console.log('fields', notein);

}
const notecreate = () => {
createNote(notein)

.then(Response => {
console.log(Response, "create succesfully")
// alert((Response.data.message))
}).catch((error) => {
console.log(error.response.data)
// console.log(error.Response.data.message ,"login failed")
// alert(error.response.data.details)
alert(error.response.data.message)
});
return (<Note onClickbutton={ notecreate}/>)
}




return (
<Container>

<div className="expansionpanel" >
{/* <ClickAwayListener onClickAway={onclickaway}> */}

{state ?
<div className>
<TextField
id="standard-input"
label="Title"
name="tittle"
// value={notein.description}
onChange={onhandlechange}
type="text" />
</div> : null}



<div className>
<TextField
id="standard-input"
label="Take a note"
type="text"
name="description"
// value={notein.description}
onChange={onhandlechange}
onClick={openfile}
/>

</div>
{state ?
<div>





<Icons />
<Button size="small" color="primary" onClickAway={notecreate}>create</Button>



</div> : null}


export function sortListByName (String ){
console.log(String)
console.log("token",sessionStorage.getItem('token'))
return axios.get('http://localhost:8080/note/noteListName',{ params :{"token" :sessionStorage.getItem('token'),'noteName':String} }
, {headers : {
"Content-Type":"application/json;charset=utf-8"
}
});
}

displayNote = () =>{
console.log(this.state.noteName)
sortListByName(this.state.noteName)
.then( Response => {
console.log(Response.data)
console.log("response",Response)
alert(Response.data.message)

})
.catch((error) => {
alert(error.response)
console.log(error)
});
}
displayNote = () =>{
console.log(this.state.noteName)
sortListByName(this.state.noteName)
.then( Response => {
console.log(Response.data)
console.log("response",Response)
alert(Response.data.message)

})
.catch((error) => {
alert(error.response)
console.log(error)
});
}

{/* < div>
{clickaway ?
<div>
