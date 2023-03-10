import '../index.css'

import Ayrshare1 from '../assets/ayrshare_01.png'
import Ayrshare2 from '../assets/ayrshare_02.png'
import Ayrshare3 from '../assets/ayrshare_03.png'


function Ayrshare() {
    return (<div style={{textAlign:'center', marginBottom:100, display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
      
 <h1 style={{fontSize:50, textAlign:'center'}}>External Social Media API</h1>
            <h4 style={{textAlign:'center'}}>
              Share all your projects throughout the network when posting them with just one click
              </h4>
<img src={Ayrshare1} alt="Ayrshare" width="70%"/>
<iframe className="youtube-video" width="70%" src="https://www.youtube.com/embed/G8M6DZdtcMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<img src={Ayrshare2} alt="Ayrshare" width="70%"/>
<img src={Ayrshare3} alt="Ayrshare" width="70%"/>

 
 </div>)
  }
  
export default Ayrshare;
