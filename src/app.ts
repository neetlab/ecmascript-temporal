import { Temporal } from "proposal-temporal";

{
  const now = Temporal.now.instant();
  // Note that a Temporal.Instant doesn't know about time zones.
  // For the exact time in a specific time zone,
  console.log(now.toLocaleString('ja-JP'));
}

{
  const now = Temporal.now.plainDate('2020-01-01')
  // カレンダー指定
  console.log(now.withCalendar('gregory').add({ years: 1 }).toString());
}


{
  // ZonedDateTimeを作らないと { years } とかが入ったaddができない？
  const now = Temporal.now.zonedDateTime(Temporal.Calendar.from('iso8601'))
  const d = Temporal.Duration.from({ years: 1 });
  const twoYearsAndADayLater = now.add(d);
  console.log(twoYearsAndADayLater.toString());
}

{
  // 暦
  const gregory = Temporal.now.zonedDateTime(Temporal.Calendar.from('gregory'))
  console.log(gregory.toString());
}
