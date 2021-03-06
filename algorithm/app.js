/**
 * WEB App que permita a una empresa registrar 
 * las ventas de cada uno de sus empleados y al 
 * final del dia, liquidar a cada uno de ellos.
 *   Condiciones
 *  -	Existen 3 empleados (Marc, Steve, Bill)
 *  -	Por cada venta el empleado tiene una comisión del 3%
 *  -	Cada venta superior a 100.00 tiene una comisión extra de 2%
 *  -	El sueldo diario de cada empleado es de 9300
 *  -	Al momento del cierre del dia, si un empleado 
 * obtuvo ventas superiores a 350.000 se da una bonificación extra de 7%
 *  -	Los empleados deben pagar RTF 12.5% (SUELDO)
 */

const SALARY = 9300
const COMMISSSION_BASE = 0.03
const COMMISSSION_PLUS = 0.02
const COMMISSSION_GOLD = 0.07
const RTF = 0.125

const valRTF = SALARY * RTF

const $employeeNode = document.getElementById('employee')

let comBaseEmployee1 = 0
let comGoldEmployee1 = 0

let comBaseEmployee2 = 0
let comGoldEmployee2 = 0

let comBaseEmployee3 = 0
let comGoldEmployee3 = 0

function calcCommisionBase(productVal) {
  let valComPlus = 0
  let valComGold = 0
  // Calcular el valor de la comision general
  const valComBase = productVal * COMMISSSION_BASE
  if (productVal >= 100000) {
    // Calcular el valor de la comision PLUS
    valComPlus = productVal * COMMISSSION_PLUS
  }

  const totalCommission = valComBase + valComPlus
  return totalCommission
}

function calcularComisionGold(totalVentas) {
  let valComGold = 0
  if (totalVentas >= 350000) {
    // Calcular el valor de la comision PLUS
    valComGold = totalVentas * COMMISSSION_GOLD
  }

  return valComGold
}

function registerSale(evt) {
  evt.preventDefault()
  const employee = $employeeNode.value
  const productVal = document.getElementById('product').value
  
  if (employee === '1') {
    comBaseEmployee1 = comBaseEmployee1 + calcCommisionBase(productVal)
    comGoldEmployee1 = comGoldEmployee1 + calcularComisionGold(productVal)
  }

  if (employee === '2') {
    comBaseEmployee2 = comBaseEmployee2 + calcCommisionBase(productVal)
    comGoldEmployee2 = comGoldEmployee2 + calcularComisionGold(productVal)
  }

  if (employee === '3') {
    comBaseEmployee3 = comBaseEmployee3 + calcCommisionBase(productVal)
    comGoldEmployee3 = comGoldEmployee3 + calcularComisionGold(productVal)
  }
}

function closeDay () {
  const totalGanacia1 = comBaseEmployee1 + comGoldEmployee1
  const totalAPagar1 = (SALARY + totalGanacia1 )

  console.log('Comision: ', totalGanacia1)
  console.log('Salario: ', totalAPagar1)
}

/*const productVal = prompt('El valor del product:')
const totalEmploye1 = calcCommisionBase(productVal)

const productVal2 = prompt('El valor del product:')
const totalEmploye2 = calcCommisionBase(productVal2)

// Cerramos dia
const comGoldEmployee1 = calcularComisionGold(productVal)
const comGoldEmployee2 = calcularComisionGold(productVal2)

const totalGanacia1 = totalEmploye1 + comGoldEmployee1
const totalGanacia2 = totalEmploye2 + comGoldEmployee2


const totalAPagar1 = (SALARY + totalGanacia1 ) - valRTF
const totalAPagar2 = (SALARY + totalGanacia2 ) - valRTF
*/
