import typologies from "../json/typologies.json"

const Typologies = (() => {
      return (
            <div className="flex flex-col items-center justify-center bg-[#a3a4a4]">
                  <div className="flex flex-col items-center justify-center w-3/4 mt-16">
                        <h1 className=" text-4xl text-center font-bold text-[#1b1b1c]">Tipologías</h1>
                        <p className="mt-10 text-center text-lg font-medium text-[#1b1b1c] ">La empresa actualmente ofrece tipologías estandarizadas de 1, 2 y 3 dormitorios, en una sola planta, en sus líneas Clásica, Moderna y Premium. Además, dispone de un departamento especializado para el desarrollo de proyectos a medida.</p>
                        <p className="mt-10 text-center text-lg font-medium text-[#1b1b1c] ">Disponemos también de terminaciones avanzadas: tomado de juntas interior / exterior con revoque plástico exterior aplicado.</p>
                  </div>

                  {/* <div className="grid grid-cols-3 grid-flow-col w-full mt-10 mb-10 h-96"> */}
                  <div className="grid grid-flow-row-dense grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-3 h-min-96 mt-10 mb-10">
                        {
                              typologies.typologies.map((item, index) =>
                                    <div className="flex flex-col items-center justify-center w-9/12 h-max-64 m-auto relative border-2" key={index}>
                                          <div className=" w-full h-42 group overflow-hidden">
                                                <img className="w-full h-full" src={item.image} alt="Image" />
                                          </div>
                                          <div className="bg-[#00000061] absolute w-36 h-10 bottom-0 left-5">
                                                <h1 className='font-semibold absolute bottom-2 left-5 text-white'>{item.title}</h1>
                                          </div>
                                    </div>
                              )
                        }
                  </div>

            </div>
      )
})

export default Typologies