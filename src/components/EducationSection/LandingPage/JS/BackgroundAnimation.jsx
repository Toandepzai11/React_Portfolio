import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { EventType } from "@tsparticles/engine";

// Fireworks options
const fireworksOptions = {
    key: "bubble",
    name: "Bubble",
    particles: {
        number: {
            value: 5,
            density: {
                enable: true,
            },
        },
        color: {
            // value: "random",
            value: "#444",
        },
        shape: {
            type: "circle",
            options: {
                polygon: {
                    sides: 6,
                },
            },
        },
        opacity: {
            value: {
                min: 0.3,
                max: 0.5,
            },
        },
        size: {
            value: {
                min: 100,
                max: 10,
            },
        },
        links: {
            enable: false,
            distance: 200,
            color: "#ffffff",
            opacity: 1,
            width: 2,
        },
        move: {
            enable: true,
            speed: 8,
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: false,
                mode: "bubble",
            },
            onClick: {
                enable: false,
                mode: "push",
            },
        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                duration: 2,
                size: 40,
                opacity: 0.8,
                color: "#ff0000",
                mix: true,
            },
            repulse: {
                distance: 200,
            },
            push: {
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
        },
    },
};

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // Handle particles loaded event if needed
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            position: "fixed", // Makes particles fixed in the background
            top: 0,
            left: 0,
            zIndex: -1, // Ensures it's behind all other content
          }}
          options={fireworksOptions}
        />
      )}
    </>
  );
}
