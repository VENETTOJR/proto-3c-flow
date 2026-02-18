

# Rewrite Completa — LP Protocolo 3C (Resposta Direta / Trafego Pago)

## Resumo
Reescrita total da landing page com novo posicionamento: **trafego pago + afiliado**, mecanismo "Criativo - Campanha - Conversao", tom resposta direta agressivo. Copy 100% original. Estrutura otimizada para low ticket com 4 CTAs distribuidos.

---

## Mudancas Principais vs. Versao Atual

### Removido
- Copy atual sobre "Instagram no piloto automatico" e DM/direct
- Bullets de situacoes antigas (focadas em DM/stories)
- Deliverables antigos (mini-aula setup, kit mensagens, plano 7 dias CTA)
- Bonuses antigos (hooks, swipe file follow-up)
- FAQ antigo

### Novo Posicionamento
- **Mecanismo:** "3 decisoes: Criativo - Campanha - Conversao"
- **Avatar:** quem ja tentou trafego/afiliado sem consistencia
- **Inimigo:** instabilidade, tentativa-e-erro, duplicacao infinita de campanha
- **Entrega:** 2 ofertas prontas (encapsulado + SaaS), 6 criativos validados, checklists de campanha e conversao, comunidade
- **Prova:** R$150k em 14 dias, +R$1M investidos, ROI 5-7x (como autoridade, sem prometer igual)

---

## Estrutura Final (9 blocos + footer)

### 1. HERO (com 3 variacoes de headline no codigo, 1 ativa)
- **Headline principal (V1):** "Voce nao precisa de mais um curso de trafego. Voce precisa das 3 decisoes certas."
- **V2:** "Tentativa e erro ja te custou meses. As 3 decisoes que faltam cabem numa tarde."
- **V3:** "Todo mundo ensina a apertar botao. Ninguem te entrega o criativo, a campanha e a pagina que convertem juntos."
- **Subheadline:** Protocolo 3C = Criativo certo + Campanha montada + Conversao otimizada. Meta: buscar R$3.000 no primeiro ciclo.
- **3 bullets:** 2 ofertas prontas, 6 criativos validados, checklists de campanha e conversao
- **CTA 1:** "Quero o Protocolo 3C — R$57"
- **Microtrust:** "Acesso imediato . Garantia 14 dias . Compra segura"
- **Badge Lote 1**

### 2. DOR / INIMIGO
- Titulo: "Voce ja sabe o que NAO funciona."
- Texto: duplicar campanha, copiar criativo dos outros, trocar publico todo dia. O problema nao e voce. E que ninguem te deu as 3 pecas que precisam funcionar JUNTAS.

### 3. CAUSA / MECANISMO 3C
- Titulo: "3 decisoes. Nessa ordem. Sem pular etapa."
- 3 cards: **Criativo** (o que faz parar o scroll), **Campanha** (estrutura que escala sem quebrar), **Conversao** (pagina + oferta que fecha)
- Cada card com descricao curta e exemplo concreto

### 4. PROVA / AUTORIDADE
- Titulo: "Numeros, nao promessas."
- 4 stats em destaque: R$150k faturados em 14 dias / +R$1M investidos em trafego / ROI de 5-7x alcancado / Operacao real com escritorio e equipe
- Disclaimer: "Resultados reais da nossa operacao. Nao e garantia de que voce tera o mesmo — e prova de que o metodo funciona quando executado."

### 5. OFERTA / O QUE VOCE RECEBE
- Titulo: "Tudo que voce precisa pra rodar seu primeiro ciclo:"
- 5 items com icones: 2 Ofertas Prontas (encapsulado + SaaS), 6 Criativos Validados (3+3), Checklist de Campanha, Checklist de Conversao, Acesso a Comunidade 3C
- **CTA 2** logo abaixo

### 6. 12 BULLETS "SITUACAO REAL - ACAO DO 3C"
- Titulo: "Na pratica, o Protocolo 3C resolve isso:"
- 12 bullets no formato "Se [situacao] -> o 3C [acao]"
- Exemplos: "Se voce gasta e nao vende -> o 3C te da criativos que ja performaram" / "Se seu ROI nao passa de 1x -> o 3C ajusta a conversao antes de escalar"

### 7. GARANTIA 14 DIAS
- Mesmo estilo atual mas texto atualizado pro novo avatar
- "Teste por 14 dias. Se nao fizer sentido, devolvemos 100%. Sem burocracia."

### 8. FAQ (6 perguntas anti-golpe)
- "Isso e mais um curso de trafego?" / "Preciso de quanto pra investir em anuncio?" / "Funciona pra afiliado?" / "E se eu nunca rodei trafego pago?" / "Como recebo o acesso?" / "E se eu ja tentei e nao deu certo?"

### 9. CTA FINAL
- Headline: "Lote 1: R$57. Depois sobe pra R$97."
- Checklist visual de tudo incluso
- **CTA 3**
- Microtrust repetido

### FOOTER
- Mesmo layout atual (Suporte, Termos, Privacidade, disclaimer)

**CTA 4** fica no bloco de prova/autoridade (secao 4), apos os stats.

---

## Detalhes Tecnicos

### Arquivo modificado
- `src/pages/Index.tsx` — reescrita completa do conteudo e dados

### Estrutura do codigo
- `CHECKOUT_URL` mantido no topo
- `CTAButton` componente reutilizado (texto atualizado)
- Arrays de dados: `faqItems[]`, `deliverables[]`, `situationBullets[]` (12 items agora)
- 3 variacoes de hero headline como constantes (facil trocar pra teste)
- Accordion reutilizado para FAQ
- Lucide icons atualizados conforme novas secoes
- Secao de prova com stats em grid

### Design
- Mantém base dark + verde neon + glow-border
- Nova secao de stats com numeros grandes destacados
- Cards do mecanismo 3C adaptados (Criativo/Campanha/Conversao em vez de Captura/Conversa/Checkout)

