import React from 'react';

export function weather() {
  return (
    <div className="desc">
      <h2 className="desc__heading2">Overview</h2>
      <p className="desc__para">
        Weather web application. It uses Wunderground API to gather weather information. A user can
        type zip code to see specific geolocational information with his or her choice of weather
        unit.
      </p>
      <h2 className="desc__heading2">Development</h2>
      <h3 className="desc__heading3">Stack</h3>
      <ul className="desc__ul">
        <li>Front-End: React</li>
        <li>Jquery for querying API data from Wunderground.</li>
      </ul>
    </div>
  );
}

export function statusReport() {
  return (
    <div className="desc">
      <div className="resp-container">
        <iframe
          className="resp-iframe"
          title="demo"
          src="https://www.youtube.com/embed/EpiL3g6-uDo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <h2 className="desc__heading2">Overview</h2>
      <p className="desc__para">
        I took over the project from a colleague and rebuilt myself. It was a wonderful experience
        that I learned React and understood how back-end site works. More importantly, I am proud my
        project provides meaningful service to coworkers.
      </p>
      <h2 className="desc__heading2">Description</h2>
      <h3 className="desc__heading3">Functionality</h3>
      <ol className="desc__ol">
        <li>
          Users can submit their work hours through the form. Auto-completion of users and program
          names help them to fill out the form quickly.
        </li>
        <li>
          Supervisors or users themselves, they can search their work hours through search
          functions. The result will be shown in tables and beautiful pie charts.
        </li>
        <li>
          A manager of the Status Report can edit course numbers and program names through a login
          panel.{' '}
        </li>
      </ol>
      <h3 className="desc__heading3">Result</h3>
      <ol className="desc__ul">
        <li>
          Currently, it is in a transit stage where employees report their work hours in both
          tradition way and Status Report online form.
        </li>
        <li>
          Status Report will replace the spreadsheet-based reporting system for the design and
          Development Department of the UW Madison Division of Continuing Studies.
        </li>
      </ol>

      <h2 className="desc__heading2">Development</h2>
      <h3 className="desc__heading3">Stack</h3>
      <ol className="desc__ol">
        <li>
          <p>Front-End: React</p>
        </li>
        <li>
          <p>CSS Preprocessor: SASS</p>
          <ul className="desc__ul">
            <li>
              (followed the 7-1 pattern
              <a
                target="_blank"
                href="https://sass-guidelin.es/#the-7-1-pattern"
                rel="noreferrer noopener"
              >
                {' '}
                Information about 7-1
              </a>
              )
            </li>
          </ul>
        </li>
        <li>
          <p>Back-End: Node, Express</p>
        </li>
        <li>
          <p>Database: MySql</p>
        </li>
        <li>
          <p>API</p>
        </li>
      </ol>
      <ul className="desc__ul">
        <li>material-ui: Dialog component is used to handle popup menu.</li>
        <li>react-autosuggest: it is used throughout the application to handle auto-completion.</li>
        <li>react-table: it is used in search page to show the data in the table.</li>
        <li>react-transition-group: it is used to animate components.</li>
      </ul>
    </div>
  );
}

export function calculator() {
  return (
    <div>
      <h2 className="desc__heading2">Overview</h2>
      <p className="desc__para">
        This web calculator is my first React project that I made after taking an online React
        course. There were unexpected challenges that I needed to handle. For example, the program
        should prevent to type multiple operators at the same time.
      </p>
      <h2 className="desc__heading2">Development</h2>
      <h3 className="desc__heading3">Stack</h3>
      <ol className="desc__ol">
        <li>Front-end: React</li>
        <li>API</li>
      </ol>
      <ul className="desc__ul">
        <li>It uses react-bootstrap to design the application rapidly.</li>
      </ul>
    </div>
  );
}
export function portfoliov4() {
  return (
    <div>
      <h2 className="desc__heading2">Overview</h2>
      <p className="desc__para">
        Yes, this website is also my project. Using React might be overkill for a portfolio site,
        but I enjoy writing code instead of writing pure HTML and CSS. One benefit of having a
        single-page app in React is that it can reduce the significant loading time between each
        page. I would like to provide the exceptional experience to viewers of my site as much as I
        can.
      </p>

      <h2 className="desc__heading2">Development</h2>
      <h3 className="desc__heading3">Stack</h3>
      <ol className="desc__ol">
        <li>
          <p>Front-End: React</p>
        </li>
        <li>
          <p>Back-End: Node to handle contact component</p>
        </li>
        <li>
          <p>CSS Preprocessor: SASS</p>
          <ul className="desc__ul">
            <li>
              (followed the 7-1 pattern
              <a
                target="_blank"
                href="https://sass-guidelin.es/#the-7-1-pattern"
                rel="noreferrer noopener"
              >
                {' '}
                Information about 7-1
              </a>
              )
            </li>
          </ul>
        </li>

        <li>
          <p>API</p>
        </li>
      </ol>
      <ul className="desc__ul">
        <li>material-ui: Dialog component is used to handle contact, Project pages.</li>
        <li>node mailer: it is used to build email system.</li>
      </ul>
    </div>
  );
}

