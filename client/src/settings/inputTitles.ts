interface InputTitles {
  [key: string]: string;
}
export const formInputTitles: InputTitles = {
  title: 'Tytuł',
  description: 'Opis zdjęć',
  before: 'Zdjęcie Przed',
  after: 'Zdjęcie Po',
  width: 'Szerokość',
  height: 'Wysokość',
};

export const flexLabel = ['width', 'height'];

export const generateTitle = (name: string): string | null => {
  return formInputTitles.hasOwnProperty(name) ? formInputTitles[name] : null;
}