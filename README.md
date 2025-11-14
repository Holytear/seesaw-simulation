# Seesaw Simulation

A physics-based seesaw simulator built with vanilla JavaScript. Click on the plank to drop weights and watch the realistic physics in action!

🔗 **Live Demo:** [https://holytear.github.io/seesaw-simulation/](https://holytear.github.io/seesaw-simulation/)

## Features

- **Real Physics**: Torque calculations based on weight × distance
- **Interactive**: Click anywhere on the plank to add weights (1-10 kg)
- **Smooth Animations**: CSS-powered tilt animations
- **Persistent State**: Saves your seesaw state in localStorage
- **Responsive**: Works on desktop and mobile

## How It Works

The simulation uses basic physics principles:

```
Torque = Weight × Distance from center
Tilt Angle = (Right Torque - Left Torque) / Sensitivity
Maximum angle: ±30 degrees
```

## Tech Stack

- Pure JavaScript (ES6+)
- HTML5
- CSS3

No frameworks, no libraries - just vanilla code.

## Usage

1. Click anywhere on the brown plank
2. A weight (1-10 kg) drops at that position
3. The seesaw tilts based on the physics
4. Your state is saved automatically
5. Use the reset button to start over

## Installation

```bash
git clone https://github.com/Holytear/seesaw-simulation.git
cd seesaw-simulation
```

Then open `index.html` in your browser. That's it!

## Project Structure

```
├── index.html      # Main page
├── styles.css      # All styles
├── script.js       # Physics logic
└── README.md       # This file
```

## Implementation Notes

### Physics Calculation

The core physics happens in `calculateAndUpdate()`:
- Loops through all objects
- Calculates torque for each side
- Determines tilt angle
- Updates the display

### Click Detection

Using `getBoundingClientRect()` to get exact click position on the plank and convert it to the coordinate system.

### State Management

Everything is saved to localStorage on every change:
- Object positions and weights
- Current tilt angle
- Next weight to drop

## Challenges

Some interesting problems I solved:

1. **Accurate positioning**: Had to map screen coordinates to the plank's coordinate system
2. **Smooth physics**: Tuned the sensitivity constant to make it feel natural
3. **State persistence**: Properly serializing/deserializing the objects array

## Future Ideas

- Sound effects
- Drag and drop weights
- Remove individual weights
- Different plank lengths
- Multiplayer mode?

## License

Free to use for learning purposes.

## Contact

Selim Yalcintas - [@Holytear](https://github.com/Holytear)

---

Made with vanilla JS ☕
