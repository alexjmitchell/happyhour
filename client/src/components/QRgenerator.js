// import React from "react"
// import "../styles/QRgenerator.css"
// import Default from "../assets/default.png"
// // import internal links
// // import stylesheet

// // import assets

// // Variables
// let qrcode = select("img")
// let qrtext = select("textarea")
// let qrbtn = select("button")
// // Add an event listener
// // var qrbtn = document.getElementById("overlayBtn")
// if (qrbtn) {
//   qrbtn.addEventListener("click", generateQR)
// }
// // qrbtn.addEventListener("click", generateQR)
// // Function for event listener
// function generateQR() {
//   // Size of the QR code
//   let size = "1000x1000"
//   // The text data (Value is the property entered into the box)
//   let data = qrtext.value
//   // The URL to generate the QR code
//   let baseURL = "http://api.qrserver.com/v1/create-qr-code/"
//   let url = `${baseURL}?data=${data}&size=${size}`
//   // Whenever the function runs it will update the image with the QR code
//   qrcode.src = url
// }
// // Function for short-code ( document.querySelector() -> select() )
// function select(el) {
//   return document.querySelector(el)
// }
// export default props => {
//   return (
//     <div className="qrGeneratorContainer">
//       <div class="qrbox">
//         <img src="default.png" alt="qr-code" />
//         <textarea></textarea>
//         <button>Generate QR Code</button>
//       </div>
//     </div>
//   )
// }
