#!/bin/bash

SRC_DIR="scss"
OUT_DIR="static/css"

mkdir -p "$OUT_DIR"

# Loop through each SCSS file (excluding partials)
for FILE in "$SRC_DIR"/*.scss; do
  [[ $FILE == *_*.scss ]] && continue  # Skip partials like _base.scss
  NAME=$(basename "$FILE" .scss)
  sass "$FILE" "$OUT_DIR/$NAME.css" --no-source-map
  echo "✓ Compiled $NAME.css"
done