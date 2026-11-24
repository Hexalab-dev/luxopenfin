---
title: Deployment Guide
---

# Deployment & CI/CD

## GitHub Actions

- Workflow: `.github/workflows/deploy.yml`
- Triggers: Push to `main` and manual runs
- Steps:
  1. Checkout repo
  2. `npm ci` inside `web/`
  3. `npm run build`
  4. Upload `web/build` artifact (`luxopenfin-site`)
  5. Optional rsync deploy when secrets are configured

### Required Secrets

| Secret | Purpose |
|--------|---------|
| `LUX_SSH_KEY` | Private key with access to the target server |
| `LUX_DEPLOY_USER` | SSH user (e.g., `deploy`) |
| `LUX_DEPLOY_HOST` | Hostname, e.g., `luxopenfin.com` |
| `LUX_DEPLOY_PATH` | Absolute target path, e.g., `/var/www/luxopenfin` |

> If secrets are missing, the workflow still builds and stores the artifact for manual download.

## Manual Publish Script

`scripts/publish_to_server.sh` replicates the CI steps locally.

```
export DEPLOY_HOST=luxopenfin.com
export DEPLOY_PATH=/var/www/luxopenfin
export DEPLOY_USER=deploy
./scripts/publish_to_server.sh
```

The script runs `npm ci`, builds the static site, and pushes it via `rsync -az --delete` to keep the remote directory in sync.

## Server Checklist

- Nginx/Apache serving the directory defined in `DEPLOY_PATH`
- Enable gzip + HTTP/2 for optimal performance
- Configure TLS (Let’s Encrypt) for `luxopenfin.com`
- Serve `build/fr` and `build/de` behind language-aware rewrites or separate vhosts if desired

