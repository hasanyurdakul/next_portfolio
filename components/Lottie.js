import React from "react";

function Lottie() {
  return (
    <div className="mt-8">
      <div className="w-40 h-40 ">
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>

        <dotlottie-player
          src="https://lottie.host/e41da551-0d44-4605-b954-9f5ff429ccf9/k9NaErg1jJ.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
}

export default Lottie;
