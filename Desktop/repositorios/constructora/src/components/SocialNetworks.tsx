import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'

const SocialNetwoks = () => {
      return (
            <div className="h-min-72 flex justify-center items-center flex-col">
                  <h1 className='text-3xl	 font-bold text-center mb-10'>Redes Sociales</h1>
                  {/* <div className="grid grid-cols-3 grid-flow-col gap-60 bg-white items-center"> */}
                  <div className="grid grid-flow-row-dense grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
                        <div className='w-72 flex justify-center items-center'>
                              <a href='#'>
                                    <img
                                          className='w-20 h-20 mx-10'
                                          src={facebook}
                                          alt=''
                                    />
                              </a>
                        </div>
                        <div className='w-72 flex justify-center items-center'>
                              <a href='#'>
                                    <img
                                          className='w-20 h-20'
                                          src={instagram}
                                          alt=''

                                    />
                              </a>
                        </div>
                        <div className='w-72 flex justify-center items-center'>
                              <a href='#'>
                                    <img
                                          className='w-20 h-20'
                                          src={whatsapp}
                                          alt=''

                                    />
                              </a>
                        </div>
                  </div>
            </div>
      )
}
export default SocialNetwoks