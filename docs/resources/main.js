const timeContainer = null;
const birth_day = "12-10-1815";
const birth_day_date = new Date("birth_day");
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(()=>{
    const now = new Date();
    const difference = Math.floor(
        (now.getTime() - birth_day_date.getTime()) / 1000
    );
    timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);