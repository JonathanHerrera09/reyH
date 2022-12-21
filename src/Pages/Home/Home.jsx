import React, {useState, useEffect} from 'react'
import { allHomex } from '../../funtions'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Cargando from '../../components/Cargando/Cargando'
import './home.css'

//Contador
let count=0;
const Home = () => {

  const [homex, setHomex] = useState(null)
  useEffect(() =>{
    allHomex(setHomex)
  },[])
/* function home2{

}
 */
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

//Banner y productos
  const featuredProducts = [
    "./images/imagen_1.jpg",
    "./images/imagen_2.png",
    "./images/imagen_3.jpg",
  ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
       startSlider() 
    }, []);
  
    const startSlider = () => {
      setInterval(() => {
        handleOnNextClick();
      }, 3000);
    };
  
    const handleOnNextClick = () => {
      count = (count + 1 ) % featuredProducts.length;
      setCurrentIndex(count);
    };
  
    const handleOnPrevClick = () =>{
      const productsLength = featuredProducts.length;
      count = (currentIndex + productsLength - 1 ) % productsLength;
      setCurrentIndex(count);
    };
    const EmpresaImags2 = {

      imageness: [
        {
          src: './images/ParaConsentirte1.png',
          alt: 'Peluqieria.',
        },
        {
          src: './images/ParaConsentirte2.png',
          alt: 'peluqueria.',
        },
      ],
    };
    
    const EmpresaImags3 = {
      
      images: [
        {
          src: './images/posicion1.jpg',
          alt: 'Perruqueria',
        },
        {
          src: './images/posicion2.jpg',
          alt: 'Perruqueria',
        },
        {
          src: './images/posicion3.jpg',
          alt: 'Perruqueria',
        },
        {
          src: './images/posicion5.jpg',
          alt: 'Perruqueria',
        },
      ],
    };
    return (
      <>
      {/* Codigo banner */}
      <br />
      <center className="letra text-2xl font-extrabold tracking-tight text-black-200 " >Promociones Recientes</center>
      <br />
      <div className="w-full select-none relative">
      {/* rounded-lg */}
    <div className="overflow-hidden relative h-56  sm:h-64 xl:h-80 2xl:h-96">
            <img className="banner"
            src={featuredProducts[currentIndex]} />
          </div>
    <button type="button" className=" flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" onClick={handleOnPrevClick}>
        <span className="bg-black inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="hidden">Previous</span>
        </span>
    </button>
    <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" onClick={handleOnNextClick}>
        <span className="bg-black inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="hidden">Next</span>
        </span>
    </button>
  </div>  

  <br></br>  
  <br></br>  

  <center id='afiliados' className="letra text-2xl font-extrabold tracking-tight text-black-200" >Empresas Asociadas</center>
  
<section className='empresas' >
      {
        homex != null ? (
          <div className='relative flex items-center'>
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
          <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide slider'>
            {
              homex.filter((home)=>home.type=== 2).map(
                (item) => (
                  <a href={item.link}>
                    <img
                      key={item.id}
                      className='w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                      src={item.img}
                      alt={item.link}
                    />
                  </a>
                  
                )
              )
            }
          </div>
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>
        ):
        (<Cargando />)
      }
</section>
<section className='empresas' id='empresas'>
  {
    homex != null ? (
      <div className="pt-6">
          <center className="letra text-2xl font-extrabold tracking-tight text-black-200 " >Para Consentirte</center>
              <div className="tamaño lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-8 gap-8 sm:py-2 sm:py-4 px-5 py-4">
              {homex.filter((home)=>home.type=== 3).map(
                  (item) => (
                <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                  <a href={item.link}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="borde w-full h-full object-center object-cover"
                    />
                  </a>
                    
                    
                </div>
                )
                )
              }
            </div>
                
        </div>
    ):
    (<Cargando/>)
  }
</section>
        <div className="pt-6">
          <center className="letra text-2xl font-extrabold tracking-tight text-black-200 " >Para tus mascotas</center>

          {/* Imagenes de 3*/}
          <div className="tamaño lg:px-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 lg:gap-x-8 gap-6 sm:py-2 sm:py-4 px-5 py-4"> 
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={EmpresaImags3.images[0].src}
                alt={EmpresaImags3.images[0].alt}
                className=" borde w-full h-full object-center object-cover"
              />
            </div>
            
            <div className="grid lg:grid-cols-1 lg:gap-y-2 gap-2">
              <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                <img
                  src={EmpresaImags3.images[1].src}
                  alt={EmpresaImags3.images[1].alt}
                  className="borde w-full h-full object-center object-cover"
                />
              </div>
              <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                <img
                  src={EmpresaImags3.images[2].src}
                  alt={EmpresaImags3.images[2].alt}
                  className="borde w-full h-full object-center object-cover"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img
                 src={EmpresaImags3.images[3].src}
                 alt={EmpresaImags3.images[3].alt}
                className="borde w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
 
      
    </>
  )
  }
  
export default Home