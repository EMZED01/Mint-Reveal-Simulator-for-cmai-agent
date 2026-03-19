const totalNFTs = 10;

function mintNFT() {
  const status = document.getElementById("statusText");
  const img = document.getElementById("nftImage");

  // Show mystery box
  img.src = "assets/mystery-box.PNG";
  img.style.boxShadow = "none";
  status.innerText = "Minting...";

  setTimeout(() => {
    status.innerText = "Revealing...";

    setTimeout(() => {
      // RANDOM NFT (1–10)
      const randomId = Math.floor(Math.random() * totalNFTs) + 1;

      console.log("Minted ID:", randomId); // DEBUG

      // Set image
      img.src = "nfts/" + randomId + ".PNG";


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

// Set NFT image
img.src = "nfts/" + randomId + ".png";

// Apply glow
img.style.boxShadow = `0 0 20px ${data.glow}, 0 0 40px ${data.glow}`;

// Show result
status.innerText = `You minted NFT #${randomId}\n${data.name}`;

#nftImage {
  transition: box-shadow 0.4s ease;
}


// Share on Twitter
function shareMint() {
  const statusText = document.getElementById("statusText").innerText;

  const text = encodeURIComponent(statusText + " 👀🔥");
  const url = encodeURIComponent(window.location.href);

  window.open(
    `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    "_blank"
  );
}