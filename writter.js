document.addEventListener("DOMContentLoaded", function () {
 const text =
   "print(Why do programmers prefer dark mode?)\n" +
   "print(Because light attracts bugs!)";
  const textOverlay = document.getElementById("textOverlay");
  let index = 0;
  const speed = 80; // Rychlost psaní v milisekundách
  const lineHeight = 30; // Výška řádku textu
  let lineCount = 0;
  let currentColor = "#a5cf27"; // Počáteční barva

  function typeWriter() {
    if (index < text.length) {
      const char = text.charAt(index);

      if (char === "\n") {
        const br = document.createElement("br");
        textOverlay.appendChild(br);
        lineCount++;
      } else {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.color = currentColor;
        textOverlay.appendChild(charSpan);

        if (char === " ") {
          currentColor = currentColor === "#a5cf27" ? "#ff5858" : "#a5cf27"; // Střídání barev po mezerách
        }
      }

      index++;

      // Přesune obrázek s textem nahoru o výšce řádku, jestliže je výška vyšší než výška řádku
      const textHeight = textOverlay.clientHeight;
      const imageHeight = document.querySelector(".homeFoto").clientHeight;
      if (textHeight > imageHeight) {
        textOverlay.style.top = `-${lineCount * lineHeight}px`;
      }

      setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        textOverlay.innerHTML = ""; // Vymažeme text
        index = 0; // Resetujeme index
        lineCount = 0; // Resetujeme počet řádků
        textOverlay.style.top = "0"; // Resetujeme polohu
        currentColor = "#a5cf27"; // Resetujeme počáteční barvu
        typeWriter(); // Znovu spustíme psaní
      }, 1000); // Pauza před opakováním
    }
  }

  typeWriter();
});
