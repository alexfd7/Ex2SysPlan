import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urlApi = "https://zeit-endpoint.brmaeji.now.sh/api/auth";
  msgHtml = ""

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    //this.msgHtml = "PArabens";

  }

  onSubmit(data) {
    if(!data.mensagem){
      alert('Entre com o nome do produto')
    }else{
      data.nome="Usuário";

      var jsonData = JSON.stringify(data);
      console.log(jsonData);

      const headers = { 'Authorization': 'Basic Y2FuZGlkYXRvOmVudHJldmlzdGE=', 'Content-Type': 'application/json' };
      
      this.http.post<any>(this.urlApi, jsonData, { headers }).subscribe(data => {
        console.log('IMPRIMINDO RETORNO : '+ data);
    })

    }
    
  }  





}

