import React, { useEffect, useState } from "react";
import "./ToastConfigurationFrom.css";

interface IConfigData {
  title: string, 
  position: string, 
  icon: string;
}

interface IConfiguration  {
  onUpdateToastConfiguration: (event: React.FormEvent<HTMLElement>, data: IConfigData) => void;
}

const ToastConfigurationFrom: React.FC<IConfiguration> = ({
  onUpdateToastConfiguration
}) => {

  const configData: IConfigData = {
      title: "",
      position: "",
      icon: ""
  }
  const [title, setTitle] = useState<string>("");
  const [selectedPosIndex, setSelectedPos] = useState<string>("");
  const [selectedMsgTypeIndex, SetMsgType] = useState<string>("");

  useEffect(()=> {
    configData.title = title;
    configData.position = selectedPosIndex,
    configData.icon = selectedMsgTypeIndex
  },[title, selectedMsgTypeIndex, selectedPosIndex])

  const onSetTitle = (event: React.FormEvent<HTMLElement>): void => {
    if (event.target) {     
      setTitle(event.target.value);
    }
  };

  const onChangePosition = (event: React.FormEvent<HTMLElement>): void => {
    if (event.target) {     
      const options = event.target.options;
      setSelectedPos(options[event.target.selectedIndex]?.value);
    }
  };

  const onChangeIcon = (event: React.FormEvent<HTMLElement>): void => {
    if (event.target) {     
      const options = event.target.options;
      SetMsgType(options[event.target.selectedIndex]?.value);
    }
  };

  return (
    <div className="form">
      <form
        onSubmit= { event => onUpdateToastConfiguration(event, configData) }
        className="form-configuration">
        <label htmlFor="title">Ttile </label>
        <input
        type="text"
        className="title"
        id="title"
        onInput={ onSetTitle }
        />

        <label htmlFor="position">Position </label>
        <select name="position" id="position" onChange={ onChangePosition }>
          <option value="top-left">Top Left</option>
          <option value="top-right">Top Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-right">Bottom Right</option>
        </select>
       
        <label htmlFor="icons"> Icon </label>
        <select name="icons" id="icons" onChange={ onChangeIcon }>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
          <option value="info">Info</option>
          <option value="success">Success</option>
        </select>
        <input type="submit" value="Submit" className="form-btn" />
      </form>
    </div>
  );
};

export default ToastConfigurationFrom;
