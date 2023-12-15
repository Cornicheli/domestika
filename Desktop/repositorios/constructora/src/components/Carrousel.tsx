import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';

function App() {
      const slides = [
            {
                  url: 'https://www.waterair.com/wp-content/uploads/2021/10/choisir-sa-piscine.jpg',
            },
            {
                  url: 'https://boness.com.ar/wp-content/uploads/2022/10/piscina-rectangular-de-noche.jpg',
            },
            {
                  url: 'https://www.topciment.com/imagenes/news/hormigon-impreso-piscina-con-molde-rosa-de-los-vientos.jpg',
            },
            {
                  url: 'https://www.topciment.com/imagenes/news/vivienda-con-terraza-de-hormigon-impreso-piscina.jpg',
            },
            {
                  url: 'https://st.hzcdn.com/simgs/pictures/pools/privates-wohnhaus-mit-pool-falko-wuebbecke-fotodesign-img~8371a14109bbb931_14-9755-1-e032270.jpg',
            },
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
      };

      const nextSlide = () => {
            const isLastSlide = currentIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
      };

      const goToSlide = (slideIndex: number) => {
            setCurrentIndex(slideIndex);
      };

      return (
            <div className=' h-[700px] w-full m-auto mb-10 relative group'>
                  <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='w-full h-full bg-center bg-cover duration-500 '
                  >
                        <div className='h-36 w-96 rounded-t-xl bg-[#00000061] absolute bottom-0 left-60  hidden sm:block '>
                              <h1 className='text-2xl font-bold text-white pl-5'>Constuimos tu PILETA LISTA</h1>
                              <h3 className='text-xl text-white pl-5'>Proyectamos sobre tu terreno</h3>
                              <div className='mt-7 ml-5 h-5'>
                                    <a
                                          className='p-3 hover:border-[1px] text-white rounded-lg duration-200'
                                          href="#">MAS INFO</a>
                              </div>
                        </div>
                  </div>

                  {/* Left Arrow */}
                  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                  </div>
                  {/* Right Arrow */}
                  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                  </div>
                  <div className='flex top-4 justify-center py-2 '>

                        {slides.map((slide, slideIndex) => (
                              <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className='text-2xl cursor-pointer'
                              >
                                    {/* <RxDotFilled /> */}
                              </div>
                        ))}
                  </div>
            </div >
      );
}

export default App;