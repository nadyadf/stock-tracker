const sqlDateTimeConverter = (expired) => {
  const sqlDate = expired.replace('T', ' ');
  let date = sqlDate.replace(/[-]/g, '/');
  date = Date.parse(date);
  const jsDate = new Date(date);
  return `${jsDate.getDate()}/${jsDate.getMonth()}/${jsDate.getFullYear()}`;
};

export default sqlDateTimeConverter;
