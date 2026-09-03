# Sola Hub

Ички экосистема хаб: CRM, ERP, биллинг, Jira, отчёты, почта — битта саҳифада.

Спецификация: [`docs/SPEC_sola_hub_portal.md`](docs/SPEC_sola_hub_portal.md).

## Локально

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Статика: `dist/`.

## Деплой (LAN)

1. Хабни **HTTP ички** хостга қўйинг (мас. `http://hub.awg.lan`). HTTPS хаб + HTTP iframe = mixed content блокировка.
2. Фақат LAN/VPN — auth йўқ.
3. nginx мисол:

```nginx
server {
    listen 80;
    server_name hub.awg.lan;
    root /var/www/sola-hub/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Сервислар рўйхати: [`src/data/services.ts`](src/data/services.ts).

## Accessibility (қисқа)

- Семантик `nav` / `main` / `button`-симон `NavLink`
- `:focus-visible` контурлар
- `prefers-reduced-motion` ҳурматланади
- Иконкалар inline SVG (`aria-hidden`)
