---
title: "Noções de Lógica"
slug: "nocoes-de-logica"
date: 2026-03-25T12:23:00+00:00
translationKey: "intro-to-logic"
draft: false
tags:
  - Matemática
  - Noções de Lógica
---

## 1. O que é uma proposição?

Uma **proposição** é uma sentença declarativa que pode ser classificada como verdadeira (V) ou falsa (F), mas nunca ambas simultaneamente. Em outras palavras, é um enunciado que possui um valor de verdade bem definido.

### Exemplos de proposições:
- "2 + 2 = 4" (proposição verdadeira)
- "A capital do Brasil é São Paulo" (proposição falsa)
- "O céu é azul" (proposição verdadeira)

### O que NÃO é proposição:
- Perguntas: "Qual é o seu nome?"
- Exclamações: "Que dia lindo!"
- Ordens: "Feche a porta!"
- Sentenças abertas: "x + 3 = 7" (depende do valor de x)

---

## 2. Conectivo E (Conjunção)

O **conectivo E**, também chamado de **conjunção**, é representado pelo símbolo **∧** e une duas proposições. A proposição composta "p ∧ q" (lê-se "p e q") é verdadeira **apenas quando ambas as proposições são verdadeiras**.

### Exemplos:
- p: "2 é um número par"
- q: "2 é um número primo"
- p ∧ q: "2 é um número par **e** primo" (verdadeira)

---

## 3. Tabela Verdade

A **tabela verdade** é uma ferramenta que organiza todos os possíveis valores de verdade para uma proposição composta. Ela permite visualizar o resultado da operação lógica para cada combinação de valores das proposições simples.

### Tabela verdade do conectivo E (∧):

$$
\begin{array}{c c | c}
p & q & p \land q \\\\ \hline
V & V & V \\\\
V & F & F \\\\
F & V & F \\\\
F & F & F
\end{array}
$$

### Interpretação:
- Quando p é **V** e q é **V**: p ∧ q é **V** (ambas verdadeiras)
- Quando p é **V** e q é **F**: p ∧ q é **F** (uma falsa)
- Quando p é **F** e q é **V**: p ∧ q é **F** (uma falsa)
- Quando p é **F** e q é **F**: p ∧ q é **F** (ambas falsas)

---

## 4. Conectivo OU (Disjunção)

O **conectivo OU**, também chamado de **disjunção**, é representado pelo símbolo **∨** e une duas proposições. A proposição composta "p ∨ q" (lê-se "p ou q") é verdadeira **quando pelo menos uma das proposições é verdadeira**.

### Exemplos:
- p: "João é engenheiro"
- q: "João é médico"
- p ∨ q: "João é engenheiro **ou** médico" (verdadeira se ele é pelo menos uma dessas profissões)

### Tabela verdade do conectivo OU (∨):

$$
\begin{array}{c c | c}
p & q & p \lor q \\\\ \hline
V & V & V \\\\
V & F & V \\\\
F & V & V \\\\
F & F & F
\end{array}
$$

### Interpretação:
- Quando p é **V** e q é **V**: p ∨ q é **V** (ambas verdadeiras)
- Quando p é **V** e q é **F**: p ∨ q é **V** (uma verdadeira)
- Quando p é **F** e q é **V**: p ∨ q é **V** (uma verdadeira)
- Quando p é **F** e q é **F**: p ∨ q é **F** (ambas falsas)

---

## 5. Negação de Proposições

A **negação** é uma operação lógica que inverte o valor de verdade de uma proposição. A negação de uma proposição p é representada por **¬p** ou **~p** (lê-se "não p").

### Regra simples:
- Se p é **verdadeira**, então ¬p é **falsa**
- Se p é **falsa**, então ¬p é **verdadeira**

### Exemplos:
- p: "3 é um número par" (falsa)
- ¬p: "3 **não é** um número par" (verdadeira)

- p: "O Brasil fica na América do Sul" (verdadeira)
- ¬p: "O Brasil **não fica** na América do Sul" (falsa)

### Tabela verdade da negação (¬):

$$
\begin{array}{c | c}
p & \neg p \\\\ \hline
V & F \\\\
F & V
\end{array}
$$

---

## 6. Aplicações na Programação: Controle de Fluxo

A lógica proposicional é fundamental na programação, especialmente no **controle de fluxo**. Os conectivos lógicos determinam quais blocos de código serão executados com base em condições.

### Operador E (AND)

O operador **E** é utilizado quando você precisa que **todas as condições sejam verdadeiras** para executar um bloco de código.

```julia
idade = 25
tem_carteira = true

if idade >= 18 && tem_carteira
    println("Pode dirigir")
else
    println("Não pode dirigir")
end
```

