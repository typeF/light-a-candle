export default function (currentZoom, zoomThreshold) {
  const labels = document.getElementsByClassName("label");
  Array.prototype.forEach.call(labels, (label) => {
    const isLabelLight = label.classList.contains("label-light");
    if (currentZoom <= zoomThreshold) {
      label.classList.add("hidden");
      return;
    }

    if (isLabelLight) {
      label.classList.remove("hidden");
    }
  });
}
