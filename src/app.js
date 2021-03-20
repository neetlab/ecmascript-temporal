"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proposal_temporal_1 = require("proposal-temporal");
{
    var now = proposal_temporal_1.Temporal.now.instant();
    // Note that a Temporal.Instant doesn't know about time zones.
    // For the exact time in a specific time zone,
    console.log(now.toLocaleString('ja-JP'));
}
{
    var now = proposal_temporal_1.Temporal.now.plainDate('2020-01-01');
    console.log(now.withCalendar('gregory').add({ years: 1 }));
}
{
    // ZonedDateTimeを作らないと { years } とかが入ったaddができない？
    var now = proposal_temporal_1.Temporal.now.zonedDateTime(proposal_temporal_1.Temporal.Calendar.from('iso8601'));
    var d = proposal_temporal_1.Temporal.Duration.from({ years: 1 });
    var twoYearsAndADayLater = now.add(d);
    console.log(twoYearsAndADayLater.toString());
}
{
    // 暦
    var gregory = proposal_temporal_1.Temporal.now.zonedDateTime(proposal_temporal_1.Temporal.Calendar.from('gregory'));
    console.log(gregory.toString());
}
