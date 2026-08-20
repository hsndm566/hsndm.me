// Field Manual Modernism: public subdomains use the same evidence-led visual system as the portfolio.
const GITHUB_RAW = "https://raw.githubusercontent.com/hsndm566/hsndm.me/main";
const ARCHIVE_MANIFEST_URL = `${GITHUB_RAW}/notes/index.json`;

const pages = {
  app: {
    label: "Client systems / reserved",
    title: "App control room",
    body: "A future authenticated workspace for shared client reporting, workflows, and operating visibility.",
    state: "Reserved for client dashboard work",
  },
  apply: {
    label: "Candidate workflow / reserved",
    title: "Apply workspace",
    body: "A future entry point for the AutoApply SA candidate workflow and application-status experience.",
    state: "Product experience in development",
  },
  bot: {
    label: "Conversation systems / reserved",
    title: "Assistant sandbox",
    body: "A future guided environment for testing bounded, industry-aware conversational workflows.",
    state: "Sandbox being prepared",
  },
  docs: {
    label: "Operating reference / reserved",
    title: "System notes",
    body: "A future documentation space for onboarding, delivery standards, and client handover references.",
    state: "Reference library in preparation",
  },
};

const monitoredServices = [
  { name: "Portfolio", url: "https://hsndm.me/", detail: "Primary public site" },
  { name: "Project enquiry", url: "https://tally.so/r/D4RWJE", detail: "Public intake form" },
  { name: "Field-log source", url: ARCHIVE_MANIFEST_URL, detail: "GitHub-backed Markdown archive" },
];

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", "\"": "&quot;",
  })[character]);
}

function response(body, init = {}) {
  return new Response(body, {
    ...init,
    headers: {
      "content-type": "text/html; charset=UTF-8",
      "cache-control": "no-store, max-age=0",
      "x-robots-tag": "noindex, nofollow",
      ...(init.headers || {}),
    },
  });
}

