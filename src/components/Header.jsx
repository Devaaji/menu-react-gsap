import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react'

const Header = props => {

    gsap.registerPlugin(ScrollTrigger)

    const { menuState, setMenuState } = props;



    useEffect(() => {
        const showAnim = gsap.from('.header', {
            yPercent: -100,
            paused: true,
            duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: 9999,
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse()
            }
        });
    })


    return (
        <div className="header">
            <div>
                <button className={`menu-trigger ${menuState ? 'menu-close' : ''}`}
                onClick={() => setMenuState(!menuState)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    )
}

export default Header
