const totalNFTs = 999;

function mintNFT() {
  const status = document.getElementById("statusText");
  const img = document.getElementById("nftImage");

  img.src = "assets/mystery-box.png";
  status.innerText = "Minting...";

  setTimeout(() => {
    status.innerText = "Revealing...";

    setTimeout(() => {
      const randomId = Math.floor(Math.random() * totalNFTs) + 1;

      img.src = "nfts/" + randomId + ".png";

      const rarityRoll = Math.random();

      let rarityText = "";
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

function shareMint() {
  const text = encodeURIComponent("I just simulated my mint 👀🔥 Try yours:");
  const url = encodeURIComponent(window.location.href);

  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
}
