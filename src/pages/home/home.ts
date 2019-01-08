import { Component } from '@angular/core';

//IMPORTAMOS ALERT CONTROLLER JUNTO EL NAV
import { NavController, AlertController  } from 'ionic-angular';

//IMPORTMAOS LAS VARIABLES FIRELIST Y FIREDATABASE
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //CREAMOS NUESTRAS VARIABLES 
  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;

  //AÑADIMOS A NUESTRO CONSTRUCTOR LO QUE IMPORTAMOS 
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public database: AngularFireDatabase) {
    this.tasksRef = this.database.list('tasks');
    this.tasks = this.tasksRef.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }


      createTask(){
        let newTaskModal = this.alertCtrl.create({
          title: 'Nuevo Libro',
          message: "Crear un nuevo libro",
          inputs: [
            {
              name: 'Titulo',
              placeholder: 'Titulo'
            },
            {
              name: 'Editorial',
              placeholder: 'Editorial'
            },
            {
              name: 'Autor',
              placeholder: 'Autor'
            },
            {
              name: 'Precio',
              placeholder: 'Precio'
            },
          ],
          buttons: [
            {
              text: 'Cancelar',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Guardar',
              handler: data => {
                this.tasksRef.push({
                  Titulo: data.Titulo,
                  Editorial: data.Editorial,
                  Autor: data.Autor,
                  Precio: data.Precio,
                  done: false
                });
              }
            }
          ]
        });
        newTaskModal.present( newTaskModal );
      }

      updateTask( task ){
        this.tasksRef.update( task.key,{
          title: task.title,
          done: !task.done
        });
      }

      removeTask( task ){
        console.log( task );
        this.tasksRef.remove( task.key );
      }
    }


