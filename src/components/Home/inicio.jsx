import IMG1 from '../../../public/png-transparent-usb-flash-drives-flash-memory-usb-electronics-adapter-usb-flash-drive-thumbnail.png';



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
        <div className='Img'>
            <img className={{IMG1}} src="../../../public/png-transparent-usb-flash-drives-flash-memory-usb-electronics-adapter-usb-flash-drive-thumbnail.png" alt="imagen" />
        </div>
    </div>
  )
}

export default inicio