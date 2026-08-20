// Functional placeholder router for hsndm.me product subdomains.
const pages = {
  app: {
    label: "Client systems / reserved",
    title: "App control room",
    body: "A future authenticated workspace for shared client reporting, workflows, and operating visibility.",
    state: "Reserved for client dashboard work",
  },
  status: {
    label: "Service visibility / reserved",
    title: "Status board",
    body: "A future public service-status page for live client systems and maintenance notices.",
    state: "No monitored public services yet",
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
  log: {
    label: "Build archive / reserved",
    title: "Field log",
    body: "A future archive of build notes, system decisions, and evidence-led case studies from the work.",
    state: "Archive opening soon",
  },
};

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", "\"": "&quot;",
  })[character]);
}

function renderPage(name, page) {
  const title = `${page.title} — Hasan Adam`;
  const label = escapeHtml(page.label);
  const body = escapeHtml(page.body);
  const state = escapeHtml(page.state);
  const host = `${name}.hsndm.me`;

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><meta name="theme-color" content="#f2eee5"><title>${title}</title><style>:root{--paper:#f2eee5;--ink:#202422;--muted:#52605b;--oxide:#ce5e2a;--steel:#55778a;--line:rgba(32,36,34,.22)}*{box-sizing:border-box}body{margin:0;min-width:320px;background:var(--paper);background-image:linear-gradient(rgba(32,36,34,.026) 1px,transparent 1px),linear-gradient(90deg,rgba(32,36,34,.018) 1px,transparent 1px);background-size:36px 36px;color:var(--ink);font-family:Arial,sans-serif}.wrap{min-height:100vh;display:grid;grid-template-rows:auto 1fr auto}.top{border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;padding:18px clamp(20px,5vw,70px);gap:18px}.brand{font-size:12px;font-weight:800;letter-spacing:.1em;text-decoration:none;color:var(--ink)}.stamp{font-family:monospace;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--oxide);border:1px solid currentColor;padding:6px 8px}.main{display:grid;align-content:center;gap:32px;padding:72px clamp(20px,10vw,160px);max-width:1100px}.eyebrow{font-family:monospace;font-size:11px;letter-spacing:.09em;color:var(--steel);text-transform:uppercase}.eyebrow:before{content:"";display:inline-block;width:28px;height:1px;background:currentColor;margin:0 9px 4px 0}h1{font-size:clamp(58px,11vw,154px);line-height:.76;letter-spacing:-.07em;text-transform:uppercase;margin:0;max-width:900px}h1 em{color:var(--oxide);font-style:italic}.body{max-width:560px;font-size:18px;line-height:1.55;color:var(--muted);margin:0}.panel{border:1px solid var(--line);background:rgba(255,255,255,.28);padding:18px;max-width:560px}.panel span{display:block;font-family:monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--oxide);margin-bottom:8px}.panel strong{font-size:16px}.actions{display:flex;flex-wrap:wrap;gap:10px}.button{display:inline-flex;align-items:center;gap:9px;min-height:45px;padding:0 15px;border:1px solid var(--ink);font-family:monospace;font-size:11px;letter-spacing:.04em;text-decoration:none;text-transform:uppercase;color:var(--ink)}.button--solid{background:var(--ink);color:var(--paper)}.button:hover{transform:translateY(-2px)}footer{border-top:1px solid var(--line);padding:16px clamp(20px,5vw,70px);font-family:monospace;font-size:10px;color:var(--muted);display:flex;justify-content:space-between;gap:12px}@media(max-width:560px){.top{padding:16px 20px}.main{padding:66px 20px}.stamp{font-size:9px}footer{padding:15px 20px;flex-direction:column}}</style></head><body><div class="wrap"><header class="top"><a class="brand" href="https://hsndm.me">HASAN ADAM / SYSTEMS &amp; AUTOMATION</a><span class="stamp">${host}</span></header><main class="main"><div class="eyebrow">Field endpoint / ${label}</div><h1>${escapeHtml(page.title).replace(" ", " <em>")}</em></h1><p class="body">${body}</p><div class="panel"><span>Current state</span><strong>${state}</strong></div><div class="actions"><a class="button button--solid" href="https://hsndm.me">Return to portfolio ↗</a><a class="button" href="https://hsndm.me/#contact">Start an enquiry →</a></div></main><footer><span>HASAN ADAM · FIELD MANUAL MODERNISM</span><span>PLACEHOLDER / ${host.toUpperCase()}</span></footer></div></body></html>`;
}

addEventListener("fetch", (event) => event.respondWith(handleRequest(event.request)));

async function handleRequest(request) {
  const hostname = new URL(request.url).hostname.toLowerCase();
  const name = hostname.split(".")[0];
  const page = pages[name];

  if (!page) return new Response("Not found", { status: 404 });

  return new Response(renderPage(name, page), {
    headers: {
      "content-type": "text/html; charset=UTF-8",
      "cache-control": "public, max-age=300",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}
