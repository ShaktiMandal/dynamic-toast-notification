import React, { useEffect } from "react";
import './Toast.css';
// import { CiCircleCheck, CiCircleInfo, CiWarning, CiStopSign1 } from 'react-icons/ci';

interface IToastInfo {
  toastId: string;
  message:string;
  toastType:string;
  position: string;
};

interface IToasts {
    toasts: Array<IToastInfo>,
    onToastClose: (toastId: string) => void,
    autoClose: (toast: string) => void, 
}

const Toast: React.FC<IToasts> = ({toasts, onToastClose, autoClose}) => {
  
  const getPositionClass  = (toasts:IToastInfo[]) => {
      const position = toasts[0].position?.split('-');
      return `${position[0]}${position[1]}`
  }

  const className = getPositionClass(toasts);  
  return (
    <div className={`container ${className}`}>
      {  toasts.map((toast, index) => {
        return(
            <div className="toast" key={ index.toString() } onLoad={ ()=> autoClose(toast.toastId)}>
                <div className="toast-icon">
                  {
                    
                  }
                </div>
                <div className="toast-msg">
                    { toast.message }
                </div>
                <div className="toast-action" >
                  {/* <span onLoad={ () => autoClose(toast.toastId)} onClick={ () => onToastClose(toast.toastId) }>&#10006;</span> */}
                  <span onClick={ () => onToastClose(toast.toastId) }>&#10006;</span>
                </div>
          </div>
      )})}
    </div>
  );
}

export default Toast;
