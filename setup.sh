#!/bin/bash
# Create minimal PNG icons for the Moral Mosquito extension

mkdir -p extension/images

# Create minimal 1x1 PNG files (these will be replaced by proper icons later)
# For now, we'll create empty placeholder PNG files

# A minimal valid PNG (1x1 transparent pixel)
MINIMAL_PNG=$(printf '\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x06\x00\x00\x00\x1f\x15\xc4\x89\x00\x00\x00\nIDATx\x9cc\x00\x01\x00\x00\x05\x00\x01\r\n-\xb4\x00\x00\x00\x00IEND\xaeB`\x82')

# Write the minimal PNG for each size
echo -n "$MINIMAL_PNG" > extension/images/priest-16.png
echo -n "$MINIMAL_PNG" > extension/images/priest-48.png
echo -n "$MINIMAL_PNG" > extension/images/priest-128.png

echo "✓ Extension icons created"
echo "✓ Extension is ready to load in Brave"
