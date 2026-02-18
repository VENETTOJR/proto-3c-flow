import {
  CheckCircle,
  XCircle,
  Zap,
  ShieldCheck,
  Target,
  ClipboardCheck,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Layers,
  Image,
  Monitor,
  Users,
  DollarSign,
  Building2,
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

// ===== 3 VARIAÇÕES DE HEADLINE (troque o índice pra testar) =====
const HERO_HEADLINES = [
  // V1 — ativa
  <>
    Você não precisa de mais um curso de tráfego.{" "}
    <span className="text-gradient">Você precisa das 3 decisões certas.</span>
  </>,
  // V2
  <>
    Tentativa e erro já te custou meses.{" "}
    <span className="text-gradient">As 3 decisões que faltam cabem numa tarde.</span>
  </>,
  // V3
  <>
    Todo mundo ensina a apertar botão.{" "}
    <span className="text-gradient">
      Ninguém te entrega o criativo, a campanha e a página que convertem juntos.
    </span>
  </>,
];
const ACTIVE_HEADLINE = 0; // 0, 1 ou 2

// ===== CTA REUTILIZÁVEL =====
const CTAButton = ({
  text = "Quero o Protocolo 3C — R$57",
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

// ===== DADOS =====
const faqItems = [
  {
    q: "Isso é mais um curso de tráfego?",
    a: "Não. Curso ensina teoria. O Protocolo 3C entrega as peças prontas: criativos, estrutura de campanha e checklist de conversão. Você monta e roda — sem assistir 200h de aula.",
  },
  {
    q: "Preciso de quanto pra investir em anúncio?",
    a: "Recomendamos começar com R$20–30/dia. Mas o protocolo funciona com qualquer orçamento — o foco é montar a estrutura certa antes de escalar.",
  },
  {
    q: "Funciona pra afiliado?",
    a: "Sim. Você recebe 2 ofertas prontas (encapsulado + SaaS) e criativos validados. É só plugar o link de afiliado e rodar.",
  },
  {
    q: "E se eu nunca rodei tráfego pago?",
    a: "Melhor ainda. Você vai começar com a estrutura certa em vez de queimar dinheiro no escuro. Checklist de campanha te guia do zero.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Imediato. Após a confirmação do pagamento, você recebe login e acesso a todo o material + comunidade.",
  },
  {
    q: "E se eu já tentei e não deu certo?",
    a: "Provavelmente você tinha uma das 3 peças faltando: criativo fraco, campanha mal montada ou conversão sem estrutura. O 3C resolve as 3 juntas.",
  },
];

const deliverables = [
  {
    icon: Layers,
    title: "2 Ofertas Prontas",
    desc: "Uma de encapsulado, uma de SaaS. Estrutura de página, copy e posicionamento prontos pra usar.",
  },
  {
    icon: Image,
    title: "6 Criativos Validados",
    desc: "3 pra cada oferta. Formatos que já performaram — adapte pro seu nicho e suba.",
  },
  {
    icon: ClipboardCheck,
    title: "Checklist de Campanha",
    desc: "Passo a passo pra montar sua campanha sem esquecer nada. Objetivo, público, orçamento, estrutura.",
  },
  {
    icon: Monitor,
    title: "Checklist de Conversão",
    desc: "Tudo que sua página precisa ter pra fechar venda. Headline, oferta, prova, CTA, urgência.",
  },
  {
    icon: Users,
    title: "Acesso à Comunidade 3C",
    desc: "Tire dúvidas, veja o que funciona pros outros e peça feedback dos seus criativos e campanhas.",
  },
];

const situationBullets = [
  { sit: "Você gasta em anúncio e não vende", act: "o 3C te dá criativos que já performaram" },
  { sit: "Seu ROI não passa de 1x", act: "o 3C ajusta a conversão antes de escalar" },
  { sit: "Você duplica campanha e o custo dispara", act: "o 3C te mostra a estrutura que escala sem quebrar" },
  { sit: "Você não sabe que criativo usar", act: "o 3C entrega 6 prontos, testados e validados" },
  { sit: "Sua página não converte", act: "o 3C te dá o checklist exato do que precisa mudar" },
  { sit: "Você troca público todo dia sem resultado", act: "o 3C define a campanha certa antes de testar" },
  { sit: "Você copia criativo dos outros e não funciona", act: "o 3C te entrega formatos originais que convertem" },
  { sit: "Você não sabe se o problema é o anúncio ou a página", act: "o 3C separa criativo, campanha e conversão pra você diagnosticar" },
  { sit: "Você já tentou vários cursos e nenhum deu resultado", act: "o 3C não é curso — é kit de execução" },
  { sit: "Você quer começar como afiliado mas não sabe por onde", act: "o 3C entrega 2 ofertas prontas pra você plugar e rodar" },
  { sit: "Você fatura mas não consegue manter a consistência", act: "o 3C te dá estrutura pra repetir o que funciona" },
  { sit: "Você sente que tá queimando dinheiro no escuro", act: "o 3C ilumina as 3 decisões que determinam se você lucra ou não" },
];

const proofStats = [
  { value: "R$150k", label: "faturados em 14 dias", icon: DollarSign },
  { value: "+R$1M", label: "investidos em tráfego", icon: TrendingUp },
  { value: "5–7x", label: "de ROI alcançado", icon: BarChart3 },
  { value: "Operação real", label: "escritório, equipe e estrutura", icon: Building2 },
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
            {HERO_HEADLINES[ACTIVE_HEADLINE]}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Protocolo 3C = Criativo certo + Campanha montada + Conversão otimizada.{" "}
            <span className="font-semibold text-foreground">
              Meta: buscar R$3.000 no primeiro ciclo.
            </span>
          </p>

          <ul className="mx-auto mt-8 max-w-lg space-y-3 text-left">
            {[
              "2 ofertas prontas (encapsulado + SaaS) pra rodar hoje",
              "6 criativos validados — 3 pra cada oferta",
              "Checklists de campanha e conversão pra não errar nada",
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

      {/* ===== 2. DOR / INIMIGO ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
            Você já sabe o que{" "}
            <span className="text-gradient">NÃO funciona.</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Duplicar campanha. Copiar criativo dos outros. Trocar público todo dia.{" "}
            <span className="font-semibold text-foreground">Você já tentou tudo isso.</span>
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            O problema não é você.{" "}
            <span className="font-semibold text-foreground">
              É que ninguém te deu as 3 peças que precisam funcionar JUNTAS.
            </span>{" "}
            Criativo sem campanha não vende. Campanha sem conversão queima dinheiro. E conversão sem criativo não tem tráfego.
          </p>
        </div>
      </section>

      {/* ===== 3. CAUSA / MECANISMO 3C ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl">
            3 decisões. Nessa ordem.{" "}
            <span className="text-gradient">Sem pular etapa.</span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
            Criativo → Campanha → Conversão. É isso que separa quem lucra de quem queima dinheiro.
          </p>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {/* Criativo */}
            <div className="glow-border group rounded-xl bg-card p-6 transition-all hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Image size={28} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-center">C1 — Criativo</h3>
              <p className="text-sm text-muted-foreground mb-4">
                O que faz a pessoa parar o scroll. Sem criativo forte, ninguém clica. Sem clique, não existe campanha.
              </p>
              <div className="rounded-lg bg-secondary/50 p-3 text-xs text-muted-foreground italic">
                "Você recebe 6 criativos prontos. 3 formatos pra encapsulado, 3 pra SaaS. Só adapta e sobe."
              </div>
            </div>

            {/* Campanha */}
            <div className="glow-border group rounded-xl bg-card p-6 transition-all hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Target size={28} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-center">C2 — Campanha</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A estrutura que escala sem quebrar. Objetivo, público, orçamento e distribuição definidos antes de apertar play.
              </p>
              <div className="rounded-lg bg-secondary/50 p-3 text-xs text-muted-foreground italic">
                "Checklist passo a passo: configure uma vez e saiba exatamente quando escalar ou pausar."
              </div>
            </div>

            {/* Conversão */}
            <div className="glow-border group rounded-xl bg-card p-6 transition-all hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <TrendingUp size={28} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-center">C3 — Conversão</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A página + oferta que fecha a venda. De nada adianta tráfego se quem chega não compra.
              </p>
              <div className="rounded-lg bg-secondary/50 p-3 text-xs text-muted-foreground italic">
                "Checklist de conversão: headline, prova, oferta, CTA, urgência. Tudo no lugar certo."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. PROVA / AUTORIDADE + CTA 4 ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold md:text-4xl">
            Números, <span className="text-gradient">não promessas.</span>
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {proofStats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <stat.icon size={24} />
                </div>
                <span className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
            Resultados reais da nossa operação. Não é garantia de que você terá o mesmo — é prova de que o método funciona quando executado.
          </p>

          {/* CTA 4 */}
          <div className="mt-10 flex justify-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ===== 5. OFERTA / O QUE VOCÊ RECEBE + CTA 2 ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">
            Tudo que você precisa{" "}
            <span className="text-gradient">pra rodar seu primeiro ciclo:</span>
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

          {/* CTA 2 */}
          <div className="mt-12 flex justify-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ===== 6. 12 BULLETS SITUAÇÃO → AÇÃO ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold md:text-4xl">
            Na prática, o Protocolo 3C{" "}
            <span className="text-gradient">resolve isso:</span>
          </h2>

          <div className="grid gap-3 md:grid-cols-2">
            {situationBullets.map((bullet, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary" />
                <p className="text-sm text-foreground">
                  <span className="text-muted-foreground">Se {bullet.sit}</span>
                  {" → "}
                  <span className="font-semibold">{bullet.act}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. GARANTIA 14 DIAS ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/15">
            <ShieldCheck size={40} className="text-primary" />
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            Teste por 14 dias. <span className="text-gradient">Risco zero.</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Se não fizer sentido pra sua operação, devolvemos 100%.{" "}
            <span className="font-semibold text-foreground">
              Sem burocracia. Sem formulário. Sem pergunta.
            </span>
          </p>
        </div>
      </section>

      {/* ===== 8. FAQ ===== */}
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

      {/* ===== 9. CTA FINAL ===== */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
            Lote 1: R$57.{" "}
            <span className="text-gradient">Depois sobe pra R$97.</span>
          </h2>

          <ul className="mb-10 mx-auto max-w-md space-y-2 text-left">
            {[
              "2 Ofertas Prontas (encapsulado + SaaS)",
              "6 Criativos Validados (3 + 3)",
              "Checklist de Campanha",
              "Checklist de Conversão",
              "Acesso à Comunidade 3C",
              "Garantia incondicional de 14 dias",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-foreground">
                <CheckCircle size={18} className="shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA 3 */}
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
