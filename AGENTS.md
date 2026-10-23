<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

- Render the shared site header once in the root layout; informational product routes have no cart or checkout dependencies, keeping removed ordering flows out of the route graph.
- Define shared shadows and color roles in the global stylesheet; use semantic utilities in pages so the corporate palette stays consistent.
