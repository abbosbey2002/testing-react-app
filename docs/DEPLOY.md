# Deploy — Sola Hub (LAN)

## Талаблар

- Статик хостинг (nginx / Caddy)
- Фақат ички тармоқ
- **Афзал протокол: HTTP** — ERP/rep/real-time HTTP iframe учун

## Қадамлар

```bash
npm ci
npm run build
# dist/ ни серверга нусхаланг
```

## nginx

Қаранг: лойиҳа илдизидаги `README.md`.

## Хавфсизлик эслатма

MVP да логин йўқ. URL лар `src/data/services.ts` да. Роли — кейинги итерация.
