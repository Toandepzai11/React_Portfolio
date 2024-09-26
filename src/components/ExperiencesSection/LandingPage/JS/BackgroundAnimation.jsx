import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadConfettiPreset } from "tsparticles-preset-confetti";
import "../CSS/styles.css";

export default function BackgroundAnimation() {
  // Use useCallback to optimize the particles engine initialization
  const particlesInit = useCallback(async (engine) => {
    await loadConfettiPreset(engine); // Load the confetti preset for the particles
  }, []);

  // Updated options with colors from the provided image
  const options = {
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    preset: "confetti",
    background: {
        color: "#000000",
    },
    particles: {
      color: {
        value: ["#ff0000", "#ffffff", "#000000", "#808080"], // Red, White, Black, and Gray colors
      },
    },

    emitters: {
        life: {
            duration: 2,
            count: 0
        },
        rate: {
            quantity: 10,
        }
    }

  };

  return (
    // Render the Particles component with the options and particlesInit
    <Particles
      id="tsparticles_ExperiencesPage"
      init={particlesInit} // Initialize the particles with the confetti preset
      options={options} // Apply particle options
      style={{
        position: "fixed", // Makes particles fixed in the background
        top: 0,
        left: 0,
        zIndex: -1, // Ensures it's behind all other content
      }}
    />
  );
}
