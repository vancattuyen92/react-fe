import React from 'react'
import logoUI from '../../image/logoUI.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faImage, faChartBar, faUsers, faUser } from '@fortawesome/free-solid-svg-icons'


export default function MenuColumn() {
    return (
        <div className="MenuColumn">
            {/* <div className="logo">
                <img src={logoUI} alt="logo"/>
                <span>Material UI</span>
            </div> */}
            <div className="menu">
                <div className="dashboard select">
                    <FontAwesomeIcon icon={faColumns}/>
                    <span>Dashboard</span>
                </div>
                <div className="photo select">
                    <FontAwesomeIcon icon={faImage}/>
                    <span>Photo</span>
                </div>
                <div className="kanban select">
                    <FontAwesomeIcon icon={faChartBar}/>
                    <span>Kanban</span>
                </div>
                <div className="members select">
                    <FontAwesomeIcon icon={faUsers}/>
                    <span>Members</span>
                </div>
                <div className="users select">
                    <FontAwesomeIcon icon={faUser}/>
                    <span>Users</span>
                </div>
            </div>
        </div>
    )
}