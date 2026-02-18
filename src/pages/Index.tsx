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
  Mail,
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

const CTAButton = ({ text = "Quero acessar o Protocolo 3C", className = "" }: { text?: string; className?: string }) => (
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
      Acesso imediato · Garantia de 14 dias · Compra segura
    </p>
  </div>
);

const faqItems = [
  {
    q: "Preciso aparecer?",
    a: "Não necessariamente. O protocolo funciona com perfis que mostram o rosto e também com perfis temáticos. O importante é ter um CTA claro e usar as mensagens prontas.",
  },
  {
    q: "Funciona pra serviço, afiliado ou infoproduto?",
    a: "Sim. O funil de comentário/DM → mensagem → checkout → entrega funciona pra qualquer tipo de oferta digital ou serviço que possa ser vendido online.",
  },
  {
    q: "Preciso de alguma ferramenta paga?",
    a: "Não é obrigatório, mas recomendamos ferramentas de automação de DM (como ManyChat) pra escalar. O protocolo funciona manualmente também.",
  },
  {
    q: "Em quanto tempo eu configuro tudo?",
    a: "A maioria dos alunos configura o funil completo em 2 a 3 horas seguindo o passo a passo. Depois disso, é só publicar e rodar.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Imediatamente após a compra, você recebe um e-mail com login e senha da área de membros. Acesso vitalício.",
  },
  {
    q: "E se eu travar?",
    a: "Você tem o checklist de implementação + o plano de 7 dias. Além disso, tem a comunidade pra tirar dúvidas e pedir correção de rota.",
  },
];

const valueItems = [
  {
    icon: BookOpen,
    title: "Mini-aula: setup do funil do zero",
    desc: "Vídeo direto ao ponto mostrando como montar seu funil de comentário até entrega automática.",
  },
  {
    icon: MessageSquare,
    title: "Kit de mensagens prontas",
    desc: "Scripts de DM, stories e follow-up pra você copiar, colar e adaptar pro seu nicho.",
  },
  {
    icon: Target,
    title: "Templates de oferta low ticket",
    desc: "Modelos de oferta testados pra você encaixar no seu nicho sem precisar criar do zero.",
  },
  {
    icon: ClipboardCheck,
    title: "Checklist de implementação",
    desc: "Lista completa pra não esquecer nenhum passo na hora de configurar seu funil.",
  },
  {
    icon: Calendar,
    title: "Plano de 7 dias de conteúdo com CTA",
    desc: "7 dias de posts prontos com chamada pra ação estratégica pra atrair comentários e DMs.",
  },
];

