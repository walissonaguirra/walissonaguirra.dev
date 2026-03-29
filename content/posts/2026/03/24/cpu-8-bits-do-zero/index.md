---
title: "CPU 8 Bits do Zero"
slug: "cpu-8-bits-do-zero"
date: 2026-03-24T12:37:36+00:00
translationKey: "8bit-cpu"
draft: true
tags:
  - cpu-8bit
---

A ideia é contruir um CPU de 8 bits a partir de portas lógicas. Começando com transistores, passando por CIs da família 74xx, montando em protoboard e depois em PCB. Também vai ter uma versão simulada disponível online pra quem quiser brincar sem ter os componentes em mãos.

## A base de estudo

Enquanto pesquisava sobre a complexidade de construir uma CPU, encontrei a [UBL — Universidade Brasileira Livre](https://ulivre.dev/). Um projeto open source nacional com toda a grade curricular pra formação autodidata em Ciência da Computação. Gratuito, em português, com qualidade real.

Decidi usar esse material como base. Pode-se dizer que este projeto é o equivalente ao TCC de um formado na UBL.

Só que ao analisar a grade, percebi que precisava revisar alguns fundamentos matemáticos antes de avançar. Isso me levou a outro projeto open source nacional: [Matemática Elementar para Computação](https://matematica.pgdinamica.com/) — revisão completa de matemática de ensino médio com foco em aplicação prática na computação. Encaixou perfeitamente com o que eu precisava.

O plano é começar por aqui antes de avançar pela UBL. Estando pelo menos na Etapa 3 da UBL já seria suficiente pra começar a pensar na arquitetura da CPU.

## Roadmap inicial do projeto

> Este plano é um ponto de partida. Vai ser atualizado conforme o projeto avança.

**Fase 1 — Fundamentos**
- 1.1 Matemática Elementar para Computação
- 1.2 UBL — Etapas 1 a 3

**Fase 2 — Componentes básicos**
- 2.1 Portas lógicas com transistores
- 2.2 Flip-flops, registradores e somadores

**Fase 3 — Arquitetura da CPU**
- 3.1 Design da ISA (conjunto de instruções)
- 3.2 Unidade Lógica e Aritmética (ULA)
- 3.3 Unidade de controle
- 3.4 Memória e barramento

**Fase 4 — Hardware físico**
- 4.1 Montagem em protoboard com CIs 74xx
- 4.2 Design e fabricação da PCB

## Onde acompanhar o projeto

Todo o desenvolvimento será documentado em posts no meu blog [walissonaguirra.dev](https://walissonaguirra.dev) e em vídeo no [@walissonaguirra](https://www.youtube.com/@walissonaguirra). A ideia é manter uma recorrência semanal — a princípio toda segunda — com atualizações, decisões tomadas e refinamentos no plano.

Ao longo da semana, decisões menores e anotações vão pro meu Mastodon [@walissonaguirra@mastodon.social](https://mastodon.social/@walissonaguirra), onde dá pra acompanhar e mandar sugestões. Também aparecerei nas reuniões do [Grupo de Estudo Go Lang](https://t.me/grupoDeEstudosGolang) do [César](https://crg.eti.br/pt-br/cesar-gimenes/), todo sábado às 14h pelo Discord.

## Próximos passos

Os próximos passos serão começar a estudar e revisar os fundamentos de matemática, publicar vídeos dos estudos e postar os materiais no blog. Vou documentar o progresso semanalmente, compartilhando exercícios, anotações e demonstrações práticas.
