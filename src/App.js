import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi' //icone de settings
import { TooltipComponent } from '@syncfusion/ej2-react-popups' //exibe um texto informativo quando os usuários passam o mouse, focalizam ou tocam o componente.
import './App.css'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components' //import components
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid,
        Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker,
        ColorMapping, Editor}from './pages'

import { UseStateContext } from './contexts/ContextProvider'


function App (){
    const { activeMenu, setActiveMenu } = UseStateContext()
    return(
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000'}}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type="button"
                            className="text-3xl p-3 hover:drop-shadow-xl
                             hover:bg-light-gray
                             text-white"
                            style={{ background: 'blue', borderRadius: '50%'}}
                            onClick={()=>{}}
                            >
                                <FiSettings/>
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar
                         dark:bg-secondary-dark-bg
                         bg-white">
                            <Sidebar/>
                        </div>
                    ):(
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar/>
                        </div>
                    )}
                    <div className={
                    `dark:bg-main-bg bg-main-bg main-h-screen 
                     w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                    }>
                        <div className="fixed md:static bg-main-bg
                         dark:bg-main-dark-bg navbar w-full">
                            <Navbar/>
                        </div>
                        <div>
                            <Routes>
                                {/* Dashboard */}
                                <Route path='/' element={<Ecommerce/>}></Route>
                                <Route path='/ecommerce' element={<Ecommerce/>}></Route>

                                {/* Pages */}
                                <Route path='/orders' element={<Orders/>}></Route>
                                <Route path='/employees' element={<Employees/>}></Route>
                                <Route path='/customers' element={<Customers/>}></Route>

                                {/* Apps */}
                                <Route path='/kanban' element={<Kanban/>}></Route>
                                <Route path='/text-editor' element={<Editor/>}></Route>
                                <Route path='/calendar' element={<Calendar/>}></Route>
                                <Route path='/color-picker' element={<ColorPicker/>}></Route>

                                {/* Charts | Gŕaficos */}
                                <Route path='/line' element={<Line/>}></Route>
                                <Route path='/area' element={<Area/>}></Route>
                                <Route path='/bar' element={<Bar/>}></Route>
                                <Route path='/pie' element={<Pie/>}></Route>
                                <Route path='/financial' element={<Financial/>}></Route>
                                <Route path='/color-mapping' element={<ColorMapping/>}></Route>
                                <Route path='/pyramid' element={<Pyramid/>}></Route>
                                <Route path='/stacked' element={<Stacked/>}></Route>

                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App