const steps = [
  {
    num: "01",
    title: "Copie o funil pronto",
    desc: "Ajuste os templates e mensagens pro seu perfil e nicho.",
  },
  {
    num: "02",
    title: "Publique o CTA com palavra-chave",
    desc: "Use as mensagens prontas pra responder automaticamente ou manualmente.",
  },
  {
    num: "03",
    title: "Direcione pro checkout",
    desc: "O cliente compra e recebe a entrega automaticamente. Sem conversa infinita.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-4 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_71%_45%/0.08),transparent_60%)]" />
        <div className="container relative z-10 mx-auto flex flex-col items-center text-center">
          <h1 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Protocolo 3C:{" "}
            <span className="text-gradient">seu Instagram no piloto automático</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Estrutura simples pra transformar comentário/DM em vendas com link, checkout e entrega automática — sem depender de responder tudo manualmente.
          </p>

          <ul className="mx-auto mt-8 max-w-lg space-y-3 text-left">
            {[
              "Funil pronto: Comentário/DM → Mensagem → Link → Compra → Entrega",
              "Templates de copy + scripts de Reels + checklist de setup",
              "Serve pra iniciantes e pra quem já vende, mas tá no \"manual\"",
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

      {/* ===== O PROBLEMA ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
            O que trava suas vendas{" "}
            <span className="text-gradient">não é falta de conteúdo</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Na prática, muita gente posta, ganha views e… não vira pedido. O motivo é simples:{" "}
            <span className="font-semibold text-foreground">
              falta um caminho claro que leve a pessoa do interesse até a compra.
            </span>
          </p>
        </div>
      </section>

      {/* ===== MECANISMO 3C ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl">
            O 3C é o caminho{" "}
            <span className="text-muted-foreground font-normal text-xl md:text-2xl">(não é mágica)</span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
            Três etapas simples que transformam atenção em venda.
          </p>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              {
                icon: Zap,
                label: "C1 — Captura",
                desc: "Você usa palavra-chave e CTA pra transformar atenção em conversa.",
              },
              {
                icon: MessageSquare,
                label: "C2 — Conversão",
                desc: "Mensagens prontas e objetivas — sem direct infinito.",
              },
              {
                icon: Mail,
                label: "C3 — Checkout + Entrega",
                desc: "Link certo + entrega automática + próximo passo do cliente.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glow-border group rounded-xl bg-card p-6 text-center transition-all hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <item.icon size={28} />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== O QUE VOCÊ RECEBE ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">
            Dentro do Protocolo 3C{" "}
            <span className="text-gradient">você recebe:</span>
          </h2>

          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {valueItems.map((item, i) => (
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

      {/* ===== COMO FUNCIONA ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">
            Em <span className="text-gradient">3 passos</span>
          </h2>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-5">
                <span className="font-heading text-4xl font-bold text-primary/30">{step.num}</span>
                <div>
                  <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                  <p className="mt-1 text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRA QUEM É / NÃO É ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* É pra você */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="mb-4 font-heading text-xl font-bold text-primary">✅ É pra você se:</h3>
              <ul className="space-y-3">
                {[
                  "Quer vender com estrutura, não com sorte",
                  "Tá cansado de depender de \"jeito no direct\"",
                  "Quer um funil simples que funcione no automático",
                  "Tá disposto a executar e seguir o processo",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Não é pra você */}
            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
              <h3 className="mb-4 font-heading text-xl font-bold text-destructive">❌ Não é pra você se:</h3>
              <ul className="space-y-3">
                {[
                  "Procura promessa de renda rápida ou \"atalho mágico\"",
                  "Não quer investir tempo pra configurar o funil",
                  "Espera resultados sem executar nada",
                  "Quer um curso com 200h de aula teórica",
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

      {/* ===== OFERTA + CTA ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
            Acesso imediato ao{" "}
            <span className="text-gradient">Protocolo 3C</span>
          </h2>

          <ul className="mb-10 mx-auto max-w-md space-y-2 text-left">
            {[
              "Protocolo completo (mini-aula + funil)",
              "Kit de mensagens prontas",
              "Templates de oferta",
              "Checklist de implementação",
              "Plano de 7 dias de conteúdo",
              "Garantia incondicional de 14 dias",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-foreground">
                <CheckCircle size={18} className="shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <CTAButton text="Quero entrar agora" />
        </div>
      </section>

      {/* ===== GARANTIA ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/15">
            <ShieldCheck size={40} className="text-primary" />
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            Garantia de <span className="text-gradient">14 dias</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Você tem 14 dias pra testar. Se não fizer sentido pra você, é só pedir reembolso dentro do prazo.{" "}
            <span className="font-semibold text-foreground">Sem perguntas, sem burocracia.</span>
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold md:text-4xl">
            Perguntas frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 flex justify-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border px-4 py-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <div className="mb-4 flex items-center justify-center gap-4">
            <a href="#" className="transition-colors hover:text-foreground">Suporte</a>
            <span>·</span>
            <a href="#" className="transition-colors hover:text-foreground">Termos de Uso</a>
            <span>·</span>
            <a href="#" className="transition-colors hover:text-foreground">Privacidade</a>
          </div>
          <p>© {new Date().getFullYear()} Protocolo 3C. Todos os direitos reservados.</p>
          <p className="mt-1">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho não é uma garantia de resultado futuro.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
