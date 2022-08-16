import './App.css';

function App() {
  return (
    <div>
      <div class="container">
        <h2>Colors</h2>
        <div>
          <div>
            <div class="color-box black"></div>
            <p>Black #000000 RGB: 0 0 0 0</p>
          </div>
          <div>
            <div class="color-box plum"></div>
            <p>Plum #673147 RGB: 103 49 71 40</p>
          </div>

          <div>
            <div class="color-box java"></div>
            <p>Java #19bfba RGB: 25 191 186 75</p>
          </div>
          <div>
            <div class="color-box aero-blue"></div>
            <p>Aero Blue #b9ffe8 RGB: 185 255 232 100</p>
          </div>
        </div>
      </div>
      <div class="container">
        <h2>Buttons</h2>
        <div>
          <button type="button">Click</button>
          <p>Normal</p>
        </div>
        <div>
          <button type="button" id="delete">
            Click
          </button>
          <p>Delete</p>
        </div>
        <div>
          <button type="button" id="cancel">
            Click
          </button>
          <p>Cancel</p>
        </div>
      </div>
      <div class="container">
        <div>
          <h2>Typography</h2>
          <h1 class="normal-font">H1 font - Headers. Size 25px</h1>
          <h2 class="normal-font">H2 font - Subtitles. Size 20px</h2>
          <p class="button-font">Button font size 18px</p>
          <p class="normal-font">paragraph content font, minimum size 16px</p>
          <p>Use google font Montserrat.</p>
        </div>
      </div>
      <div class="container">
        <h2>Form</h2>
        <form>
          <h5>Name:</h5>
          <input type="text" id="name" />
          <h5>Address:</h5>
          <input type="text" id="address" />
          <h5>Message:</h5>
          <textarea id="message" rows="4"></textarea>
          <button type="button">Submit</button>
        </form>
      </div>
      <div class="container">
        <h2>Image boxes</h2>
        <div>
          <img height="450" width="450" src="/placeholder.png" />
          <p>This is the image size and style for the detailed hotel page</p>
        </div>
        <div>
          <img height="300" width="300" src="/placeholder.png" />
          <p>This is the style for browsing several hotels</p>
        </div>
      </div>

      <div class="container">
        <h2>Do's and dont's</h2>
        <p>
          You should keep the borders small on the images, and thicker on the
          search bar. Forms you model them to fit the size of the page you are
          using a form on. Do not use box shadows. For the hotel sites please
          use max 2 hotels in a row. Homepage image you decide the size after
          what image you use.
        </p>
      </div>
      <div class="container">
        <h2>Brand and target audience</h2>
        <p>
          Clean sleek non clustered design. Target audience aims for young
          adults and adults. Reason for clean design is I find browsing hotels
          to be difficult and "noisy".
        </p>
      </div>
    </div>
  );
}

export default App;
