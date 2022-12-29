import { Card } from '@material-ui/core';
import { Link } from "react-router-dom";
import './Contact.css';
export const Contact = () => {
    const getSessionInfo = JSON.parse(localStorage.getItem('sessionInfo'));
    return (
        <div className='contact-container'>
            <header className='header'>
                <nav>
                    <ul>
                        <li><Link to="/dashboard" className='link' component="button" variant="body2">Dashboard</Link></li>
                        <li><Link to="/contact" className='link active' component="button" variant="body2">Contact Info</Link></li>
                    </ul>
                </nav>
                <div className='profile-info'>{getSessionInfo.name} |&nbsp;<Link to="/signin" className='link'>Logout</Link></div>
            </header>
            <div className='contact-content'>
                <Card className='contact-card'>
                    <h4>M8 IT Solutions Pvt Ltd</h4>
                    <p><address> 3rd Floor, Vue Grande, 339, Chinnaswamy Road, Siddhapudur,</address></p>
                    <p><address>Balasundaram Layout, B.K.R Nagar, Coimbatore, Tamil Nadu 641044, Phone: 1231231233

Email: abc@gmail.com</address></p>
                </Card>
            </div>
        </div>
    )
}