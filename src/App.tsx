import { useState } from 'react'
import './app.css'
//Interface for the size of the loading image
interface size {
  width: string;
  height: string;
  clicked: boolean;
}
//Interface for the color of the loading image
interface color {
  color: string;
  clicked: boolean;
}
//Interface for the speed of the animation
interface speed {
  duration: string;
  clicked: boolean;
}

function App() {
  //All the states of this program

  //State for storing the data of how big the loading image is, using interface of size
  const [big, setBig] = useState<size>({width: '100px', height: '100px', clicked: true})
  //State for storing the color of the loading image, using interface of color
  const [color, setColor] = useState<color>({color: '#7800F0', clicked: true})
  //State for storing the speed of the animation, using interface of speed
  const [speed, setSpeed] = useState<speed>({duration: '1000ms', clicked: true})

  //This function is used for changing the size of the loading image, by changing the "big" state
  const changeSize = () => {
    if(big.clicked) {
      return setBig({width: '150px', height: '150px', clicked: !big.clicked})
    }
    return setBig({width: '100px', height: '100px', clicked: !big.clicked})
  }
  //This function is used for changing the color of the loading image, by changing the "color" state
  const changeColor = () => {
    if(color.clicked) {
      return setColor({color: '#FFE402', clicked: !color.clicked})
    }
    return setColor({color: '#7800F0', clicked: !color.clicked})
  }
  //This function is used for changing the speed of the animation, by changing the "speed" state
  const changeSpeed = () => {
    if(speed.clicked) {
      return setSpeed({duration: '750ms', clicked: !speed.clicked})
    }
    return setSpeed({duration: '1000ms', clicked: !speed.clicked})
  }

  //Here is the component created with buttons using the three functions above and the image itself
  return (
    <div className="App">
      <div className='button-container'>
        <div onClick={() => changeSize() } className='change-button' >CHANGE THE SIZE</div>
        <div onClick={() => changeColor() }className='change-button' >CHANGE COLOR</div>
        <div onClick={() => changeSpeed() }className='change-button' >CHANGE SPEED</div>
      </div>
      <div className='loading-image'
         title='loading-image'
         data-test-id="loading-image"
         style={{width: big.width,
         height: big.height,
         animationDuration: speed.duration,
         }}
      >
        <div className='inside-circle big b1' title = 'color-ball' style={{background: color.color}}></div>
        <div className='inside-circle big b2' style={{background: color.color}}></div>
        <div className='inside-circle big b3' style={{background: color.color}}></div>
        <div className='inside-circle big b4' style={{background: color.color}}></div>
      </div>
    </div>
  )
}

export default App