function shell({ title, eyebrow, host, content, script = "", noIndex = true }) {
  const robots = noIndex ? '<meta name="robots" content="noindex">' : "";
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${robots}<meta name="theme-color" content="#f2eee5"><title>${escapeHtml(title)} — Hasan Adam</title><style>
  :root{--paper:#f2eee5;--ink:#202422;--muted:#52605b;--oxide:#ce5e2a;--steel:#55778a;--green:#20765a;--yellow:#b78612;--line:rgba(32,36,34,.22);--soft:rgba(255,255,255,.31)}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;min-width:320px;background:var(--paper);background-image:linear-gradient(rgba(32,36,34,.026) 1px,transparent 1px),linear-gradient(90deg,rgba(32,36,34,.018) 1px,transparent 1px);background-size:36px 36px;color:var(--ink);font-family:Arial,sans-serif}.wrap{min-height:100vh;display:grid;grid-template-rows:auto 1fr auto}.top{border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;padding:18px clamp(20px,5vw,70px);gap:18px}.brand{font-size:12px;font-weight:800;letter-spacing:.1em;text-decoration:none;color:var(--ink)}.stamp{font-family:monospace;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--oxide);border:1px solid currentColor;padding:6px 8px}.main{padding:clamp(48px,8vw,108px) clamp(20px,10vw,160px);max-width:1280px;width:100%;margin:auto}.eyebrow{font-family:monospace;font-size:11px;letter-spacing:.09em;color:var(--steel);text-transform:uppercase}.eyebrow:before{content:"";display:inline-block;width:28px;height:1px;background:currentColor;margin:0 9px 4px 0}h1{font-size:clamp(52px,9vw,126px);line-height:.77;letter-spacing:-.07em;text-transform:uppercase;margin:16px 0 0;max-width:980px}h1 em{color:var(--oxide);font-style:italic}.lede{max-width:610px;font-size:18px;line-height:1.55;color:var(--muted);margin:27px 0 0}.button{display:inline-flex;align-items:center;gap:9px;min-height:45px;padding:0 15px;border:1px solid var(--ink);font-family:monospace;font-size:11px;letter-spacing:.04em;text-decoration:none;text-transform:uppercase;color:var(--ink);transition:transform .16s ease}.button--solid{background:var(--ink);color:var(--paper)}.button:hover{transform:translateY(-2px)}.actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}.rule{border:0;border-top:1px solid var(--line);margin:48px 0}.meta{font-family:monospace;font-size:11px;letter-spacing:.055em;text-transform:uppercase}.log-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:44px}.note-card{background:var(--soft);border:1px solid var(--line);padding:20px;text-decoration:none;color:var(--ink);min-height:260px;display:flex;flex-direction:column;justify-content:space-between;transition:transform .18s ease,box-shadow .18s ease}.note-card:hover{transform:translateY(-4px);box-shadow:7px 7px 0 rgba(32,36,34,.15)}.note-card--feature{grid-column:span 2;min-height:300px}.note-card__tag{color:var(--oxide)}.note-card h2{font-size:clamp(31px,4.8vw,62px);letter-spacing:-.05em;line-height:.84;text-transform:uppercase;margin:20px 0}.note-card p{color:var(--muted);line-height:1.55;max-width:530px}.note-card__foot{border-top:1px solid var(--line);padding-top:14px;color:var(--steel);display:flex;justify-content:space-between;gap:14px}.article{max-width:800px}.article__back{color:var(--steel);font-family:monospace;font-size:11px;letter-spacing:.05em;text-decoration:none;text-transform:uppercase}.article__back:hover{color:var(--oxide)}.article h1{font-size:clamp(48px,8vw,102px)}.article__meta{border-top:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;gap:18px;flex-wrap:wrap;margin:35px 0;padding:14px 0;color:var(--steel)}.markdown{font-size:18px;line-height:1.7;color:#35403b}.markdown h1,.markdown h2,.markdown h3{color:var(--ink);font-size:clamp(28px,4vw,48px);letter-spacing:-.045em;line-height:.95;text-transform:uppercase;margin:45px 0 16px}.markdown h3{font-size:25px}.markdown p{margin:0 0 18px}.markdown ul{padding-left:21px;margin:0 0 20px}.markdown li{margin:7px 0}.markdown a{color:var(--oxide);font-weight:700}.status-summary{align-items:center;border:1px solid var(--line);display:flex;gap:16px;background:var(--soft);margin-top:42px;padding:18px}.status-dot{width:14px;height:14px;border-radius:50%;background:var(--green);box-shadow:0 0 0 5px rgba(32,118,90,.13);flex:0 0 auto}.status-summary strong{display:block;font-size:18px}.status-summary span{color:var(--muted);font-size:14px;display:block;margin-top:3px}.service-list{display:grid;gap:12px;margin-top:19px}.service{background:var(--soft);border:1px solid var(--line);display:grid;grid-template-columns:14px 1fr auto;align-items:center;gap:15px;padding:17px}.service__dot{width:10px;height:10px;border-radius:50%;background:var(--green)}.service--issue .service__dot{background:var(--oxide)}.service__name{font-weight:800;letter-spacing:.015em}.service__detail{color:var(--muted);font-size:14px;margin-top:3px}.service__metric{font-family:monospace;font-size:11px;color:var(--steel);text-align:right}.status-note{color:var(--muted);font-size:14px;line-height:1.5;margin-top:22px;max-width:650px}.empty{border:1px solid var(--line);padding:21px;color:var(--muted);margin-top:35px}footer{border-top:1px solid var(--line);padding:16px clamp(20px,5vw,70px);font-family:monospace;font-size:10px;color:var(--muted);display:flex;justify-content:space-between;gap:12px}@media(max-width:650px){.top{padding:16px 20px}.main{padding:64px 20px}.stamp{font-size:9px}.log-grid{grid-template-columns:1fr}.note-card--feature{grid-column:span 1}.service{grid-template-columns:12px 1fr}.service__metric{grid-column:2;text-align:left}.note-card h2{font-size:42px}footer{padding:15px 20px;flex-direction:column}}</style></head><body><div class="wrap"><header class="top"><a class="brand" href="https://hsndm.me">HASAN ADAM / SYSTEMS &amp; AUTOMATION</a><span class="stamp">${escapeHtml(host)}</span></header><main class="main"><div class="eyebrow">${escapeHtml(eyebrow)}</div>${content}</main><footer><span>HASAN ADAM · FIELD MANUAL MODERNISM</span><span>${escapeHtml(host).toUpperCase()}</span></footer></div>${script}</body></html>`;
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1 ↗</a>');
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const output = [];
  let listOpen = false;

  const closeList = () => {
    if (listOpen) { output.push("</ul>"); listOpen = false; }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) { closeList(); continue; }
    if (line.startsWith("### ")) { closeList(); output.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`); continue; }
    if (line.startsWith("## ")) { closeList(); output.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`); continue; }
    if (line.startsWith("# ")) { closeList(); output.push(`<h1>${inlineMarkdown(line.slice(2))}</h1>`); continue; }
    if (line.startsWith("- ")) {
      if (!listOpen) { output.push("<ul>"); listOpen = true; }
      output.push(`<li>${inlineMarkdown(line.slice(2))}</li>`); continue;
    }
    closeList(); output.push(`<p>${inlineMarkdown(line)}</p>`);
  }
  closeList();
  return output.join("\n");
}

