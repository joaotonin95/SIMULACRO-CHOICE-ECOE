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

## Auditoria semântica complementar — 23/11/2026

Foi feita nova comparação dos 144 itens inicialmente importados contra as 1.153 questões anteriores, desta vez também com alternativas normalizadas (não apenas os enunciados). Uma duplicata clínica foi identificada: `pdf-novas-5`, questão 1 (paciente de 71 anos com diabetes/hipertensão, deficiência de eritropoietina), já presente em `area-14`, questão 11. A duplicata foi removida, e a numeração de Hematologia foi reajustada. Total atual: **143 novas questões**, **1.296 no site**.

Também foram removidos 11 cabeçalhos de página que haviam contaminado alternativas em Ginecologia/Obstetrícia e dois rodapés de datas em outras especialidades. Foram encontrados outros casos com três alternativas iguais, mas enunciados clínicos diferentes, portanto não foram removidos automaticamente.

**Pendência importante:** ainda não foi feita auditoria semântica individual de todos os 911 itens restantes (816 excluídos por similaridade, 87 por alternativas incompletas, 4 por repetição interna, 1 por chave e 4 por comprimento, menos 1 já recuperado como duplicata na revisão). O filtro textual conservador inicial não é prova de repetição; não se deve declarar que todos são duplicados nem importar sem revisão. A validade científica das 143 chaves do PDF continua pendente.

Commits: `2904b193d895e52a86c41384f12cfd0c3d58638a` e `ab13eb7a325be19d8e00c1ade88f5f70b13e59a8`.

## Auditoria de integridade e duplicidade — 23/11/2026 (estado verificado)

O site foi rechecado a partir de `index.html` e de todos os arquivos JavaScript de questões efetivamente carregados. O arquivo redundante de 34 itens foi retirado do índice, porque quase todos coincidiam com lotes já publicados. Além disso, identificadores de simulados foram verificados para evitar colisões entre bancos.

- Banco anterior ao PDF: **1153 questões**.
- Importadas do PDF e ainda carregadas: **212**, distribuídas em `novas_pdf.js` (143); `novas_pdf_lote2.js` (35); `novas_pdf_lote3.js` (10); `novas_pdf_lote4.js` (14); `novas_pdf_validadas.js` (10).
- Total carregado no simulador: **1365 questões** neste instantâneo.
- Duplicatas de enunciado normalizado dentro do conjunto importado, frente a todos os blocos carregados: **0**.
- Novas questões com explicações científicas por alternativa em `novas_pdf_validadas.js`: **10**.
- Validações adicionais que ainda encontram questão correspondente no banco canônico em `validacao_lotes_pdf.js`: **0** (de 0 regras condicionais, protegidas contra referência ausente).
- Total de validações novas efetivamente aplicáveis a questões importadas nesta etapa: **10**.
- Os restantes gabaritos transcritos do PDF continuam sem pontuação até checagem independente; semelhança de tema não é, por si só, duplicidade nem garantia de questão inédita.

### Correções realizadas

1. Remoção do carregamento redundante de `novas_pdf_lote3_5opcoes.js` e exclusão do arquivo de duplicatas.
2. Remoção de quatro perguntas literalmente duplicadas durante a reconciliação do lote 4, além das exclusões efetuadas em outros lotes.
3. Migração de validações para o banco que realmente contém as questões, com verificação de existência de chave antes da atribuição.
4. Revisão de perguntas de cinco alternativas. Uma aparente quinta opção gerada pela quebra de linha de *E. coli* foi descartada como artefato de extração.
5. Referências consultadas incluem WSES, OMS, AAO EyeWiki, Merck, NIH/NCBI e AAP/HealthyChildren. Os links foram incorporados em cada justificativa validada.

**Limite desta auditoria:** ainda não se pode garantir exclusão semântica de todos os possíveis casos equivalentes com redação totalmente diferente, nem declarar que as 1.056 questões foram individualmente validadas cientificamente. Os números acima descrevem o banco efetivamente publicado no momento da leitura.
