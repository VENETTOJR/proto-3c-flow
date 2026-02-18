import {
  CheckCircle,
  XCircle,
  Zap,
  MessageSquare,
  ShieldCheck,
  Target,
  Calendar,
  ClipboardCheck,
  BookOpen,
  ArrowRight,
  ShoppingCart,
  Gift,
  Sparkles,
  FileText,
  Repeat,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// ===================== CONFIG =====================
const CHECKOUT_URL = "https://pay.hotmart.com/SEU_LINK_AQUI";
// ==================================================

const CTAButton = ({
  text = "Quero instalar o Protocolo 3C — R$57",
  className = "",
}: {
  text?: string;
  className?: string;
}) => (
  <div className="flex flex-col items-center gap-3">
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 w-full max-w-md rounded-lg bg-primary px-8 py-5 text-center font-heading text-lg font-bold text-primary-foreground transition-transform hover:scale-105 cta-pulse ${className}`}
    >
      {text}
      <ArrowRight size={20} />
    </a>
    <p className="text-sm text-muted-foreground">
      Acesso imediato · Garantia 14 dias · Compra segura
    </p>
  </div>
);

const faqItems = [
  {
    q: "Preciso aparecer nos vídeos?",
    a: "Não. O protocolo funciona com perfil pessoal, temático ou anônimo. O que importa é a estrutura de captura e conversa, não quem aparece.",
  },
  {
    q: "Funciona pra qual nicho?",
    a: "Qualquer nicho que venda digital ou serviço online: infoproduto, afiliado, consultoria, mentoria, freelancer, loja de template, design, etc.",
  },
  {
    q: "Preciso de ferramenta paga?",
    a: "Não. Tudo pode ser feito manualmente. Se quiser escalar, recomendamos automação de DM (ManyChat ou similar), mas não é obrigatório.",
  },
  {
    q: "Em quanto tempo configuro tudo?",
    a: "A maioria configura em 2h seguindo o passo a passo. É copiar, colar, adaptar e publicar.",
  },
  {
    q: "Serve pra quem já vende?",
    a: "Sim. Se você já vende mas tá no modo manual, o Protocolo 3C vai tirar você do direct infinito e colocar estrutura no que já funciona.",
  },
  {
    q: "E se eu não conseguir?",
    a: "Você tem checklist, templates, scripts e acesso à comunidade. Se mesmo assim não fizer sentido, tem 14 dias de garantia total.",
  },
];

const deliverables = [
  {
    icon: BookOpen,
    title: 'Mini-aula "Setup Express"',
    desc: "Configure tudo em 2h. Vídeo direto ao ponto — zero enrolação.",
  },
  {
    icon: MessageSquare,
    title: 'Kit "Mensagens que Vendem"',
    desc: "Scripts de DM, stories e follow-up. Copia, cola, adapta e usa.",
  },
  {
    icon: Target,
    title: 'Pack "Oferta Pronta"',
    desc: "Templates de oferta low ticket testados. Encaixe no seu nicho em minutos.",
  },
  {
    icon: ClipboardCheck,
    title: 'Checklist "Zero Esquecimento"',
    desc: "Passo a passo visual pra não esquecer nada na configuração.",
  },
  {
    icon: Calendar,
    title: 'Plano "7 Dias de CTA"',
    desc: "7 dias de conteúdo com chamada estratégica pra atrair conversa.",
  },
  {
    icon: Users,
    title: "Acesso à Comunidade 3C",
    desc: "Tire dúvidas, peça feedback e veja o que tá funcionando pra outros.",
  },
];

const bonuses = [
  {
    icon: Sparkles,
    title: "Banco de 15 Hooks Validados",
    value: "R$97",
    desc: "Ganchos de abertura testados que prendem atenção nos primeiros 3 segundos. Adapte pro seu nicho e use em Reels, stories ou anúncios.",
  },
  {
    icon: Repeat,
    title: "Swipe File de Follow-up",
    value: "R$67",
    desc: "12 mensagens prontas pra recuperar quem visualizou e sumiu. Funciona em DM, WhatsApp e e-mail.",
  },
  {
    icon: FileText,
    title: 'Checklist "Funil Relâmpago"',
    value: "R$47",
    desc: "Monte seu funil completo em 90 minutos. Passo a passo cronometrado pra quem quer resultado rápido.",
  },
];

const situationBullets = [
  "Posta todo dia e ninguém compra",
  "Responde DM o dia inteiro e fecha quase nada",
  "Tem produto/serviço bom mas não sabe como ofertar sem parecer desesperado",
  "Já comprou curso e saiu mais confuso do que entrou",
  "Não sabe o que escrever pra levar a pessoa do interesse até o pagamento",
  "Depende de algoritmo e fica refém de visualizações",
  "Sente que tá trabalhando de graça toda vez que abre o celular",
];

const scenarios = [
  "Lançar um produto digital e vender pelo direct sem virar SAC",
  "Vender serviço (design, consultoria, mentoria) com funil de mensagem",
  "Recuperar leads frios que pararam de responder",
  "Montar funil de indicação: cliente compra → indica → você vende de novo",
  "Criar oferta low ticket e testar em 48h sem gastar com anúncio",
  "Usar stories como máquina de captura (sem dançar ou apontar pra cima)",
  "Automatizar respostas de comentário/DM com mensagem + link",
  "Vender como afiliado sem precisar criar produto do zero",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* ===== 1. HERO ===== */}
      <section className="relative overflow-hidden px-4 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_71%_45%/0.08),transparent_60%)]" />
        <div className="container relative z-10 mx-auto flex flex-col items-center text-center">
          {/* Badge Lote */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Zap size={14} />
            Lote 1 — R$57 (depois R$97)
          </div>

          <h1 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Suas mensagens viram vendas ou{" "}
            <span className="text-gradient">viram trabalho grátis?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            O Protocolo 3C é o sistema que transforma conversa em link, checkout e entrega automática.{" "}
            <span className="font-semibold text-foreground">
              Sem ficar o dia inteiro no direct.
            </span>
          </p>

          <ul className="mx-auto mt-8 max-w-lg space-y-3 text-left">
            {[
              "Funil pronto: mensagem → link → compra → entrega (qualquer canal)",
              "Templates de conversa + scripts + checklist de setup",
              "Funciona pra quem tá começando e pra quem já vende no manual",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <CheckCircle size={20} className="mt-0.5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ===== 2. ANTI-CURSO ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
            Você não precisa de mais conteúdo.{" "}
            <span className="text-gradient">Você precisa de um caminho.</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Curso de 200 horas. Live de 3 horas. PDF de 80 páginas.{" "}
            <span className="font-semibold text-foreground">Você já tentou tudo isso.</span>
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            O que falta não é informação.{" "}
            <span className="font-semibold text-foreground">
              É um sistema de 3 etapas que transforma atenção em dinheiro no caixa.
            </span>{" "}
            Sem teoria. Sem enrolação. Sem "assista mais 47 aulas antes de começar".
          </p>
        </div>
      </section>

      {/* ===== 3. BLOCO 7 BULLETS ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold md:text-3xl">
            Se pelo menos 3 dessas frases descrevem você,{" "}
            <span className="text-gradient">o Protocolo 3C foi feito pro seu momento:</span>
          </h2>

          <ul className="space-y-4">
            {situationBullets.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 4. APLIQUE EM SITUAÇÕES REAIS ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold md:text-4xl">
            Funciona em cenários <span className="text-gradient">como esses:</span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {scenarios.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. EXPLICAÇÃO DO 3C ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl">
            O que é o 3C?{" "}
            <span className="text-muted-foreground font-normal text-lg">(e por que funciona)</span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
            Três etapas. Sem segredo. Sem mágica. Só estrutura.
          </p>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {/* C1 */}
            <div className="glow-border group rounded-xl bg-card p-6 transition-all hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Zap size={28} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-center">C1 — Captura</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Transforme atenção em conversa. CTA + palavra-chave = lead na sua caixa de entrada.
              </p>
              <div className="rounded-lg bg-secondary/50 p-3 text-xs text-muted-foreground italic">
                "Comenta <span className="text-primary font-semibold">QUERO</span> que eu te mando o link no privado."
              </div>
            </div>

            {/* C2 */}
            <div className="glow-border group rounded-xl bg-card p-6 transition-all hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <MessageSquare size={28} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-center">C2 — Conversa</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Mensagens prontas que qualificam e empurram pro link. Sem direct infinito.
              </p>
              <div className="rounded-lg bg-secondary/50 p-3 text-xs text-muted-foreground italic">
                "Opa! Vi que você comentou. O [produto] resolve [dor]. Tá aqui o link: [checkout]. Qualquer dúvida me chama."
              </div>
            </div>

            {/* C3 */}
            <div className="glow-border group rounded-xl bg-card p-6 transition-all hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <ShoppingCart size={28} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-center">C3 — Checkout</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Link certo + página de pagamento + entrega automática. O cliente compra e recebe sozinho.
              </p>
              <div className="rounded-lg bg-secondary/50 p-3 text-xs text-muted-foreground italic">
                "Pagamento confirmado → acesso liberado → e-mail com login enviado. Zero trabalho manual."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. O QUE VOCÊ RECEBE ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">
            O que você recebe{" "}
            <span className="text-gradient">ao entrar:</span>
          </h2>

          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="glow-border group rounded-xl bg-card p-6 transition-all hover:-translate-y-1"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <item.icon size={22} />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. BÔNUS ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl">
            <span className="text-gradient">Bônus</span> inclusos no Lote 1
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
            Só pra quem entrar agora. Quando o lote fechar, saem do pacote.
          </p>

          <div className="space-y-4">
            {bonuses.map((bonus, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-start gap-4 rounded-xl border border-accent/20 bg-accent/5 p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <bonus.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-heading text-lg font-bold">{bonus.title}</h3>
                    <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-bold text-accent">
                      valor: {bonus.value} — incluso
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{bonus.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. PRA QUEM É / NÃO É ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="mb-4 font-heading text-xl font-bold text-primary">
                ✅ É pra você se:
              </h3>
              <ul className="space-y-3">
                {[
                  "Quer um sistema — não mais um curso",
                  "Tá cansado de vender no manual, respondendo um por um",
                  "Quer parar de depender de algoritmo pra faturar",
                  "Tá disposto a executar o passo a passo e aplicar",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
              <h3 className="mb-4 font-heading text-xl font-bold text-destructive">
                ❌ Não é pra você se:
              </h3>
              <ul className="space-y-3">
                {[
                  "Quer fórmula mágica de dinheiro sem esforço",
                  "Não vai dedicar nem 2h pra configurar o funil",
                  "Espera resultado sem mover um dedo",
                  "Prefere assistir 200h de aula do que executar",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <XCircle size={16} className="mt-0.5 shrink-0 text-destructive" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. GARANTIA ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/15">
            <ShieldCheck size={40} className="text-primary" />
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            Risco zero. <span className="text-gradient">Sério.</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Você tem 14 dias pra testar tudo. Se não fizer sentido, é só pedir reembolso.{" "}
            <span className="font-semibold text-foreground">
              Sem formulário. Sem desculpa. 100% de volta.
            </span>
          </p>
        </div>
      </section>

      {/* ===== 10. FAQ ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold md:text-4xl">
            Perguntas frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-lg border border-border bg-card px-4"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===== 11. CTA FINAL ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
            Lote 1: R$57.{" "}
            <span className="text-gradient">Quando fechar, sobe pra R$97.</span>
          </h2>

          <ul className="mb-10 mx-auto max-w-md space-y-2 text-left">
            {[
              "Protocolo 3C completo (mini-aula + funil)",
              'Kit "Mensagens que Vendem"',
              'Pack "Oferta Pronta"',
              'Checklist "Zero Esquecimento"',
              'Plano "7 Dias de CTA"',
              "Acesso à Comunidade 3C",
              "Bônus: 15 Hooks + Swipe File + Funil Relâmpago",
              "Garantia incondicional de 14 dias",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-foreground">
                <CheckCircle size={18} className="shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <CTAButton text="Quero entrar no Lote 1 — R$57" />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border px-4 py-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <div className="mb-4 flex items-center justify-center gap-4">
            <a href="#" className="transition-colors hover:text-foreground">
              Suporte
            </a>
            <span>·</span>
            <a href="#" className="transition-colors hover:text-foreground">
              Termos de Uso
            </a>
            <span>·</span>
            <a href="#" className="transition-colors hover:text-foreground">
              Privacidade
            </a>
          </div>
          <p>© {new Date().getFullYear()} Protocolo 3C. Todos os direitos reservados.</p>
          <p className="mt-1">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho não
            é uma garantia de resultado futuro.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
