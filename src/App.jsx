import Search from './components/Search';
import UserInfo from './components/UserInfo';
import { useState } from 'react';
import './App.css';

import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

const App = () => {
  const [colorMode, setColorMode] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  return (
    <div className={`app app-${colorMode ? `dark` : `light`}`}>
      <main className='container'>
        <div className='title-container'>
          <h1 className={`title-${colorMode ? `dark` : `light`}`}>Devfinder</h1>
          {colorMode ? (
            <button
              onClick={() => setColorMode((prevColor) => !prevColor)}
              className='mode-dark'
            >
              Light <MdLightMode className='mode-icon' />
            </button>
          ) : (
            <button
              onClick={() => setColorMode((prevColor) => !prevColor)}
              className='mode-light'
            >
              Dark <MdDarkMode className='mode-icon' />
            </button>
          )}
        </div>
        <Search setUserInfo={setUserInfo} mode={colorMode} />

        {userInfo && (
          <UserInfo
            userInfo={userInfo.json}
            mode={colorMode}
            resStatus={userInfo.status}
          />
        )}
      </main>
    </div>
  );
};

export default App;
