
import aboutUs from '../json/aboutUs.json'

const AboutUs = () => {
      return (
            <div className=" bg-white flex items-center justify-center flex-col mb-10">
                  <div className="h-40 flex justify-center items-center flex-col w-2/4 mt-5">
                        <h1 className="text-4xl text-center font-bold text-[#1b1b1c]">SOBRE NOSOTROS</h1>
                        <p className="mt-10 text-center text-lg font-medium text-[#1b1b1c]">Venimos de la construcción, de la arquitectura y de la ingeniería aplicada. Somos un equipo, creamos un concepto. Aplicamos la tecnología a las tareas tradicionales y el buen arte y oficio a la solución de nuevos desafíos.
                        </p>
                  </div>
                  {/* <div className="grid grid-cols-3 grid-flow-col gap-60 bg-white item h-3/4"> */}
                  <div className="grid grid-flow-row-dense grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
                        {
                              aboutUs.aboutUs.map((item, index) =>
                                    <div className="items-center justify-around flex flex-col w-80 h-96 py-5 mt-5" key={index}>
                                          <div className="relative w-36 h-36 group overflow-hidden">
                                                <img className="w-full h-full" src={item.image} alt="Image" />
                                          </div>
                                          <h1 className='text-cente font-bold'>{item.title}</h1>
                                          <h3 className='text-center text-zinc-600 text-ellipsis overflow-hidden'>{item.subTitle}</h3>
                                    </div>
                              )
                        }
                  </div>

            </div>
      )
}

export default AboutUs