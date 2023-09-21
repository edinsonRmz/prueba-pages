
import Img from '../../../public/imagen1.jpg';


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
            <img className={{Img}} src="../../../public/imagen1.jpg" alt="Img" />
        </div>
    </div>
  )
}

export default inicio