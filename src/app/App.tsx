import React from 'react';
import { Clock } from '../components';

const App = (): React.ReactElement => {
  return (
    <div className="text-center p-2">
      <h1 className="font-bold text-3xl text-gray-800 my-2">
        A Shot Clock{" "}
        <span role="img" aria-label="Basketball">
          🏀
        </span>
      </h1>
      <p className="my-2 border-t-2 p-4 mb-6">
        A basketball field has 2 shot clocks, one above each rim. Both countdown 24 seconds.
        Referees can stop and/or reset clocks when needed.
      </p>
      <hr className="border" />
      <div className="flex flex-row flex-wrap justify-center gap-4 m-4">
        <Clock />
        <Clock />
      </div>
    </div>
  );
}

export default App;
