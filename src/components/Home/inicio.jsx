import IMG1 from '../../../public/_5b37b187-cd70-47ec-b9d9-01a30a047768.jfif';



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
            <img className={{IMG1}} src="../../../public/_5b37b187-cd70-47ec-b9d9-01a30a047768.jfif" alt="imagen" />
        </div>
    </div>
  )
}

export default inicio