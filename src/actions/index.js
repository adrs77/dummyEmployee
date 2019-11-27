import {SAVE_EMPLOYEES} from '../constants/action-type'

export function saveEmployees(payload) {
    return {type: SAVE_EMPLOYEES, payload}
}
