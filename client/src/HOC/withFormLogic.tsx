import React, { Component, ComponentType } from 'react';
import { FormState, FormFillData, PhotoInterface } from '../interfaces/photos';
import { FormDataType } from '../interfaces/global';

function withFormLogic(Cmp: ComponentType<any>): any {
  class Controller extends Component<any, FormState> {
    constructor(props: any) {
      super(props);
      this.state = {
        formFillData: {
          title: '',
          description: '',
          width: 640,
          height: 480,
          before: null,
          after: null,
        },
        isError: false,
      } as FormState;
    }
    updateInputValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { value, name } = e.target;
      this.setState({
        ...this.state,
        formFillData: {
          ...this.state.formFillData,
          [name]: value
        }
      });
    }
    convertToFormData = (photoData: FormFillData): globalThis.FormData => {
      const convertedObj: FormDataType = {};
      Object.keys(photoData).forEach(key => {
        if (photoData[key] instanceof Blob) {
          convertedObj[key] = photoData[key] as Blob;
        } else {
          convertedObj[key] = '' + photoData[key];
        }
      });

      const formData = new FormData();
      for (const key in convertedObj) {
        formData.append(key, convertedObj[key]);
      }
      return formData;
    };
    setImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, files } = e.target;
      if (files) this.setState({
        formFillData: {
          ...this.state.formFillData,
          [name]: files[0],
        },
      });
    }
    updateFormFill = (data: PhotoInterface): void => {
      this.setState(prev => ({
        ...prev,
        formFillData: {
          ...prev.formFillData,
          title: data.title,
          description: data.description,
          width: data.dimensions.width,
          heigth: data.dimensions.height,
        }
      }));
    }
    handleError = () => {
      this.setState({ isError: true });
      /* TODO: obsługa błędów */
    };
    render(): React.ReactNode {
      return <Cmp
        {...this.props}
        formFillData={this.state.formFillData}
        updateInputValue={this.updateInputValue}
        setImage={this.setImage}
        convertToFormData={this.convertToFormData}
        handleError={this.handleError}
        updateFormFill={this.updateFormFill}
      />;
    }
  }
  return Controller;
}
export default withFormLogic;