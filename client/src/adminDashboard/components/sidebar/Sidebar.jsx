import React from 'react'
import "./sidebar.css"
import { 
    LineStyle, 
    Timeline, 
    TrendingUp, 
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report, PostAdd

} from '@material-ui/icons';
// import AddBusinessIcon from '@mui/icons-material/AddBusiness';

import { Link } from 'react-router-dom'


export default function Sidebar() {
  return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/admin/home" className='link'>
                            <li className="sidebarListItem active">
                                <LineStyle className='sidebarIcon' /> 
                                Home
                            </li>
                        </Link>
                        
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' /> 
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' /> 
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="admin/users" className='link'>
                            <li className="sidebarListItem">
                                <PermIdentity  className='sidebarIcon' /> 
                                Users
                            </li>
                        </Link>
                        <Link to="/admin/products" className='link'>
                            <li className="sidebarListItem">
                                <Storefront className='sidebarIcon' /> 
                                products List
                            </li>
                        </Link>
                        <Link to="/admin/newProduct" className='link'>
                            <li className="sidebarListItem">
                                <PostAdd className='sidebarIcon' /> 
                                New Product
                            </li>
                        </Link>
                        
                        <li className="sidebarListItem">
                            <AttachMoney className='sidebarIcon' /> 
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className='sidebarIcon' /> 
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline  className='sidebarIcon' /> 
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className='sidebarIcon' /> 
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className='sidebarIcon' /> 
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline  className='sidebarIcon' /> 
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' /> 
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className='sidebarIcon' /> 
                            Reports
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
  )
}
