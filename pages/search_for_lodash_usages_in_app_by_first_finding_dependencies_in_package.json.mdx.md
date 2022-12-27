---
title: "Search for Lodash Usages in App By First Finding Dependencies in package.json"
date: 2021-03-24
tag: lodash nodejs grep sed bash
---

```bash
#!/bin/bash

# Note: I can't sed, YMMV, do sed better than me
cat package.json | grep lodash | cut -c 5-21 | sed 's/"//g' | sed 's/://g' | sed 's/4//g' | sed 's/\^//g' | while read -r line;
do
	echo -n "$(grep -roh "$line" src | wc -w) "; echo "$line";
	sleep 1
done
```

Example output:

```txt
53 lodash.clone
42 lodash.clonedeep
3 lodash.concat
3 lodash.debounce
```
