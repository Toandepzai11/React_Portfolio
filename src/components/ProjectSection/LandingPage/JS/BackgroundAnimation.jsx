
import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { EventType } from "@tsparticles/engine";

// Fireworks options
const fireworksOptions = {
  key: "fireworks",
  name: "Fireworks",
  fullScreen: {
    enable: true,
  },
  emitters: {
    direction: "top",
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.1,
    },
    rate: {
      delay: 0.75,
      quantity: 1,
    },
    size: {
      width: 100,
      height: 0,
    },
    position: {
      y: 100,
      x: 50,
    },
  },
  particles: {
    number: {
      value: 0,
    },
    destroy: {
      bounds: {
        top: 30,
      },
      mode: "split",
      split: {
        count: 1,
        factor: {
          value: 0.333333,
        },
        rate: {
          value: 100,
        },
        particles: {
          stroke: {
            width: 0,
          },
          color: {
            value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"],
          },
          number: {
            value: 0,
          },
          collisions: {
            enable: false,
          },
          destroy: {
            bounds: {
              top: 0,
            },
          },
          opacity: {
            value: {
              min: 0.1,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 3,
              sync: false,
              startValue: "max",
              destroy: "min",
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
            animation: {
              enable: false,
            },
          },
          life: {
            count: 1,
            duration: {
              value: {
                min: 1,
                max: 2,
              },
            },
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
              acceleration: 9.81,
              inverse: false,
            },
            decay: 0.1,
            speed: {
              min: 10,
              max: 25,
            },
            direction: "outside",
            outModes: "destroy",
          },
        },
      },
    },
    life: {
      count: 1,
    },
    shape: {
      type: "line",
    },
    size: {
      value: {
        min: 0.1,
        max: 50,
      },
      animation: {
        enable: true,
        sync: true,
        speed: 90,
        startValue: "max",
        destroy: "min",
      },
    },
    stroke: {
      color: {
        value: "#ffffff",
      },
      width: 1,
    },
    rotate: {
      enable: true,
      path: true,
    },
    move: {
      enable: true,
      gravity: {
        acceleration: 15,
        enable: true,
        inverse: true,
        maxSpeed: 100,
      },
      speed: {
        min: 10,
        max: 20,
      },
      outModes: {
        default: "destroy",
        top: "none",
      },
      trail: {
        fill: { color: "#000" },
        enable: false,
        length: 10,
      },
    },
  },
  sounds: {
    enable: false,
    events: [
      {
        event: EventType.particleRemoved,
        filter: (args) => args.data.particle.options.move.gravity.inverse,
      },
    ],
    volume: 0,
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

