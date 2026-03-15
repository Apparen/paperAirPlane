# Backup Information

This folder contains backup copies of all project files.

## Files Backed Up

- game.js.backup
- main.js.backup
- pipes.js.backup
- index.html.backup
- style.css.backup
- README.md.backup

## Backup Best Practices

### Method 1: Manual Backup Folder (What we did)

```
backups/
  ├── game.js.backup
  ├── main.js.backup
  ├── pipes.js.backup
  └── index.html.backup
```

**When to use**: Quick snapshots before making major changes
**Pros**: Simple, easy to restore
**Cons**: Manual process, takes disk space

### Method 2: Use Git (You already have it!)

Git is the **professional standard** for version control. It's already in your project.

#### Basic Git Commands:

```bash
# See what changed
git status

# Save your changes with a message
git add .
git commit -m "Fixed pipe collision detection"

# View history
git log

# Undo to a previous version
git revert HEAD
git reset --hard <commit-id>

# Create a branch to try something risky
git checkout -b experimental-feature
git checkout main  # switch back
```

### Method 3: Timestamped Backups

For more sophisticated backup management:

```
backups/
  ├── v1_initial/
  │   ├── game.js
  │   └── pipes.js
  ├── v2_collision_fix/
  │   ├── game.js
  │   └── pipes.js
  └── v3_score_update/
      ├── game.js
      └── pipes.js
```

## Recommendation

- **Use Git daily** for your workflow (it's already set up)
- **Keep a backups folder** for extra safety before risky changes
- **Name your commits clearly**: "fixed pipe spawn rate" not "stuff"

## Restoring from Backup

To restore a file:

```bash
# From terminal in your project
cp backups/game.js.backup game.js
```

---

**Created**: March 15, 2026
**Files included**: 6 source files
