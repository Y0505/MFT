const car = {
    color: '',
    doorsNumber: '',
    engineStatus: false,
    start: function () { //متد
        this.engineStatus = true;
    },
    stop: function () { //متد
        this.engineStatus = false;
    }
}

// car.start()
// console.log(car.engineStatus)//true
// const peride = car;
// peride.stop()
// console.log(car.engineStatus)//false

const home = {
    area: '100*100',
    rooms: {
        1: {
            light: true,
            lock: false
        },
        2: {
            light: true,
            lock: false
        },
        3: {
            light: true,
            lock: false
        },
        4: {
            light: true,
            lock: false
        }
    },
    lock: function (roomId) {
        this.rooms[roomId].lock = true;
        console.log('Door lock RoomId:' + roomId)
    },
    Unlock: function (roomId) {
        this.rooms[roomId].lock = false;
        console.log('Door Unlock RoomId:' + roomId)
    },
    TurnOn: function (roomId) {
        this.rooms[roomId].light = true;
        console.log('light TurnOn RoomId:' + roomId)
    },
    TurnOff: function (roomId) {
        this.rooms[roomId].light = false;
        console.log('light TurnOff RoomId:' )
    }, 
    TurnOffAndTurnOn: function (roomId) {
        this.rooms[roomId].lock = !this.rooms[roomId].lock;

        console.log('light TurnOff RoomId:' + ' ' + roomId + ' ' + this.rooms[roomId].lock.toString())
    },
}

home.TurnOffAndTurnOn(2)

// JSON.stringify(car)
// car.body = 'circle';
// car.stop = function(){
//     this.engineStatus = false;
// }