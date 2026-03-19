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

      // Rarity mapping (based on NFT ID)
      const rarityMap = {
        1: "🟢 Common",
        2: "🟢 Common",
        3: "🟡 Uncommon",
        4: "🔵 Rare",
        5: "🔵 Rare",
        6: "🟣 Epic",
        7: "🟣 Epic",
        8: "🟠 Legendary",
        9: "🔴 Mythic",
        10: "⚡ Ultra Rare"
      };

      const rarityText = rarityMap[randomId] || "Common";

      // Apply glow
      img.style.boxShadow = getGlowByRarity(rarityText);

      // Display result
      status.innerText = `You minted NFT #${randomId}\n${rarityText}`;

    }, 1200);

  }, 1200);
}

// Glow effects per rarity
function getGlowByRarity(rarity) {
  switch (rarity) {
    case "🟢 Common":
      return "0 0 10px gray";

    case "🟡 Uncommon":
      return "0 0 12px green";

    case "🔵 Rare":
      return "0 0 15px blue";

    case "🟣 Epic":
      return "0 0 18px purple";

    case "🟠 Legendary":
      return "0 0 22px orange";

    case "🔴 Mythic":
      return "0 0 25px red";

    case "⚡ Ultra Rare":
      return "0 0 30px gold";

    default:
      return "none";
  }
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