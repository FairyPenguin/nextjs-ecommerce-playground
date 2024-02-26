# Project Guide Line

################################################################

## Xtech E-commerce project

################################################################

### Tech Stack:

- Astro SSR with Nodejs Adapter
- React
- Typescript

- Package-Manger: PNPM

### Packages && Dependencies

#### Dependencies

1. "@astrojs/check": "^0.4.1",
2. "@astrojs/react": "^3.0.9",
3. "@types/react": "^18.2.48",
4. "@types/react-dom": "^18.2.18",
5. "astro": "^4.1.2",
6. "astro-icon": "^1.0.2",
7. "react": "^18.2.0",
8. "react-dom": "^18.2.0",
9. "typescript": "^5.3.3"
10.

#### Dev Dependencies

1. "@typescript-eslint/parser": "^6.18.1",
2. "eslint": "^8.56.0",
3. "eslint-formatter-table": "^7.32.1",
4. "eslint-plugin-astro": "^0.31.1"

## Commands

> - eslint
>
> `pnpm install -D eslint eslint-plugin-astro @typescript-eslint/parser eslint-formatter-table`

> Images in Astro

    In .astro files, local images must be imported into the file in order to be used. Remote and public/ images do not require importing.

    Import and use Astro’s built-in <Image /> component for optimized images using astro:assets. Alternatively, Astro syntax supports writing an HTML <img> tag directly, which skips image processing.

### 1- Structure the project with framework agnostic components.

Data Folder ▶️ root

pages Folder ▶️ src

layouts Folder ▶️ src

styles Folder ▶️ src

utilities Folder ▶️ src

types Folder ▶️ src

assets Folder ▶️ src

components Folder ▶️ src

UiComponents ▶️ src/components
HomeComponents ▶️ src/components

Ts ▶️ src/components
