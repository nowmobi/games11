var confettis = (function() {
    var scenes, helpers, hex2rgba;
    return {
        init: function(_scenes, _helpers) {
            var self = this;

            scenes = _scenes;
            helpers = _helpers;

            this.angle = 90;
            this.spread = 60;
            this.vStart = scenes.H / 12;
            scenes.onResize(function() {
                self.vStart = scenes.H / 12;
            });
            this.decay = 0.9;
            this.duration = 2;
            this.colors = [
                '#FB3C52',
                '#FB552A',
                '#57BAFA',
                '#F6FEA6',
                '#FC4654',
                '#FED039',
                '#B6A8DE',
                '#FB5E95',
                '#FD8533',
                '#54A976',
                '#2D76C7',
                '#FC4D5E',
                '#FDF349',
                '#459A69'
            ];

            // polyfill if not exists
            hex2rgba = helpers.hex2rgba || function(color) {
                return color;
            };
        },
        play: function() {
            var n = 200;

            this.particles = [];
            for (var i=0; i < n; i++) {
                this.addParticle();
            }
        },
        clear: function() {
            this.particles = [];
        },
        addParticle: function() {
            var radAngle = this.angle * Math.PI / 180;
            var radSpread = this.spread * Math.PI / 180;

            this.particles.push({
                x: scenes.W / 2,
                y: scenes.H * 0.95,
                v: 60 * ((this.vStart * 0.5) + (Math.random() * this.vStart)),
                wobble: Math.random() * 10,
                wobbleV: 60 * Math.min(0.11, Math.random() * 0.1 + 0.05),
                zAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
                rotation: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
                age: 0,
                duration: this.duration,
                color: helpers.random_choice(this.colors),
            });
        },
        update: function(dt) {
            if (!this.particles) {
                return;
            }

            var decay = this.decay, gravity = 4 * this.vStart;

            var ctx = scenes.ctx;
            this.particles.forEach(function(particle) {
                if (particle.age > particle.duration) {
                    return;
                }
                
                particle.age += dt;
                
                particle.x += Math.cos(particle.rotation) * particle.v * dt;
                particle.y += Math.sin(particle.rotation) * particle.v * dt + gravity * dt;
                particle.v *= decay;
                particle.wobble += particle.wobbleV * dt;
                particle.zAngle += 60 * 0.1 * dt;

                var zSin = Math.sin(particle.zAngle);
                var zCos = Math.cos(particle.zAngle);
                var wX = particle.x + (10 * Math.cos(particle.wobble));
                var wY = particle.y + (10 * Math.sin(particle.wobble));

                var size = Math.random() + 2;
                var x1 = particle.x + (size * zCos);
                var y1 = particle.y + (size * zSin);
                var x2 = wX + (size * zCos);
                var y2 = wY + (size * zSin);

                var alpha = 1 - Math.pow(particle.age/particle.duration, 2);
                alpha = Math.round(255 * helpers.minmax(alpha, 0, 1));
                if (alpha < 20) {
                    return false;
                }

                ctx.beginPath();
                ctx.moveTo(Math.floor(particle.x), Math.floor(particle.y));
                ctx.lineTo(Math.floor(wX), Math.floor(y1));
                ctx.lineTo(Math.floor(x2), Math.floor(y2));
                ctx.lineTo(Math.floor(x1), Math.floor(wY));
                ctx.closePath();
                ctx.fillStyle = hex2rgba( particle.color + alpha.toString(16) );
                ctx.fill();

                return true;
            });
        }
    }
})();

if (typeof GameGlobal != 'undefined') {
    GameGlobal.confettis = confettis;
}
