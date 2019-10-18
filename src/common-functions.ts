import e = require("express");

export class CommonFunctions {
  constructor() {}

  /**
   * returns if a string is a valid 12 hour format time
   * @param time time in string format
   */
  public static validTimeFormat(time: string): boolean {
    const timeRegExp = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/g;
    return time ? time.match(timeRegExp)[0].length === time.length : false;
  }

  /**
   * returns if an array of strings are valid 12 hour format time
   * @param timeArray values to check
   */
  public static validTimeFormatArray(timeArray: Array<string>): boolean {
    return !timeArray.some(value => {
      return value ? !CommonFunctions.validTimeFormat(value) : false;
    });
  }

  /**
   * returns if the provided string is a valid day of week
   * @param day day of week
   */
  public static validWeekOfDay(day: string) {
    const dayRegExp = /(mon|tues|wednes|thurs|fri|satur|sun)(day)/g;
    return day
      ? day.toLowerCase().match(dayRegExp)[0].length === day.length
      : false;
  }

  /**
   * returns if a string provided is in valid yyyy-mm-dd format
   * @param date date string
   */
  public static validDateFormat(date: string) {
    const dateRegExp = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g;
    return date ? date.match(dateRegExp)[0].length === date.length : false;
  }
}
