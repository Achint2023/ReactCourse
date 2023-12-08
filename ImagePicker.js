function App() {

    let pickImage = React.useRef();    
    
    function handleClick() {
        pickImage.current.click();
    }
    
    
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input ref={pickImage} data-testid="file-picker" type="file" accept="image/*" />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
