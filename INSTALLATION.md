# Moral Mosquito - Brave Extension

A conscience-driven extension that reminds you of important moral principles whenever you visit Facebook.

## Features

- 🧑‍⚖️ **Moral Reminders**: Displays uplifting moral slogans when you visit Facebook
- 🎯 **Non-Intrusive**: Easy to dismiss and continue browsing
- 🔄 **Varied Messages**: 15 different motivational messages
- 💜 **Beautiful UI**: Modern, clean design with animations

## Installation in Brave

1. **Open Brave** and go to `brave://extensions/`

2. **Enable Developer Mode** - Toggle the switch in the top-right corner

3. **Click "Load unpacked"** and select the `extension` folder from this project

4. **Done!** The extension will now show a popup whenever you visit Facebook

## How It Works

- When you visit `facebook.com`, a popup appears with a moral reminder
- Click "Next Slogan" to see a different message
- Click "I'll Be Mindful" or the × button to dismiss and continue browsing

## Moral Slogans Included

- Reminders about time management and presence
- Encouragement to seek wisdom over validation
- Messages about digital wellness and mental health
- Tips on kindness and authentic connection
- Advice for protecting children's well-being online

## Customization

Edit `extension/content.js` to add more slogans. Modify the `moralSlogans` array to include your own messages:

```javascript
const moralSlogans = [
  "Your custom slogan here",
  "Another slogan...",
];
```

## Adding Custom Icons

To add custom priest/wise person icons:

1. Create 16x16, 48x48, and 128x128 PNG images
2. Place them in the `extension/images/` folder as:
   - `priest-16.png`
   - `priest-48.png`
   - `priest-128.png`

Or use the emoji priest (👨‍⚖️) included in the default design.

## Files Structure

```
extension/
├── manifest.json       # Extension configuration
├── content.js         # Main script that runs on Facebook
├── popup.css          # Styling for the reminder popup
└── images/            # Extension icons
    ├── priest-16.png
    ├── priest-48.png
    └── priest-128.png
```

## Updates

To update the extension after making changes:
1. Go to `brave://extensions/`
2. Find "Moral Mosquito" and click the refresh icon
3. Visit Facebook to see your updated extension

---

*Remember: Time is precious. Use it wisely.* 💜
