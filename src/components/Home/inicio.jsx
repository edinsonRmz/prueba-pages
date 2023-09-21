import IMG1 from '../../../public/1373004photo-1590656223930-04c6d0eeb13bjpg.jpg';



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
            <img className={{IMG1}} src="../../../public/1373004photo-1590656223930-04c6d0eeb13bjpg.jpg" alt="imagen" />
        </div>
    </div>
  )
}

export default inicio