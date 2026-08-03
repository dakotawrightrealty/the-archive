# The Archive

The canonical archive for a science fiction universe exploring existence through the experiences of conscious beings.

## Current Version

Archive v0.4 — Repository Memory Workflow

## Purpose

The Archive protects the identity, continuity, manuscript, and creative memory of this science fiction universe.

The repository—not an individual ChatGPT conversation—is the permanent memory of the project.

> **Chats are temporary. The Archive is permanent.**

## Source of Truth

- **Memory** belongs in Markdown.
- **Workflow** belongs in repository rule files.
- **Presentation** belongs to the website.

Creative content belongs under `content/`. The HTML website remains the presentation layer and should display repository content without becoming the only place where that content exists.

## Core Documents

- `README_FOR_CHATGPT.md` — boot loader for every new ChatGPT session
- `ARCHIVE_RULES.md` — operational manual and canon workflow
- `CREATIVE_SESSION_START.md` — minimal Archivist activation instruction
- `content/current-state/current-state.md` — authoritative restart point
- `content/manuscripts/` — canonical novel prose
- `sessions/` — curated session history

The wider archive also contains the Constitution, Encyclopedia, Discoveries, Writer’s Journal, Cutting Room, and Research.

## Start a Creative Session

1. Start a brand-new ChatGPT conversation.
2. Activate the Archivist with `CREATIVE_SESSION_START.md`.
3. Follow `README_FOR_CHATGPT.md` and `ARCHIVE_RULES.md`.
4. Read Current State and the active manuscript.
5. Receive a brief synchronization summary.
6. Write.
7. End with: **“Archivist, archive the session.”**
8. Update and commit the repository.
9. End the conversation.

## Session Records

Each creative session creates a curated archive under:

```text
sessions/YYYY/session-NNN-short-title.md
```

These records preserve accomplishments, decisions, canon changes, reasoning, open questions, deferred ideas, and the recommended next objective. They are not chat transcripts.

## Operating Principle

The universe comes first. The Archive exists to serve the universe, not the other way around.

A completely new ChatGPT conversation should be able to resume the project by reading the repository alone.