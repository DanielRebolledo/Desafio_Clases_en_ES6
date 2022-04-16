import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

const VIPImpuestos = new Impuestos(36_000_000, 6_000_000)
const VIPCliente   = new Cliente('Daniel Rebolledo', VIPImpuestos.impuestos  )

const impuestos = VIPCliente.calcularImpuesto()

console.log({impuestos})
