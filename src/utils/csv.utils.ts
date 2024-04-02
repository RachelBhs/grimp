export const readCSV = (file: string, delimiter = ";"): any[] => {
  const titles = file.slice(0, file.indexOf("\n")).split(delimiter);

  return file
    .slice(file.indexOf("\n") + 1)
    .split("\n")
    .map((value) => {
      const values = value.split(delimiter);
      return titles.reduce((obj: any, title, index) => {
        obj[title] = values[index];
        return obj;
      }, {});
    });
};
