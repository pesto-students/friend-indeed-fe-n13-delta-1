export const greeter = () => {
  // let hours = new Date().getHours()
  const Xmas95 = new Date('December 25, 1995 23:15:30');
  const hours = Xmas95.getHours();

  console.log(hours);
  switch (true) {
    case hours>=20 && hours<=24:
      return 'Good Night'
    case hours>=6 && hours<12:
      return 'Good Morning'
    case hours>=12 && hours<=2:
      return 'Good Afternoon'
    case hours>=3 && hours<=7:
      return 'Good Evening'
    default:
      break;
  }

}