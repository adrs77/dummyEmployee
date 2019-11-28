import {SAVE_EMPLOYEES, SAVE_IDS, NEW_USER} from '../constants/action-types'

export function saveEmployees(payload) {
    return {type: SAVE_EMPLOYEES, payload}
}

export function saveIds(payload) {
    return {type: SAVE_IDS, payload}
}

export function newUser(payload) {
    return {type: NEW_USER, payload}
}
