# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Run linter
npm run lint

# Preview production build locally
npm run preview

# Deploy to Cloudflare
npm run deploy
```

## Architecture

### Project Structure
- `/src/App.tsx` - Main application entry point with routing setup
- `/src/pages/` - Page components (Index, NotFound)
- `/src/components/ui/` - shadcn/ui component library (pre-built components)
- `/src/components/` - Custom application components
- `/src/lib/utils.ts` - Utility functions including `cn()` for className merging
- `/src/hooks/` - Custom React hooks
- `/public/templates/` - Governance markdown templates for different team sizes

### Key Configuration
- **Path Aliases**: `@/` maps to `./src/` directory
- **TypeScript**: Relaxed checking with `noImplicitAny: false`, `strictNullChecks: false`
- **Vite Server**: Configured to run on all network interfaces (`::`), port 8080
- **Cloudflare Integration**: Uses `@cloudflare/vite-plugin` for deployment

### Routing
Uses React Router v6 with catch-all route for 404 handling. New routes should be added above the catch-all `*` route in `/src/App.tsx`.

### Component Pattern
The project uses shadcn/ui components which are copy-pasted into the codebase (not imported from a package). Components follow a consistent pattern with:
- TypeScript interfaces for props
- `forwardRef` for ref forwarding
- `cn()` utility for className merging
- Radix UI primitives as base

### Deployment
The application is deployed to Cloudflare Workers with:
- Entry point: `/src/index.ts` (Cloudflare Worker fetch handler)
- Static assets served from `/dist/`
- Custom domain configured as `governance.md`