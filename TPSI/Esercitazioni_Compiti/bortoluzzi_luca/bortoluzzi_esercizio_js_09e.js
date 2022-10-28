let ora1 = new Date(2020, 4, 10, 9, 30, 20, 70);
let ora2 = new Date(2021, 5, 10, 9, 30, 20, 70);
let ora3 = new Date(2020, 4, 10, 5, 30, 10, 70);
let ora4 = new Date(2020, 4, 11, 10, 30, 20, 700);

    console.log(diff_ora(ora1, ora2));
    console.log(diff_ora(ora3, ora4));

    function diff_ora(ora1, ora2){
        
        let diff_h = (ora1.getHours() - ora2.getHours());
        let diff_m = (ora1.getMinutes() - ora2.getMinutes());
        let diff_sec = (ora1.getSeconds() - ora2.getSeconds());
        let diff_msec = (ora1.getMilliseconds() - ora2.getMilliseconds());

        diff_msec = diff_msec + (diff_sec * 1000) + (diff_m * 60000) + (diff_h * 3600000);
        diff_sec = diff_sec + (diff_m * 60) + (diff_h * 3600);
        diff_m = diff_m + (diff_h * 60);

        return ("diff ms:" + diff_msec + " diff sec:" + diff_sec + " diff min:" + diff_m + " diff h:" + diff_h);
    }