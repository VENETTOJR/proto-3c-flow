

# Revamp Completo — Landing Page Protocolo 3C (versão premium)

## Resumo
Reescrever toda a landing page seguindo a estrutura e copy profissional que você enviou. Objetivo: tirar qualquer promessa de dinheiro, remover order bump/upsell da página, e deixar com cara de produto sério.

---

## O que muda

### Removido
- Promessa "R$3.000 em comissões em 14 dias" (hero e todas as menções)
- Contador de vagas / lote de fundador (tira urgência artificial)
- Order bump e upsell visíveis na landing (ficam só no checkout)
- Referências a "encapsulado", "SaaS", ofertas de nicho específico
- Preço riscado (R$97 → R$57) — preço fica direto, limpo

### Adicionado (novas seções, na ordem)
1. **Hero** — "Protocolo 3C: seu Instagram no piloto automático" + sub + 3 bullets + CTA + microcopy ("Acesso imediato - Garantia de 14 dias - Compra segura")
2. **O Problema** — "O que trava suas vendas nao e falta de conteudo" + texto curto
3. **Mecanismo 3C** — 3 cards (Captura, Conversao, Checkout+Entrega) com icones e descricoes
4. **O que voce recebe** — 5 cards com icones (mini-aula, kit mensagens, templates oferta, checklist, plano 7 dias)
5. **Como funciona** — 3 passos numerados, visual limpo
6. **Pra quem e / Nao e** — 2 colunas lado a lado
7. **Oferta + CTA** — Titulo + inclui + botao
8. **Garantia 14 dias** — Texto reescrito profissional
9. **FAQ** — 6 perguntas com accordion (componente ja existe no projeto)
10. **Footer** — com links Suporte, Termos, Privacidade

### Ajustes de design
- Mesma base dark/agressiva, mas CTA com texto atualizado ("Quero acessar o Protocolo 3C")
- CTA repetido em 3 pontos: hero, oferta, pos-FAQ
- Cards com icones simples (Lucide) para cada secao
- FAQ usando o componente Accordion ja existente

---

## Detalhes tecnicos

### Arquivo modificado
- `src/pages/Index.tsx` — reescrita completa do conteudo e estrutura

### Componentes reutilizados
- `Accordion` / `AccordionItem` / `AccordionTrigger` / `AccordionContent` do `src/components/ui/accordion.tsx` para o FAQ

### Variaveis de config mantidas
- `CHECKOUT_URL` (link externo configuravel)
- Removidas: `VAGAS_RESTANTES`, `VAGAS_TOTAL` (sem contador)

### Estrutura do novo arquivo
```
Config (CHECKOUT_URL)
CTAButton (texto atualizado + microcopy)
Dados: faqItems[], valueItems[], steps[]
Index component:
  1. Hero
  2. Problema
  3. Mecanismo 3C
  4. O que voce recebe
  5. Como funciona
  6. Pra quem e / Nao e
  7. Oferta + CTA
  8. Garantia
  9. FAQ (Accordion)
  10. Footer (Suporte | Termos | Privacidade)
```

Todo o texto segue exatamente a copy que voce forneceu, sem promessas de dinheiro, sem order bump na pagina, sem urgencia artificial.