async function fetchArchiveManifest() {
  const response = await fetch(ARCHIVE_MANIFEST_URL, { cf: { cacheTtl: 120, cacheEverything: true } });
  if (!response.ok) throw new Error(`Archive manifest unavailable (${response.status})`);
  return response.json();
}

async function renderLog(requestUrl) {
  const url = new URL(requestUrl);
  const slug = url.pathname.match(/^\/post\/([a-z0-9-]+)\/?$/)?.[1];
  let archive;
  try { archive = await fetchArchiveManifest(); } catch (error) {
    return response(shell({ title: "Field log", eyebrow: "Build archive / unavailable", host: "log.hsndm.me", content: `<h1>Field <em>log</em></h1><div class="empty">The archive source is temporarily unavailable. Please return shortly.</div>` }));
  }

  if (slug) {
    const post = archive.posts?.find((item) => item.slug === slug);
    if (!post) return response(shell({ title: "Note not found", eyebrow: "Field log / 404", host: "log.hsndm.me", content: `<div class="article"><a class="article__back" href="https://log.hsndm.me">← Return to archive</a><h1>Note not <em>found.</em></h1></div>` }), { status: 404 });
    const source = await fetch(`${GITHUB_RAW}/${post.file}`, { cf: { cacheTtl: 120, cacheEverything: true } });
    if (!source.ok) return response(shell({ title: "Note unavailable", eyebrow: "Field log / source unavailable", host: "log.hsndm.me", content: `<div class="article"><a class="article__back" href="https://log.hsndm.me">← Return to archive</a><h1>Note <em>unavailable.</em></h1></div>` }), { status: 503 });
    const markdown = await source.text();
    const content = `<div class="article"><a class="article__back" href="https://log.hsndm.me">← Return to archive</a><h1>${inlineMarkdown(post.title).replace(" ", " <em>")}</em></h1><div class="article__meta meta"><span>${escapeHtml(post.date)}</span><span>${escapeHtml(post.type)}</span><span>${escapeHtml(post.readTime)}</span></div><div class="markdown">${renderMarkdown(markdown)}</div><div class="actions"><a class="button button--solid" href="${escapeHtml(post.source)}" target="_blank" rel="noreferrer">View Markdown source ↗</a><a class="button" href="https://hsndm.me/#contact">Start an enquiry →</a></div></div>`;
    return response(shell({ title: post.title, eyebrow: "Field log / build note", host: "log.hsndm.me", content, noIndex: false }));
  }

  const cards = (archive.posts || []).map((post, index) => `<a class="note-card${index === 0 ? " note-card--feature" : ""}" href="/post/${escapeHtml(post.slug)}"><div><div class="note-card__tag meta">${escapeHtml(post.date)} / ${escapeHtml(post.type)}</div><h2>${inlineMarkdown(post.title)}</h2><p>${inlineMarkdown(post.excerpt)}</p></div><div class="note-card__foot meta"><span>${escapeHtml(post.readTime)}</span><span>Read note →</span></div></a>`).join("");
  const content = `<h1>Field <em>log.</em></h1><p class="lede">A public working archive of systems, experiments, and the decisions that shape them. Every note starts as Markdown in the portfolio repository.</p><div class="actions"><a class="button button--solid" href="https://github.com/hsndm566/hsndm.me/tree/main/notes" target="_blank" rel="noreferrer">Open source archive ↗</a><a class="button" href="https://hsndm.me">Return to portfolio →</a></div><hr class="rule"><div class="log-grid">${cards || '<div class="empty">The first note is being prepared.</div>'}</div>`;
  return response(shell({ title: "Field log", eyebrow: "Build archive / public notes", host: "log.hsndm.me", content, noIndex: false }));
}

