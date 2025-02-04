const DATE_UNITS = {
  year: 31104000,
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const getSecondsDiff = (timestamp: number) => (Date.now() - timestamp) / 1000;

const getUnitAndValueDate = (
  secondsElapsed: number
): { value: number; unit: string } | undefined => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === "second") {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
      return { value, unit };
    }
  }
};

const getTimeAgo = (timestamp: number, locale: string) => {
  const rtf = new Intl.RelativeTimeFormat(locale);

  const secondsElapsed = getSecondsDiff(timestamp);
  const result = getUnitAndValueDate(secondsElapsed);
  if (!result) {
    return "Fecha no válida"; // Mensaje predeterminado si no se obtiene un resultado válido
  }
  const { value, unit } = result;

  return rtf.format(value, unit as Intl.RelativeTimeFormatUnit);
};

export const timeAgo = (timestamp: string) => {
  const locale = "es";
  const time = parseInt(timestamp);
  const timeago = getTimeAgo(time, locale);

  const date = new Date(time);
  const formattedDate = new Intl.DateTimeFormat().format(date);
  return {
    dateTime: formattedDate,
    timeago,
  };
};
