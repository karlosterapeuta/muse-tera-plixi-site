

## Plano: Adicionar Vídeo de Fundo na Hero

Já existe o arquivo `public/music-therapy-video.mp4`. Vou integrá-lo como vídeo de fundo na Hero section.

### Modificações em `src/components/Hero.tsx`:

1. Adicionar elemento `<video>` como background absoluto, cobrindo toda a seção com `object-cover`
2. Adicionar overlay semi-transparente sobre o vídeo para garantir legibilidade do texto (gradiente escuro suave)
3. Ajustar cores do texto para branco/claro (pois o vídeo escurece com overlay)
4. Video: `autoPlay`, `muted`, `loop`, `playsInline` para reprodução automática sem som
5. Remover blobs e grid-pattern (o vídeo substitui esses elementos decorativos)
6. Manter partículas sutis sobre o vídeo para efeito premium

### Estrutura do vídeo:
```
<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
  <source src="/music-therapy-video.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-black/50" /> <!-- overlay -->
```

Texto será ajustado para `text-white` para contraste com o vídeo escurecido pelo overlay.

