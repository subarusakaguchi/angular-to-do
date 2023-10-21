import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaListaComponentComponent } from './tarefa-lista-component.component';

describe('TarefaListaComponentComponent', () => {
  let component: TarefaListaComponentComponent;
  let fixture: ComponentFixture<TarefaListaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TarefaListaComponentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaListaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
