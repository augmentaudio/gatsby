import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; React JS Design - Dimension. Design: <a href="https://jonathanportelli/React">HTML5 UP</a>. Built by: <a href="https://www.jonathanportelli.com/">Jonathan Portelli</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
