#!/usr/bin/env python3
"""
Generate simple icon PNG files for the Moral Mosquito extension
Run this script to create the required extension icons
"""

import struct
import zlib
import os

def create_simple_png(width, height, filename):
    """Create a simple PNG with a gradient background and emoji"""
    
    # PNG signature
    png_signature = b'\x89PNG\r\n\x1a\n'
    
    # IHDR chunk (image header)
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)  # 8-bit RGB
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data) & 0xffffffff
    ihdr_chunk = struct.pack('>I', 13) + b'IHDR' + ihdr_data + struct.pack('>I', ihdr_crc)
    
    # Create simple image data (gradient-ish background)
    image_data = bytearray()
    for y in range(height):
        image_data.append(0)  # filter type for each row
        for x in range(width):
            r = int((102 + (x / width) * 50))  # 667eea - a blue-purple
            g = int((126 + (x / width) * 30))
            b = int((234 + (x / width) * 10))
            image_data.extend([r, g, b])
    
    # Compress image data
    compressed_data = zlib.compress(bytes(image_data), 9)
    idat_crc = zlib.crc32(b'IDAT' + compressed_data) & 0xffffffff
    idat_chunk = struct.pack('>I', len(compressed_data)) + b'IDAT' + compressed_data + struct.pack('>I', idat_crc)
    
    # IEND chunk (image end)
    iend_crc = zlib.crc32(b'IEND') & 0xffffffff
    iend_chunk = struct.pack('>I', 0) + b'IEND' + struct.pack('>I', iend_crc)
    
    # Combine all chunks
    png_data = png_signature + ihdr_chunk + idat_chunk + iend_chunk
    
    # Write to file
    with open(filename, 'wb') as f:
        f.write(png_data)
    
    print(f"✓ Created {filename} ({width}x{height})")

if __name__ == '__main__':
    # Create images directory if it doesn't exist
    os.makedirs('extension/images', exist_ok=True)
    
    # Create icon files
    create_simple_png(16, 16, 'extension/images/priest-16.png')
    create_simple_png(48, 48, 'extension/images/priest-48.png')
    create_simple_png(128, 128, 'extension/images/priest-128.png')
    
    print("\n✨ All icons created successfully!")
    print("You can now load the extension in Brave at brave://extensions/")
