const task1 = {
    text: 'Wynieś śmieci',
    isCompleted: false,
}

const task1WithDate = {
    text: task1.text,
    isCompleted: task1.isCompleted,
    date: Date.now()
}

console.log(task1WithDate)
console.log(task1WithDate === task1) // false

const task1WithDateAssign = Object.assign(
    {}, // here we create new object !
    task1,
    { date: Date.now() },
)

console.log(task1WithDateAssign)
console.log(task1WithDateAssign === task1) // false

const task1WithDateSpread = { // here we create new object !
    ...task1,
    date: Date.now()
}

console.log(task1WithDateSpread)
console.log(task1WithDateSpread === task1) // false