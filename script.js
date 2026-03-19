const totalNFTs = 10;
let remainingNFTs = [];

// Initialize pool
function resetNFTPool() {
  remainingNFTs = [];
  for (let i = 1; i <= totalNFTs; i++) {
    remainingNFTs.push(i);
  }
}

// Start with full pool
resetNFTPool();

function mintNFT() {
  const status = document.getElementById("statusText");
  const img = document.getElementById("nftImage");

  // Show mystery box
  img.src = "assets/mystery-box.png";
  img.style.boxShadow = "none";
  status.innerText = "Minting...";

  setTimeout(() => {
    status.innerText = "Revealing...";

    setTimeout(() => {

      // Reset pool if empty
      if (remainingNFTs.length === 0) {
        resetNFTPool();
      }

      // Pick random NFT from remaining
      const randomIndex = Math.floor(Math.random() * remainingNFTs.length);
      const randomId = remainingNFTs[randomIndex];

      // Remove from pool (no repeats)
      remainingNFTs.splice(randomIndex, 1);

      // Show NFT
      img.src = "nfts/" + randomId + ".PNG";

      // Rarity system (clean + better glow)
      const rarityData = {
        1: { name: "🟢 Common", glow: "#00ff00" },
        2: { name: "🟢 Common", glow: "#00ff00" },
        3: { name: "🟡 Genesis", glow: "#FFD700" },
        4: { name: "🔵 Rare", glow: "#1E90FF" },
        5: { name: "🔵 Rare", glow: "#1E90FF" },
        6: { name: "🟣 Epic", glow: "#A020F0" },
        7: { name: "🟣 Epic", glow: "#A020F0" },
        8: { name: "🟠 Legendary", glow: "#FF8C00" },
        9: { name: "🔴 Mythic", glow: "#FF0000" },
        10: { name: "👑 Celestial Crown", glow: "#FFD700" }
      };

      const data = rarityData[randomId];

      // Apply glow
      img.style.boxShadow = `0 0 20px ${data.glow}, 0 0 40px ${data.glow}`;

      // Final message
      status.innerText = `You minted NFT #${randomId}\n${data.name}`;

    }, 800);

  }, 800);
}

// Share on Twitter
function shareMint() {
  const status = document.getElementById("statusText").innerText;

  const text = encodeURIComponent(status + " 👀🔥");
  const url = encodeURIComponent(window.location.href);

  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
}