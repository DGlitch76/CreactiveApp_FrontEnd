import { Link } from 'react-router-dom';
import Ayrshare0 from '../assets/maxresdefault.jpg'
import Ziflow from '../assets/ziflow.jpg'
import Asana from '../assets/asana.png'
import Discord from '../assets/discord.jpg'


function Ext() {
    return (<div style={{ textAlign: 'center', marginBottom: 100, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ flexDirection: 'column' }}>
            <h1 style={{ fontSize: 50, textAlign: 'center' }}>External API Free To Use</h1>
            <h4 style={{ textAlign: 'center' }}>
                From Social Media to Creative Proof Approval and Project Management
            </h4>
        </div>
        <Link to='/ext/Ayrshare'>
            <img src={Ayrshare0} alt="Ayrshare" style={{ borderRadius: '20px', margin:20, width:'90%', maxWidth:'900px' }}  />
        </Link>

        <Link to='/ext/Asana'>
            <img src={Asana} alt="Asana" style={{ borderRadius: '20px', margin:20, width:'90%', maxWidth:'900px' }}  />
        </Link>

        <Link to='/ext/Zyflow'>
            <img src={Ziflow} alt="Ziflow" style={{ borderRadius: '20px', margin:20, width:'90%', maxWidth:'900px' }} />
        </Link>

        <Link to='/ext/Discord'>
            <img src={Discord} alt="Discord" style={{ borderRadius: '20px', margin:20, width:'90%', maxWidth:'900px' }} />
        </Link>



    </div>)
}

export default Ext;
