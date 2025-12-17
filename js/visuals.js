    class NeuralNetwork {
        constructor(canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.nodes = [];
            this.mouse = { x: -1000, y: -1000 };
            this.moodColor = { r: 0, g: 243, b: 255 }; // Default Cyan
            this.targetColor = { r: 0, g: 243, b: 255 };

            this.resize();
            this.init();

            window.addEventListener('resize', () => this.resize());
            window.addEventListener('mousemove', (e) => {
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
            });
        }

        resize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }

        init() {
            const nodeCount = 100; // Increased density
            for (let i = 0; i < nodeCount; i++) {
                this.nodes.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: (Math.random() - 0.5) * 0.8,
                    size: Math.random() * 2 + 0.5,
                    originalVx: (Math.random() - 0.5) * 0.8,
                    originalVy: (Math.random() - 0.5) * 0.8
                });
            }
        }

        setMood(mood) {
            // Transition colors based on mood
            switch (mood) {
                case 'melancholy':
                    this.targetColor = { r: 100, g: 100, b: 255 }; // Blue/Grey
                    break;
                case 'aggression':
                    this.targetColor = { r: 255, g: 42, b: 109 }; // Red/Pink
                    break;
                case 'rationality':
                    this.targetColor = { r: 0, g: 255, b: 150 }; // Green/Teal
                    break;
                case 'paranoia':
                    this.targetColor = { r: 188, g: 19, b: 254 }; // Purple
                    break;
                case 'fear':
                    this.targetColor = { r: 50, g: 50, b: 50 }; // Dark Grey
                    break;
                case 'curiosity':
                    this.targetColor = { r: 255, g: 165, b: 0 }; // Orange
                    break;
                case 'bravery':
                    this.targetColor = { r: 255, g: 215, b: 0 }; // Gold
                    break;
                case 'hope':
                    this.targetColor = { r: 144, g: 238, b: 144 }; // Light Green
                    break;
                case 'rebellion':
                    this.targetColor = { r: 255, g: 69, b: 0 }; // Red-Orange
                    break;
                case 'control':
                    this.targetColor = { r: 90, g: 110, b: 170 }; // Steel Blue
                    break;
                default:
                    this.targetColor = { r: 0, g: 243, b: 255 }; // Cyan
            }
        }

        lerpColor() {
            this.moodColor.r += (this.targetColor.r - this.moodColor.r) * 0.05;
            this.moodColor.g += (this.targetColor.g - this.moodColor.g) * 0.05;
            this.moodColor.b += (this.targetColor.b - this.moodColor.b) * 0.05;
        }

        draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.lerpColor();

            const colorString = `rgb(${Math.floor(this.moodColor.r)}, ${Math.floor(this.moodColor.g)}, ${Math.floor(this.moodColor.b)})`;

            this.nodes.forEach(node => {
                // Mouse Interaction: Repel
                const dx = this.mouse.x - node.x;
                const dy = this.mouse.y - node.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    node.vx -= (dx / dist) * force * 0.5;
                    node.vy -= (dy / dist) * force * 0.5;
                } else {
                    // Return to normal speed
                    node.vx += (node.originalVx - node.vx) * 0.02;
                    node.vy += (node.originalVy - node.vy) * 0.02;
                }

                // Movement
                node.x += node.vx;
                node.y += node.vy;

                // Bounce
                if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;

                // Draw Node
                this.ctx.fillStyle = colorString;
                this.ctx.beginPath();
                this.ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
                this.ctx.fill();
            });

            // Draw Connections
            this.ctx.lineWidth = 0.5;

            for (let i = 0; i < this.nodes.length; i++) {
                for (let j = i + 1; j < this.nodes.length; j++) {
                    const dx = this.nodes[i].x - this.nodes[j].x;
                    const dy = this.nodes[i].y - this.nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        const opacity = 1 - (dist / 120);
                        this.ctx.strokeStyle = `rgba(${this.moodColor.r}, ${this.moodColor.g}, ${this.moodColor.b}, ${opacity * 0.3})`;
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
                        this.ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
                        this.ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(() => this.draw());
        }
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        const canvas = document.getElementById('neural-canvas');
        if (canvas) {
            window.visuals = new NeuralNetwork(canvas);
            window.visuals.draw();
        }
    });
