# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nesta parte do trabalho você deve detalhar a documentação dos requisitos do sistema proposto de acordo com as seções a seguir. Ressalta-se que aqui é utilizado como exemplo um sistema de gestão de cursos de aperfeiçoamento.

## 3.1 Objetivos deste documento
Descrever e especificar as necessidades da Coordenação do Curso de Sistemas de Informação da PUC Minas que devem ser atendidas pelo projeto SCCA – Sistema de Cadastro de Cursos de Aperfeiçoamento.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado SCCA – Sistema de Cadastro de Cursos de Aperfeiçoamento. Ele terá somente um componente (módulo) com os devidos elementos necessários à gestão de cursos.

### 3.2.2 Missão do produto
Gerenciar informações sobre a oferta de cursos de aperfeiçoamento, gerenciar a composição das turmas, alunos, professores e matrículas. 

### 3.2.3 Limites do produto
O SCCA não fornece nenhuma forma de avaliação de alunos, pagamento de parcelas do curso, pagamento a professore e agendamentos. O SCCA não contempla o atendimento a vários cursos de Sistemas de Informação de outras unidades da PUC Minas.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no cadastro de dados |	Essencial |
|2 | Facilidade na recuperação de informações | Essencial | 
|3 | Segurança no cadastro de matrículas | Essencial | 
|4	| Melhoria na comunicação com os alunos	| Recomendável | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                                             | Prioridade |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RF-001 | O sistema deve permitir que o usuário cadastre suas preferências alimentares (ex: vegetariano, low carb, sem glúten, etc.).        | MÉDIA      |
| RF-002 | O sistema deve permitir que o usuário visualize opções de refeições organizadas por complexidade, considerando o tempo de preparo. | ALTA       |
| RF-003 | O sistema deve sugerir automaticamente uma lista de compras com base no plano de refeições escolhido pelo usuário.                 | MÉDIA      |
| RF-004 | O sistema deve fornecer informações nutricionais claras das refeições (calorias, proteínas, carboidratos, etc.).                   | ALTA       |
| RF-005 | O sistema deve disponibilizar uma ferramenta para monitoramento do peso por meio do cálculo do IMC (Índice de Massa Corporal).     | MÉDIA      |
| RF-006 | O sistema deve oferecer uma ferramenta para calcular a quantidade de carboidratos, proteínas e gorduras da dieta do usuário.       | MÉDIA      |
| RF-007 | O sistema deve permitir que o usuário organize uma agenda semanal de refeições (café da manhã, almoço e jantar).                   | ALTA       |
| RF-008 | O sistema deve fornecer um sistema de inventário de alimentos integrado às refeições diárias do usuário.                           | MÉDIA      |
| RF-009 | O sistema deve disponibilizar relatórios dos alimentos consumidos nos períodos diário, semanal e mensal.                           | BAIXA      |

### 3.3.2 Requisitos Não Funcionais

| ID      | Descrição do Requisito                                                                            | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | O sistema deve ser multiplataforma, funcionando em dispositivos móveis e computadores.            | MÉDIA      |
| RNF-002 | O sistema deve possuir interface simples e intuitiva.                                             | ALTA       |
| RNF-003 | O sistema deve ser desenvolvido utilizando JavaScript, HTML e CSS.                                | ALTA       |
| RNF-004 | O sistema deve funcionar de forma online, sem necessidade de instalação.                          | ALTA       |
| RNF-005 | O sistema deve suportar no mínimo 100 usuários simultâneos sem perda significativa de desempenho. | MÉDIA      |
| RNF-006 | O sistema deve responder às ações do usuário em até 2 segundos.                                   | ALTA       |


### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Coordenador |	Usuário gerente do sistema responsável pelo cadastro e manutenção de cursos de aperfeiçoamento. Possui acesso geral ao sistema. |
| Secretaria |	Usuário responsável por registros de alunos, professores, turmas e gerência de matrículas. |
| ... |	... |	... |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

<img width="962" height="771" alt="img_caso_uso" src="https://github.com/user-attachments/assets/a0d6a1bf-7602-4efa-aec4-50de9ef73af2" />
 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

#### Fazer Cadastro (CSU01)

Sumário: Permite que o usuário crie uma conta no sistema e gerencie suas informações pessoais e preferências alimentares..

Ator Primário: Usuário.

Pré-condições: O usuário deve acessar a aplicação.

Fluxo Principal:

1)  O usuário acessa a opção de cadastro ou edição de perfil.
2) 	O sistema apresenta o formulário de dados pessoais.
3) 	O usuário informa os dados solicitados (nome, idade, peso, altura, objetivo da dieta).
4) 	O sistema valida os dados.
5) 	O sistema salva as informações no banco de dados.
6) 	O sistema confirma o cadastro ou atualização do perfil.
    	

Fluxo Alternativo (3): Atualização de dados

a)	A Secretária requisita a inclusão de um professor. <br>
b)	O Sistema apresenta uma janela solicitando o CPF do professor a ser cadastrado. <br>
c)	A Secretária fornece o dado solicitado. <br>
d)	O Sistema verifica se o professor já está cadastrado. Se sim, o Sistema reporta o fato e volta ao início; caso contrário, apresenta um formulário em branco para que os detalhes do professor (Código, Nome, Endereço, CEP, Estado, Cidade, Bairro, Telefone, Identidade, Sexo, Fax, CPF, Data do Cadastro e Observação) sejam incluídos. <br>
e)	A Secretária fornece os detalhes do novo professor. <br>
f)	O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo professor e a grade listando os professores cadastrados é atualizada; caso contrário, o Sistema reporta o fato, solicita novos dados e repete a verificação. <br>

Fluxo Alternativo (3): Dados inválidos

a)	O sistema detecta informações incompletas ou inválidas. <br>
b)	O sistema solicita correção dos dados. <br>
c)	O usuário corrige as informações. <br>



### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
<img width="944" height="540" alt="image" src="https://github.com/user-attachments/assets/8f5b65c1-1f2f-45ff-ad5c-5fb38a024d42" />

### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Aluno |	Cadastro de informações relativas aos alunos. |
| 2	| Curso |	Cadastro geral de cursos de aperfeiçoamento. |
| 3 |	Matrícula |	Cadastro de Matrículas de alunos nos cursos. |
| 4 |	Turma |	Cadastro de turmas.
| 5	|	Professor |	Cadastro geral de professores que ministram as disciplinas. |
| ... |	... |	... |
