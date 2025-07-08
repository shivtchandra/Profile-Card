# ╔════════════════════════════════════════════════════╗
# ║      TERMINAL PROFILE CARD GENERATOR - README     ║
# ╚════════════════════════════════════════════════════╝

> A sleek, terminal-inspired profile card generator built with modern web tech.

──────────────────────────────────────────────────────
$ cat project-info.txt

Terminal Profile Card Generator is a web app that lets users generate stylish, customizable profile cards in a terminal UI style. It’s built to mimic the aesthetics of a CLI/terminal, with animated outputs, monospace fonts, and retro theming.

──────────────────────────────────────────────────────
$ tech stack --list

- Vite (blazing fast Next-Gen frontend tooling)
- TypeScript (type safety for scalable React apps)
- React (modern UI library)
- shadcn/ui (accessible headless UI components)
- Tailwind CSS (utility-first styling)
- lucide-react (icon set for UI)
- Custom CSS for terminal effects (scanlines, ASCII borders, blinking cursor)

──────────────────────────────────────────────────────
$ features --all

- Terminal-styled UI: All panels, cards, and controls mimic a terminal emulator with borders, colored “traffic lights”, and monospace fonts (JetBrains Mono, Fira Code, etc).
- Animated terminal output: Boot sequences, command echoing, and system-like feedback in the UI.
- Editable profile info: Name, email, profession, skills, experience, and profile image uploads.
- Profession-based skill presets: Dynamic skill mapping when profession is selected.
- Custom skill management: Add/remove custom skills with terminal command-line prompts (e.g., `$ add custom-skill --name`).
- Real-time profile preview: Card reflects all changes instantly, styled with terminal ASCII borders.
- Dark theme: Retro color palette using Tailwind CSS custom properties.
- Scanline overlay: Pure CSS effect for old CRT/terminal feel.
- Blinking terminal cursor: CSS animation for “_” cursor at the prompt.
- Responsive design: Looks great on all screen sizes.
- Quick deploy: Static export, works with Vercel, Netlify, GitHub Pages, etc.

──────────────────────────────────────────────────────
$ ui-details --terminal-style

- Terminal Panel: 
  - Top bar with red/yellow/green “traffic light” buttons and `.sh` file label.
  - Sectioned output area with monospace type and command echoes.
  - Boot sequence and help message on page load.
  - Custom commands shown as labels above inputs (e.g., `$ set name --value`).
  - Blinking underscore cursor at the prompt.

- Card Preview:
  - Encased in a thick ASCII border using Unicode box-drawing characters.
  - Name, email (with icon), profession, and experience rendered in mono font.
  - Skills shown as “cat skills.txt” output with skill name badges.
  - Timestamp (`generated_at: <iso8601>`) at the bottom for authenticity.
  - Profile image with sepia and contrast filter for retro feel.

- Effects:
  - Scanline overlay on the background for terminal/CRT effect (`.scanlines` CSS class).
  - Blinking cursor with CSS animation (`.terminal-cursor`).
  - All interactive fields and outputs styled with Tailwind and custom CSS variables for color and font consistency.

──────────────────────────────────────────────────────
$ file-structure --key

- `src/components/ProfileCardGenerator.tsx` - Main logic and UI for the profile generator, terminal emulation, and card preview.
- `src/components/ui/` - Card, Button, Input, Badge, etc. (shadcn/ui wrappers).
- `src/index.css` - Dark theme, terminal fonts, scanlines, and cursor animation.
- `src/App.css` - Layout and card-specific overrides.
- `index.html` - Meta and root mounting point.

──────────────────────────────────────────────────────
$ install --quickstart

```sh
# 1. Clone the repo
git clone https://github.com/shivtchandra/Profile-Card.git

# 2. Enter the directory
cd Profile-Card

# 3. Install dependencies
npm i

# 4. Start development server
npm run dev
```

──────────────────────────────────────────────────────
$ deploy --static-hosting

- Export-ready for Vercel, Netlify, or GitHub Pages.
- Static build: `npm run build`

──────────────────────────────────────────────────────
$ faq --bonus

Q: Can I connect a custom domain?
A: Yes, just follow your hosting provider’s guide!

Q: Can I add my own professions and skills?
A: Yes, you can edit the `PROFESSION_SKILLS` map in the code, or add skills manually via the UI.

──────────────────────────────────────────────────────
$ about --author

Made with ❤️ by shivtchandra

──────────────────────────────────────────────────────

# [ Enjoy your retro, terminal-inspired profile card! ]
