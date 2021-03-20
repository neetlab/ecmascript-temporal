import { Temporal } from "proposal-temporal";

{
  const now = Temporal.now.instant();
  console.log(now.toLocaleString('ja-JP'));
}


{
  const now = Temporal.now.zonedDateTime(Temporal.Calendar.from('iso8601'))
  const d = Temporal.Duration.from({ years: 1 });
  const twoYearsAndADayLater = now.add(d);
  console.log(twoYearsAndADayLater.toString());
}
