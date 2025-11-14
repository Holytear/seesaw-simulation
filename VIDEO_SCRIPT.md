# 🎥 Video Demonstration Script
## Seesaw Simulation - Implementation Walkthrough

**Duration:** ~5 minutes  
**Presenter:** Selim Yalcintas (@Holytear)

---

## Introduction (30 seconds)

**[Show GitHub repository page]**

"Hello! I'm Selim Yalcintas, and today I'll be demonstrating my physics-based seesaw simulation. This project was built using pure JavaScript, HTML, and CSS - no frameworks or external libraries."

**[Open live demo: https://holytear.github.io/seesaw-simulation/]**

"The simulation is fully deployed and accessible via GitHub Pages. Let's dive into how it works!"

---

## Live Demonstration (1.5 minutes)

### Basic Functionality

**[Click on the left side of the plank]**

"When you click anywhere on the seesaw plank, a weight object is added at that exact position. Each object has a random weight between 1 and 10 kilograms."

**[Point to the weight displays at the top]**

"Notice the real-time updates:
- Left weight total
- Next weight preview
- Right weight total  
- Current tilt angle"

**[Click on the right side multiple times]**

"As I add more weight to the right side, the seesaw tilts proportionally based on the torque calculations. The angle is capped at ±30 degrees for realism."

**[Show the event log]**

"The event log tracks all interactions with timestamps, showing where each weight was dropped and its distance from the center."

**[Click the Reset button]**

"The reset button clears everything and starts fresh."

---

## Physics Implementation (1.5 minutes)

**[Open code editor - show script.js]**

### Torque Calculation

**[Scroll to `calculateAndUpdate()` method]**

"The core physics engine calculates torque using the formula: **Torque = Weight × Distance**"

```javascript
const torque = obj.weight * obj.distance;
```

"For each object, I calculate:
1. The distance from the center pivot
2. Which side it's on (left or right)
3. Its contribution to the total torque"

### Angle Determination

**[Show the angle calculation code]**

```javascript
const torqueDifference = rightTorque - leftTorque;
this.currentAngle = Math.max(-30, Math.min(30, 
    torqueDifference / this.TORQUE_SENSITIVITY));
```

"The tilt angle is determined by the torque difference:
- Positive difference → tilts right
- Negative difference → tilts left
- Clamped to ±30 degrees maximum"

### Click Detection

**[Show `handlePlankClick()` method]**

"For accurate positioning, I use `getBoundingClientRect()` to get the plank's dimensions and calculate the relative click position."

```javascript
const rect = this.plank.getBoundingClientRect();
const clickX = e.clientX - rect.left;
const position = (clickX / rect.width) * this.PLANK_WIDTH;
```

---

## Visual Design & Animation (1 minute)

**[Open styles.css]**

### CSS Animations

**[Show the tilt animation]**

"The smooth tilt animation uses CSS transforms with a cubic-bezier easing function:"

```css
.plank {
    transform-origin: center center;
    transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
}
```

**[Show the dropIn animation]**

"When objects are added, they animate in with a custom keyframe animation:"

```css
@keyframes dropIn {
    from {
        transform: translateY(-100px) scale(0);
        opacity: 0;
    }
    to {
        transform: translateY(-50%) scale(1);
        opacity: 1;
    }
}
```

**[Back to live demo - add several weights to show animation]**

"Watch how smoothly the plank rotates and how objects animate in."

---

## State Persistence (45 seconds)

**[Show localStorage implementation in code]**

"The simulation uses localStorage to save state between page refreshes."

### Save State

```javascript
saveState() {
    const state = {
        objects: this.objects,
        nextWeight: this.nextWeight,
        currentAngle: this.currentAngle,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('seesawState', JSON.stringify(state));
}
```

### Load State

**[Show `loadState()` method]**

"On page load, the previous state is restored, including all objects and their positions."

**[Demonstrate: Add weights, refresh page]**

"Let me add a few weights... now if I refresh the page... and there they are, exactly as I left them!"

---

## Technical Challenges (45 seconds)

**[Screen recording with talking head]**

"Three main challenges I encountered:

1. **Accurate Click Detection**  
   *Solution:* Used `getBoundingClientRect()` for precise coordinate mapping

2. **Smooth Physics Feel**  
   *Solution:* Tuned the torque sensitivity constant and used proper easing functions

3. **State Serialization**  
   *Solution:* Implemented JSON serialization with proper object reconstruction"

---

## Project Structure & Best Practices (30 seconds)

**[Show file structure in VS Code or GitHub]**

"The project is organized cleanly:
- `index.html` - Structure
- `styles.css` - All styling and animations
- `script.js` - Physics engine and interaction logic
- `README.md` - Comprehensive documentation
- `DEPLOYMENT_GUIDE.md` - Step-by-step deployment instructions"

**[Show commit history on GitHub]**

"I used multiple small commits to show iterative development:
1. Initial project setup
2. Added comprehensive README
3. Updated documentation
4. Enhanced UX with hover effects
5. Added code comments
6. Created deployment guide"

---

## Responsive Design (20 seconds)

**[Open DevTools and show responsive view]**

"The simulation is fully responsive with media queries for mobile devices."

**[Switch between desktop, tablet, and mobile views]**

"The layout adapts seamlessly, and the plank scales appropriately for smaller screens."

---

## Conclusion (30 seconds)

**[Show live demo one final time]**

"This project demonstrates:
- Real physics implementation from scratch
- Clean, modular JavaScript architecture
- Smooth CSS animations
- State persistence with localStorage
- Responsive design principles
- Proper Git workflow with meaningful commits"

**[Show repository page]**

"The full source code is available on GitHub at: **https://github.com/Holytear/seesaw-simulation**

And you can try it yourself at: **https://holytear.github.io/seesaw-simulation/**

Thank you for watching!"

---

## Recording Tips

### Before Recording:
- [ ] Clear browser cache and localStorage
- [ ] Close unnecessary browser tabs
- [ ] Set browser zoom to 100%
- [ ] Prepare code snippets to show
- [ ] Test audio and video quality
- [ ] Use HD recording (1080p minimum)

### During Recording:
- [ ] Speak clearly and at moderate pace
- [ ] Show mouse movements deliberately
- [ ] Pause briefly between sections
- [ ] Demonstrate features actively (don't just talk)
- [ ] Keep energy and enthusiasm high

### After Recording:
- [ ] Review for audio/video issues
- [ ] Add captions/subtitles if needed
- [ ] Export in high quality (MP4, H.264)
- [ ] Upload to YouTube or similar platform
- [ ] Add video link to README

---

## Video Editing Checklist

- [ ] Add intro title card (3 seconds)
- [ ] Add section transitions
- [ ] Highlight important code sections
- [ ] Add background music (optional, low volume)
- [ ] Add your name and GitHub handle in corner
- [ ] Add outro with links
- [ ] Include call-to-action (star the repo!)

---

## Recommended Tools

- **Screen Recording:** OBS Studio, Camtasia, or Loom
- **Video Editing:** DaVinci Resolve, Adobe Premiere, or Shotcut
- **Mic:** Blue Yeti or similar quality
- **Platform:** YouTube, Vimeo, or Loom

---

**Good luck with your video! 🎬**

*Last Updated: November 14, 2025*

