type ValidateDimension = (dim: number) => boolean;

class ValidateData {
  public validateTitle = (title: string) => {
    if (title.length >= 5 && title.length <= 30) return true;
    else return false;
  }
  public validateDimension: ValidateDimension = dim => {
    if (dim > 10 && dim <= 1000) return true;
    else return false;
  }
}

export default new ValidateData();