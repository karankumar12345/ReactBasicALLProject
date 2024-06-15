import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    display: 'inline-block',
    textAlign: 'center',
    width: '300px',
    height: '300px',
    backgroundColor: 'lightblue',
    margin: '10px',
    borderRadius: '10px',
    padding: '20px',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  };

  return (
    <nav>
      <div>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Home</h2>
          <p>Homepage of the website.</p>
        </Link>
        <Link
          to="/imageslide"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Image Slide</h2>
          <p>View and interact with image slides.</p>
        </Link>
        <Link
          to="/random"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Random</h2>
          <p>Explore random content.</p>
        </Link>
        <Link
          to="/accordian"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Accordion</h2>
          <p>Interactive accordion component.</p>
        </Link>
        <Link
          to="/starrating"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Star Rating</h2>
          <p>Rate items with a star-based system.</p>
        </Link>
        <Link
          to="/treeview"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Tree View</h2>
          <p>Navigate through hierarchical data.</p>
        </Link>
        <Link
          to="/qrcode"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>QR Code Generator</h2>
          <p>Generate QR codes for various purposes.</p>
        </Link>
        <Link
          to="/lightdark"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Light/Dark Mode</h2>
          <p>Switch between light and dark themes.</p>
        </Link>
        <Link
          to="/scroll"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Scroll</h2>
          <p>Explore scrolling behavior.</p>
        </Link>
        <Link
          to="/tabs"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Tabs</h2>
          <p>Interactive tabbed navigation.</p>
        </Link>
        <Link
          to="/modelpopup"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Modal Popup</h2>
          <p>Display modal dialogs.</p>
        </Link>
        <Link
          to="/tictactoe"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Tic Tac Toe</h2>
          <p>Play the classic game.</p>
        </Link>
        <Link
          to="/githubaccount"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Github Account</h2>
          <p>Manage your GitHub account.</p>
        </Link>
        <Link
          to="/featureFlags"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Feature Flags</h2>
          <p>Control feature availability.</p>
        </Link>
        <Link
          to="/customhook"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Custom Hooks</h2>
          <p>Reuse stateful logic.</p>
        </Link>
        <Link
          to="/FoodRecipe"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.cssText += '; background-color: lightgreen'}
          onMouseLeave={(e) => e.target.style.cssText += '; background-color: lightblue'}
        >
          <h2>Food Recipe</h2>
          <p>Discover delicious food recipes.</p>
        </Link>
        {/* Add more links as needed */}
      </div>
    </nav>
  );
}

export default Header;
