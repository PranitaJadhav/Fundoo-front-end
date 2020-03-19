import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from '../Component/Login';
import ForgetPassword from '../Component/ForgetPassword';
import DashBoard from '../Component/DashBoard';
import Registartion from '../Component/Registration';
import Notes from '../Component/Notes';
import ResetPassword from '../Component/ResetPassword';
import NoteOperation from '../Component/NoteOperation';
import GetAllNotes from '../Component/GetAllNotes';
import TrashNotes from '../Component/TrashNotes';
import ArchiveNotes from '../Component/ArchiveNotes';
import PinUnpin from '../Component/PinUnpin';
import GetAllTrashNotes from '../Component/GetAllTrashNotes';
import NoteEdit from '../Component/NoteEdit';
import GetAllArchiveNotes from '../Component/GetAllArchiveNotes';
import Unarchive from '../Component/Unarchive';
import ArchiveNoteOperation from '../Component/ArchiveNoteOperation';

















export default function Router(){
    return(

        <BrowserRouter>
        <Switch>
            <Route path = {'/Login'} exact component={Login}></Route>
            <Route path = {'/Registartion'} exact component={Registartion}></Route>

            <Route path = {'/ForgetPassword'} exact component={ForgetPassword}></Route>
            <Route path = {'/DashBoard'} exact component={DashBoard}></Route>
            <Route path = {'/ResetPassword'} exact component={ResetPassword}></Route>
            
            <Route path = {'/Notes'} exact component={Notes}></Route>
            <Route path = {'/NoteOperation'} exact component={NoteOperation}></Route>
            <Route path = {'/GetAllNotes'} exact component={GetAllNotes}></Route>
            <Route path = {'/TrashNotes'} exact component={TrashNotes}></Route>
            <Route path = {'/ArchiveNotes'} exact component={ArchiveNotes}></Route>
            {/* <Route path = {'/PinUnpin'} exact component={PinUnpin}></Route> */}
            <Route path = {'/GetAllTrashNotes'} exact component={GetAllTrashNotes}></Route>
            <Route path = {'/NoteEdit'} exact component={NoteEdit}></Route>

            <Route path = {'/GetAllArchiveNotes'} exact component={GetAllArchiveNotes}></Route>
            <Route path = {'/Unarchive'} exact component={Unarchive}></Route>
            <Route path = {'/ArchiveNoteOperation'} exact component={ArchiveNoteOperation}></Route>

            
              
            
        </Switch>
        </BrowserRouter>
    );

}


