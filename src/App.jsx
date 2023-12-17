import Search from './components/Search';
import UserInfo from './components/UserInfo';
import { useState } from 'react';
import './App.css';

import { MdLightMode } from 'react-icons/md'; // <MdLightMode />
import { MdDarkMode } from 'react-icons/md'; // <MdDarkMode />

const App = () => {
  const [colorMode, setColorMode] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const toggleMode = () => {
    setColorMode((prevMode) => !prevMode);
  };

  console.log(userInfo);

  return (
    <div className='app'>
      <main className='container'>
        <h1 className='title'>Devfinder</h1>
        {colorMode ? (
          <button onClick={() => setColorMode((prevColor) => !prevColor)}>
            Light <MdLightMode />
          </button>
        ) : (
          <button onClick={() => setColorMode((prevColor) => !prevColor)}>
            Dark <MdDarkMode />
          </button>
        )}
        <Search setUserInfo={setUserInfo} mode={colorMode} />
        <UserInfo userInfo={userInfo} mode={colorMode} />
      </main>
    </div>
  );
};

export default App;
