import React from 'react'
import './css/Footer.css'

export default function Footer() {
  return (
    <div>
      <footer className="footer-dis">
  <div className="main-foot">
    <div className="sec-main">
      <div className="third-main">
        <a className="text">
         
        Groot Footer lookes good
        </a>
        <ul className="list-unstyled small text-muted">
          <li className="mb-2">Designed and built with all the love in the world by the <a href="/docs/5.2/about/team/">Groot's powers </a> with the help of Wind and tree. :) </li>
        
        </ul>
      </div>
      <div className="third-main2">
        <h5>Links</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="/">Home</a></li>
          <li className="mb-2"><a href="/docs/5.2/">Docs</a></li>
          <li className="mb-2"><a href="/docs/5.2/examples/">Examples</a></li>
        </ul>
      </div>
      <div className="third-main3">
        <h5>Guides</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="/docs/5.2/getting-started/">Getting started</a></li>
          <li className="mb-2"><a href="/docs/5.2/examples/starter-template/">Starter template</a></li>
        
        </ul>
      </div>
      
    </div>
  </div>
</footer>
    </div>
  )
}
