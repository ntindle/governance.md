# governance.md

A modern web application for creating and managing software project governance documentation. Generate tailored governance templates based on your team size and structure.

## Features

- 📝 Pre-built governance templates for different team sizes
- 🎨 Clean, modern UI built with React and Tailwind CSS
- 🚀 Fast performance with Vite and Cloudflare Workers
- 📱 Fully responsive design
- 🔧 Customizable templates for:
  - Solo developers
  - Two-person teams
  - Small teams
  - Large teams

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Deployment**: Cloudflare Workers/Pages
- **Routing**: React Router v6
- **State Management**: TanStack Query

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd governance.md

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development mode
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
npm run deploy       # Deploy to Cloudflare Workers
```

## Project Structure

```
governance.md/
├── src/
│   ├── components/     # React components
│   │   └── ui/         # shadcn/ui components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── App.tsx         # Main application entry
├── public/
│   └── templates/      # Governance markdown templates
├── dist/               # Production build output
└── wrangler.jsonc      # Cloudflare configuration
```

## Development

### Local Development

The development server runs on port 8080 and supports hot module replacement:

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment

The application is configured for deployment to Cloudflare Workers:

```bash
npm run deploy
```

This requires Wrangler to be configured with your Cloudflare account credentials.

## Customization

### Adding New Templates

Add new governance templates to `public/templates/` as markdown files. They will be automatically available in the application.

### Modifying UI Components

The project uses shadcn/ui components located in `src/components/ui/`. These are fully customizable and use Tailwind CSS for styling.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details

## Support

For questions or issues, please open an issue on GitHub.