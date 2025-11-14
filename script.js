// Seesaw simulation with physics
class SeesawSimulation {
    constructor() {
        // DOM Elements
        this.plank = document.getElementById('plank');
        this.seesaw = document.getElementById('seesaw');
        this.leftWeightDisplay = document.getElementById('leftWeight');
        this.rightWeightDisplay = document.getElementById('rightWeight');
        this.nextWeightDisplay = document.getElementById('nextWeight');
        this.tiltAngleDisplay = document.getElementById('tiltAngle');
        this.eventList = document.getElementById('eventList');
        this.resetBtn = document.getElementById('resetBtn');

        // Physics Constants
        this.PLANK_WIDTH = 500; // pixels
        this.CENTER_X = this.PLANK_WIDTH / 2;
        this.MAX_ANGLE = 30; // degrees
        this.TORQUE_SENSITIVITY = 10; // Higher = less sensitive

        // State
        this.objects = [];
        this.nextWeight = this.generateRandomWeight();
        this.currentAngle = 0;

        // Initialize
        this.init();
    }

    init() {
        this.loadState();
        this.updateNextWeightDisplay();

        // event listeners
        this.plank.addEventListener('click', (e) => this.handlePlankClick(e));
        this.resetBtn.addEventListener('click', () => this.resetSeesaw());

        this.calculateAndUpdate();
        this.logEvent('Seesaw initialized. Click on the plank to add weights!');
    }

    generateRandomWeight() {
        return Math.floor(Math.random() * 10) + 1; // 1-10 kg
    }

    handlePlankClick(e) {
        const rect = this.plank.getBoundingClientRect();
        const clickX = e.clientX - rect.left;

        if (clickX < 0 || clickX > rect.width) {
            return;
        }

        const weight = this.nextWeight;
        const position = (clickX / rect.width) * this.PLANK_WIDTH;
        const distance = Math.abs(position - this.CENTER_X);
        const side = position < this.CENTER_X ? 'left' : 'right';

        const weightObject = {
            id: Date.now(),
            weight: weight,
            position: position,
            distance: distance,
            side: side,
            color: this.generateColor()
        };

        this.objects.push(weightObject);
        this.nextWeight = this.generateRandomWeight();
        this.updateNextWeightDisplay();
        this.addWeightObjectToDOM(weightObject);
        this.calculateAndUpdate();
        this.saveState();

        this.logEvent(`🎯 ${weight}kg dropped on ${side} side at ${distance.toFixed(0)}px from center`);
    }

    addWeightObjectToDOM(weightObject) {
        const element = document.createElement('div');
        element.className = 'weight-object';
        element.id = `weight-${weightObject.id}`;
        element.style.left = `${weightObject.position}px`;
        element.style.backgroundColor = weightObject.color;
        element.textContent = `${weightObject.weight}kg`;
        element.title = `${weightObject.weight}kg at ${weightObject.distance.toFixed(0)}px from center`;

        this.plank.appendChild(element);
    }

    generateColor() {
        const colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', 
            '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2',
            '#F8B739', '#52B788'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    calculateAndUpdate() {
        // calculate total torque and weight for each side
        let leftTorque = 0;
        let rightTorque = 0;
        let leftWeight = 0;
        let rightWeight = 0;

        this.objects.forEach(obj => {
            const torque = obj.weight * obj.distance;
            if (obj.side === 'left') {
                leftTorque += torque;
                leftWeight += obj.weight;
            } else {
                rightTorque += torque;
                rightWeight += obj.weight;
            }
        });

        // calculate angle from torque difference (max 30 degrees)
        const torqueDifference = rightTorque - leftTorque;
        this.currentAngle = Math.max(-this.MAX_ANGLE, Math.min(this.MAX_ANGLE, 
            torqueDifference / this.TORQUE_SENSITIVITY));

        // update displays
        this.leftWeightDisplay.textContent = `${leftWeight.toFixed(1)} kg`;
        this.rightWeightDisplay.textContent = `${rightWeight.toFixed(1)} kg`;
        this.tiltAngleDisplay.textContent = `${this.currentAngle.toFixed(1)}°`;

        this.plank.style.transform = `rotate(${this.currentAngle}deg)`;

        this.updateInfoDisplay(leftTorque, rightTorque, leftWeight, rightWeight);
    }

    updateInfoDisplay(leftTorque, rightTorque, leftWeight, rightWeight) {
        // TODO: maybe add a tooltip or debug panel here later
    }

    updateNextWeightDisplay() {
        this.nextWeightDisplay.textContent = `${this.nextWeight} kg`;
    }

    logEvent(message) {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        const timestamp = new Date().toLocaleTimeString();
        eventItem.textContent = `[${timestamp}] ${message}`;
        this.eventList.insertBefore(eventItem, this.eventList.firstChild);

        // Keep only last 10 events
        while (this.eventList.children.length > 10) {
            this.eventList.removeChild(this.eventList.lastChild);
        }
    }

    resetSeesaw() {
        this.objects = [];

        // remove all weights from DOM
        const weightElements = this.plank.querySelectorAll('.weight-object');
        weightElements.forEach(el => el.remove());

        this.currentAngle = 0;
        this.plank.style.transform = 'rotate(0deg)';
        this.nextWeight = this.generateRandomWeight();

        this.calculateAndUpdate();
        this.updateNextWeightDisplay();
        this.saveState();

        this.logEvent('🔄 Seesaw reset to initial state');
    }

    saveState() {
        const state = {
            objects: this.objects,
            nextWeight: this.nextWeight,
            currentAngle: this.currentAngle,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('seesawState', JSON.stringify(state));
    }

    loadState() {
        const savedState = localStorage.getItem('seesawState');
        if (savedState) {
            try {
                const state = JSON.parse(savedState);
                this.objects = state.objects || [];
                this.nextWeight = state.nextWeight || this.generateRandomWeight();
                this.currentAngle = state.currentAngle || 0;

                // Restore objects to DOM
                this.objects.forEach(obj => {
                    this.addWeightObjectToDOM(obj);
                });

                this.logEvent('📂 Previous state loaded from localStorage');
            } catch (error) {
                console.error('Error loading state:', error);
                this.logEvent('⚠️ Error loading saved state');
            }
        }
    }
}

// Initialize simulation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.seesawSim = new SeesawSimulation();
});

