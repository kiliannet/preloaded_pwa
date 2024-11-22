const overlay=document.createElement("div");overlay.id="loader",overlay.style.cssText=`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;const loader=document.createElement("div");loader.className="loader",loader.style.cssText=`
    border: 3px solid #e0e0e0;
    border-top: 3px solid #0771c3;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    animation: spin 0.4s linear infinite;
`,overlay.appendChild(loader),document.body.appendChild(overlay);const style=document.createElement("style");function hideOverlay(){overlay.style.display="none"}style.type="text/css",style.innerHTML=`
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`,document.head.appendChild(style),document.addEventListener("DOMContentLoaded",()=>{setTimeout(hideOverlay,100)}),window.addEventListener("load",hideOverlay);