Neste exemplo, a mensagem "Pode dirigir" será exibida **apenas se ambas as condições forem verdadeiras**.

### Operador OU (OR)

O operador **OU** é utilizado quando **pelo menos uma condição precisa ser verdadeira** para executar um bloco de código.

```julia
fim_de_semana = true
feriado = false

if fim_de_semana || feriado
    println("Não precisa trabalhar")
else
    println("Precisa trabalhar")
end
```

Neste exemplo, a mensagem será exibida se for fim de semana **ou** feriado (ou ambos).

### Operador NÃO (NOT)

O operador **NÃO** inverte o valor lógico de uma condição.

```julia
chovendo = false

if !chovendo
    println("Pode sair de casa")
else
    println("Melhor ficar em casa")
end
```

### Combinações complexas

É possível combinar múltiplos operadores lógicos:

```julia
idade = 20
renda = 3000
tem_emprego = true

if (idade >= 18 && renda >= 2000) || tem_emprego
    println("Pode solicitar empréstimo")
else
    println("Não pode solicitar empréstimo")
end
```

---

## 7. Condições "Se Então" e "Se e Somente Se"

### Se Então (Implicação)

A **implicação lógica**, representada por **p → q** (lê-se "se p, então q"), é uma operação que relaciona duas proposições. A proposição p é chamada de **antecedente** e q de **consequente**.

A implicação p → q é **falsa apenas quando p é verdadeira e q é falsa**. Em todos os outros casos, é verdadeira.

### Tabela verdade da implicação (→):

$$
\begin{array}{c c | c}
p & q & p \rightarrow q \\\\ \hline
V & V & V \\\\
V & F & F \\\\
F & V & V \\\\
F & F & V
\end{array}
$$

### Exemplos:
- p: "Está chovendo"
- q: "O chão está molhado"
- p → q: "**Se** está chovendo, **então** o chão está molhado"

### Interpretação:
- Se chove e o chão fica molhado: **verdadeiro**
- Se chove e o chão não fica molhado: **falso**
- Se não chove e o chão está molhado: **verdadeiro** (pode ter outra causa)
- Se não chove e o chão não está molhado: **verdadeiro**

### Aplicação em programação:

```julia
if saldo >= valor_saque
    println("Saque realizado")
else
    println("Saldo insuficiente")
end
```

---

### Se e Somente Se (Bicondicional)

A **bicondicional**, representada por **p ↔ q** (lê-se "p se e somente se q"), é uma operação que estabelece uma **equivalência entre duas proposições**. A bicondicional é verdadeira **quando ambas as proposições têm o mesmo valor de verdade** (ambas verdadeiras ou ambas falsas).

### Tabela verdade da bicondicional (↔):

$$
\begin{array}{c c | c}
p & q & p \leftrightarrow q \\\\ \hline
V & V & V \\\\
V & F & F \\\\
F & V & F \\\\
F & F & V
\end{array}
$$

### Exemplos:
- p: "Um número é par"
- q: "Um número é divisível por 2"
- p ↔ q: "Um número é par **se e somente se** é divisível por 2" (sempre verdadeiro)

### Interpretação:
- Se p é V e q é V: **verdadeiro** (ambas são equivalentes)
- Se p é V e q é F: **falso** (não são equivalentes)
- Se p é F e q é V: **falso** (não são equivalentes)
- Se p é F e q é F: **verdadeiro** (ambas são equivalentes)

### Diferença entre "Se Então" e "Se e Somente Se":

| Operação | Símbolo | Significado | Exemplo |
|----------|---------|-------------|---------|
| **Se Então** | → | Uma condição implica outra | "Se chove, então o chão fica molhado" |
| **Se e Somente Se** | ↔ | Duas condições são equivalentes | "Um número é par se e somente se é divisível por 2" |

### Aplicação em programação:

```julia
# Se e somente se: condições equivalentes
function pode_votar(idade)
    return (idade >= 18) == (idade < 150)
end

# Se então: implicação simples
function aplicar_desconto(cliente_vip, preco)
    if cliente_vip  # se
        return preco * 0.9  # então
    end
    return preco
end
```

---

## Resumo dos Conectivos Lógicos

| Conectivo | Símbolo | Nome | Verdadeiro quando | Exemplo |
|-----------|---------|------|-------------------|---------|
| **E** | ∧ | Conjunção | Ambas as proposições são verdadeiras | p ∧ q |
| **OU** | ∨ | Disjunção | Pelo menos uma proposição é verdadeira | p ∨ q |
| **NÃO** | ¬ ou ~ | Negação | A proposição original é falsa | ¬p |
| **Se Então** | → | Implicação | p é falsa ou q é verdadeira | p → q |
| **Se e Somente Se** | ↔ | Bicondicional | p e q têm o mesmo valor de verdade | p ↔ q |