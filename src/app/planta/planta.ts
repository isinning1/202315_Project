export class Planta {
    id: number;
    nombreComun: string;
    tipo: 'Interior' | 'Exterior';
    clima: string;
  
    constructor(id: number, nombreComun: string, tipo: 'Interior' | 'Exterior', clima: string) {
      this.id = id;
      this.nombreComun = nombreComun;
      this.tipo = tipo;
      this.clima = clima;
    }
  }
