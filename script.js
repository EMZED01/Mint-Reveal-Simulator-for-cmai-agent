const totalNFTs = 10;

function mintNFT() {
  const status = document.getElementById("statusText");
  const img = document.getElementById("nftImage");

  img.src = "assets/mystery-box.PNG";
  status.innerText = "Minting...";

  setTimeout(() => {
    status.innerText = "Revealing...";

    setTimeout(() => {
      const randomId = Math.floor(Math.random() * totalNFTs) + 1;

      console.log("Minted:", randomId); // debug

      img.src = "nfts/" + randomId + ".PNG";

      let rarityText = "";
      const rarityRoll = Math.random();

      if (rarityRoll < 0.01) {
        rarityText = "🔥 Legendary (Top 1%)";
      } else if (rarityRoll < 0.1) {
        rarityText = "✨ Rare (Top 10%)";
      } else {
        rarityText = "Common";
      }

      status.innerText = `You minted NFT #${randomId}\n${rarityText}`;

    }, 1200);

  }, 1200);
}
