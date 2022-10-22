import React, { useEffect } from "react";
import './Toast.css';
import { iconOption } from './utils';


interface IToast {
    message: string,
    toastId: string,
    icon: string,
    onToastClose: (event:React.FormEvent<HTMLElement>, toast: string) => void
}

const Toast: React.FC<IToast> = ({message, toastId, icon, onToastClose}) => {


  (() => {
    setTimeout(() => {
      const element = document.getElementById(toastId);
      if(element)
        element.style.display = "none";
    }, 5000);
  })();
  
  const selectedIcon = iconOption.find( (option, index) => option.key === icon );
  return (
        <div id={toastId} className={`toast`}>
          <div className="toast-icon">
            {
                selectedIcon?.value
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
