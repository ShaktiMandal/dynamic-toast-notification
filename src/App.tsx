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

  const onCloseToast = (toastId: string) => {
    const filteredToast = toastData.filter(toast => toast.toastId !== toastId);
    setToastData([...filteredToast]);
  };

  const autoToastClose = (toastId: string) => {
    console.log("auto close called");
    setTimeout(() => {

      console.log("auto close timeout");
      const filteredToast = toastData.filter(toast => toast.toastId !== toastId);
      setToastData([...filteredToast]);
    }, 100);
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
  return (
    <div className="App">
      <ToastConfigurationFrom onUpdateToastConfiguration={setConfiguration} />
      {toastData && toastData.length > 0 && (
        <Toast toasts={toastData} onToastClose={ onCloseToast } autoClose={ autoToastClose }/>
      )}
    </div>
  );
}

export default App;
