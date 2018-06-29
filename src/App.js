import React from "react";

import ImageList from './containers/ImageList';

import Search from './containers/Search';

const App = () => {
  return (
    <div>
        <Search /><ImageList />
    </div>

  );
}

export default App;