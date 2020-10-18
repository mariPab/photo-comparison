type ValidateDimension = (dim: number) => boolean;

class ValidateData {
  public validateTextInputs = (...stringInputValues: string[]) => {
    for (let value in stringInputValues) {

    }

  }
  public validateDimension: ValidateDimension = dim => {
    if (dim > 10 && dim <= 1000) return true;
    else return false;
  }
}

export default new ValidateData();