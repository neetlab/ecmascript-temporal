"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proposal_temporal_1 = require("proposal-temporal");
{
    var now = proposal_temporal_1.Temporal.now.instant();
    console.log(now.toLocaleString('ja-JP'));
}
{
    var now = proposal_temporal_1.Temporal.now.zonedDateTime(proposal_temporal_1.Temporal.Calendar.from('iso8601'));
    var d = proposal_temporal_1.Temporal.Duration.from({ years: 1 });
    var twoYearsAndADayLater = now.add(d);
    console.log(twoYearsAndADayLater.toString());
}
