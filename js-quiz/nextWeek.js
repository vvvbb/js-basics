nextWeek = (date) => {
  // console.log(date);

  let newdate = new Date(date);
  newdate.setDate(newdate.getDate() + 7);

  // console.log(newdate);

  return newdate;
};

nextWeek(new Date());
