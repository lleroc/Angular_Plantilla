import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { IPacientes } from '../Interfaces/pacientes';

const url = environment.url + 'pacientes.controller.php?op=';
@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  constructor(private http: HttpClient) { }

  todos():Observable<IPacientes[]>{
    return this.http.get<IPacientes[]>(url + 'todos');
  }

  uno(idPacientes:number):Observable<IPacientes>{
    var pac = new FormData();
    pac.append('idPacientes',idPacientes.toString())
    return this.http.post<IPacientes>(url + 'uno',pac);
  }

  insertar(paciente:IPacientes):Observable<string>{
    var pac = new FormData();
    pac.append('Cedula',paciente.Cedula)
    pac.append('Nombres',paciente.Nombres)
    pac.append('Apellidos',paciente.Apellidos)
    pac.append('estado',paciente.estado.toString())
    pac.append('tipo',paciente.tipo.toString())
    pac.append('FechaNacimiento',paciente.FechaNacimiento.toString())
    return this.http.post<string>(url + 'insertar',pac);
  }
  actualizar(paciente:IPacientes, idPaciente:number):Observable<string>{
    var pac = new FormData();
    pac.append('idPacientes',idPaciente.toString())
    pac.append('Cedula',paciente.Cedula)
    pac.append('Nombres',paciente.Nombres)
    pac.append('Apellidos',paciente.Apellidos)
    pac.append('estado',paciente.estado.toString())
    pac.append('tipo',paciente.tipo.toString())
    pac.append('FechaNacimiento',paciente.FechaNacimiento.toString())
    return this.http.post<string>(url + 'actualizar',pac);
  }
  eliminar(idPacientes:number):Observable<string>{
    var pac = new FormData();
    pac.append('idPacientes',idPacientes.toString())
    return this.http.post<string>(url + 'eliminar',pac);
  }
}
