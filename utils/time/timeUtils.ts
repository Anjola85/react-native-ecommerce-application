import { BusinessRespDto } from "../../api/api-contracts/user/responses/business.response";
import {
  ScheduleRespDto,
  Timing,
} from "../../api/api-contracts/user/responses/schedule.response";
import { BusinessDto } from "../../screens/browse/search-screen/data/data-types";

const daysOfTheWeek: string[] = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export interface BusinessDay {
  day: string;
  shortened_day: string;
  open_time: string;
  shortened_open_time: string;
  close_time: string;
  shortened_close_time: string;
}

export const getTodaysTimeObject = (store: BusinessDto | BusinessRespDto) => {
  const todayIndex = new Date().getDay();
  const today = daysOfTheWeek[todayIndex];

  // check if store is a BussinessDto
  if ((store as BusinessDto).googlePlaceId) {
    return getTimeObject(today, store as BusinessDto);
  }

  return getStoreTimeObject(today, store as BusinessRespDto);
};

export const getTimeObject = (day: string, store: BusinessDto) => {
  day = day.toLowerCase();
  if (!daysOfTheWeek.includes(day) || !store.schedule) {
    return null;
  }

  return {
    day,
    shortened_day: shortenDay(day),
    open_time: store.schedule[day as keyof ScheduleRespDto]?.open,
    shortened_open_time: shortenTime(
      store.schedule[day as keyof ScheduleRespDto]?.open ?? ""
    ),
    close_time: store.schedule[day as keyof ScheduleRespDto]?.close,
    shortened_close_time: shortenTime(
      store.schedule[day as keyof ScheduleRespDto]?.close ?? ""
    ),
  };
};

function shortenDay(day: string): string {
  switch (day.toLowerCase()) {
    case "sunday":
      return "Sun";
    case "monday":
      return "Mon";
    case "tuesday":
      return "Tue";
    case "wednesday":
      return "Wed";
    case "thursday":
      return "Thu";
    case "friday":
      return "Fri";
    case "saturday":
      return "Sat";
    default:
      return day; // Return the original string if it's not a valid day
  }
}

function shortenTime(time: string): string {
  const parts = time.split(":");
  if (parts.length === 2) {
    const [hour, minuteAndMeridian] = parts;
    const [minute, meridian] = minuteAndMeridian.match(/[AaPp][Mm]/)
      ? minuteAndMeridian.split(/[AaPp][Mm]/)
      : [minuteAndMeridian, ""];

    return `${hour}:${minute}${meridian.toUpperCase()}`;
  }
  return time; // Return the original string if it's not in the expected format
}

export const CapitalizeDay = (day: string): string => {
  return daysOfTheWeek.includes(day)
    ? day.charAt(0).toUpperCase() + day.slice(1, 3)
    : day;
};

export const isStoreOpen = (store: BusinessRespDto): boolean => {
  if (!store.schedule) return false;

  const day = new Date()
    .toLocaleDateString(undefined, { weekday: "long" })
    .split(",")[0]
    .toLowerCase();
  const scheduleDay = day as keyof ScheduleRespDto;
  const openingHours = store.schedule[scheduleDay];

  if (!openingHours || !openingHours.open || !openingHours.close) {
    // If no schedule data for the given day, consider the store closed
    return false;
  }

  const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
  const hhmm = `${String(new Date().getHours()).padStart(2, "0")}:${String(
    new Date().getMinutes()
  ).padStart(2, "0")}`; // "HH:MM"

  const currentTime = new Date(`${today} ${hhmm}`);
  const openingTime = new Date(
    `${today} ${openingHours.open.hour}:${openingHours.open.minute}`
  );
  const closingTime = new Date(
    `${today} ${openingHours.close.hour}:${openingHours.close.minute}`
  );

  return currentTime >= openingTime && currentTime <= closingTime;
};

//  formatForDateConstructor converts time string to a format that can be used by the Date constructor
//  e.g. 12:00PM => 12:00,
//      12:00AM => 00:00
export const formatForDateConstructor = (timeString: string): string => {
  let [time, ampm] = timeString.split(/(?<=\d)(AM|PM)/);

  if (ampm === "PM") {
    const hour = parseInt(time.split(":")[0], 10);
    time = (hour === 12 ? 12 : hour + 12) + ":" + time.split(":")[1];
  } else {
    const hour = parseInt(time.split(":")[0], 10);
    time = (hour === 12 ? "00" : time) + ":" + time.split(":")[1];
  }
  return time;
};

export const convertTo12Hour = (hour: number, minute: number): string => {
  // Determine AM or PM suffix
  const suffix = hour >= 12 ? "PM" : "AM";

  // Convert hour to 12-hour format
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'

  // Format minutes to be always two digits
  const minutesFormatted = minute < 10 ? "0" + minute : minute;

  // Construct the formatted time string
  return `${hour}:${minutesFormatted}${suffix}`;
};

export const getStoreTimeObject = (day: string, store: BusinessRespDto) => {
  day = day.toLowerCase();
  const open_time = store.schedule[day as keyof ScheduleRespDto]?.open;
  const close_time = store.schedule[day as keyof ScheduleRespDto]?.close;

  return {
    day,
    shortened_day: shortenDay(day),
    open_time: convertTo12Hour(open_time.hour, open_time.minute),
    shortened_open_time: shortenTime(
      convertTo12Hour(open_time.hour, open_time.minute)
    ),
    close_time: convertTo12Hour(close_time.hour, close_time.minute),
    shortened_close_time: shortenTime(
      convertTo12Hour(close_time.hour, close_time.minute)
    ),
  };
};

export function getClosingTime(schedule: ScheduleRespDto | undefined): string {
  if (!schedule) return "Not available";
  const dayNames = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = dayNames[currentDate.getDay()];

  const closingTime: Timing = (schedule as any)[dayOfWeek].close;
  const formattedTime = formatTime(closingTime);

  return formattedTime;
}

export function formatTime(time: Timing): string {
  const hours = time.hour > 12 ? time.hour - 12 : time.hour;
  const minutes = time.minute < 10 ? `0${time.minute}` : time.minute;
  const amPm = time.hour >= 12 ? "pm" : "am";
  return `${hours}:${minutes}${amPm}`;
}

export function isOpenOrClosed(schedule: ScheduleRespDto): string {
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getDay()]; // Get the current day of the week

  const currentDaySchedule = (schedule as any)[currentDay];
  const currentClosingTime = currentDaySchedule.close;
  const currentOpeningTime = currentDaySchedule.open;

  // Convert closing and opening times to minutes since midnight for easier comparison
  const closingMinutes =
    currentClosingTime.hour * 60 + currentClosingTime.minute;
  let openingMinutes = currentOpeningTime.hour * 60 + currentOpeningTime.minute;
  // If opening time is earlier than closing time, adjust opening time by adding 24 hours
  if (closingMinutes < openingMinutes) {
    openingMinutes += 24 * 60;
  }

  // Convert current time to minutes since midnight
  const currentMinutes = currentDate.getHours() * 60 + currentDate.getMinutes();

  // Check if current time is within the closing-open range

  if (currentMinutes < openingMinutes) {
    return "Closed";
  } else {
    return "Open now";
  }
}
