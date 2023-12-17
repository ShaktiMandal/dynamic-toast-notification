import React, { useEffect, useState } from "react";
import "./Toast.css";
import { iconOption } from "./utils";

interface IToast {
  message: string;
  toastId: string;
  icon: string;
  onToastClose: (event: React.FormEvent<HTMLElement>, toast: string) => void;
}

const Toast: React.FC<IToast> = ({ message, toastId, icon, onToastClose }) => {
  const selectedIcon = iconOption.find((option, index) => option.key === icon);

  const [isToastVisible, setToastVisibility] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setToastVisibility(false);
    }, 5000);

    return () => {
      setToastVisibility(true);
      clearTimeout(timeoutId);
    };
  }, [toastId]);

  return (
    <div
      id={toastId}
      className={`toast`}
      style={{ display: isToastVisible ? "flex" : "none" }}>
      <div className="toast-icon">{selectedIcon?.value}</div>
      <div className="toast-msg">
        <p>{message}</p>
      </div>
      <div className="toast-action">
        <span onClick={(event) => onToastClose(event, toastId)}>&#10006;</span>
      </div>
    </div>
  );
};

export default Toast;
