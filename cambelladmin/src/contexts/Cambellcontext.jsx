import React,{createContext,useState,useRef} from 'react';

export const BaseContext = createContext(null);

export default function AppContext({ childern }) {
  const [cambell, setcambell] = useState({
    Appname: "CampbellDecor",
      Applogo: "../style/logo.png",
    Appmail:"campbellDecor087@.com"
  });

  return (
    <BaseContext.Provider value={{ cambell, setcambell }}>
      {childern}
    </BaseContext.Provider>
  );
}