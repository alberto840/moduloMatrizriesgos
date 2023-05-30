import { Component } from '@angular/core';

interface Activo {
  imagepath: string;
  imagepath1: string;
  activoInformacion: string;
  amenaza: string;
  consecuencia: string;
  probabilidad: number;
  impacto: number;
  tratamiento: string;
  mitigacion: string;
  tipo: string;
  nivel: string;
  frecuencia: string;
  probabilidad2: number;
  impacto2: number;
  RiesgoInherente: number;
  RiesgoResidual: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagepath: string = '';
  imagepath1: string = '';
  activoInformacion: string = '';
  amenaza: string = '';
  consecuencia: string = '';
  probabilidad: number = 0;
  impacto: number = 0;
  tratamiento: string = '';
  mitigacion: string = '';
  tipo: string = '';
  nivel: string = '';
  frecuencia: string = '';
  probabilidad2: number = 0;
  impacto2: number = 0;
  RiesgoInherente: number =0;
  RiesgoResidual: number =0;

  activos: Activo[] = [];

  addActivo() {
    let aux1: number = this.impacto * this.probabilidad;
    let aux2: number = this.impacto2 * this.probabilidad2;
    if(aux1<4){
      this.imagepath = 'assets/low.jpg';
    }else if(aux1>5 && aux1<9){
      this.imagepath = 'assets/moderate.jpg';
    }else if(aux1>10 && aux1<19){
      this.imagepath = 'assets/high.jpg';
    }else if(aux1>20){
      this.imagepath = 'assets/extreme.jpg';
    }

    if(aux2<4){
      this.imagepath1 = 'assets/low.jpg';
    }else if(aux2>5 && aux2<9){
      this.imagepath1 = 'assets/moderate.jpg';
    }else if(aux2>10 && aux2<19){
      this.imagepath1 = 'assets/high.jpg';
    }else if(aux2>20){
      this.imagepath1 = 'assets/extreme.jpg';
    }
    const activo: Activo = {
      activoInformacion: this.activoInformacion,
      amenaza: this.amenaza,
      consecuencia: this.consecuencia,
      probabilidad: this.probabilidad,
      impacto: this.impacto,
      tratamiento: this.tratamiento,
      mitigacion: this.mitigacion,
      tipo: this.tipo,
      nivel: this.nivel,
      frecuencia: this.frecuencia,
      probabilidad2: this.probabilidad2,
      impacto2: this.impacto2,
      RiesgoInherente: this.impacto * this.probabilidad,
      RiesgoResidual: this.impacto2 * this.probabilidad2,
      imagepath: this.imagepath,
      imagepath1: this.imagepath1
    };

    this.activos.push(activo);

    // Reiniciar los campos del formulario
    this.activoInformacion = '';
    this.amenaza = '';
    this.consecuencia = '';
    this.probabilidad = 0;
    this.impacto = 0;
    this.tratamiento = '';
    this.mitigacion = '';
    this.tipo = '';
    this.nivel = '';
    this.frecuencia = '';
    this.probabilidad2 = 0;
    this.impacto2 = 0;
    this.RiesgoInherente = 0;
    this.RiesgoResidual = 0;
  }

}
