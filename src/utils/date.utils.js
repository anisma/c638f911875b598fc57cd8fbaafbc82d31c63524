export const getDate= (date) => {
   return date.getDate();
} 

export const getDay = (date) => {
   const day = date.getDay();
   switch (day) {
      case 0:
         return "MIN"
      case 1:
         return "SEN"
      case 2:
         return "SEL"
      case 3:
         return "RAB"
      case 4:
         return "KAM"
      case 5:
         return "JUM"
      case 6:
         return "SAB"
      default:
         break;
   }
}

export const getFullDay = (date) => {
   const day = date.getDay();
   switch (day) {
      case 0:
         return "Minggu"
      case 1:
         return "Senin"
      case 2:
         return "Selasa"
      case 3:
         return "Rabu"
      case 4:
         return "Kamis"
      case 5:
         return "Jumat"
      case 6:
         return "Sabtu"
      default:
         break;
   }
}

export const getMonth = (date) => {
   const month = date.getMonth();
   switch (month) {
      case 0:
         return "Januari"
      case 1:
         return "Februari"
      case 2:
         return "Maret"
      case 3:
         return "April"
      case 4:
         return "Mei"
      case 5:
         return "Juni"
      case 6:
         return "Juli"
      case 7:
         return "Agustus"
      case 8:
         return "September"
      case 9:
         return "Oktober"
      case 10:
         return "November"
      case 11:
         return "Desember"
      default:
         break;
   }
}

export const getTodaysDate = () => {
   const date = new Date();
   const _date = date.getDate();
   const _day = getFullDay(date);
   const _month = getMonth(date);
   const _year = date.getFullYear();

   return `${_day}, ${_date} ${_month} ${_year}`
}

export const getNext2Weeks = () => {
   const twoWeeks = [];
  
   for (let i = 0; i < 14; i++) {
      let date = new Date();
      date.setDate(date.getDate() + i);
      twoWeeks.push({ fullDate: date, day: getDay(date), date: date.getDate() })
   }

   return twoWeeks
}


export const getShortDateString = (string) => {
   const date = new Date(string)
   return date.toDateString();
}