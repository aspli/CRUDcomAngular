import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { Alerta } from 'src/app/shared/models/alerta';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-visuzalizar-filmes',
  templateUrl: './visuzalizar-filmes.component.html',
  styleUrls: ['./visuzalizar-filmes.component.scss']
})

export class VisuzalizarFilmesComponent implements OnInit {

  readonly semFoto = 'https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg';
  filme: Filme;
  id: number;
  

  constructor( public dialog: MatDialog,
              private activateRoute: ActivatedRoute,
              private filmeService: FilmesService,
              private router: Router
              ) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.visualizar();
  }

  excluir(): void{
      const config = {
        data: {
          titulo: 'Você tem certeza que deseja excluir?',
          descricao: 'Caso você tenha certeza que deseja exluir, clique no botão OK!',
          corBtnCancelar: 'primary',
          corBtnSucesso: 'warn',
          possuiBtnFechar: true
        } as Alerta
      };
      const dialogRef = this.dialog.open(AlertaComponent, config);
      dialogRef.afterClosed().subscribe((opcao: boolean) =>{
          if(opcao){
            this.filmeService.excluir(this.id)
            .subscribe(() => this.router.navigateByUrl('/filmes'));
          } 
        });
  }

  editar(): void{
    this.router.navigateByUrl('/filmes/cadastro/' + this.id);
    
  }


  private visualizar(): void{
    this.filmeService.visualizar(this.id).subscribe((filme: Filme) => this.filme = filme);    
  }

}
