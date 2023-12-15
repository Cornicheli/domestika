import contact from '../json/contact.json'
import { IoLocationSharp } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";


import image from '../assets/images.png'

const Footer = () => {

      return (
            <div className="grid grid-flow-row-dense grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-3 bg-[#a3a4a4] justify-items-center items-center">

                  {/* <div className="grid grid-cols-3 grid-flow-col bg-[#a3a4a4] justify-items-center items-center"> */}

                  <div className="flex flex-col mt-10 w-80 h-64 items-center">
                        <div className='h-28 w-28 mb-5'>
                              <img className='w-full h-full'
                                    src={image}
                              />
                        </div>
                        <h3 className='text-white text-lg'>
                              Somos una empresa constructora especializada en la construcción de
                              viviendas industrializadas
                        </h3>
                  </div>

                  <div className=" flex items-center flex-col mt-10 w-80 h-64	">
                        <h3 className='text-xl text-white underline'>Contacto</h3>
                        {
                              contact.contact.map((item, index) =>
                                    <section key={index}>
                                          <div className='flex flex-row items-center'>
                                                <IoLocationSharp />
                                                <h3 className='ml-2 text-white text-lg my-2'>{item.address}</h3>
                                          </div>
                                          <div className='flex flex-row items-center'>
                                                <MdAlternateEmail />
                                                <h3 className='text-white text-lg my-2 ml-2'>Email: {item.email}</h3>
                                          </div>
                                          <div className='flex flex-row items-center'>
                                                <MdSmartphone />
                                                <h3 className='text-white text-lg my-2 ml-1'>Tel: {item.cel}</h3>
                                          </div>
                                          <div className='flex flex-row items-center'>
                                                <MdLocalPhone />
                                                <h3 className='text-white text-lg my-2 ml-1'>Cel: {item.tel}</h3>
                                          </div>
                                    </section>
                              )
                        }
                  </div>

                  <div className=" flex items-center flex-col mt-10 w-80 h-64	">
                        <h3 className='text-xl text-white underline-offset-3'>Dirreccion</h3>
                        {
                              contact.contact.map((item, index) =>
                                    <section key={index}>
                                          <div className='flex flex-row items-center'>
                                                <IoLocationSharp />
                                                <h3 className='ml-2 my-2 text-white text-lg'>{item.address}</h3>
                                          </div>
                                          <div className='flex flex-row items-center'>
                                                <MdWatchLater />
                                                <h3 className='text-white text-lg ml-2 my-2'>{item.hours}</h3>
                                          </div>
                                    </section>
                              )
                        }
                  </div>
            </div>
      );
};

export default Footer;
