const totalNFTs = 10;

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
  const video = document.getElementById("revealVideo");

  status.innerText = "Minting...";

  // Show mystery box
  img.style.display = "block";
  video.style.display = "none";
  img.src = "assets/mystery-box.png";

  setTimeout(() => {
    status.innerText = "Revealing...";

    // Play video
    img.style.display = "none";
    video.style.display = "block";
    video.currentTime = 0;
    video.play();

    video.onended = () => {

      // 🔥 Pick random from remaining NFTs only
      const randomIndex = Math.floor(Math.random() * remainingNFTs.length);
      const randomId = remainingNFTs[randomIndex];

      // Remove it from pool
      remainingNFTs.splice(randomIndex, 1);

      // If all used, reset
      if (remainingNFTs.length === 0) {
        resetNFTPool();
      }

      // Show NFT
      video.style.display = "none";
      img.style.display = "block";
      img.src = "nfts/" + randomId + ".PNG";

      const rarityData = {
        1: { name: "🟡 Genesis", glow: "#FFD700" },
        2: { name: "🟢 Rising", glow: "#00FF7F" },
        3: { name: "🔵 Origin", glow: "#1E90FF" },
        4: { name: "🟠 Eclipse", glow: "#FF8C00" },
        5: { name: "🟤 Rare", glow: "#8B4513" },
        6: { name: "⚪️ Ultra Rare", glow: "#E5E5E5" },
        7: { name: "🟣 Epic", glow: "#A020F0" },
        8: { name: "🟠 Legendary", glow: "#FFD700" },
        9: { name: "🔴 Mythic", glow: "#FF0000" },
        10: { name: "⚡️ Celestial Crown 👑", glow: "#00FFFF" }
      };

      const data = rarityData[randomId];

      img.style.boxShadow = `0 0 20px ${data.glow}, 0 0 40px ${data.glow}`;

      status.innerText = `You minted NFT #${randomId}\n${data.name}`;
    };

  }, 800);
}

// Glow effect per rarity
function getGlowByRarity(rarity) {
  if (rarity.includes("Common")) return "0 0 10px Green";
  if (rarity.includes("Genesis")) return "0 0 10px Yellow";
  if (rarity.includes("Rare")) return "0 0 15px blue";
  if (rarity.includes("Epic")) return "0 0 15px purple";
  if (rarity.includes("Legendary")) return "0 0 20px orange";
  if (rarity.includes("Mythic")) return "0 0 25px red";
  if (rarity.includes("Celestial Crown")) return "0 0 30px gold";
  return "none";
}

// Share on Twitter
function shareMint() {
  const status = document.getElementById("statusText").innerText;

  const text = encodeURIComponent(status + " 👀🔥");
  const url = encodeURIComponent(window.location.href);

  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
}
