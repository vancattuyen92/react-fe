import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faStopCircle} from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'


export default function Header() {
    const customStyles = {
        border: '1px dotted pink'
    }
    const options = [
        {value: 'english', label: 'English'},
        {value: 'vietnamese', label: 'Vietnamese'}
    ]
    return (
        <div className="Header">
            <Select className="select" defaultValue={{value: 'english', label: 'English'}} options={options}
                width='20px' styles={customStyles}>
            </Select>
            <div><FontAwesomeIcon icon={faStopCircle} className="setting"/></div>
            <div><FontAwesomeIcon icon={faUserCircle} className="account"/></div>
        </div>
    )
}