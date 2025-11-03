# Contributing to governance.md

Thank you for your interest in contributing to governance.md! We welcome contributions from the community.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion for improvement:

1. Check if the issue already exists in our [issue tracker](https://github.com/ntindle/governance.md/issues)
2. If not, create a new issue with a clear description
3. Include steps to reproduce (for bugs) or use cases (for features)

### Submitting Changes

1. Fork the repository
2. Create a new branch for your feature or fix: `git checkout -b feature/your-feature-name`
3. Make your changes following our code style
4. Test your changes locally: `npm run dev` and `npm run build`
5. Run the linter: `npm run lint`
6. Commit your changes with a clear commit message
7. Push to your fork: `git push origin feature/your-feature-name`
8. Open a Pull Request against the main branch

### Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/governance.md.git
cd governance.md

# Install dependencies
npm install

# Start development server
npm run dev

# The app will be available at http://localhost:8080
```

### Code Style

- We use TypeScript and React
- Follow existing code patterns in the repository
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components focused and reusable

### Adding Templates

To add new governance templates:

1. Create a new markdown file in `public/templates/`
2. Follow the structure of existing templates
3. Update the Index page to include your template in the templates section

### Testing

Before submitting your PR:

- Test your changes in development mode: `npm run dev`
- Build the production version: `npm run build`
- Preview the production build: `npm run preview`
- Ensure the linter passes: `npm run lint`

## Code of Conduct

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Questions?

Feel free to open an issue with your question or reach out through [GitHub Discussions](https://github.com/ntindle/governance.md/discussions).

## License

By contributing to governance.md, you agree that your contributions will be licensed under the MIT License.
