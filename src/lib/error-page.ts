export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Singh Bouncers & Security Services — Page Error</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Singh Bouncers & Security Services — Premium Private Security Services in Pune" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #0a1020; color: #fff; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.75rem; margin: 0 0 0.5rem; color: #f0c040; }
      p { color: #9ca3af; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.6rem 1.25rem; border-radius: 0.5rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; font-weight: 500; }
      .primary { background: #f0c040; color: #111; }
      .secondary { background: transparent; color: #fff; border-color: #374151; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home to SinghBouncers.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
