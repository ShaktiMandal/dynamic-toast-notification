import React, { useEffect, useState } from "react";
import "./ToastConfigurationFrom.css";
import { iconOption } from './utils'

interface IConfigData {
  title: string;
  position: string;
  icon: string;
}

interface IConfiguration {
  onUpdateToastConfiguration: (
    event: React.FormEvent<HTMLElement>,
    data: IConfigData
  ) => void;
}

const ToastConfigurationFrom: React.FC<IConfiguration> = ({
  onUpdateToastConfiguration,
}) => {

  const configData: IConfigData = {
    title: "",
    position: "",
    icon: "",
  };

  const [title, setTitle] = useState<string>("");
  const [selectedPosition, setPosition] = useState<string>("top-left");
  const [selectedIcon, setIcon] = useState<string>("burger");

  useEffect(() => {
    configData.title = title;
    configData.position = selectedPosition;
    configData.icon = selectedIcon;
  }, [title, selectedIcon, selectedPosition]);

  const onSetTitle = (event: React.FormEvent<HTMLElement>): void => {
    if (event.target) {
      setTitle(event.target.value);
    }
  };

  const onChangePosition = (event: React.FormEvent<HTMLElement>): void => {
    if (event.target) {
      debugger;
      const options = event.target.options;
      setPosition(options[event.target.selectedIndex]?.value);
    }
  };

  const onChangeIcon = (event: React.FormEvent<HTMLElement>): void => {
    if (event.target) {
      const options = event.target.options;
      setIcon(options[event.target.selectedIndex]?.value);
    }
  };

  const resetForm = (): void => {
    setTitle('');
    setIcon('burger');
    setPosition('top-left');
  }

  const onSubmit =(event) => {
    event.preventDefault();
    onUpdateToastConfiguration(event, configData);
    resetForm();
  }

  return (
    <div className="form">
      <form
        onSubmit={ onSubmit }
        className="form-configuration">
        <label htmlFor="title">Ttile </label>
        <input required type="text" className="title" id="title" value={ title } onInput={ onSetTitle } />

        <label htmlFor="position">Position </label>
        <select name="position" id="position" value={ selectedPosition } onChange={ onChangePosition }>
          <option value="top-left">Top Left</option>
          <option value="top-right">Top Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-right">Bottom Right</option>
        </select>

        <label htmlFor="icons"> Icon </label>
        <select name="icons" id="icons" value={ selectedIcon } onChange={ onChangeIcon }>
          {iconOption.map((icon, index) => {
            return (
              <option value={icon.key} key={index.toString()}>
                <React.Fragment>
                  {icon.value} - {icon.key}
                </React.Fragment>
              </option>
            );
          })}
        </select>
        <input type="submit" value="Submit" className="form-btn" />
      </form>
    </div>
  );
};

export default ToastConfigurationFrom;
