import { CheckCircle, Zap, MessageSquare, Bot, Users, Target, Calendar, ShieldCheck } from "lucide-react";

// ===================== CONFIG =====================
const CHECKOUT_URL = "https://pay.hotmart.com/SEU_LINK_AQUI";
const VAGAS_RESTANTES = 143;
const VAGAS_TOTAL = 200;
// ==================================================

const CTAButton = ({ className = "" }: { className?: string }) => (
  <a
    href={CHECKOUT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block w-full max-w-lg rounded-lg bg-primary px-8 py-5 text-center font-heading text-lg font-bold text-primary-foreground transition-transform hover:scale-105 cta-pulse ${className}`}
  >
    Quero entrar no Lote 1 do Protocolo 3C
  </a>
);

const VagasCounter = () => {
  const pct = ((VAGAS_TOTAL - VAGAS_RESTANTES) / VAGAS_TOTAL) * 100;
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="mb-1 flex justify-between text-sm font-medium text-muted-foreground">
        <span>Vagas preenchidas</span>
        <span className="text-primary">{VAGAS_RESTANTES} restantes</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

const valueItems = [
  {
    icon: Calendar,
    title: "Sprint 14D",
    desc: "Passo a passo diário",
    bullets: [
      "Checklist do Dia 1 ao 14 (o que fazer, testar, quando cortar)",
      "Plano simples pra parar de queimar dinheiro",
    ],
  },
  {
    icon: Target,
    title: "2 Ofertas Prontas",
    desc: "Pra você não travar no 'o que vender'",
    bullets: [
      "Oferta #1: Encapsulado / Pele — ângulos + copy + objeções",
      "Oferta #2: SaaS Recorrência — proposta B2B + copy + objeções",
    ],
  },
  {
    icon: Zap,
    title: "Pack de Criativos Validados",
    desc: "Mínimo que funciona",
    bullets: [
      "6 criativos validados (3 encapsulado + 3 SaaS)",
      "Variações de hooks/aberturas pra testar rápido",
    ],
  },
  {
    icon: MessageSquare,
    title: "Kit de Conversa WhatsApp",
    desc: "Onde o dinheiro acontece",
    bullets: [
      "Script completo: abertura → qualificação → prova → fechamento",
      "Áudios prontos pra quebrar objeções",
      "Sequência de follow-up (D0, D1, D3, D7)",
    ],
  },
  {
    icon: Bot,
    title: "Console 3C (IA + automação)",
    desc: "Teste 24h",
    bullets: [
      "Tutorial plug & play dentro da área de membros",
      "IA + automações + biblioteca de mídia com 1 clique",
    ],
  },
  {
    icon: Users,
    title: "Comunidade 3C",
    desc: "Low ticket",
    bullets: [
      "Check-ins e correção de rota com a galera executando o Sprint",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-4 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_71%_45%/0.08),transparent_60%)]" />
        <div className="container relative z-10 mx-auto flex flex-col items-center text-center">
          <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-heading text-sm font-semibold text-primary">
            🎯 Checkpoint do Sprint: meta guiada de 10 vendas no 1º ciclo
          </span>

          <h1 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Faça seus primeiros{" "}
            <span className="text-gradient">R$3.000 em comissões</span>{" "}
            em 14 dias
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Você não vai "aprender mais um curso". Vai instalar um sistema:{" "}
            <span className="font-semibold text-foreground">Criativo + Conversa + Conversão</span>{" "}
            no WhatsApp — com 2 ofertas prontas, criativos validados e uma esteira com IA pra quebrar objeções e empurrar pro fechamento.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <CTAButton />
            <VagasCounter />
          </div>
        </div>
      </section>

      {/* ===== VALUE STACK ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl">
            O que você recebe ao entrar no{" "}
            <span className="text-gradient">Protocolo 3C</span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
            Tudo que você precisa pra sair do zero e bater R$3k em comissões no primeiro Sprint.
          </p>

          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {valueItems.map((item, i) => (
              <div
                key={i}
                className="glow-border group rounded-xl bg-card p-6 transition-all hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-secondary-foreground">
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRÉ-REQUISITO ===== */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-2xl rounded-xl border border-border bg-card/50 p-6 text-center md:p-8">
          <h3 className="mb-2 font-heading text-lg font-bold text-muted-foreground">
            ⚠️ Pré-requisito (transparência total)
          </h3>
          <p className="text-muted-foreground">
            Recomendado pra quem consegue investir{" "}
            <span className="font-semibold text-foreground">~R$1.000 em tráfego</span>{" "}
            durante os 14 dias de Sprint. Sem tráfego, sem vendas.
          </p>
        </div>
      </section>

      {/* ===== GARANTIA ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/15">
            <ShieldCheck size={40} className="text-primary" />
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            Garantia de <span className="text-gradient">14 dias</span> — Risco Zero
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Entrou, consumiu e decidiu que não é pra você? Dentro de 14 dias você pede e recebe{" "}
            <span className="font-semibold text-foreground">100% do dinheiro de volta</span>. Sem perguntas.
          </p>
        </div>
      </section>

      {/* ===== PREÇO ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/15 px-4 py-1.5 font-heading text-sm font-semibold text-accent">
            🔥 Lote de Fundador
          </span>

          <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
            Acesso completo ao Protocolo 3C
          </h2>

          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="text-2xl text-muted-foreground line-through">R$97</span>
            <span className="font-heading text-5xl font-bold text-primary md:text-6xl">R$57</span>
          </div>
          <p className="mb-8 text-sm text-muted-foreground">Lote 1 — primeiras {VAGAS_TOTAL} compras</p>

          <VagasCounter />

          <div className="mt-10">
            <CTAButton />
          </div>

          <div className="mx-auto mt-10 max-w-md space-y-3 text-left">
            <div className="rounded-lg border border-border bg-card/60 p-4">
              <p className="text-sm font-semibold text-foreground">
                💎 Order Bump — Cofre 3C (R$37)
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                +20 criativos validados + hooks/roteiros. O acelerador pra testar mais rápido e bater os R$3k.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card/60 p-4">
              <p className="text-sm font-semibold text-foreground">
                🔄 Upsell de assinatura
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Aparece dentro do curso, no momento do setup/escala — ativa o piloto automático.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="mb-8 font-heading text-3xl font-bold md:text-4xl">
            Tudo isso por apenas <span className="text-gradient">R$57</span>
          </h2>

          <ul className="mb-10 mx-auto max-w-md space-y-2 text-left">
            {[
              "Acesso imediato",
              "Sprint 14D (passo a passo)",
              "2 ofertas prontas",
              "6 criativos validados",
              "Kit de conversa WhatsApp",
              "Console 3C — teste 24h",
              "Comunidade 3C",
              "Garantia de 14 dias",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-foreground">
                <CheckCircle size={18} className="shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <CTAButton />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border px-4 py-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
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
