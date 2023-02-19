import buttons from './buttons.svg';
import yarnel from './img/yarnel.png';
function App() {

  /*
  *  This is a sample React component.
  *  This component is rendered by calling <App /> in the src/index.js file
  *  The className attribute is used to apply Tailwind CSS classes to the component.
  *  export default App; is used to make this component available to other components in this file or elsewhere.
  */
  return (
    <div className="container bg-slate-900 h-screen">
      <div className="flex flex-col items-center justify-center mx-auto p-10">
        <img src={yarnel} alt="yarnel" className="flex w-2/12" />

        <span className="my-5"> </span>

        <span className="text-4xl font-Comfortaa text-white"> Yarnel </span>
        <span className="my-5"> </span>

        <p className="text-sm text-left text-white font-mono mx-auto w-1/4 ">
          This directory is a starting point for a React project with Tailwind CSS.
          It includes a sample Tailwind CSS configuration file and a few React components to help you get started.
          <br />
          <br />
          I've also imported a few fonts from Google Fonts and a few SVG images from the web.
          <br />
          <br />
          google fonts imports examples are in the tailwind.config.js file.
          SVG imports are in the App.js file.

        </p>
      </div>

    </div>
  );
}

export default App;
