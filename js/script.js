"use strict";
import {PERSONS} from './storage.js';

function ready() {
    let personsTable = document.getElementById("personsTable");
    for (let person of PERSONS) {
        console.log(person);
        let tr = document.createElement('tr');

        let tdLastName = document.createElement('td');
        tdLastName.innerText = person.lastName;
        tr.append(tdLastName);

        let tdName = document.createElement('td');
        tdName.innerText = person.firstName;
        tr.append(tdName);

        let tdMiddleName = document.createElement('td');
        tdMiddleName.innerText = person.middleName;
        tr.append(tdMiddleName);

        personsTable.append(tr);
    }
}

document.addEventListener("DOMContentLoaded", ready);