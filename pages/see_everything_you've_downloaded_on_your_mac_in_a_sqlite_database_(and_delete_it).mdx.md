---
title: "See Everything You've Downloaded on Your Mac in a SQLite Database (and delete it)"
date: 2022-11-28
tag: sqlite macos
---

```zsh
# see everything you downloaded
sqlite3 ~/Library/Preferences/com.apple.LaunchServices.QuarantineEvents* 'select LSQuarantineDataURLString from [SQuarantineEvent'

# delete that download history
sqlite3 ~/Library/Preferences/com.apple.LaunchServices.QuarantineEvents* 'delete from LSQuarantineEvent'
```
