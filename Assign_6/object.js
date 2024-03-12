//Sheikh Jibran Ahmed
//syntax of object 
// let objectName: {} = {key or property : values}
var employee = {
    // key : value
    name: 'Jibran',
    contact: 33143411243,
    email: 'sheikh@abc.com',
    salary: '300,000 Pkr',
    // we can also put array in object let see,
    offDays: ['friday', 'sunday'],
    // we can also assign object into object called "Nested Object"
    timing: {
        comingTiming: '08 : 00 AM',
        offTiming: '05 : 30 PM'
    }
};
// we cann access object value by this pattern: 'objectName'+ '.' + 'propertyName or keyName' 
//e.g.
console.log(employee.salary);
//we can also change values of an object 
employee.salary = '400,000 Pkr';
console.log(employee.salary);
// I'm interested to exlain usage of object 
console.log("\nHi ".concat(employee.name, " how are you? You salary become ").concat(employee.salary, ",\n so now your job timig is set to be ").concat(employee.timing.comingTiming, " with off day of ").concat(employee.offDays[1], " "));
