# 🧠 Moral Mosquito - Brave Browser Extension

> An ethically overactive mosquito that bites your conscience whenever you dare to access Facebook 🦟

An extension that shows a popup with moral slogans and wisdom whenever you visit Facebook, reminding you to be mindful of how you spend your time online.

## ✨ Features

- 👨‍⚖️ **Moral Reminders**: Beautiful popup with 15+ uplifting moral slogans
- 🎯 **Smart Targeting**: Only triggers on Facebook.com
- 🔄 **Varied Messages**: Different slogans shown randomly each time
- 💫 **Non-Intrusive**: Easy to dismiss without blocking your browsing
- 🎨 **Beautiful UI**: Modern gradient design with smooth animations
- 🔒 **Privacy First**: Everything runs locally in your browser

## 🚀 Quick Start

### Step 1: Open Extensions Page
1. Open **Brave Browser**
2. Go to `brave://extensions/` in your address bar

### Step 2: Enable Developer Mode
- Click the **Developer mode** toggle switch in the top-right corner

### Step 3: Load the Extension
1. Click **"Load unpacked"**
2. Navigate to and select the `extension` folder in this project

### Step 4: Test It
1. Visit `facebook.com`
2. You'll see the moral reminder popup! 🧠

## 💬 Moral Slogans Included

The extension shows messages like:
- "Remember: Time spent on social media is time not spent with loved ones."
- "Seek wisdom before seeking validation from strangers."
- "Comparison is the thief of joy. Focus on your own journey."
- "Your worth is not measured in likes and shares."
- "A peaceful mind is worth more than a thousand followers."
- "The algorithm wants your attention. Protect your mind and spirit."
- "Before you post, ask: Is this true, necessary, and kind?"
- And 8 more thoughtful reminders...

## 🛠️ Customization

### Add Your Own Slogans

Edit `extension/content.js` and modify the `moralSlogans` array:

```javascript
const moralSlogans = [
  "Your custom message here",
  "Another message...",
];
```

### Customize the Design

Edit `extension/popup.css` to change:
- Colors and gradients (currently purple/blue gradient)
- Font sizes and typography
- Button styles and hover effects
- Animation speeds and easing

## 📁 Project Structure

```
extension/
├── manifest.json          # Extension permissions & configuration
├── content.js             # Main script injecting the popup on Facebook
├── popup.css              # Styling for the reminder modal
└── images/
    ├── priest-16.png      # Small extension icon
    ├── priest-48.png      # Medium extension icon
    └── priest-128.png     # Large extension icon
```

## 🔄 Making Changes

After editing the extension code:
1. Go to `brave://extensions/`
2. Find "Moral Mosquito" and click the **refresh icon**
3. Return to Facebook to see your changes

## 💡 How It Works

When you visit Facebook:
1. The extension detects the page load
2. A modal popup appears with a random moral slogan
3. You can click:
   - **Next Slogan** to see a different message
   - **I'll Be Mindful** to close and continue
   - **×** button to dismiss

## ⚙️ System Requirements

- Brave Browser (or any Chromium-based browser)
- Manifest V3 compatible browser
- Facebook access (obviously 😄)

## 🔒 Privacy & Safety

- ✅ No data collection
- ✅ No tracking
- ✅ No external network requests
- ✅ Runs entirely locally in your browser
- ✅ Open source - inspect the code anytime

## 📝 Tips

- The popup appears once per page load - you can dismiss it to continue browsing
- Works on all Facebook URLs: facebook.com, www.facebook.com, m.facebook.com
- You can disable the extension anytime from `brave://extensions/`
- Perfect to use alongside browser/app blocking tools for digital wellness

## 🎯 Recommended Reading

- "Digital Minimalism" by Cal Newport
- "The Attention Merchants" by Tim Wu
- "Mindless: Why Our Brains Are Struggling to Keep Up"

---

**Remember:** *Time is our most precious resource. Use it wisely.* ⏰💜

*"The best time to plant a tree was 20 years ago. The second best time is now."* 🌳
