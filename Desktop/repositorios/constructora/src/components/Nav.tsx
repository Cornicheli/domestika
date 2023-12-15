import { useState } from 'react'
import menu from '../assets/menu.png'

const Nav = () => {
      const Links = [
            { name: "Desarrollo Urbano", link: "/" },
            { name: "Contacto", link: "/" },
            { name: "Sobre Notros", link: "/" },
            { name: "Piletas", link: "/" },
      ];
      const [open, setOpen] = useState(false);
      return (
            <div className='shadow-md w-full top-0 left-0'>
                  <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                        <div className='font-bold text-2xl cursor-pointer flex items-center  text-gray-800'>
                              <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                              </span>
                              Constructora
                        </div>

                        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-3.5 cursor-pointer md:hidden'>
                              <button onClick={() => setOpen(!open)} className='md:hidden block focus:outline-none'>
                                    <img
                                          className='w-10 h-10'
                                          src={menu}
                                    />

                              </button>
                        </div>

                        <ul className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 ' : 'top-[-490px]'}`}>
                              {
                                    Links.map((link) => (
                                          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-1000'>{link.name}</a>
                                          </li>
                                    ))
                              }
                        </ul>
                  </div>
            </div>
      )
}

export default Nav