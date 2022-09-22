import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app Piano';


  aplicarSonido(numero:number):void{
    const audio:HTMLAudioElement = new Audio();
    audio.src = `../assets/sonidos/note${numero}.wav`;
    audio.load();
    audio.play();
  }
}
