import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

class Track {
  id: string = '';
  title: string = '';
  image: string = '';
  audio: string = '';
  isContentVisible: boolean = false; // Inicialmente oculto
}


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tracks: Track[] = [
    {
      id: 'audioPlayer1',
      title: 'ABRE LAS PATOTAS - Dani Flow',
      image: 'assets/mul1.jpg',
      audio: 'assets/ABRE LAS PATOTAS - Dani Flow.mp3',
      isContentVisible: false // Inicialmente oculto
    },

    {
      id: 'audioPlayer2',
      title: 'Chumbawamba - Tubthumping',
      image: 'assets//mul2.jpg',
      audio: 'assets//Chumbawamba - Tubthumping.mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer3',
      title: 'Christian Nodal - Aquí Abajo',
      image: 'assets//mul3.webp',
      audio: 'assets//Christian Nodal - Aquí Abajo.mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer4',
      title: 'ASIAN KUNG-FU GENERATION - Haruka Kanata',
      image: 'assets//mul4.webp',
      audio: 'assets//ASIAN KUNG-FU GENERATION - Haruka Kanata.mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer5',
      title: 'Creedence Clearwater Revival - Have You Ever Seen The Rain ',
      image: 'assets//mul6.jpg',
      audio: 'assets//Creedence Clearwater Revival - Have You Ever Seen The Rain (Official).mp3',
      isContentVisible: false // Inicialmente oculto
    },
    {
      id: 'audioPlayer6',
      title: 'El Santo Cachón - Los Embajadores Vallenatos  ',
      image: 'assets/mul5.jpg',
      audio: 'assets//El Santo Cachón - Los Embajadores Vallenatos.mp3',
      isContentVisible: false // Inicialmente oculto
    },
    // Otras pistas aquí
  ];

  

  constructor(
    private navCtrl: NavController,
     private router: Router,
     private activatedRoute: ActivatedRoute
  ) {}

  toggleContent(track: Track) {
    track.isContentVisible = !track.isContentVisible;
  }

  



  logout() {
    // Agrega aquí la lógica para cerrar sesión (por ejemplo, limpiar tokens, variables, etc.)

    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  goToTab1() {
    // Redirige al Tab1
    this.router.navigate(['/tabs/tab1']);
  }

  playAudio(track: Track) {
    const audioPlayer = document.getElementById(track.id) as HTMLAudioElement;
    audioPlayer.play();
  }
  
  pauseAudio(track: Track) {
    const audioPlayer = document.getElementById(track.id) as HTMLAudioElement;
    audioPlayer.pause();
  }
  
  stopAudio(track: Track) {
    const audioPlayer = document.getElementById(track.id) as HTMLAudioElement;
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reiniciar el audio al principio
  }

  

}
