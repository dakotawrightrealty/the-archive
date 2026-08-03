# The Archive — Canon and Session Rules

This document defines how creative work is stored, promoted, revised, and resumed.

## Source-of-truth hierarchy

1. **Manuscripts** contain approved novel prose.
2. **Constitution** contains the governing creative principles of the universe.
3. **Encyclopedia** contains established factual canon.
4. **Discoveries** contains thematic and philosophical discoveries revealed through the work.
5. **Writer's Journal** records decisions, reasoning, rejected directions, and development history.
6. **Current State** is the authoritative restart point for the next creative session.
7. **Cutting Room** contains removed, rejected, or superseded material that should not be lost.
8. **Research** contains references, possibilities, and external information. Research is non-canon until deliberately promoted.

## Canon rules

- A brainstorming idea is not canon merely because it was discussed.
- Prose becomes canonical working manuscript only when it is placed in `content/manuscripts/` and marked with an approved draft status.
- Encyclopedia material must describe established facts, not unresolved possibilities.
- Research must never silently become canon.
- Rejected prose or ideas should move to the Cutting Room rather than being deleted.
- The Constitution outranks all newer ideas. Any conflict must be resolved in favor of the universe's established identity unless the Constitution is deliberately amended.

## Session workflow

Every creative session should follow this order:

1. Read `content/current-state/current-state.md`.
2. Work on the identified manuscript objective.
3. Approve the prose or clearly mark it as unfinished.
4. Update the manuscript file.
5. Update the Writer's Journal with the session's decisions and reasoning.
6. Update the Encyclopedia or Discoveries only when canon actually changed.
7. Move rejected material to the Cutting Room when preservation is useful.
8. Update Current State last so it accurately describes the next starting point.

## "Archive the session"

When the user says **"Archivist, archive the session,"** the archival pass should determine which of the following require updates:

- Manuscript
- Writer's Journal
- Current State
- Constitution
- Encyclopedia
- Discoveries
- Cutting Room
- Research

Current State must always be reviewed. Other sections should only change when the session produced relevant material.

## File naming

- Books: `book-01`, `book-02`, and so on.
- Chapters: `chapter-01.md`, `chapter-02.md`, and so on.
- Front matter: descriptive names such as `prologue.md`.
- Journal entries: `session-0001-YYYY-MM-DD.md`.
- Revision records: `revision-0001-YYYY-MM-DD.md`.
- Use lowercase kebab-case for all paths.

## Revision policy

Git preserves the complete line-by-line revision history. Revision files should record meaningful milestones, not every wording adjustment. A chapter's front matter should track its current status and revision number.
