import qrcode from "./images/image-qr-code.png";
function App() {
  return (
    <div>
      <div className="card">
        <img src={qrcode} alt="qr code"></img>
        <div className="text">
          <h3>Improve your front-end skills by building projects.</h3>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
