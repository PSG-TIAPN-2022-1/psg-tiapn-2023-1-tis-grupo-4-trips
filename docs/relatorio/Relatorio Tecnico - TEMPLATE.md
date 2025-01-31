# Informações do Projeto
`TRIPS PACOTES `  

`CURSO` 

Sistema de Informação

## Participantes

>
> Os membros do grupo são: 
> -  Abner Freire Martins
> -  Diogo Padoveis Antunes
> -  Maria Luiza de Freitas Trindade
> -  Miguel Lima Barcellos

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
  - [Modelagem de Processos de Negócio](#modelagem-de-processos-de-negocios)
  - [Situação Atual da Modelagem](#situacao-atual-da-modelagem)
  - [Situação de Modelagem com a Ideia Aperfeiçoada](#situacao-de-modelagem-com-a-ideia-aperfeicoada)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

O problema em questão se refere a dificuldade que as pessoas tem de conseguir pacotes de viagem em preços favoráveis, de maneira segura, confiável e prática.Se tornaram comum nos ultimos anos hoteis dando golpes , ausencia de segurança no despache da mala , além de locais fantasmas e perigosos . O nosso projeto buscará por preços competitivos com a concorrência de maneira condizente e justa em busca da melhor experiência para o cliente, oferecendo segurança, transparência e praticidade para o cliente poder usufruir de sua viagem.

## Objetivos

O foco do nosso projeto é criar um site de agenciamento de viagens prático e variado para o cliente, com um preço justo e e com catálogos de turismo com alta variedade a fim de dar opções para o cliente. Como objetivos específicos, podemos ressaltar:
* Pacotes de viagem e relacionados oferecendo preços e opções para turismo
* Funcionalidades simples e de fácil manuseio.
* Enfoque grande na área da segurança do cliente.
* Sistema de avaliação para que o cliente possa analisar qual o melhor lugar e em que hotel se hospedar.
* Uma comunicação entre o usuário e os hotéis escolhidos



## Justificativa

Estamos propondo trabalhar com a área de pacotes de viagem após notar a quantidade exorbitante de pessoas sofrendo com golpes ou fraudes em sua hora de lazer, o que é esperado em uma viagem nesse tipo. De acordo com o sócio da KPMG Claúdio Sotto, "30% das tentativas de compra de passagem pela internet são fraudulentas", reforça a gravidade do assunto envolvendo agências de viagem online. Nossa preocupação nessa área nos propôs a entrar nesse mercado tentando oferecer o melhor preço disponível de viagens num software seguro para todas as idades.


## Público-Alvo

Temos como público-alvo do nosso site  pessoas entre 15 aos 75 anos , porém em uma margem ampla qualquer pessoa que buscam viajar, e isso não envolve a necessidade de uma limitação, pela possibilidade de qualquer pessoa ter o interesse em viajar em algum local, desde crianças acompanhadas por adultos, ou grupos de jovens em busca de aventuras, idosos em busca de tranquilidade, e muitos outros casos. Produziremos um site prático e simplificado justamente para englobar todas as idades que tenham interesse de se aventurar pelo mundo.

 
# Especificações do Projeto

Nesta etapa de especificação iremos analisar as personas, mapas de empatia, história e requisitos, a partir da análise do nosso público alvo e do nosso objetivo, iremos concluir com as entrevistas aos usuários para saber outros pontos de vistas. E com as respostas obtidas nestas pesquisas colocamos em forma nosso projeto de interfase, possibilitando um plano de fácil entendimento e utilidade.

## Personas e Mapas de Empatia

A partir de algumas pesquisas fizemos alguns personas , que são clientes ideas de um negócio :


> 
> **Exemplo de Persona**
> 
> ![5d390f29-5d1a-4eee-b08a-d8caadf91c72](https://user-images.githubusercontent.com/103125164/220934732-2aff9598-39e6-492c-8975-9bede00ce38e.jpg)
> ![1ba5234a-d36f-426f-b7ba-6e8a2ca3a7e1](https://user-images.githubusercontent.com/103125164/220934879-f21891d9-e02c-4ba0-835b-705df6f6cc9a.jpg)
> ![b7162692-c42d-4124-a988-3101707bed17](https://user-images.githubusercontent.com/103125164/220934986-dcbaca4f-4730-4658-b5e4-c7f4c920fe20.jpg)
> ![f3c6ac84-a794-4f5e-a1b9-1d61bdd05ad9](https://user-images.githubusercontent.com/103125164/220935090-8bb88c10-7d5c-4998-8508-54fcd2d941e1.jpg)
> 
>  **Mapas de Empatia**
>  
>  ![74d3ecd4-e418-47f1-8a60-91ebe973691d](https://user-images.githubusercontent.com/103125164/220939772-13ee8673-26fd-4a01-afaa-c7e803e767eb.jpg)
>  ![d7232358-fcd8-492b-a1a5-825a87e55bf2](https://user-images.githubusercontent.com/103125164/220940113-753ed83e-6054-45cd-8551-1ea619598442.jpg)
>  ![d3c9d568-4c2a-440c-87c2-8aecc396bebd](https://user-images.githubusercontent.com/103125164/220941349-361b9c79-66f0-41ba-9cf3-4b867daeb010.jpg)
>  



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Maria Gabriela Soares | Sentir segurança no despache da bagagem    | Um melhor aproveitamento da viagem sem preocupação           |
|Maria Gabriela Soares     | Passagens aereas inclusas no pacote             | Facilitando o Planejamento da viagem|
|Joao Pedro Oliveira       |Um hotel com area de playground                | Brincar com seu irmao  |
|Joao Pedro Oliveira      | Um hotel com piscina                | Se refrescar no calor e para o lazer |
|Luis Souza Rodrigues      | Pacotes de viagem com preço assessivel  | Permitir a compra do pacote  |
|Luis Souza Rodrigues       | Hotel com academia | Permitir que faça atividade fisica|
|Ana Almeida      | Hotel tenha cafe da manha incluso                | Selecionar um hotel ideial |
|José Almeida       | Pacotes com inclusão de alugueis de carro  | Se locomover de um lugar para o outro na viagem |



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastro de usuarios | ALTA | 
|RF-002| Login   | MEDIA |
|RF-003| Efetuar pagamento  | ALTA |
|RF-004| Mecanismo de busca (buscar por um pacote específico)   | ALTA |
|RF-005| Filtro de buscas (escolher local, data e preços)  | MÉDIA |
|RF-006| Avaliar pacotes (avaliar de 0 a 5 quão útil foi o pacote)   | BAIXA |
|RF-007| Mensagens entre cliente e hoteis | BAIXA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 4s |  MÉDIA | 
|RNF-003| O site será feito em HTML5, CSS E JAVASCRIPT |  ALTA | 
|RNF-004| O site deve comunicar com banco de dados SQL |  ALTA | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O site não irá aceitar PIX como forma de pagamento |
|02| O projeto não irá tratar com acomodações privadas, como AirBNB, apenas hotéis/chalés |
|03| O projeto deve estar de acordo com a LGPD|


# Projeto de Interface

> - Fornecer informações sobre viagens, os melhores preços e avaliados.
> - Permitir que o usuário altere informações pessoais: Na aba de login terá informações de recuperação e mudança de dados para acesso.
> - Permitir que o usuário faça um cadastro: Na aba principal o usuário terá acesso a criação do seu cadastro.
> - Permitir que o cadastro seja excluído: Na área do usuário ter a opção para excluir login.
> - Uma comunicação entre o usuário e os hoteis escolhidos.

## User Flow



![image](https://user-images.githubusercontent.com/103612285/220938572-b7878c4e-08a3-432a-999e-83a5b73a4b7d.png)



## Wireframes


>
> **Exemplo**:
> 
> ![36220d24-5383-4e07-a5d0-9754c6ebf70a](https://user-images.githubusercontent.com/103125164/220947577-688e5723-f41b-41d6-a5ce-d2802e5916fc.jpg)
> ![69860513-329c-4237-adf9-16f4e3105b88](https://user-images.githubusercontent.com/103125164/220947596-139812ce-6ce0-4136-8da5-005ed45d2ec3.jpg)
> ![43bbd9b3-6605-4077-b75a-56633a1feb95](https://user-images.githubusercontent.com/103125164/220947667-12c545b5-049e-448a-a0b1-d648ba333115.jpg)
> ![c3208a6b-f4bd-4526-999f-558d76ec84d1](https://user-images.githubusercontent.com/103125164/220947742-9e60774b-56a5-4740-b9e6-4e2d58a99271.jpg)
> ![aed48586-c8da-43bd-83af-c021dc2ba70b](https://user-images.githubusercontent.com/103125164/220947772-1267e9b5-a552-455c-8efe-73846bffaf3d.jpg)


# Metodologia

A equipe utiliza o Scrum, que é um método ágil para o desenvolvimento do projeto. 

Cada membro da equipe iniciou uma tarefa diferente, otimizando o tempo e a produção do Sprint 1, que consiste na idealização do site e a produção de wireframes, requisitos, personas, histórias de usuário e mapas de empatia.

O grupo se reuniu por chamada e discutiu sobre o atual Sprint 1, ajudando no que ainda não foi terminado e melhorando as partes que eram possíveis. A metodologia Scrum potencializou o trabalho em equipe e permitiu o cumprimento dos prazos estipulados por meio do acompanhamento da evolução do projeto. 

Utilizamos o GitHub, onde cada um pode preencher o Sprint 1 com cada parte feita e observas as tarefas feitas pelos outros membros do grupo, Também utiiizamos o Trellis para uma divisão de tarefas mais organizada.

## Divisão de Papéis
 
A equipe está organizada da seguinte forma: 
 
•	Scrum Master: Leornardo Vilela Cardoso

•	Equipe de TIS

> - Maria Luiza  
> - Abner Freire 
> - Diogo Padoveis 
> - Miguel Barcellos

Para organização das tarefas utilizamos o Trello, estruturado da seguinte forma 
 
> - Backlog: Uma lista das coisas que achamos que queremos fazer, talvez não totalmente prontas para o trabalho, mas com alta probabilidade de serem trabalhadas. Esta é a área de teste onde as especificações devem ser aprimoradas. Não há limite para o tamanho da lista, mas devemos reconsiderar se ficar muito longa. 

> - A fazer: Esta é uma lista de coisas boas para se trabalhar, priorizadas. 
Se houver muito poucos itens aqui, devemos nos preparar para deixar as tarefas prontas para o trabalho. 

> - Em Andamento: Reunimos para solucionar os problemas que o Scrum Master apresentou para nos , portanto iremos avaliar e fazer as mudanças 

## Ferramentas

> - As ferramentas utilizadas no processo foram:

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro | (https://miro.com/app/board/uXjVPiAdQZI=/) | 
|Repositório de código | GitHub | https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-tis-grupo-4-trips  | 
|Protótipo Interativo | MavelApp  | (https://marvelapp.com/prototype/923c92a)| 

>  Controle de Versão é comumente utilizado pelos desenvolvedores , pois ele registrar o histórico de alteração, adicionar novas funcionalidades e testá-las em branches diferentes da principal, ter duas ou mais pessoas trabalhando no mesmo arquivo sem sobrescrever o código, entre diversos outros recursos que facilitam o desenvolvimento de software. 
>  
>  Diante disso :
>
> - Primeiro passo do grupo foi propor as ideias e logo apos a reuniao inicial , separamos as tarefas que cada um devia efetuar no GitHub para finalizar as solicitações que o Sprint 1 pedia. 
> - Posteriormente , começamos os trabalhos individuais .
> - Logo , fizemos a segunda reuniao para debater os feitos e analisar mudanças a serem feitas 
> - Portanto , nosso proximo passo a ser efetuado é a implementação de um codigo de Front e BD para comerçarmos as ideias para os proximos Sprints


# Modelagem de Processos de Negócio

Plano de processos do Site :

## BPMN

![Projeto TIS - MOdelagem de fluxo](https://user-images.githubusercontent.com/103125164/227254779-0d0877e6-8bb0-48df-bb99-8b506ec5314b.png)

![diagram_1](https://user-images.githubusercontent.com/103125164/228882782-7841d30d-4ecf-4d7a-a812-4de9505ef4f6.jpeg)

![Diagrama BD de TIS drawio](https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-tis-grupo-4-trips/assets/103125164/8e7508c2-e5ea-4a11-983d-6d98c4eddbaa)

![Diagrama sem nome drawio (2)](https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-tis-grupo-4-trips/assets/103125164/039e7dc5-a7e2-418d-8c72-3b51a45393e4)



## Relatorios associados aos processos 

* Diante da BPMN (Business Process Model and Notation) elaborada , quando o usuário cadastrar o desempenho do post é também cadastrar esse usuário no banco de dados.


> ![image](https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-tis-grupo-4-trips/assets/103125164/c29db8b1-fd46-42ff-acc7-75e6953d521f)


> ![image](https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-tis-grupo-4-trips/assets/103125164/f5f01506-0382-4f8e-ba36-7b646f5e98cc)

> ![image](https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-tis-grupo-4-trips/assets/103125164/cdaa8f75-c31c-47e8-84b6-c4958a07464b)


## Relatorios analíticos

* Diante das informações fornecidas, é necessário salvar no banco de dados os usuários cadastrados juntamente  com o total de clientes cadastrados .
> - Quantidade de usuarios cadastrados:

![Pink Payday Budget Pie Chart](https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-tis-grupo-4-trips/assets/103125164/272463a8-0bd2-48d1-a8f6-76a8f26c1418)


![afb9116e-9028-4245-9a5c-b209e7422830](https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-tis-grupo-4-trips/assets/103125164/cf9680af-4ee9-4e8a-b83e-53651f9158de)


## Relatorios desenvolvimento de scripts para automatização do processo

* Após a conclusão da compra do pacote desejado pelo cliente, será enviado ao seu email de cadastro a confirmação da aquisição do pacote.


> ![image](https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-tis-grupo-4-trips/assets/103125164/0dea4e2f-1340-4783-a0de-c58dd3ca1e7e)


> ![image](https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-tis-grupo-4-trips/assets/103125164/07a6a77d-30f0-4f40-a7c2-58078ecece25)


# Projeto da Solução

* Criação de um site de agencia de viagem.
* Informações sobre viagens e pacotes , dando ao cliente oportunidade de selecionar a data de ida e volta e quantidade de pessoas na viagem
* Oportunidade de reservas em hoteis e passagens aereas.
* Fornecer informações detalhadas sobre destinos das viagens .

## Tecnologias Utilizadas


![Projeto](https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-tis-grupo-4-trips/assets/103125164/daf3aeec-626b-4c1a-935e-2ef5fef807f0)



* Design Thinking - Para oferecer o produto de acordo com a real necessidade do cliente.
* Scrum - Para trabalhar em equipe de maneira ágil para chegar nas soluções.
* Github - Como repositor de código.
* MarvelApp - Para criar wireframes e protótipo interativo.
* Trello - Utilizando o kanban para organização durante o desenvolvimento do projeto.
* Replit - Para hospedagem do dite.
* Visual Studio Code - Como editor de código.
* WhatsApp , Discord e Teams - Para comunicação entre os desenvolvedores.

# Arquitetura da solução

* O código foi desenvolvido nas linguagens HTML, CSS , JavaScript e SQL (banco de dados ) e conectado ao Local Storage para que seja possível os cadastros de usuários e de informações. Enviamos o projeto criado para internet através de uma hospedagem na plataforma Replit.

![Internet](https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-tis-grupo-4-trips/assets/103125164/5cc1e1da-b322-4664-9e47-67a618a53d55)



# Avaliação da Aplicação

## Plano de Testes

| ID | CENÁRIO | CASO DE TESTE |
|----|---------|-----------------------|
| 1 | `Logar e Cadastrar um Usuario ` <br><br> Passo a passo: <br> `1.` Na pagina Inicial selecionar a opção Conta <br> `2.` Opção de Cadastrar ou de Ir para Login <br> `3.` Somente selecionar opçao desejada" <br> `4.`Preencher os campos com seus dados " <br> <br><br> Após clicar no botão Entrar , o sistema mostrará a home com pacotes de viagens disponiveis. | CT-01|
| 2 | `Colocar Data de Ida e Volta , Quantidade de Viajantes ` <br><br> Passo a passo: <br> `1.` Fazer login <br> `2.` Clicar na página "Home" localizada no topo da página. <br> `3.` Clicar em qual pacote de viagem disponivel voce gostaria de dar uma olhada <br> `4.` Após o carregamento da página, o usuário poderá escolher qual data e quantas pessoas deseja incluir no pacote , somente selecionando a data e quantidade | CT-02 |
| 3 | `Ver pacotes` <br><br> Passo a passo: <br> `1.` Abrir o site  <br> `2.` Clicar na aba Pacotes no topo da página <br> `3.` Após, o sistema retornará uma tela com pacotes disponiveis <br> `4.` Ao clicar no pacote escolhido ira aparecer um pouco sobre a viagem e a opcao de selecionar data e quantidade de pessoas. | CT-03 |
| 4 | `Sobre` <br><br> Passo a passo: <br> `1.`  Abrir o site  <br> `2.` Clicar na aba Contatos no topo da página <br>  <br><br> Após, o sistema retornará uma tela com os detalhes dos contatos, alem disso tambem terá algumas opçoes de serviços que a agencia Trips oferece. | CT-04 |

## Registros de Testes

![testes pessoas familia](https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-tis-grupo-4-trips/assets/103125164/6fc3ecdc-7dc8-498b-9288-45dcc5d9cd08)


* Vanderléia: Uma senhora de 58 anos, que tem interesse em visitar o site Trips Pacotes, pois é uma oportunidade de relaxar e desfrutar de um tempo longe da rotina diária e, além disso, é uma ótima maneira de explorar novos lugares, conhecer novas culturas e experimentar coisas novas. Ela deseja viajar de forma segura e confiável.
* Laura: Uma mãe jovem de 29 anos, que busca desenvolver habilidades sociais, criativas e cognitivas, pois viajar estimula o contato com diferentes realidades, desafios e oportunidades. Ela deseja um pacote de viagem com interesse em ter hotéis e passagens aéreas inclusas.
* Mário: Um jovem de 22 anos, que quer ter oportunidade de se aventurar e sair da zona de conforto, além de ser uma ótima maneira de criar memórias inesquecíveis. Viajar também pode ajudar a desenvolver habilidades importantes, como planejamento, organização e independência. Ele deseja viajar com pacotes prontos e que caibam no orçamento dele.
* Raquel: Senhora de 62 anos, tem interesse em viajar para melhorar a saúde física e mental, pois viajar revitaliza, aumenta a autoestima, a confiança e a criatividade e, além disso, deseja passar um tempo livre e seguro com o marido que acabou de se aposentar.
* Eleni: Uma mulher de 32 anos, que quer viajar a fim de uma ótima maneira de se conectar com amigos e familiares e passar um tempo de qualidade juntos. Além disso, viajar pode ajudar a expandir horizontes e trazer novas perspectivas para a vida. Ela deseja ter um roteiro de viagem.


# Referências


> - Google LLC. Google Images. Disponível em: https://images.google.com. Acesso em: 20 jun. 2023.
> - CANVA. Criar designs incríveis com o seu time. Disponível em: https://www.canva.com/. Acesso em: 21 jun. 2023.
