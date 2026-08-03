# Creative Content

This directory is the source of truth for the written universe. Website pages should present this material rather than becoming the only place where it exists.

## Structure

```text
content/
├── current-state/
├── constitution/
├── encyclopedia/
├── discoveries/
├── journal/
├── manuscripts/
│   ├── book-01/
│   │   ├── front-matter/
│   │   ├── chapters/
│   │   └── revisions/
│   └── book-02/
├── cutting-room/
└── research/
```

Git does not preserve empty folders. Create a folder when its first content file is needed.

## Section purposes

- `current-state/`: authoritative restart point for the next session.
- `constitution/`: governing creative principles.
- `encyclopedia/`: established factual canon.
- `discoveries/`: thematic and philosophical discoveries.
- `journal/`: archived creative-session records.
- `manuscripts/`: approved or explicitly tracked novel drafts.
- `cutting-room/`: removed, rejected, and superseded material.
- `research/`: non-canon references and exploratory notes.

See `/ARCHIVE_RULES.md` before promoting material into canon.
