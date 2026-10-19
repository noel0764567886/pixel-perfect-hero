export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <title>Seite konnte nicht geladen werden – frulicious</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif; background: rgb(253,243,243); color: rgb(45,30,33); display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: rgb(110,85,90); margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 9999px; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: rgb(78,10,25); color: #fff; }
      .secondary { background: #fff; color: rgb(78,10,25); border-color: rgb(240,218,218); }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Diese Seite konnte nicht geladen werden</h1>
      <p>Bei uns ist etwas schiefgelaufen. Du kannst die Seite neu laden oder zurück zur Startseite gehen.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Erneut versuchen</button>
        <a class="secondary" href="/">Zur Startseite</a>
      </div>
    </div>
  </body>
</html>`;
}
