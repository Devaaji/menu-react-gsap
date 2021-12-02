import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';


const SidebarNav = props => {
  let sidebarMenu = useRef(null);
  let sidebarMenuOverlay = useRef(null);
  let menuLayer = useRef(null);
  const menuTimeline = useRef();

  const { menuState, setMenuState } = props;

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidebarMenuOverlay, menuLayer, sidebarMenu],
      {
        duration: 0,
        x: '100%'
      },
      {
        duration: 0.75,
        x: '0%',
        ease: 'power3.inOut',
        stagger: {
          amount: .3
        }
      }
    );
  }, []);

  useEffect(() => {
    menuState ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [menuState]);



  return (
    <>
      <div
        className="sidebarNavigationOverlay"
        ref={el => (sidebarMenuOverlay = el)}
        onClick={() => setMenuState(false)}
      ></div>
      <div className="menu-wrapper">
        <div className="menu-layer" ref={el => (menuLayer = el)}></div>
        <nav className="sidebarNavigation" ref={el => (sidebarMenu = el)} onClick={() => setMenuState(false)}>
          <div className="sidebar-top">
            <div className="links-wrapper">
              <div className="menu-link" to="/" >
                Home
              </div>
              <div className="menu-link2" to="/about">
                About
              </div>
              <div className="menu-link3" to="/services">
                Services
              </div>
              <div className="menu-link4" to="/gallery">
                Gallery
              </div>
              <div className="menu-link5" to="/contact">
                Contact
              </div>
              <div className="bg1 bg"></div>
              <div className="bg2 bg"></div>
              <div className="bg3 bg"></div>
              <div className="bg4 bg"></div>
              <div className="bg5 bg"></div>
            </div>
          </div>
          <div className="sidebar-bottom">
            <ul className="extra-links">
              <li className="link-item">
                <div className="link-title">Email</div>
                <a href="mailto:devaaji5@gmail.com">devaaji5@gmail.com</a>
              </li>
              <li className="link-item">
                <div className="link-title">Find Me</div>
                <span>Bandar Lampung, Lampung</span>
                <span>Natar, Jln. Branti</span>
              </li>
              <li className="link-item">
                <div className="link-title">Phone</div>
                <span>+6289-7911-1476 (WA)</span>
              </li>
              <li className="link-item">
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default SidebarNav;