async function checkService(service) {
  const started = Date.now();
  try {
    const check = await fetch(service.url, { cf: { cacheTtl: 0, cacheEverything: false } });
    return { ...service, ok: check.ok, code: check.status, latency: Date.now() - started };
  } catch {
    return { ...service, ok: false, code: "ERR", latency: Date.now() - started };
  }
}

async function renderStatus(requestUrl) {
  const statuses = await Promise.all(monitoredServices.map(checkService));
  const healthy = statuses.every((service) => service.ok);
  const checkedAt = new Date().toISOString();
  const url = new URL(requestUrl);

  if (url.searchParams.get("format") === "json") {
    return new Response(JSON.stringify({ checkedAt, overall: healthy ? "operational" : "degraded", services: statuses }), { headers: { "content-type": "application/json", "cache-control": "no-store" } });
  }

  const list = statuses.map((service) => `<div class="service${service.ok ? "" : " service--issue"}"><span class="service__dot"></span><div><div class="service__name">${escapeHtml(service.name)}</div><div class="service__detail">${escapeHtml(service.detail)}</div></div><div class="service__metric">${escapeHtml(service.code)} · ${escapeHtml(service.latency)} ms</div></div>`).join("");
  const content = `<h1>System <em>status.</em></h1><p class="lede">Live public endpoint checks for the portfolio operating surface. This page runs fresh checks when it loads and refreshes automatically while you are viewing it.</p><div class="status-summary"><span class="status-dot" style="background:${healthy ? "var(--green)" : "var(--oxide)"}"></span><div><strong>${healthy ? "All monitored services are operational" : "One or more monitored services need attention"}</strong><span>Checked <time datetime="${checkedAt}">${escapeHtml(checkedAt.replace("T", " ").replace(".000Z", " UTC"))}</time> · next refresh in <span id="countdown">60</span>s</span></div></div><div class="service-list">${list}</div><p class="status-note">These checks show current availability while this page is open. They do not retain a historical uptime record or send incident alerts.</p><div class="actions"><a class="button button--solid" href="/">Refresh checks ↗</a><a class="button" href="https://hsndm.me">Return to portfolio →</a></div>`;
  const script = `<script>let remaining=60;const target=document.getElementById("countdown");setInterval(()=>{remaining-=1;if(target)target.textContent=remaining;if(remaining<=0)location.reload()},1000)</script>`;
  return response(shell({ title: "System status", eyebrow: "Live service checks / 60 seconds", host: "status.hsndm.me", content, script, noIndex: true }));
}

function renderPlaceholder(name, page) {
  const content = `<h1>${escapeHtml(page.title).replace(" ", " <em>")}</em></h1><p class="lede">${escapeHtml(page.body)}</p><div class="empty"><span class="meta" style="color:var(--oxide)">Current state</span><br><strong>${escapeHtml(page.state)}</strong></div><div class="actions"><a class="button button--solid" href="https://hsndm.me">Return to portfolio ↗</a><a class="button" href="https://hsndm.me/#contact">Start an enquiry →</a></div>`;
  return response(shell({ title: page.title, eyebrow: `Field endpoint / ${page.label}`, host: `${name}.hsndm.me`, content }));
}

addEventListener("fetch", (event) => event.respondWith(handleRequest(event.request)));

async function handleRequest(request) {
  const url = new URL(request.url);
  const hostname = url.hostname.toLowerCase();
  const name = hostname.split(".")[0];

  if (hostname === "log.hsndm.me") return renderLog(request.url);
  if (hostname === "status.hsndm.me") return renderStatus(request.url);
  if (pages[name]) return renderPlaceholder(name, pages[name]);
  return new Response("Not found", { status: 404 });
}
