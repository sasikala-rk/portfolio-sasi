import React, { useState } from 'react'

const Header = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleHamburger = () => {
        // 1 -> treditional method (easy)
        // if(isSidebarOpen === true){
        //     setIsSidebarOpen(false)
        // } else {
        //     setIsSidebarOpen(true)
        // }

        // 2 -> bit advanced method
        // setIsSidebarOpen(isSidebarOpen === true ? false : true)

        // 3 -> confusion method, but it will use for multiple case
        // switch (isSidebarOpen) {
        //     case true:
        //         setIsSidebarOpen(false)
        //         break;
        //     case false:
        //         setIsSidebarOpen(true)
        //         break;
        //     default:
        //         setIsSidebarOpen(false)
        // }

        // 4 -> advanced and short method
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <header>
            <a href='/' class="logo">
                <div>
                    S
                </div>
                <span>RKS</span>
            </a>
            <ul className='nav-bar'>
                <a href="/about">
                    <li>About</li>
                </a>
                <a href='/projects'>
                    <li>Projects</li>
                </a>
                <a href='/contact'>
                    <li>contact</li>
                </a>
            </ul>
            <div className='hamburger' onClick={handleHamburger}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
            {
                isSidebarOpen ? <>
                    <div className='overlay' onClick={handleHamburger}></div>
                    <section className='sidebar'>
                        <div className='sidebar-header'>
                            <span>Menu</span>
                            <span onClick={handleHamburger}>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </span>

                        </div>
                        <ul className='sidebar-nav'>
                            <a href="/about">
                                <li>About</li>
                            </a>
                            <a href='/projects'>
                                <li>Projects</li>
                            </a>
                            <a href='/contact'>
                                <li>contact</li>
                            </a>
                        </ul>

                    </section>
                </> : <></>
            }
        </header>
    )
}

export default Header