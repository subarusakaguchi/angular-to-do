# Lista de tarefas

Projeto feito com o [Angular CLI](https://github.com/angular/angular-cli) versão 12.0.2.

O objetivo é criar uma aplicação capaz de listar uma tabela que englobe Tarefas, CPF, Responsável, Prazo de entrega e Status das tarefas, tendo um Checkbox para marcar como concluído as mesmas.

[Demo da aplicação](https://angular-to-b7znl2mom-subarusakaguchi.vercel.app/)

## Funcionalidades

- Adição de tarefas
- Remoção de tarefas
- Validação de tarefas
- Valdiação de CPF
- Sistema para atualizar tarefas expiradas
- Filtro de tarefas por conclusão
- Armazenamento local para não perder dados ao atualizar

## Mapa do projeto

Baseado nas especificações, montei um mapa para me ajudar no desenvolvimento da aplicação:

## Tecnologias utilizadas

- **Angular 12**: Tecnologia para desenvolvimento da aplicação.
- **Typescript**: Superset de javascript para dar mais segurança ao projeto com a tipagem mais sólida.
- **Material UI**: Ferramenta de componentização, para facilitar o processo de criação dos componentes.
- **Dayjs**: Ferramenta de controle de datas para ajudar na solução de problemas na formatação.

## Rodando localmente

Clone o projeto:

```bash
  git clone https://github.com/subarusakaguchi/angular-to-do
```

Entre no diretório do projeto:

```bash
  cd angular-to-do
```

Instale as dependências:

```bash
  npm install
```

E inicie o servidor:

```bash
  npm start
```

## Deploy

OBS: Para fazer o deploy do projeto, o ideal é utilizar a versão 14.15.0 do Node.js, já que o Angular 12 possui dependencias de pacotes antigos. Apesar disso, é possível rodar em versões um pouco mais recentes até as primerias versões da 16.x, das demais em diante, não é possível se quer rodar em modo de desenvolvimento e ainda mais realziar o deploy da aplicação.

Com o requisito acima verificado, basta instalar as dependencias:

```bash
  npm install
```

E dar deploy:

```bash
  npm run build
```
