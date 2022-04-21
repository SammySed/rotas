import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';


@Component({
  selector: 'app-component-cliente',
  templateUrl: './component-cliente.component.html',
  styleUrls: ['./component-cliente.component.css']
  
})
export class ComponentClienteComponent implements OnInit {
  constructor() { }

  model: Cliente = new Cliente();
  
  exibirTexto: boolean = false;
  textoBotao: String = "Exibir";
  esconderTabela:boolean = true;

  ngOnInit(): void {
    
  }

  tipoPessoa = [{
		"id": 1,
		"nome": "Fisica"		
	},
	{
		"id": 2,
		"nome": "Juridica"		
	},
	
]


mostrarOcultar(){    
  if (this.exibirTexto == true){      
    this.exibirTexto = false;
    this.textoBotao = "Exibir"
  }
  else{
    this.exibirTexto = true;
    this.textoBotao = "Ocultar"
  }
}
  onSubmit(){
    console.log(this.model);
  }

  exibirTabela(){
    this.esconderTabela = !this.esconderTabela;
  }
  
}
