import { Link } from 'react-router-dom';
import '../../assets/css/menu.css'

const menu = () => (
    <div className='menu'>               
        <ul>
            <li><img src='./img/i-home.png'></img><Link to={'/'}>Trang chủ</Link></li>
            <li><img src='./img/i-ticket.png'></img><Link to={'/manage'}>Quản lý vé</Link></li>
            <li><img src='./img/i-invoice.png'></img><Link to={'control'}>Đối soát vé</Link></li>
            <li><img src='./img/i-setting.png'></img><Link to={'/setting'}>Cài đặt</Link></li>
        </ul>  
    <div className='service'>
        <p>Gói dịch vụ</p>
    </div>
    <div className='footer'>
        <p>Copyright</p>
    </div>
        <div className='copyright'>
            <img src='./img/copy.png'></img>
        </div>
        <div className='alta-software'>
            <p>2020 Alta Software</p>
        </div>
    </div> 
);

export default menu;