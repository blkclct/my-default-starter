import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleToggle = e => {
    setIsDarkTheme(e.target.checked);
    if (isDarkTheme) {
      document.documentElement.removeAttribute("data-theme");
    } else document.documentElement.setAttribute("data-theme", "dark");
  };
  return (
    <Layout>
      <SEO title="Home" />
      <label>
        <input
          type="checkbox"
          checked={isDarkTheme}
          onChange={handleToggle}
          style={{ display: `none` }}
        />
        {isDarkTheme ? '🌚' :　'🌞'}
      </label>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
