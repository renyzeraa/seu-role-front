# Seu Rôle - FRONTEND 🛒💾

[Site Oficial](seurole.com.br)

Front-end do site seu rolê, feito com React em Typescript

Libs:

- Vite
- Shadcn/UI
- Tailwind

---

### Para executar o projeto:

1. Clonar este repositório
2. Acessando o local onde fez o clone

```bash
#instalar dependencias
npm install
```

3. Para rodar local

```bash
npm run dev
```

### Sobre

1. Objetivos gerais

- [x] Feito em React e template Vite
- [x] Em typescript
- [x] Shadcn/UI para os componentes
- [x] Tailwind para estilos
- [x] Separar componentes de paginas e tipos etc
- [ ] Consumir backend ja criado
- [ ] Realizar login e autenticação
- [ ] Estados com zustand ou algo relacionado

### Análise de Requisitos

#### Qualquer pessoa

- [ ] Tera acesso inicial na Home
- [ ] Podera ver os eventos
- [ ] Podera ver evento individualmente
- [ ] Podera ver ingressos (valores e informações) do evento
- [ ] Outras guias, ajuda, notas, sobre e etc.
- [ ] Aparecer no cabeçalho
- [ ] Comprar ingressos (login/cadastro de usuário normal)
- [ ] Criar evento (login/cadastro de ger. evento)

#### Usuário - TIPO 2/NORMAL

- [ ] Área para cadastro
  - [ ] Cadastro somente com cpf
- [ ] Login com autenticação JWT
- [ ] Área para atualizar cadastro
  - [ ] Cpf não pode alterar
- [ ] Somente este logado pode comprar ingresso
- [ ] Área de pedidos/compras
- [ ] Acessar a compra
- [ ] Tera que aparecer a situação da compra
- [ ] Pagamento tudo certo, tera que aparecer para imprimir os ingressos

#### Ger Evento
