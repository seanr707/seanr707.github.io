import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="text-container">
          <p>
            If you wish to contact with questions, comments, or engage in discussion,
            then please send me a message on <a href="https://gitter.im/seanr707">Gitter.im</a>!
          </p>
          <p>
            We can chat on Gitter, or we can exchange contact info such as email or phone numbers.
          </p>
          <p>
            Sorry for no direct email at the moment; I fear the spam-bots that scour the
            Internet for email addresses.
          </p>
        </div>
        <div className="thanks-container">
          <p>I would also like to thank you for taking the time to view my personal portfolio.</p>
          <p>The site is built using Babel, Webpack, React, and Redux.</p>
          <p>
            The source code for the site, can be found <a href="https://github.com/seanr707/seanr707.github.io">here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
