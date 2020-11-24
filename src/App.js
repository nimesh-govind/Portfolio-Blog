import React from "react";
import "./App.scss"



function App() {
  const logo = document.querySelectorAll("#nimesh-position path");
  for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  }
  return (
    <>
    <div className="App">
      <header className="">
      <svg id="nimesh-position" width="497" height="104" viewBox="0 0 497 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M79 102H65.896L13.192 22.08V102H0.0880127V1.488H13.192L65.896 81.264V1.488H79V102Z" stroke="white" strokeWidth="5"/>
      <path d="M114.442 1.632V102H101.338V1.632H114.442Z" stroke="white" strokeWidth="5"/>
      <path d="M238.584 2.352V102H225.48V27.696L192.36 102H183.144L149.88 27.552V102H136.776V2.352H150.888L187.752 84.72L224.616 2.352H238.584Z" stroke="white" strokeWidth="5"/>
      <path d="M273.911 12.288V45.84H310.487V56.64H273.911V91.2H314.807V102H260.807V1.488H314.807V12.288H273.911Z" stroke="white" strokeWidth="5"/>
      <path d="M366.459 103.008C359.835 103.008 353.883 101.856 348.603 99.552C343.419 97.152 339.339 93.888 336.363 89.76C333.387 85.536 331.851 80.688 331.755 75.216H345.723C346.203 79.92 348.123 83.904 351.483 87.168C354.939 90.336 359.931 91.92 366.459 91.92C372.699 91.92 377.595 90.384 381.147 87.312C384.795 84.144 386.619 80.112 386.619 75.216C386.619 71.376 385.563 68.256 383.451 65.856C381.339 63.456 378.699 61.632 375.531 60.384C372.363 59.136 368.091 57.792 362.715 56.352C356.091 54.624 350.763 52.896 346.731 51.168C342.795 49.44 339.387 46.752 336.507 43.104C333.723 39.36 332.331 34.368 332.331 28.128C332.331 22.656 333.723 17.808 336.507 13.584C339.291 9.36 343.179 6.09599 348.171 3.792C353.259 1.488 359.067 0.335999 365.595 0.335999C375.003 0.335999 382.683 2.688 388.635 7.392C394.683 12.096 398.091 18.336 398.859 26.112H384.459C383.979 22.272 381.963 18.912 378.411 16.032C374.859 13.056 370.155 11.568 364.299 11.568C358.827 11.568 354.363 13.008 350.907 15.888C347.451 18.672 345.723 22.608 345.723 27.696C345.723 31.344 346.731 34.32 348.747 36.624C350.859 38.928 353.403 40.704 356.379 41.952C359.451 43.104 363.723 44.448 369.195 45.984C375.819 47.808 381.147 49.632 385.179 51.456C389.211 53.184 392.667 55.92 395.547 59.664C398.427 63.312 399.867 68.304 399.867 74.64C399.867 79.536 398.571 84.144 395.979 88.464C393.387 92.784 389.547 96.288 384.459 98.976C379.371 101.664 373.371 103.008 366.459 103.008Z" stroke="white" strokeWidth="5"/>
      <path d="M496.479 1.632V102H483.375V56.496H432.255V102H419.151V1.632H432.255V45.696H483.375V1.632H496.479Z" stroke="white" strokeWidth="5"/>
      </svg>
        {/* <p className="leadsentence">I</p>
        <p className="leadsentence2">Am</p>
        <p className="jobtitle1">Full Stack Software Developer</p>
        <p className="jobtitle2">Photographer & Videographer</p> */}
      </header>
      <div className="App-header">
        <p>Home</p>
        <p>About</p>
      <p>Additional content goes below</p>
        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. It was popularised in 
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including 
          versions of Lorem Ipsum.</h6>
          </div>
    </div>
    </>
  );
}

export default App;

