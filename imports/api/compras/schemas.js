import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

const ProdSchemas = new SimpleSchema({
    nombre: {
        type: String,
        max: 10,
    },
    precioMin: {
        label: "Precion minimo",
        type: Number,
    },
    precioMax: {
        label: "Precion maximo",
        type: Number,
    },
    stock: {
        type: Boolean,
        label: "En stock",
    },   
    marca: {
        type: String,
        autoform: {
            options: [
                {label: "Dell", value: "dell"},
                {label: "HP", value: "hp"},
                {label: "ASUS", value: "asus"},
                {label: "Lenovo", value: "lenovo"}
            ]
        }
    },
    
});

export { ProdSchemas };

