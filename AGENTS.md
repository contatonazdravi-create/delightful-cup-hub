# Moravia Coffee — regras do projeto

## Design

- Toda cor, gradiente e sombra vem dos tokens semânticos em `src/styles.css` (oklch). Componentes nunca escrevem classes de cor fixas (`text-white`, `bg-[#...]`).
- Rótulos de seção (eyebrows) e detalhes de "notas de campo" usam a tipografia mono (`font-mono`); títulos usam `font-display`.
- Fontes e folhas de estilo remotas entram por `<link>` em `src/routes/__root.tsx`. Nunca usar `@import` de URL remota em `src/styles.css`: o Lightning CSS do build resolve imports só pelo filesystem e quebra a página.

## Marca

- A narrativa central é exploração/outdoor; a história da família fica em plano de fundo (o texto completo está na memória do projeto).
