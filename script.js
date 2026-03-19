const totalNFTs = 10;

function mintNFT() {
  const status = document.getElementById("statusText");
  const img = document.getElementById("nftImage");

  // FORCE show mystery box (reset everything first)
  img.style.boxShadow = "none";
  img.src = "";
  setTimeout(() => {
    img.src = "assets/mystery-box.PNG";
  }, 10);

  status.innerText = "Minting...";

setTimeout(() => {
    status.innerText = "Revealing...";

    setTimeout(() => {
      const randomId = Math.floor(Math.random() * totalNFTs) + 1;

      img.src = "nfts/" + randomId + ".PNG";

      const rarityMap = {
        1: "🟢 Common",
        2: "🟢 Common",
        3: "🟡 Genesis",
        4: "🔵 Rare",
        5: "🔵 Rare",
        6: "🟣 Epic",
        7: "🟣 Epic",
        8: "🟠 Legendary",
        9: "🔴 Mythic",
        10: "👑 Celestial Crown"
      };

      const rarityText = rarityMap[randomId];

      img.style.boxShadow = getGlowByRarity(rarityText);

      status.innerText = `You minted NFT #${randomId}\n${rarityText}`;

    }, 1200);

  }, 1200);
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
