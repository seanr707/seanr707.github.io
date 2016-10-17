import React from 'react';

import libraries from '../libraries';

export default () => {
  return (
    <div className="libraries">
      {libraries.map(library => {
        return (
          <div key={library.imageTitle} className="library">
            <a href={library.link} target="_blank">
              <div className="library-container">
                <img
                  className="library-image"
                  src={`public/img/lib-icons/${library.imageTitle}.png`}
                  alt={library.imageTitle}
                />
              </div>
              <p className="library-title">{library.title}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};
