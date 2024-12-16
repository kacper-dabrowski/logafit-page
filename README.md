This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all dependencies using `npm i`

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Contribution

To submit the change:

- Create a new branch from main, that references the ticket number from [this board](https://trello.com/b/JmVQ4cPS/logafit) e.g. LF-5
- Change the code and commit it with `npm run commit`. This will ensure, that your commits are up to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standards
- Fill the commitizen form accordingly to your change
- The commit message should be something like: feat(documents): `feat(documents): LF-5 add documents`
- Make sure your changes pass the quality gate by running `npm run checks`
- Push the changes
- Create a pull request on github
- Once approved by a team member, use rebase strategy (squash is allowed too) and delete the branch after merging
