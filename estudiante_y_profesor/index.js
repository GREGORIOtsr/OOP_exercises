class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    };

    obtDetalles() {
        console.log(`${this.nombre} es ${this.genero.toLowerCase()} y tiene ${this.edad != '1' ? this.edad + ' años' : '1 año'}.`);
    };
};

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    };

    registrar() {
        console.log(`${this.nombre} está cursando ${this.curso} y pertenece al grupo ${this.grupo}.`);
    };
};

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    };

    asignar() {
        console.log(`${this.nombre} instruye ${this.asignatura} de nivel ${this.nivel.toLowerCase()}.`);
    };
};

let Grego = new Estudiante('Gregorio', 25, 'No binarie', 'Full Stack', 'Madrid');
let Alex = new Profesor('Alejandro', 35, 'Hombre', 'Programación orientada a objetos', 'Avanzado');
Grego.obtDetalles();
Grego.registrar();
Alex.obtDetalles();
Alex.asignar();
