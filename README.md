# 🎢 Seesaw Simulation

A physics-based seesaw simulation built with pure JavaScript, HTML, and CSS. Experience realistic torque calculations and smooth animations as you drop weights onto the seesaw plank!

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://holytear.github.io/seesaw-simulation/)

## 🎯 Features

- **Realistic Physics**: Accurate torque calculations based on weight and distance from pivot
- **Interactive Gameplay**: Click anywhere on the plank to drop randomly weighted objects (1-10 kg)
- **Smooth Animations**: CSS-based animations for tilt transitions and object drops
- **State Persistence**: LocalStorage integration saves your seesaw state between sessions
- **Real-time Feedback**: Live display of weights, angles, and event logs
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Live Demo

Visit the live simulation: [https://holytear.github.io/seesaw-simulation/](https://holytear.github.io/seesaw-simulation/)

## 📋 How It Works

### Physics Engine

The simulation implements real physics principles:

1. **Torque Calculation**:
   ```
   Torque = Weight × Distance from Center
   Left Total Torque = Σ(weight × distance) for all left objects
   Right Total Torque = Σ(weight × distance) for all right objects
   ```

2. **Tilt Angle Determination**:
   ```
   Angle = clamp((Right Torque - Left Torque) / Sensitivity, -30°, +30°)
   ```

3. **Dynamic Equilibrium**: The seesaw continuously rebalances after each weight drop

### User Interaction

- **Click to Drop**: Click anywhere on the brown plank to add a weight
- **Random Weights**: Each object has a random weight between 1-10 kg
- **Visual Feedback**: Objects appear as colored circles with weight labels
- **Reset Button**: Clear the seesaw and start fresh anytime

## 🛠️ Technical Implementation

### Technology Stack

- **Pure JavaScript** (ES6+): No frameworks or libraries
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations and gradients

### Project Structure

```
seesaw-simulation/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Physics engine and interaction logic
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

### Key Components

#### 1. HTML Structure
- Seesaw container with plank and pivot
- Weight display cards (left, right, next, angle)
- Event log for user feedback
- Control buttons

#### 2. CSS Styling
- Gradient backgrounds for modern look
- Transform-based rotation for smooth tilting
- Keyframe animations for object drops
- Responsive design with media queries

#### 3. JavaScript Logic
- `SeesawSimulation` class encapsulates all functionality
- Event-driven architecture for clicks
- Physics calculations on each interaction
- LocalStorage API for state persistence

## 🎨 Design Decisions

### Visual Design Choices

1. **Color Palette**: Purple gradient background for visual appeal
2. **Wood Texture**: Brown gradient for the plank to represent a real seesaw
3. **Colorful Objects**: Random bright colors for dropped weights
4. **Card-based UI**: Clean, modern information display

### Technical Trade-offs

1. **No Physics Library**: Built from scratch for learning and control
   - *Pro*: Complete understanding of physics implementation
   - *Con*: Limited to basic torque mechanics

2. **CSS Animations vs Canvas**: Chose CSS for simplicity
   - *Pro*: Hardware-accelerated, smooth performance
   - *Con*: Limited to simple 2D transformations

3. **LocalStorage**: Simple persistence solution
   - *Pro*: No backend required, instant save/load
   - *Con*: Data lost if browser data is cleared

### Physics Simplifications

- **2D Simulation**: Objects don't have vertical drop physics
- **Fixed Plank**: No spring/bounce effects
- **Instant Placement**: Objects appear immediately at click position
- **No Collision**: Objects can overlap on the plank

## 🧮 Physics Formulas

### Torque Calculation
```javascript
const distance = Math.abs(clickPosition - centerPosition);
const torque = weight * distance;
```

### Angle Calculation with Constraints
```javascript
const torqueDifference = rightTorque - leftTorque;
const angle = Math.max(-30, Math.min(30, torqueDifference / sensitivity));
```

### Side Determination
```javascript
const side = clickPosition < centerPosition ? 'left' : 'right';
```

## 💡 Challenges & Solutions

### Challenge 1: Accurate Click Detection
**Problem**: Needed to detect clicks only within the plank boundaries and calculate exact position.

**Solution**: Used `getBoundingClientRect()` to get plank dimensions and calculate relative click position as a percentage of plank width.

### Challenge 2: Smooth Rotation
**Problem**: Instant rotation looked jarring and unrealistic.

**Solution**: Applied CSS transitions with `cubic-bezier` easing function for natural-looking tilt animations.

### Challenge 3: State Persistence
**Problem**: Seesaw state lost on page refresh.

**Solution**: Implemented localStorage save/load with JSON serialization for objects array and seesaw state.

### Challenge 4: Visual Feedback
**Problem**: Users needed to understand what's happening.

**Solution**: Added event log, weight displays, angle indicator, and "next weight" preview.

## 🚧 Known Limitations

1. **Plank Width**: Fixed at 500px (responsive on smaller screens)
2. **Object Size**: All objects same size regardless of weight
3. **No Removal**: Can't remove individual objects (only reset all)
4. **Simple Physics**: No momentum, friction, or spring effects
5. **2D Only**: No depth or 3D perspective

## 🔮 Future Enhancements

### Potential Features
- [ ] Drag-and-drop object placement
- [ ] Variable object sizes based on weight
- [ ] Sound effects for drops and tilts
- [ ] Multiplayer mode with challenges
- [ ] Physics difficulty levels
- [ ] Object removal by clicking
- [ ] Animation effects for extreme tilts
- [ ] Score system or challenges
- [ ] Export/import seesaw configurations

### Technical Improvements
- [ ] Add unit tests for physics calculations
- [ ] Implement object pooling for performance
- [ ] Add accessibility features (ARIA labels, keyboard controls)
- [ ] Optimize for lower-end devices
- [ ] Add touch gesture support
- [ ] Implement more realistic physics (momentum, elasticity)

## 📦 Installation & Usage

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Holytear/seesaw-simulation.git
   cd seesaw-simulation
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - No build process or dependencies required!

### GitHub Pages Deployment

1. **Push to GitHub**:
   ```bash
   git push origin master
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select branch: `master`
   - Select folder: `/ (root)`
   - Click Save

3. **Access your site**:
   - Wait a few minutes for deployment
   - Visit: `https://yourusername.github.io/seesaw-simulation/`

## 🧪 Testing

### Manual Testing Checklist

- [x] Objects appear at exact click position
- [x] Torque calculations are mathematically correct
- [x] Tilt angle respects ±30° limits
- [x] localStorage persists state across page refreshes
- [x] Animations are smooth and performant
- [x] Reset button clears all state correctly
- [x] Responsive design works on mobile devices
- [x] No console errors in browser

### Testing Scenarios

1. **Equal Weights**: Place equal weights at equal distances → angle = 0°
2. **Maximum Tilt**: Place heavy weights on one side → angle = ±30°
3. **Refresh Test**: Add objects, refresh page → state restored
4. **Reset Test**: Add objects, click reset → clean slate
5. **Mobile Test**: Test on various screen sizes → responsive layout

## 📚 Learning Resources

This project demonstrates:
- **DOM Manipulation**: Dynamic element creation and modification
- **Event Handling**: Click events and user interaction
- **CSS Transforms**: Rotation and positioning
- **LocalStorage API**: Client-side data persistence
- **Physics Simulation**: Torque and rotational equilibrium
- **Object-Oriented JavaScript**: Class-based architecture

## 👨‍💻 Author

**Selim Yalcintas** ([@Holytear](https://github.com/Holytear))
- Location: Istanbul, Turkey
- Email: selimyalcnts@gmail.com
- LinkedIn: [selim-yalcintas](https://linkedin.com/in/selim-yalcintas)

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Physics concepts based on classical mechanics principles
- Design inspired by modern web design trends
- Built as a case study project to demonstrate web development skills

---

**⭐ If you found this project interesting, please consider giving it a star on GitHub!**

## 📹 Video Demonstration

[Video demonstration will be available soon explaining the implementation and showcasing the simulation in action]

---

*Last Updated: November 14, 2025*

