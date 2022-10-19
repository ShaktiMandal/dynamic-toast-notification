import React, { useState } from "react";
import "./App.css";
import Toast from "./components/Toast";
import ToastConfigurationFrom from "./components/ToastConfigurationForm";

interface IConfigData {
  title: string;
  position: string;
  icon: string;
}

interface IToastInfo {
  toastId: string,
  message: string;
  toastType: string;
  position: string;
}

function App() {
  const [toastData, setToastData] = useState<Array<IToastInfo>>([]);

  const onCloseToast = (event:React.FormEvent<HTMLElement>, toastId: string) => {
    event.preventDefault();
    const filteredToast = toastData.filter(toast => toast.toastId !== toastId);
    setToastData([...filteredToast]);
  };

  const uniqueId = () => {
    const id = Math.floor( Math.random() * ( 100 - 0 + 1 ) ) + 0;
    return id.toString();
  };

  const setConfiguration = (
    event: React.FormEvent<HTMLElement>,
    data: IConfigData
  ) => {
    event.preventDefault();
    const { title, position, icon } = data;

    setToastData([
      ...toastData,
      {
        toastId: uniqueId(),
        message: title,
        toastType: icon,
        position,
      },
    ]);
  };

const getPositionClass  = (toasts:IToastInfo[]) => {
    const position = toasts[0].position?.split('-');
    return `${position[0]}${position[1]}`
}

const className = toastData.length ? getPositionClass(toastData) : null;  

  return (
    <div className="App">
      <ToastConfigurationFrom onUpdateToastConfiguration={setConfiguration} />
      <div className={`container ${className}`}> 
        {
          toastData.map( (toast, index)=> {
            return <Toast message={ toast.message } toastId={ toast.toastId } onToastClose={ onCloseToast } />
          })
        }
      </div>
    </div>
  );
}

export default App;
