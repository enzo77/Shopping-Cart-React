import React from 'react'
import { Spinner } from 'react-bootstrap'
import './Loading.scss'


export default function Loading(){
    return (
        <div className="loading">
            <Spinner animation="border" role="status" />
            <h5>Carhango...</h5>
        </div>
    )
}