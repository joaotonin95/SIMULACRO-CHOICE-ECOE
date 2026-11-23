# Importação conservadora de questões do PDF Choices Final UAI

Data: 2026-11-23.

## Resultado

- Questões no PDF: 1.056, em 13 blocos.
- Questões já existentes no site antes da importação: 1.153.
- Questões adicionadas em `novas_pdf.js`: **144**.
- Total carregado pelo site após a importação: **1.297**.
- As 144 questões possuem quatro alternativas A–D e uma letra de gabarito legível na chave rápida do PDF.
- As letras do PDF foram **transcritas, não validadas clinicamente**; questões importadas são exibidas **sem pontuação definitiva**, com aviso de revisão pendente.

## Seleção e limitações

A comparação textual usou tokens normalizados e índice invertido para comparar enunciados do PDF com todos os 1.153 itens existentes. Foram elegíveis apenas enunciados com similaridade textual máxima inferior a 0,25, com quatro alternativas, letra de gabarito A–D, texto íntegro e sem repetição textual forte entre os novos candidatos.

Exclusões automáticas, que **não equivalem a 912 duplicatas confirmadas**:

| Motivo de não importar | Quantidade |
| --- | ---: |
| Similaridade textual >= 0,25 (requer análise manual) | 816 |
| Alternativas ausentes/incompletas ou fora de A–D | 87 |
| Duplicação textual entre candidatos | 4 |
| Chave do PDF ilegível/ausente | 1 |
| Enunciado demasiado curto ou longo | 4 |
| **Total não importado** | **912** |

**ATENÇÃO:** similaridade textual não equivale a equivalência clínica. Algumas das 144 questões ainda podem repetir um conceito ou caso com redação diferente. As 816 não importadas também podem conter questões novas. É necessária auditoria semântica/manual antes de ampliar a importação. Não se deve importar automaticamente o restante nem assumir que os gabaritos do PDF estão corretos.

## Distribuição

| Especialidade | Adicionadas |
| --- | ---: |
| Cirugía | 9 |
| Digestivo | 13 |
| Emergentología | 7 |
| Ginecología y Obstetricia | 32 |
| Hematología | 8 |
| Infectología | 15 |
| Neurología | 9 |
| Oftalmología | 2 |
| Pediatría | 20 |
| Nefrología | 5 |
| Neumonología | 18 |
| Reumatología | 3 |
| Toxicología | 3 |
| **Total** | **144** |

## Arquivos e publicação

- `novas_pdf.js`: novos simulados, opções e gabaritos provisórios do PDF.
- `index.html`: importa `novas_pdf.js` depois de `core.js` e `explicaciones.js` e antes de `app.js`.
- Filtro no site: **Novas do PDF · por especialidade**.

Commits: `e003e768dfdf142ed6a55236231415e68c84976a` e `1fe43a26431367db67426dfafd060e4dada42cd4`.
