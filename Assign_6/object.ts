//Sheikh Jibran Ahmed

//syntax of object 
// let objectName: {} = {key or property : values}


let employee: {
    //  defining types of object variables 
    name: string
    contact: number
    email: string
    salary: string
    // we can also put array in object let see,
    offDays: string[]

    // we can also assign object into object called "Nested Object"
    timing: {
        comingTiming: string
        offTiming: string
    }
} = {
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
}

// we cann access object value by this pattern: 'objectName'+ '.' + 'propertyName or keyName' 
//e.g.
console.log(employee.salary)

//we can also change values of an object 

employee.salary = '400,000 Pkr'
console.log(employee.salary)

// I'm interested to exlain usage of object 
console.log(`
Hi ${employee.name} how are you? You salary become ${employee.salary},
 so now your job timig is set to be ${employee.timing.comingTiming} with off day of ${employee.offDays[1]} `)

