const totalNFTs = 10;

function mintNFT() {
  const status = document.getElementById("statusText");
  const img = document.getElementById("nftImage");
  const video = document.getElementById("revealVideo");

  // Step 1: Show mystery box
  img.style.display = "block";
  video.style.display = "none";
  img.src = "assets/mystery-box.PNG";
  img.style.boxShadow = "none";

  status.innerText = "Minting...";

  setTimeout(() => {
    status.innerText = "Revealing...";

    // Step 2: Play video
    img.style.display = "none";
    video.style.display = "block";
    video.currentTime = 0;
    video.play();

    // Step 3: When video ends → reveal NFT
    video.onended = () => {
      const randomId = Math.floor(Math.random() * totalNFTs) + 1;

      // Hide video, show NFT
      video.style.display = "none";
      img.style.display = "block";
      img.src = "nfts/" + randomId + ".PNG";

      // Updated rarity system (your custom one)
      const rarityData = {
        1: { name: "🟡 Genesis", glow: "#FFD700" },
        2: { name: "🟢 Rising", glow: "#00FF7F" },
        3: { name: "🔵 Origin", glow: "#1E90FF" },
        4: { name: "🟠 Eclipse", glow: "#FF8C00" },
        5: { name: "🟤 Rare", glow: "#8B4513" },
        6: { name: "⚪️ Ultra Rare", glow: "#E5E5E5" },
        7: { name: "🟣 Epic", glow: "#A020F0" },
        8: { name: "💎 Legendary", glow: "#FFD700" },
        9: { name: "🔴 Mythic", glow: "#FF0000" },
        10: { name: "⚡️ Celestial Crown 👑", glow: "#00FFFF" }
      };

      const data = rarityData[randomId];

      // Glow effect
      img.style.boxShadow = `0 0 20px ${data.glow}, 0 0 40px ${data.glow}`;

      // Final text
      status.innerText = `You minted NFT #${randomId}\n${data.name}`;
    };

  }, 800);
}


// Share on Twitter
function shareMint() {
  const status = document.getElementById("statusText").innerText;

  const text = encodeURIComponent(status + " 👀🔥");
  const url = encodeURIComponent(window.location.href);

  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
}
