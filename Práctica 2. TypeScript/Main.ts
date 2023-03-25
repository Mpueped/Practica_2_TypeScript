import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Persona } from "./Persona";
import { Telefono } from "./Telefono";


    let mail = new Mail ('gmail','miriam@gmail.com');
    let telefono = new Telefono('movil',666666666);
    let direccion = new Direccion ('Benito',14,2,'e',11111,'sevilla','sevilla');
    let direccionList = new Array<Direccion>;
    let mailList = new Array<Mail>;
    let telefonoList = new Array<Telefono>
    direccionList.push(direccion);
    mailList.push(mail);
    telefonoList.push(telefono);

    let miriam = new Persona ('Miriam','Puerto',30,'123456A','24/07/1992','verde','mujer',direccionList,mailList,telefonoList,'hola');
    let manolito = new Persona ('Manolo','Polo',23,'654321B','01/01/2000','rosa','hombre',direccionList,mailList,telefonoList,'que tal');
    let jaimito = new Persona ('Jaime','Lugo',23,'123654c','01/01/2000', 'rojo','hombre',direccionList,mailList,telefonoList,'adios' )
    

    
    console.log (miriam);
    console.log (manolito);
    console.log (jaimito);

    
    console.log('Quieres añadir una nueva direccion?');
    console.log('Empieza buscando tu dni!');
    let scanner;
    let dni:string;
    let nuevoTelefono1:number;
    let nuevoCorreo:string;

    let nuevoTipo1:string;
    let nuevoTipo2:string;
    let nuevaCalle:string;
    let nuevoNumero:number;
    let nuevoPiso:number;
    let nuevaLetra:string;
    let nuevoCodigoPostal:number;
    let nuevaPoblacion:string;
    let nuevaProvincia:string;
    scanner = prompt('Cual es tu dni?','');
    dni= scanner;
    if(dni == miriam.getdni()){
    
    scanner = prompt('Introduce tu nueva calle','');
    nuevaCalle = scanner;
    scanner = prompt('Introduce tu nuevo numero','');
    nuevoNumero = scanner;
    scanner = prompt('Introduce tu nuevo piso','');
    nuevoPiso = scanner;
    scanner = prompt('Introduce tu nueva letra','');
    nuevaLetra = scanner;
    scanner = prompt('Introduce tu nuevo codigo postal','');
    nuevoCodigoPostal = scanner;
    scanner = prompt('Introduce tu nueva poblacion','');
    nuevaPoblacion = scanner;
    scanner = prompt('Introduce tu nueva provincia','');
    nuevaProvincia = scanner;

    let nuevaDireccion = new Direccion(nuevaCalle,nuevoNumero,nuevoPiso,nuevaLetra,nuevoCodigoPostal,nuevaPoblacion,nuevaProvincia);

    
    scanner = prompt('Introduce tu tipo de telefono','');
    nuevoTipo1=scanner;
    scanner = prompt('Introduce tu nuevo telefono','');
    nuevoTelefono1 = scanner.parseInt();

    let nuevoTelefono2 = new Telefono(nuevoTipo1,nuevoTelefono1);

    scanner = prompt('Introduce tu nuevo tipo de mail','');
    nuevoTipo2=scanner;
    scanner = prompt('Introduce tu nuevo mail','');
    nuevoCorreo = scanner;

    let nuevoMail = new Mail(nuevoTipo2,nuevoCorreo);
    
    miriam.buscarDni(dni,nuevaDireccion,nuevoMail,nuevoTelefono2);
    }else() => console.log('Tu dni no coincide')


    






