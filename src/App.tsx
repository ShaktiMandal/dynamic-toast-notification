import React, { useState } from "react";
import "./App.css";
import classNames from "classnames";
import Toast from "./components/Toast";
import ToastConfigurationFrom from "./components/ToastConfigurationForm";

interface IConfigData {
  title: string;
  position: string;
  icon: string;
}

interface IToastInfo {
  toastId: string;
  message: string;
  icon: string;
  position: string;
}

const initialState: IToastInfo = {
  toastId: "",
  message: "",
  icon: "",
  position: "",
};

function App() {
  const [toastData, setToastData] = useState<IToastInfo>(initialState);

  const onCloseToast = (
    event: React.FormEvent<HTMLElement>,
    toastId: string
  ) => {
    event.preventDefault();

    // const filteredToast = toastData.filter(
    //   (toast) => toast.toastId !== toastId
    // );
    setToastData(initialState);
  };

  const uniqueId = () => {
    const id = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    return id.toString();
  };

  const setConfiguration = (
    event: React.FormEvent<HTMLElement>,
    data: IConfigData
  ) => {
    event.preventDefault();
    const { title, position, icon } = data;

    setToastData({
      toastId: uniqueId(),
      message: title,
      icon,
      position,
    });
  };

  const getPositionClass = (toasts: IToastInfo) => {
    const position = toasts?.position?.split("-");
    return `${position[0]}${position[1]}`;
  };

  const className = toastData.toastId?.length
    ? getPositionClass(toastData)
    : null;

  return (
    <div className="App">
      <ToastConfigurationFrom onUpdateToastConfiguration={setConfiguration} />
      <div className={classNames("container", className)}>
        <Toast
          message={toastData.message}
          toastId={toastData.toastId}
          icon={toastData.icon}
          onToastClose={onCloseToast}
        />

        {/* {toastData.map((toast, index) => {
          return (
            <Toast
              message={toast.message}
              toastId={toast.toastId}
              icon={toast.icon}
              onToastClose={onCloseToast}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default App;
