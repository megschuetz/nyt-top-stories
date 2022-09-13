# New York Times Top Stories

## MVP Planning

- A user should view all stories on landing page
- A user should be able to click each story and be taken to a detail view
- A user should be able to filter by category

- Component Planning:
  - App
    - Main page route - `<All Stories />` (Each `<link>` to route details page)
      - Map over all stories to make each a preview display `<Story Preview />`
    - Individual page route - `<Individual Details Page />`
