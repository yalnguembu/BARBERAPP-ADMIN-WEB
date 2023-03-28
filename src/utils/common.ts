export const date = () => {
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "WEN", "SAT", "SUN"];
  const getDay = (date: string) => {
    const day = new Date();
    day.setMonth(4);
    return daysOfWeek[day.getDay() - 1];
  };
  const dateToDayOfWeek = (date: string) => {
    return daysOfWeek[new Date(date).getDay() - 1];
  };

  const dateToDayOfMonth = (date: string) => {
    return new Date(date).getDate();
  };

  const toLocalDateString = (date: string) => {
    return new Date(date).toDateString();
  };

  return {
    dateToDayOfWeek,
    dateToDayOfMonth,
    toLocalDateString,
    getDay,
  };
};
