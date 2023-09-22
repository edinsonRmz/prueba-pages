import Usb from '../../Img/istockphoto-1404865576-612x612.jpg';
import Bolsa from '../../Img/png-clipart-e-commerce-webstore-affiliate-marketing-business-shopping-bag-web-design-rectangle.png';


function inicio() {
  return (
    <div className='inicio' style={{backgroundColor:'#662E9B' }}>
        <div className='texbut' 
            style={{ width:'1px', height:'auto', justifyContent:'center',
            alignItems:'flex-start', position:'relative',  }}>
            <h1 className='texto' style={{ flexShrink:'0', color:'#f9c80e'}}>Aplicaciones portátiles increíbles</h1>

            <div className='buttons'>
                <button className='button'>
                    <p>Explorar ahora</p>
                </button>
                <button className='button'>
                    <p>Comenzar comprar</p>
                </button>
            </div>
        </div>
            <div className='imageness'>
                 <img className='Usb' style={{width:'300px', height:'300px'}} src={Usb} alt="ImagenUSB" />
                 <img className='bolsa' style={{width:'300px', height:'400px'}}  src={Bolsa}  alt="Bolsa" />
            </div>
           
        
    </div>
  )
}

export default inicio