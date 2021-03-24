import React from 'react' ;
import Dashboard from './componentsSidebar/dashboard';
import Actions from './componentsSidebar/Actions';

function Sidebar(props){
    return(
        <div>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">ADMIN</div>
                </a>
                <hr className="sidebar-divider my-0"></hr>
                <Dashboard />
                <hr className="sidebar-divider"></hr>
                <Actions />    
                
                <hr className="sidebar-divider d-none d-md-block"></hr>
            </ul> 
        </div> 	
    );
}

export default Sidebar ;