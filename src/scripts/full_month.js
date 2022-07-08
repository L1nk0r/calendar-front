import Day from "../classes/day"

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
      let temp = new Day({
         day: previous_month_range - weekday + i + 1, 
         month: getPreviousMonth(month, year), 
         year: year
      });
      previous_month.push(temp);
   }

   for (let i = 0; i < N; i++){
      let week = [];

      if (self_month.length === 0){
         for (let j = weekday; j < 7; j++){
            let temp = new Day({
               day: day, 
               month: month, 
               year: year
            });
            week.push(temp);
            day++;
         }
         self_month.push(week);
      } else {
         for (let j = 0; j < 7; j++){
            let temp = new Day({
               day: day, 
               month: month, 
               year: year
            });
            if (day === max_days){
               weekday = j;
               week.push(temp);
               break;
            }
            week.push(temp);
            day++;
         }
         self_month.push(week);
      }
   }

   for (let i = weekday + 1; i < 7; i++){
      let temp = new Day({
         day: i - weekday, 
         month: getNextMonth(month, year), 
         year: year
      });
      next_month.push(temp);
   } 

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

function getNextMonth(month, year){
   let this_month = new Date(year, month + 1, 1);
   return this_month.getMonth();
}

function getPreviousMonth(month, year){
   let this_month = new Date(year, month - 1, 1);
   return this_month.getMonth();
}