import Usb from '../../Img/istockphoto-1404865576-612x612.jpg';


function inicio() {
  return (
    <div className='inicio'>
        <div className='texbut'>
            <h1>Aplicaciones portátiles increíbles</h1>
            <div className='buttons'>
                <button className='button'>
                    <p>Explorar ahora</p>
                </button>
                <button className='button'>
                    <p>Comenzar comprar</p>
                </button>
            </div>
        </div>
        
            <img className='Usb' src={{Usb}} alt="ImagenUSB" />
        
    </div>
  )
}

export default inicio