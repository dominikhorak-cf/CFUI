export const ShortDate: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
}

export const ShortDateRange: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
}

export const ShortDateTime: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: 'numeric',
  minute: 'numeric'
}

export const ShortDateTimeRange: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: 'numeric',
  minute: 'numeric'
}

export const ShortDateLongMonth: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
const WEEK = 7 * DAY
const MONTH = 4 * WEEK
const YEAR = 365 * DAY

function determineUnit(deltaTime: number) {
	const absDelta = Math.abs(deltaTime)
	if(absDelta < MINUTE) return [Math.round(deltaTime / SECOND), 'second']
	if(absDelta < HOUR) return [Math.round(deltaTime / MINUTE), 'minute']
	if(absDelta < DAY) return [Math.round(deltaTime / HOUR), 'hour']
	if(absDelta < WEEK) return [Math.round(deltaTime / DAY), 'day']
	if(absDelta < MONTH) return [Math.round(deltaTime / WEEK), 'week']
	if(absDelta < YEAR) return [Math.round(deltaTime / MONTH), 'month']
	return [Math.round(deltaTime / YEAR), 'year']
}