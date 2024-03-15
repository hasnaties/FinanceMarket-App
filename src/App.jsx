import { useEffect, useState } from 'react';
import RightSide from './components/RightSide';
import SideMenu from './components/SideMenu';
import './styles/styles.scss';

function App() {
  const [toggleLeftStyle, setToggleLeftStyle] = useState({ display: '' });
  const [toggleRightStyle, setToggleRightStyle] = useState({ display: '' });

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);


  //handling toggle click
  const handleToggle = () => {
    if (toggleLeftStyle.display === 'none' || toggleLeftStyle.display === '') {
      setToggleLeftStyle({ display: 'flex' });
      setToggleRightStyle({ display: 'none' });

    } else if (toggleRightStyle.display == 'none' || toggleRightStyle === '') {
      setToggleRightStyle({ display: 'block' });
      setToggleLeftStyle({ display: 'none' });
    }
  }

  //listening for size change
  useEffect(() => {

    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  //Default
  useEffect(() => {
    if (innerWidth > 680) {
      setToggleLeftStyle({ display: 'flex' });
      setToggleRightStyle({ display: 'block' });
    } else {
      setToggleRightStyle({ display: 'block' });
      setToggleLeftStyle({ display: 'none' });
    }
  }, [innerWidth]);




  return (
    <>
      <SideMenu toggleStyle={toggleLeftStyle} handleToggle={handleToggle} />
      <RightSide toggleStyle={toggleRightStyle} />
    </>
  )
}

export default App
