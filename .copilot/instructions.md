# Copilot Instructions for governance.md

## Project Overview

governance.md is a React-based web application built with Vite, TypeScript, and deployed to Cloudflare Workers. It provides governance documentation templates and features for different team structures.

## Technology Stack

- **Build Tool**: Vite with React SWC plugin
- **Framework**: React 18 with React Router
- **Language**: TypeScript (with relaxed type checking)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (TanStack Query)
- **Deployment**: Cloudflare Workers/Pages via Wrangler
- **Package Manager**: npm

## Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Start development server (runs on port 8080)
npm run dev
```

### Testing and Building
```bash
# Run linter
npm run lint

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build locally
npm run preview

# Deploy to Cloudflare
npm run deploy
```

## Code Guidelines

### File Structure
- `/src/App.tsx` - Main application entry point with routing setup
- `/src/pages/` - Page components (Index, NotFound)
- `/src/components/ui/` - shadcn/ui component library (pre-built components)
- `/src/components/` - Custom application components
- `/src/lib/utils.ts` - Utility functions including `cn()` for className merging
- `/src/hooks/` - Custom React hooks
- `/public/templates/` - Governance markdown templates for different team sizes

### Key Patterns
- **Components**: Use shadcn/ui patterns with TypeScript interfaces, `forwardRef`, and `cn()` utility
- **Routing**: React Router v6 - add new routes above the catch-all `*` route in `/src/App.tsx`
- **Styling**: Use Tailwind CSS classes, leverage shadcn/ui components
- **State**: Use React Query for server state, React hooks for local state

### Configuration Notes
- **Path Aliases**: `@/` maps to `./src/` directory
- **TypeScript**: Relaxed checking with `noImplicitAny: false`, `strictNullChecks: false`
- **Vite Server**: Configured to run on all network interfaces (`::`) on port 8080
- **Cloudflare**: Entry point at `/src/index.ts`, static assets from `/dist/`

## Deployment

The application is deployed to Cloudflare Workers with custom domain `governance.md`. Use `npm run deploy` to deploy changes.

## Best Practices

1. **Minimal Changes**: Make the smallest possible changes to achieve the goal
2. **Component Reuse**: Use existing shadcn/ui components before creating new ones
3. **Type Safety**: Leverage TypeScript for better code quality
4. **Performance**: Use React Query for efficient data fetching
5. **Consistency**: Follow existing patterns in the codebase