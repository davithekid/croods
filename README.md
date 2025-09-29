# Barber Shop API

API para uma barbearia, com plataforma para clientes agendarem serviços e dashboard para barbeiros administrarem o negócio.

## Tech Stack
- **Back-end:** Fastify, Sequelize, MySQL
- **Front-end:** Next.js

## Como usar

### Back-end
```bash
cd back-end
npm install
node --watch src/server.js
```
### Front-end
```bash
cd client/app e dashboard/app
npm install
npm run dev
```

⚠️ Certifique-se de criar o arquivo .env com as variáveis de ambiente necessárias (DB, JWT_SECRET, etc).

Status do projeto
Em desenvolvimento — funcionalidades principais implementadas, melhorias e integração contínua em andamento.

## Requisitos Funcionais (Cliente)
- **Login de usuário**
- **Registro de usuário**
- **Agendamento**
  - Escolha de serviço
  - Escolha de adicional
  - Escolha de barbeiro
  - Escolha de data e horário
- **Visualização de serviços de cada barbeiro**
- **Consulta de planos de cada barbeiro**
- **Página "Sobre a Barbearia"**
- **Contato**
- **Perfil do usuário**
  - Conferir agendamentos
  - Alertas de cancelamento
  - Histórico de agendamentos
  - Editar perfil

## Requisitos Não Funcionais (Cliente)
- Acessibilidade
- Modo claro e escuro
- Autenticação segura
- Segurança geral
- Velocidade nas requisições

## Requisitos Funcionais (Dashboard)
- Login exclusivo para barbeiros
- Dashboard com informações sobre agendamentos
- Aba de receitas (filtrável por períodos)
- Aba de serviços
  - Cadastrar serviços
  - Editar serviços
  - Remover serviços
- Aba de folgas e horários de não funcionamento
- Aba de suporte
  - Visualizar perguntas de clientes
  - Responder perguntas de clientes
