import Search from './components/Search';
import UserInfo from './components/UserInfo';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [colorMode, setColorMode] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const toggleMode = () => {
    setColorMode((prevMode) => !prevMode);
  };

  console.log(userInfo);

  return (
    <div>
      <h1>Hello world!</h1>
      <Search setUserInfo={setUserInfo} />
      <UserInfo userInfo={userInfo} />
    </div>
  );
};

export default App;
