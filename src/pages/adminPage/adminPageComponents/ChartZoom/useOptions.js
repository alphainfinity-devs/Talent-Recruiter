
const scales = {
  x: {
    type: "category",
    min: 50,
    max: 100,
  },
  y: {
    type: "linear",
  },
};
const options = {
    scales: scales,
    plugins: {
      zoom: {
        animation: {
          duration: 1000,
          easing: "easeOutCubic",
        },
        pan: {
          enabled: true,
          mode: "xy",
          threshold: 155,
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  };


export default options;
