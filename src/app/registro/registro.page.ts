import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit  {

  username: string | undefined;
  password: string | undefined;

  constructor(
    private router: Router, 
    private storage: Storage) {}

    register() {
      // Aquí puedes agregar la lógica para registrar al usuario
      // Por ejemplo, puedes guardar las credenciales en el almacenamiento local
      this.storage.set('username', this.username);
      this.storage.set('password', this.password);
  
      // Luego redirige al usuario al inicio de sesión
      this.router.navigate(['/login']);
    }

    logout() {
      // Agrega aquí la lógica para cerrar sesión (por ejemplo, limpiar tokens, variables, etc.)
  
      // Redirige a la página de inicio de sesión
      this.router.navigate(['/login']);
    }

  ngOnInit() {
  }

}
