# Website

This repo contains the source markdown and build scripts for [my personal blog](chrisjuchem.dev/blog). 

## Setup build environemt

```bash
sudo snap install hugo
git submodule update --init --recursive
```

## Create a new article

```bash
hugo new content articles/my-new-article.md
```

## Start test server (with drafts)

```bash
hugo server -D
```

## Deploy

```bash
./build-and-deploy.sh
```

## Directories

- `archetypes`: templates for `hugo new content`
- `assets`: css extensions loaded by papermod
- `content`: sources fed into hugo
- `layout`: papermod patches
- `static`: embedded content e.g. images
- `themes`: theme submodules
