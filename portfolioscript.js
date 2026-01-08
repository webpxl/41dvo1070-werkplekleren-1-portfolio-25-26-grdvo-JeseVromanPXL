
    const bars = document.querySelectorAll('.bar');

    bars.forEach((bar, index) => {
    bar.style.transitionDelay = `${index * 40}ms`;
});
