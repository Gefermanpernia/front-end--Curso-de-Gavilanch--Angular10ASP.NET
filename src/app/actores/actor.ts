export interface actorDTO{
    nombre: string;
    fechaNacimiento: Date;
    foto: string;
}

export interface ActorCreacionDTO{
    nombre: string;
    fechaNacimiento: Date;
    foto: File;
}