export function textComparator() {
  return (
    <div>
      <h2 className="desc__heading2">Overview</h2>
      <p className="desc__para">
        I made this application before transferring to UW-Madison in 2016 however if people ask me
        "What were you’re the most interesting project?" then I would say this is. This application
        was made to help my girlfriend who is a stenographer, and she needed a program to compare
        two text files.
      </p>
      <p className="desc__para">
        During the development, I learned Longest Common Sequence algorithm to compare words, and
        Interestingly, one year later, I heard the same algorithm in the algorithm class at
        UW-Madison. At the moment, I realized that every topic that I learn from classes could be
        applied to real-world projects.
      </p>

      <h2 className="desc__heading2">Development</h2>
      <ul className="desc__ul">
        <li>Java</li>
      </ul>
    </div>
  );
}
export function oldPortfolio() {
  return (
    <div>
      <h2 className="desc__heading2">Overview</h2>
      <p className="desc__para">
        This website is my old portfolio site that I built with HTML, CSS, and Javascript. The site
        is a single page website and has the function to send email to me. Also, the website was my
        playground where I could experiment with the color scheme and responsive design.
      </p>

      <h2 className="desc__heading2">Development</h2>
      <h3 className="desc__heading3">Stack</h3>
      <ul className="desc__ul">
        <li>Simple HTML and CSS.</li>
        <li>It used Jquery to animate first view point.</li>
      </ul>
    </div>
  );
}
export function mancalaAI() {
  return (
    <div>
      <h2 className="desc__heading2">Overview</h2>
      <p className="desc__para">
        Introduction to Artificial Intelligence class was the most fun and challenging class that I
        took in UW-Madison. This project and behind theories gave me insight into the interaction
        between a machine and a user.
      </p>

      <h2 className="desc__heading2">Development</h2>
      <ul className="desc__ul">
        <li>Java</li>
        <li>Minimax algorithm</li>
        <li>SBE function</li>
      </ul>
    </div>
  );
}
export function whoAreMyParents() {
  return (
    <div>
      <h2 className="desc__heading2">Overview</h2>
      <p className="desc__para">
        While I was in a Asian American Study class, I had a chance to see a Time Magazine image
        that shows a grid image gallery. The gallery represents seven different races with future
        child images that are made by Morph 2.0 program. I was interested in this gallery because
        the child images show how Americans look in the near future. In another lecture and from
        assigned reading, I had a chance to see the Hapa project images created by Kip Fulbeck.
        According to Kip Fulbeck, Hapa means that mixed ethnic heritage with partial roots in Asian
        and or Pacific Islander ancestry (https://kipfulbeck.com/the-hapa-project/hapa-about/). The
        way the authors captured images is somehow similar to the Time Magazine gallery: unclothed
        from the shoulders up, and without jewelry, glasses. Even though each page of the book shows
        a race of a person, the author mentions, "The Hapa Project is fundamentally a project about
        identity rather than race: “It’s about identity using race as a starting point.” " in his
        homepage (https://kipfulbeck.com/the-hapa-project/hapa-about/). My motivation for creating
        "Who are my parents." is connecting the Hapa project's idea with morphic technology, which
        allows people to combine two images with its similarities.
      </p>

      <h2 className="desc__heading2">Development</h2>
      <ul className="desc__ul">
        <li>React and Sass are used for front-end development.</li>
        <li>Images are from Time magazine that was released on Nov.18, 1993.</li>
      </ul>
    </div>
  );
}
