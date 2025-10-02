---
sidebar_position: 1
---

# 📘 Documentação



### 📄 Requisitos

| Requisito | Versão |
|-----------|--------|
| PHP       | >=8.2  |
| Laravel   |    12  |
| MySQL     | >=8    |



---
<!-- 
## 🔐 Autenticação

Todas as requisições exigem autenticação via token JWT.

**Cabeçalho de Autorização:**
```http
Authorization: Bearer {seu_token}
```


---

## 📚 Endpoints

### 📥 POST `/login`

Autentica um usuário e retorna um token JWT.

**Requisição:**

```json
{
  "email": "usuario@exemplo.com",
  "senha": "senha123"
}
```

**Resposta:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsIn...",
  "role": "teacher"
}
```

Códigos de Resposta:

- 200 OK: Login bem-sucedido

- 401 Unauthorized: Credenciais inválidas


### 📤 GET `/user`

Retorna os dados do usuário logado.

**Resposta:**

```json
{
  "email": "usuario@exemplo.com",
  "name": "fulano",
  "last_name": "silva",
  "place": "N2",
  "role": "teacher" //admin or manager or teacher
}
```


Códigos de Resposta:

- 200 OK: Login bem-sucedido

- 401 Unauthorized: Credenciais inválidas -->
