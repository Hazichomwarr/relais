#!/usr/bin/env bash

set -euo pipefail

# --------------------------------------------------
# Arguments
# --------------------------------------------------

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <brand> <source-folder>"
  echo
  echo "Examples:"
  echo "  $0 karmda docs/04-produits/KARMDA/academy"
  echo "  $0 relais docs/02-RH"
  exit 1
fi

BRAND="$1"
SOURCE_DIR="${2%/}"


# --------------------------------------------------
# Brand configuration
# --------------------------------------------------

case "$BRAND" in
  karmda|KARMDA)
    BRAND="karmda"
    TEMPLATE="templates/karmda.typ"
    METADATA="templates/karmda-metadata.yaml"
    ;;

  relais|RELAIS)
    BRAND="relais"
    TEMPLATE="templates/relais.typ"
    METADATA="templates/relais-metadata.yaml"
    ;;

  *)
    echo "Error: unsupported brand: $BRAND"
    echo "Available brands: karmda, relais"
    exit 1
    ;;
esac


# --------------------------------------------------
# Validate files and folders
# --------------------------------------------------

if [ ! -d "$SOURCE_DIR" ]; then
  echo "Error: source folder does not exist:"
  echo "  $SOURCE_DIR"
  exit 1
fi

if [ ! -f "$TEMPLATE" ]; then
  echo "Error: template not found:"
  echo "  $TEMPLATE"
  exit 1
fi

if [ ! -f "$METADATA" ]; then
  echo "Error: metadata file not found:"
  echo "  $METADATA"
  exit 1
fi


# --------------------------------------------------
# Output directory
# --------------------------------------------------

if [[ "$SOURCE_DIR" == docs/* ]]; then
  RELATIVE_DIR="${SOURCE_DIR#docs/}"
else
  RELATIVE_DIR="$SOURCE_DIR"
fi

OUTPUT_DIR="generated-pdfs/$RELATIVE_DIR"

mkdir -p "$OUTPUT_DIR"


# --------------------------------------------------
# Generate PDFs
# --------------------------------------------------

found_files=false
generated_files=0

echo
echo "Brand: $BRAND"
echo "Source: $SOURCE_DIR"
echo "Output: $OUTPUT_DIR"
echo

for file in "$SOURCE_DIR"/*.md; do
  [ -e "$file" ] || continue

  found_files=true
  filename=$(basename "$file" .md)

  # README files describe directories and are not exported.
  if [ "$filename" = "README" ]; then
    echo "Skipping: README.md"
    continue
  fi

  echo "Generating: $filename.pdf"

  pandoc "$file" \
    -o "$OUTPUT_DIR/$filename.pdf" \
    --pdf-engine=typst \
    --metadata-file="$METADATA" \
    -V template="$TEMPLATE" \
    -V mainfont="Helvetica Neue" \
    -V fontsize=11pt \
    --toc \
    --number-sections

  generated_files=$((generated_files + 1))

  echo "Created: $OUTPUT_DIR/$filename.pdf"
  echo
done


# --------------------------------------------------
# Final result
# --------------------------------------------------

if [ "$found_files" = false ]; then
  echo "Error: no Markdown files found in:"
  echo "  $SOURCE_DIR"
  exit 1
fi

if [ "$generated_files" -eq 0 ]; then
  echo "No PDF files generated."
  exit 0
fi

echo "Done!"
echo "$generated_files PDF file(s) generated."
echo "Files saved in: $OUTPUT_DIR"
