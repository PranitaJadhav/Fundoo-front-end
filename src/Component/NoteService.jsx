import React, { Component } from 'react';
import axios from 'axios';


export function add(Notes) {
    return axios.post('http://localhost:8090/notes/create',Notes
, {headers : {
    "token" :sessionStorage.getItem('token'), 
"Content-Type":"application/json;charset=utf-8"
}
});
}
export function getAll() {
    return axios.get('http://localhost:8090/notes/getAllNotes'
, {headers : {
    "token" :sessionStorage.getItem('token'), 
"Content-Type":"application/json;charset=utf-8"
}
});
} 
export function trashNote(Notes) {
    return axios.post('http://localhost:8090/notes/trash',Notes
, {headers : {
    "token" :sessionStorage.getItem('token'), 
"Content-Type":"application/json;charset=utf-8"
}
});
} 
export function isArchive(Notes) {
    return axios.post('http://localhost:8090/notes/archive',Notes
, {headers : {
    "token" :sessionStorage.getItem('token'), 
"Content-Type":"application/json;charset=utf-8"
}
});
}
export function isPinUnpin(Notes) {
    return axios.post('http://localhost:8090/notes/pin',Notes
, {headers : {
    "token" :sessionStorage.getItem('token'), 
"Content-Type":"application/json;charset=utf-8"
}
});
} 
export function getTrash() {
    return axios.get('http://localhost:8090/notes/getTrash'
, {headers : {
    "token" :sessionStorage.getItem('token'), 
"Content-Type":"application/json;charset=utf-8"
}
});
} 
