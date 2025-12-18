class StoryEngine {
    constructor() {
        this.state = {
            currentNode: 'start',
            history: [],
            stats: {
                melancholy: 0,
                aggression: 0,
                rationality: 0,
                paranoia: 0,
                hope: 0,
                fear: 0,
                bravery: 0,
                curiosity: 0,
                rebellion: 0,
                control: 0
            }
        };

        this.ui = {
            textPanel: document.getElementById('story-text'),
            choicesPanel: document.getElementById('choices-container'),
            logFeed: document.getElementById('log-feed'),
            statsDisplay: document.getElementById('stats-display'),
            chapterDisplay: null // Will create dynamically if needed or use existing
        };

        this.init();
    }

    init() {
        console.log("Engine V2.0 Initialized");
    }

    startStory() {
        this.loadNode('start');
        this.log("Sistem Başlatıldı... V2.0 Çekirdek Aktif", "SYSTEM");
        this.log("Nöral Ağ Bağlantısı: Stabil", "NET");
    }

    loadNode(nodeId) {
        const node = STORY_DATA[nodeId];
        if (!node) {
            console.error("Node not found:", nodeId);
            return;
        }

        // Router node
        if (node.random_targets && Array.isArray(node.random_targets)) {
            const targets = node.random_targets;
            const randomTarget =
                targets[Math.floor(Math.random() * targets.length)];
            return this.loadNode(randomTarget);
        }

        this.state.currentNode = nodeId;

        // Update Visual Mood
        const dominant = this.getDominantStat();
        if (window.visuals) {
            window.visuals.setMood(dominant);
        }

        // Clear previous content
        this.ui.textPanel.innerHTML = '';
        this.ui.choicesPanel.innerHTML = '';

        // Display Chapter if present
        if (node.chapter) {
            this.showChapterTitle(node.chapter);
        }

        // Process Text (Dynamic Replacement)
        let processedText = this.processText(node.text);

        // Render Text
        this.typeWriter(processedText, this.ui.textPanel);

        // Render Choices (delayed)
        setTimeout(() => {
            this.renderChoices(node.choices);
        }, 1000); // Wait for text to start appearing

        // Update Analysis
        this.analyzeSentiment();
    }

    showChapterTitle(title) {
        const h2 = document.createElement('h2');
        h2.innerText = title;
        h2.className = 'animate__animated animate__fadeIn';
        h2.style.color = 'var(--accent-gold)';
        h2.style.marginBottom = '2rem';
        h2.style.fontSize = '1rem';
        h2.style.letterSpacing = '4px';
        h2.style.fontFamily = 'var(--font-mono)';
        this.ui.textPanel.appendChild(h2);
    }

    processText(text) {
        const dominantStat = this.getDominantStat();
        const vocab = VOCABULARY[dominantStat] || VOCABULARY['default'];

        return text.replace(/{{(.*?)}}/g, (match, key) => {
            const words = vocab[key];
            if (Array.isArray(words)) {
                return words[Math.floor(Math.random() * words.length)];
            }
            return words || VOCABULARY['default'][key] || match;
        });
    }

    getDominantStat() {
        let max = 0;
        let dominant = 'default';
        for (const [stat, value] of Object.entries(this.state.stats)) {
            if (value > max) {
                max = value;
                dominant = stat;
            }
        }
        return dominant;
    }

    typeWriter(text, element) {
        const p = document.createElement('p');
        element.appendChild(p);

        // Handle HTML tags in typewriter (simple version)
        // We'll just set innerHTML for now to support <br> and <span>
        // For a true typewriter with HTML, we'd need a complex parser.
        // To keep it robust, we will fade in the paragraph instead of char-by-char for HTML content.
        p.innerHTML = text;
        p.style.opacity = 0;
        p.style.animation = 'textFadeIn 1s forwards';
    }

    renderChoices(choices) {
        this.ui.choicesPanel.innerHTML = '';

        choices.forEach((choice, index) => {
            const btn = document.createElement('div');
            btn.className = 'choice-btn';

            // Add Tag if exists
            let tagHtml = '';
            if (choice.tag) {
                tagHtml = `<span class="tag">[${choice.tag}]</span>`;
            }

            btn.innerHTML = `${tagHtml}${choice.text}`;
            btn.style.animation = `fadeInUp 0.5s forwards ${index * 0.2}s`;
            btn.style.opacity = 0; // Start hidden

            btn.onclick = () => this.makeChoice(choice);

            this.ui.choicesPanel.appendChild(btn);
        });
    }

    makeChoice(choice) {
        // Update Stats
        if (choice.effects) {
            for (const [stat, value] of Object.entries(choice.effects)) {
                if (stat === 'reset') {
                    this.resetState();
                    return;
                }
                if (!this.state.stats[stat]) this.state.stats[stat] = 0;
                this.state.stats[stat] += value;
            }
        }

        // Log Action
        this.log(`Seçim Protokolü: ${choice.tag || 'STANDART'}`, "USER");
        this.log(`Duygu Vektörü: ${this.getDominantStat().toUpperCase()}`, "AI");

        // Move to next node
        this.loadNode(choice.target);
        this.updateStatsDisplay();
    }

    resetState() {
        this.state.stats = { melancholy: 0, aggression: 0, rationality: 0, paranoia: 0, hope: 0, rebellion: 0, fear: 0, bravery: 0, curiosity: 0, control: 0 };
        this.startStory();
    }

    log(message, source) {
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        const time = new Date().toLocaleTimeString('tr-TR', { hour12: false });

        entry.innerHTML = `
            <span class="log-time">[${time}]</span>
            <span class="log-source">${source}</span>
            <span class="log-msg">${message}</span>
        `;

        this.ui.logFeed.prepend(entry);
    }

    updateStatsDisplay() {
        let html = '';
        // Sort stats by value
        const sortedStats = Object.entries(this.state.stats)
            .sort(([, a], [, b]) => b - a);

        for (const [stat, value] of sortedStats) {
            if (value > 0) {
                const percent = Math.min(value * 2, 100);
                html += `
                    <div style="margin-bottom: 8px;">
                        <div style="display:flex; justify-content:space-between; font-size:0.7rem; color:#888; margin-bottom:2px;">
                            <span style="text-transform:uppercase;">${stat}</span>
                            <span>${value}</span>
                        </div>
                        <div style="width:100%; height:2px; background:rgba(255,255,255,0.1);">
                            <div style="width:${percent}%; height:100%; background:var(--accent-cyan); box-shadow: 0 0 5px var(--accent-cyan);"></div>
                        </div>
                    </div>
                `;
            }
        }
        this.ui.statsDisplay.innerHTML = html;
    }

    analyzeSentiment() {
        // Simulate complex analysis
        const dominant = this.getDominantStat();
        const messages = [
            "Kortikal tepkiler işleniyor...",
            `Baskın Duygu: ${dominant.toUpperCase()}`,
            "Senaryo ağacı yeniden yapılandırılıyor...",
            "Etik alt yordamlar denetleniyor..."
        ];

        let delay = 500;
        messages.forEach(msg => {
            setTimeout(() => {
                this.log(msg, "SYS");
            }, delay);
            delay += 800;
        });
    }
}
