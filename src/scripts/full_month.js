export default function getMonthInCalendarFormat(month, year){
   let date = new Date(year, month, 1);
   let weekday = date.getDay();
   weekday = getNormalWeekday(weekday);

   let day = 1;
   let max_days = getMonthRange(month, year, 0);
   let previous_month_range = getMonthRange(month, year, 1);

   let previous_month = [];
   let self_month = [];
   let next_month = [];

   let N = parseInt((max_days + weekday - 1) / 7) + 1;

   for (let i = 0; i < weekday; i++){
      previous_month.push(previous_month_range - weekday + i + 1);
   }

   for (let i = 0; i < N; i++){
      let week = [];

      if (self_month.length === 0){
         for (let j = weekday; j < 7; j++){
            week.push(day);
            day++;
         }
         self_month.push(week);
      } else {
         for (let j = 0; j < 7; j++){
            if (day === max_days){
               weekday = j;
               week.push(day);
               break;
            }
            week.push(day);
            day++;
         }
         self_month.push(week);
      }
   }

   for (let i = weekday + 1; i < 7; i++) next_month.push(i - weekday);

   self_month[0] = [...previous_month, ...self_month[0]];
   self_month[self_month.length - 1] = [...self_month[self_month.length - 1], ...next_month];

   return self_month;
}

function getNormalWeekday(weekday){
   let res = 0;

   if (weekday > 0){
      res = weekday - 1;
   } else {
      res = 6; 
   }

   return res;
}

function getMonthRange(month, year, monthDelta){
   let this_month = new Date(year, month + 1, 1);

   this_month.setMonth(this_month.getMonth() - monthDelta);

   let timeDelta = 1;

   this_month.setDate(this_month.getDate() - timeDelta);

   return this_month.getDate();
}