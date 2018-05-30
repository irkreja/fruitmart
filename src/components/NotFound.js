import React from "react";

class NotFound extends React.Component {
  render() {
    return (
      <div class="not-found-text-wrapper">
        <div class="not-found-title" data-content="404">
          404
        </div>

        <div
          class="not-found-subtitle"
          data-content="Oops, the page you're looking for doesn't exist"
        >
          Oops, the page you're looking for doesn't exist.
        </div>

        <div class="not-found-buttons">
          <a class="not-found-button" href="/">
            Go to homepage
          </a>
        </div>
      </div>
    );
  }
}

export default NotFound;
