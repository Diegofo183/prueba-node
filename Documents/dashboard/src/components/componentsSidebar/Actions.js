import React from 'react' ;

function actions(props){
    return(
        <div>
            <div className="sidebar-heading">Actions</div> 
            <li className="nav-item">
                <a className="nav-link collapsed" href="/">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span>
                </a>
            </li>
        </div> 	
    );
}

export default actions;