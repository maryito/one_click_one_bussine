import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

SimpleSchema.extendOptions(['autoform']);

const ProdSchemas = new SimpleSchema({
    id: {
        type: SimpleSchema.RegEx.Id,
        optional: true,
        blackbox: true,
        autoform: {
            afFieldInput: {
                type: "hidden",
            },
            afFormGroup: {
                label: false,
            },
        },
    },
    nombre: {
        type: String,
        max: 20,
    },
    cantidad: {
        type: Number,
        min: 0,
    },
    precio: {
        label: "Precio en venta",
        type: Number,
        min: 0,
    },
    proveedor: {
        type: String,
    },  
    marca: {
        type: String,
        autoform: {
            afFieldInput: {
                firstOption: "(Seleccione la marca)"
            },
            options: [
                {label: "Dell", value: "dell"},
                {label: "HP", value: "hp"},
                {label: "ASUS", value: "asus"},
                {label: "Lenovo", value: "lenovo"}
            ]
        }
    },
    tiempo: {
        label:"Tiempo de entrega (Dias)",
        type: Number,
    }, 
    
},{ tracker: Tracker });

export { ProdSchemas };

