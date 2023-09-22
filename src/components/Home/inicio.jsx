import Usb from '../../Img/istockphoto-1404865576-612x612.jpg';
import Bolsa from '../../Img/png-clipart-e-commerce-webstore-affiliate-marketing-business-shopping-bag-web-design-rectangle.png';
import inicios from './inicio.css';

function inicio() {
  return (
    <div className='inicio'>
        <div className='texbut'>
            <h1 className='texto'>Aplicaciones portátiles increíbles</h1>

            <div className='buttons'>
                <button className='button'>
                    <p>Explorar ahora</p>
                </button>
                <button className='button'>
                    <p className='comenzar-compra'>Comenzar comprar</p>
                </button>
            </div>
        </div>
            <div className='imageness'>
                 <img className='Usb' src={Usb} alt="ImagenUSB" />
                 <img className='bolsa'  src={Bolsa}  alt="Bolsa" />
            </div>
           
        
    </div>
  )
}

export default inicio