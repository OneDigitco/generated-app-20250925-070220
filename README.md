# CD Maseko Attorneys: Legal Excellence in Mpumalanga

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)]()

A professional and visually stunning corporate website for a premier Mpumalanga law firm, showcasing their expertise in employment, property, and litigation law.

This project is a visually stunning, professional, and minimalist corporate website for 'CD Maseko Attorneys & Conveyancers'. The website serves as the primary digital presence for the law firm, designed to inspire trust, authority, and confidence. It showcases their comprehensive legal services, introduces their expert team of attorneys, and provides clear contact information. The design is clean and modern, utilizing a sophisticated color palette and typography system to ensure excellent readability and a premium user experience.

## Key Features

-   **Professional & Modern UI:** A clean, minimalist design that reflects the firm's authority and expertise.
-   **Fully Responsive:** Flawless viewing experience across all devices, from mobile phones to large desktops.
-   **Comprehensive Content:** Detailed pages for Home, About Us, Our Team, Services, and Contact.
-   **Visually Stunning:** High-quality visual elements and a sophisticated color palette to create a premium feel.
-   **High-Performance:** Built with Vite and React for a fast, smooth, and responsive user experience.

## Technology Stack

-   **Framework:** [React](https://reactjs.org/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Animation:** [Framer Motion](https://www.framer.com/motion/)
-   **Routing:** [React Router](https://reactrouter.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [Bun](https://bun.sh/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/cloudflare/cdmaseko-attorneys-website.git
    cd cdmaseko-attorneys-website
    ```

2.  **Install dependencies:**
    This project uses Bun as the package manager.
    ```bash
    bun install
    ```

### Running the Development Server

To start the local development server, run the following command:

```bash
bun run dev
```

The application will be available at `http://localhost:3000` (or the next available port).

## Project Structure

The codebase is organized to be clean and maintainable.

-   `src/pages/`: Contains the main page components for each route (e.g., `HomePage.tsx`, `AboutPage.tsx`).
-   `src/components/`: Contains shared React components, including the `Layout.tsx`, `Header.tsx`, and `Footer.tsx`.
-   `src/components/ui/`: Houses the pre-built `shadcn/ui` components.
-   `src/lib/`: Includes utility functions (`utils.ts`) and the centralized content file (`content.ts`).
-   `src/index.css`: Defines global styles and Tailwind CSS layers, including custom brand colors.
-   `src/main.tsx`: The main entry point of the application, where the React Router is configured.

## Development

All static content for the website (e.g., attorney profiles, service descriptions, testimonials) is managed in `src/lib/content.ts`. This approach keeps the component files clean and makes content updates straightforward.

When adding new pages or components, follow the existing structure to maintain consistency. Utilize the pre-configured `shadcn/ui` components and `lucide-react` icons to ensure visual coherence with the established design system.

## Deployment

This project is configured for seamless deployment to **Cloudflare Pages**.

To deploy the application, simply run the build and deploy script:

```bash
bun run deploy
```

This command will build the static assets and deploy them using the Wrangler CLI.

Alternatively, you can connect your GitHub repository to Cloudflare Pages for automatic deployments on every push to your main branch.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)]()

## License

This project is licensed under the MIT License.