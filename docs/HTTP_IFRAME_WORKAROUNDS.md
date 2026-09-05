# HTTP / iframe чекловларини қандай айланиб ўтиш

Ички хабда одатда **2 та** браузер чеклови ишлайди. Уларни клиентда «ўчириб» бўлмайди — инфра орқали ҳал қилинади.

## 1. Mixed Content (HTTPS ҳаб + HTTP сервис)

**Муаммо:** ҳаб `https://hub...` бўлса, `http://erp.awg.lan` iframe ҳеч қачон юкланмайди.

**Ечимлар (яхши → ёмон):**

| # | Ечим | Тавсия |
|---|------|--------|
| A | Хабни ҳам **HTTP** қилиш (`http://hub.awg.lan`) | MVP учун энг оддий |
| B | **Reverse proxy**: ҳаб остида `/p/erp/` → `http://erp.awg.lan/` | HTTPS ҳаб керак бўлса — тўғри йўл |
| C | Барча ички сервисларни HTTPS қилиш (сертификат) | Узоқроқ, лекин тўғри |
| D | Браузерда «insecure content» рухсати | Фақат шахсий тест; prod эмас |

### B — nginx reverse proxy (тавсия, HTTPS ҳаб учун)

Бир origin: `https://hub.awg.lan/p/erp/...` → орқада `http://erp.awg.lan/...`.

```nginx
# Хаб статика
location / {
    root /var/www/sola-hub/dist;
    try_files $uri $uri/ /index.html;
}

# ERP
location /p/erp/ {
    proxy_pass http://erp.awg.lan/;
    proxy_set_header Host erp.awg.lan;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_hide_header X-Frame-Options;
    proxy_hide_header Content-Security-Policy;
}

# StatisticWeb
location /p/erp-stat/ {
    proxy_pass http://erp.awg.lan/StatisticWeb/;
    proxy_set_header Host erp.awg.lan;
    proxy_hide_header X-Frame-Options;
    proxy_hide_header Content-Security-Policy;
}

# Reports
location /p/rep/ {
    proxy_pass http://rep.awg.lan/;
    proxy_set_header Host rep.awg.lan;
    proxy_hide_header X-Frame-Options;
    proxy_hide_header Content-Security-Policy;
}

# Real-time
location /p/realtime/ {
    proxy_pass http://172.18.0.17/real-time/;
    proxy_set_header Host 172.18.0.17;
    proxy_hide_header X-Frame-Options;
    proxy_hide_header Content-Security-Policy;
}
```

Кейин `services.ts` да iframe URL:

```ts
url: '/p/erp/login.php',      // эмас http://erp.awg.lan/login.php
embeddable: true,
```

«Открыть в новой вкладке» учун алоҳида `externalUrl: 'http://erp.awg.lan/login.php'` сақлаш мумкин.

## 2. X-Frame-Options / CSP frame-ancestors

**Муаммо:** amoCRM, Jira, mail, кўп HTTPS сайтлар `X-Frame-Options: DENY/SAMEORIGIN` қўяди — чужжой сайт iframe қилолмайди.

**Ечимлар:**

| # | Ечим | Изоҳ |
|---|------|------|
| A | **Янги вкладкада очиш** (ҳозир ҳам шундай) | SaaS учун ягона тўғри йўл |
| B | Reverse proxy + `proxy_hide_header X-Frame-Options` | Фақат **ўз** ички серверларингиз учун |
| C | Сервис томонида CSP/XFO ни юмшатиш | ERP/rep сизларга тегишли бўлса |

**Ташқи SaaS (amoCRM, Jira, mail) учун B ни қилманг** — шартнома/хавфсизлик ва cookie/login бузилади. Улар учун фақат «Открыть».

## 3. Cookie / login iframe ичида

Баъзи тизимлар `SameSite=Lax/Strict` — iframe да сессия ушламайди.

**Ечим:** янги вкладка; ёки reverse proxy same-origin қилганда cookie йўли тўғриланади (ички тизимларда).

## Амалий стратегия (Sola Hub)

1. **LAN HTTP ҳаб** (`http://hub.awg.lan`) — тез старт, mixed content йўқ.
2. Ички HTTP (ERP, rep, real-time): `embeddable: true`; блокланса — nginx proxy (`/p/...`).
3. Ташқи HTTPS (amoCRM, Jira, mail, dealer, portal-2027): `embeddable: false` + фақат янги вкладка.
4. Кейинроқ: ҳабни HTTPS + барча ичкиларни `/p/` орқали прокси.

## Браузерда «айланиб ўтиш» (тавсия қилинмайди)

- Chrome: сайт учун insecure content — фақат шахсий debug.
- Extension / `--disable-web-security` — prod ва бошқа ходимларга эмас.

## Хулоса

| Чеклов | Айланиш |
|--------|---------|
| Mixed Content | Хаб = HTTP **ёки** reverse proxy same-origin |
| X-Frame (SaaS) | Фақат янги вкладка |
| X-Frame (ўз сервер) | nginx `proxy_hide_header` + `/p/...` |
| Cookie iframe | Same-origin proxy ёки янги вкладка |
