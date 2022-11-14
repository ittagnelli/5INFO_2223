function remove(str1, str2){
    if(str1.includes(str2) == true){
        let str4 = "";
        let str3 = str1.split(str2);
        console.log(str3)
        for(let i=0; i<str3.length; i++)
            str4 = str4 + str3[i];
        return str4;
    }

    else
        return "error";
}

console.log(remove("The pen is on the table", "The"));