class MyCalendar {
  days = ["일", "월", "화", "수", "목", "금", "토"];
  months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  startDate;
  startDay;
  endDate;
  endDay;

  constructor(year, month) {
    const start = new Date(year, month, 0);
    const end = new Date(year, month + 1, 0);
    this.startDate = start.getDate();
    this.startDay = start.getDay();
    this.endDate = end.getDate();
    this.endDay = end.getDay();
  }

  static getDayString(day) {
    return MyCalendar.days[day];
  }

  static getMonthString(month) {
    return MyCalendar.months[month];
  }

  getDates() {
    const dates = [];
    for (let i = 0; i <= this.startDay; i += 1) dates.push("");
    for (let i = 1; i <= this.endDate; i += 1) dates.push(i);
    for (let i = 0; this.endDay + i + 1 < 7; i += 1) dates.push("");

    return dates;
  }
}

export default MyCalendar;
