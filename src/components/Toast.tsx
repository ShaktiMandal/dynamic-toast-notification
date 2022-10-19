import React, { useEffect } from "react";
import './Toast.css';

interface IToast {
    message: string,
    toastId: string,
    onToastClose: (event:React.FormEvent<HTMLElement>, toast: string) => void
}

const Toast: React.FC<IToast> = ({message, toastId, onToastClose}) => {

  (() => {
    setTimeout(() => {
      const element = document.getElementById(toastId);
      if(element)
        element.style.display = "none";
    }, 5000);
  })();
  
  return (
        <div id={toastId} className={`toast`}>
          <div className="toast-icon">
            {
              
            }
          </div>
          <div className="toast-msg">
              { message }
          </div>
          <div className="toast-action" >
            <span onClick={ (event) => onToastClose(event, toastId) }>&#10006;</span>
          </div>
        </div>
      )
}

export default Toast;
