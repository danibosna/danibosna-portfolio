import { useState } from "react";
import {
  format,
  addDays,
  subDays,
  addMonths,
  subMonths,
  addYears,
  subYears,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
} from "date-fns";

// Definir el hook useDate
const useDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [relativeDate, setRelativeDate] = useState(new Date());

  // Formatear la fecha actual
  const getFormattedDate = (
    date: Date,
    dateFormat: string = "dd/MM/yy",
  ): string => {
    return format(date, dateFormat);
  };

  // Agregar días a la fecha actual
  const addDaysToDate = (days: number) => {
    const newDate = addDays(relativeDate, days);
    setRelativeDate(newDate);
  };

  // Restar días a la fecha actual
  const subtractDaysFromDate = (days: number) => {
    const newDate = subDays(relativeDate, days);
    setRelativeDate(newDate);
  };

  // Agregar meses a la fecha actual
  const addMonthsToDate = (months: number) => {
    const newDate = addMonths(relativeDate, months);
    setRelativeDate(newDate);
  };

  // Restar meses a la fecha actual
  const subtractMonthsFromDate = (months: number) => {
    const newDate = subMonths(relativeDate, months);
    setRelativeDate(newDate);
  };

  // Agregar años a la fecha actual
  const addYearsToDate = (years: number) => {
    const newDate = addYears(relativeDate, years);
    setRelativeDate(newDate);
  };

  // Restar años a la fecha actual
  const subtractYearsFromDate = (years: number) => {
    const newDate = subYears(relativeDate, years);
    setRelativeDate(newDate);
  };

  // Obtener tiempo relativo
  const getRelativeTime = (futureDate: Date): string => {
    const now = new Date();
    const seconds = differenceInSeconds(futureDate, now);
    if (seconds < 60) {
      return `Faltan ${seconds} segundos.`;
    }

    const minutes = differenceInMinutes(futureDate, now);
    if (minutes < 60) {
      return `Faltan ${minutes} minutos.`;
    }

    const hours = differenceInHours(futureDate, now);
    if (hours < 24) {
      return `Faltan ${hours} horas.`;
    }

    const days = differenceInDays(futureDate, now);
    if (days < 7) {
      return `Faltan ${days} días.`;
    }

    const weeks = differenceInWeeks(futureDate, now);
    if (weeks < 4) {
      return `Faltan ${weeks} semanas.`;
    }

    const months = differenceInMonths(futureDate, now);
    return `Faltan ${months} meses.`;
  };

  return {
    currentDate,
    relativeDate,
    getFormattedDate,
    addDaysToDate,
    subtractDaysFromDate,
    addMonthsToDate,
    subtractMonthsFromDate,
    addYearsToDate,
    subtractYearsFromDate,
    getRelativeTime,
  };
};

export default useDate;
