

## Plano: Redesign do Plano de Fundo para Tema Claro Sofisticado

Este é um redesign estratégico completo, migrando o tema escuro atual para um fundo claro premium com profundidade e autoridade.

---

### Arquivos a Modificar

**1. `src/index.css` — Sistema de Cores e Variáveis CSS**

Substituir todas as variáveis CSS `:root` para tema claro:
- `--background`: de `240 10% 3%` (quase preto) para `220 20% 97%` (#F8F9FB off-white)
- `--foreground`: de claro para `220 15% 15%` (cinza escuro para texto)
- `--card`: `0 0% 100%` (branco puro para cards)
- `--card-foreground`: `220 15% 15%`
- `--muted`: `220 15% 94%` (#F3F4F6)
- `--muted-foreground`: `220 10% 45%`
- `--border`: `220 15% 90%`
- `--secondary`: `220 15% 94%`
- `--surface-1/2/3`: tons de cinza claro progressivos
- Manter `--primary` e `--accent` (azul/roxo) como cores de destaque fortes

Atualizar classes utilitárias:
- `.glass-card`: substituir `bg-white/[0.02]` por `bg-white/80 backdrop-blur-xl border border-gray-200/60`
- `.glass-card-premium`: fundo branco semi-transparente com sombra suave
- `.glass-card-hover`: hover com sombra mais profunda em vez de glow neon
- `.hover-glow-enhanced`: sombra suave cinza em vez de glow roxo
- `.gradient-text`: manter gradiente azul/roxo (funciona bem em fundo claro)
- `.glow-*` classes: reduzir intensidade, usar sombras mais sutis
- `.grid-pattern`: mudar `rgba(255,255,255,0.02)` para `rgba(0,0,0,0.03)`
- `.dot-pattern`: ajustar para cinza sutil
- `.noise-overlay`: mudar `mix-blend-mode` para `soft-light`, aumentar levemente opacidade
- `.mesh-gradient`: ajustar para tons pastel muito sutis
- `.btn-premium`: manter gradiente forte (contraste com fundo claro)
- `.section-divider`: usar `rgba(0,0,0,0.06)` em vez de `rgba(255,255,255,0.1)`
- `.aurora-enhanced`: reduzir opacidade significativamente (0.03-0.05)
- `.phone-mockup`: manter escuro (contraste natural com fundo claro)
- `.badge-glow`, `.badge-premium`: adaptar bordas para cinza claro

Adicionar novas classes:
- `.section-alt`: fundo alternado `bg-[#F3F4F6]` com sombra interna sutil
- `.section-separator`: blur suave entre seções com gradiente transparente
- Gradiente global sutil: topo `#FAFBFD` → base `#F0F2F5`

**2. `src/components/Hero.tsx`**

- Remover video background e overlay escuro (ou manter video com overlay claro)
- Substituir `bg-black/70` por overlay claro com gradiente radial muito suave
- Texto principal: `text-gray-900` em vez de `text-white`
- Badge: fundo branco com borda, texto escuro
- Social proof: avatares e texto em tons escuros
- Partículas: cor cinza/azul muito sutil em vez de branco
- Blobs: opacidade muito baixa (0.05-0.08) com cores pastel
- Scroll indicator: cor escura

**3. `src/components/Navigation.tsx`**

- Scrolled state: `bg-white/95 backdrop-blur-2xl` em vez de `bg-black/98`
- Unscrolled: `bg-white/60 backdrop-blur-xl` em vez de `bg-black/40`
- Texto: `text-gray-700` em vez de `text-muted-foreground`
- Gradient border inferior: manter mas mais sutil
- Mobile menu: fundo branco em vez de preto
- Sombra: `shadow-gray-200/50` em vez de `shadow-black/60`

**4. `src/components/Features.tsx`**

- Background blobs: opacidade muito baixa com tons pastel
- Cards: fundo branco com borda cinza clara e sombra suave
- Category tabs: fundo cinza claro ativo, texto escuro
- Badges nos cards: manter gradiente colorido (contraste)

**5. `src/components/Benefits.tsx`**

- Seção: usar `.section-alt` (fundo `#F3F4F6`)
- Cards: fundo branco, sombra suave, borda `border-gray-100`
- Border-t nos cards: `border-gray-200` em vez de `border-white/10`
- Stat labels: texto escuro

**6. `src/components/Testimonials.tsx`**

- Remover mesh-gradient intenso, usar versão pastel
- Cards: fundo branco com sombra
- Quote icon: manter gradiente colorido
- Border-t: `border-gray-100`
- Stats card inferior: fundo branco com borda azul sutil

**7. `src/components/SuccessStories.tsx`**

- Seção: fundo alternado `#F3F4F6`
- Cards do carrossel: manter gradientes coloridos (são conteúdo, não fundo)

**8. `src/components/FAQ.tsx`**

- Cards: fundo branco, borda `border-gray-200`, hover `border-gray-300`
- Hover button: `hover:bg-gray-50` em vez de `hover:bg-white/5`
- Category badges: fundo azul claro pastel

**9. `src/components/Pricing.tsx`**

- Remover aurora-enhanced (muito intenso para fundo claro)
- Cards: fundo branco com sombra pronunciada
- Popular card border: manter gradiente animado (destaque intencional)
- Modais PIX: fundo branco com borda cinza

**10. `src/components/SystemDemo.tsx`**

- Seção: gradiente sutil de off-white
- Stats cards: fundo branco com sombra
- Phone mockup: manter escuro (contraste natural excelente com fundo claro)

**11. `src/components/AboutUs.tsx`**

- Adaptar cards para fundo branco com sombras suaves
- Certification badges: fundo branco

**12. `src/components/Footer.tsx`**

- Fundo: `bg-gray-900` ou `bg-gray-950` (footer escuro para contraste e fechamento visual)
- Manter texto claro no footer (padrão de mercado)
- Divider gradient: manter

**13. `src/pages/Index.tsx`**

- Body gradient: aplicar gradiente global sutil do topo (mais claro) para base (levemente mais frio)
- Noise overlay: ajustar para modo claro

---

### Princípios Mantidos

- Cor primária forte (azul/roxo) preservada para CTAs e destaques
- Identidade da marca intacta (logo, nome, gradientes)
- Phone mockup permanece escuro (contraste natural com fundo claro)
- Footer escuro (padrão premium)
- Espaçamento generoso mantido
- Responsividade mobile-first preservada
- Contraste AA garantido (texto escuro em fundo claro)

