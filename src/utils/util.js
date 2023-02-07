import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("Asia/Seoul");

export const fillEmptyColumns = (columns, start, end) => {
  const filledColumns = columns.slice(0);

  // 1. 첫날 이전 공백 채우기
  const startDay = dayjs(start).get("day");
  for (let i = 1; i <= startDay; i += 1) {
    const date = dayjs(start).subtract(i, "day");
    filledColumns.unshift(date);
  }

  // 2. 마지막날 이후 공백 채우기
  const endDay = dayjs(end).get("day");
  for (let i = 0; i <= 6 - endDay; i += 1) {
    const date = dayjs(end).add(i, "day");
    filledColumns.push(date);
  }
  return filledColumns;
};

export const getCalendarColumns = (now) => {
  const start = dayjs(now).startOf("month").add(9, "hour");
  const end = dayjs(now).endOf("month").add(9, "hour");
  const endDate = dayjs(end).subtract(9, "hour").get("date");

  const columns = [];

  for (let i = 0; i < endDate; i += 1) {
    const date = dayjs(start).add(i, "day");
    columns.push(date);
  }

  const filledColumns = fillEmptyColumns(columns, start, end);
  return filledColumns;
}

/**
 * @param day 0 ~ 6
 * @return 일~월 
 */
export const getDayText = (day) => {
  switch (day) {
    case 0: return "일";
    case 1: return "월";
    case 2: return "화";
    case 3: return "수";
    case 4: return "목";
    case 5: return "금";
    case 6: return "토";
  }
}