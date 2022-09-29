<p align="center">
  <a href="https://gitmoji.dev">
    <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
  </a>
  <a href="https://github.com/frinyvonnick/gitmoji-changelog">
    <img src="https://img.shields.io/badge/gitmoji-Changelog-brightgreen.svg?style=flat-square" alt="gitmoji-changelog">
  </a>
</p>

# Gitmoji Changelog Action

An action for generate gitmoji changelog.

<br />

# Usage

See [action.yml](action.yml)

```yaml
name: "Generate Gitmoji Changelog"

on:
  push:
    branches:
      - "main"

jobs:
  generate-changelog:
    runs-on: ubuntu-latest

    steps:
      - name: "Checkout"
        uses: "actions/checkout@v3"
        with:
          fetch-depth: 0 # Required for fetch all history

      - name: "Generate Changelog"
        uses: sercanuste/gitmoji-changelog-action@v1
```

<br />

# Options

| Option                | Description                                                                                                               | Required | Options                                                     |  Default Value                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------- | -------------------------------------------------------- |
| commit_message        | The commit message to use when updating the changelog.                                                                    | false    | -                                                           | 📝 Update CHANGELOG                                      |
| format                | Changelog file format                                                                                                     | false    | `markdown`<br />`json`                                      | markdown                                                 |
| preset                | Preset for gitmoji-changelog. [Click for more info.](https://docs.gitmoji-changelog.dev/#/?id=%e2%9a%99%ef%b8%8f-presets) | false    | `node`<br />`generic`<br />`maven`<br />`cargo`<br />`helm` | node                                                     |
| group_similar_commits | [⚗️,- beta] Try to group similar commits.                                                                                 | false    | `true`<br />`false`                                         | false                                                    |
| add_author            | Add the author in changelog lines.                                                                                        | false    | `true`<br />`false`                                         | false                                                    |
| author_email          | Email address of commit author                                                                                            | false    | -                                                           | 114694492+gitmoji-changelog-bot@users.noreply.github.com |
| author_name           | Name of commit author                                                                                                     | false    | -                                                           | Gitmoji Changelog Bot                                    |

<br />

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
