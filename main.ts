bluetooth.onBluetoothConnected(function () {
    basic.showString("T")
    motorbit.freestyle(0, 0)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("F")
    motorbit.freestyle(0, 0)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        flag = 1
        motorbit.freestyle(100, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        flag = 0
        motorbit.freestyle(0, 0)
    } else {
        if (flag == 1) {
            if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
                motorbit.turnright(100)
            } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
                motorbit.turnleft(100)
            } else {
                motorbit.forward(100)
            }
        }
    }
})
let flag = 0
basic.showString("EF-motorbit")
