import { Circle } from 'rc-progress'

const React = require('react')

if (process.env.WEBPACK_BUILD) {
  require('./animatedHusky.scss')
}

class AnimatedHusky extends React.Component {
  render () {
    return (
      <div>
        <div className="husky">
          <div className="mane">
            <div className="coat"></div>
          </div>
          <div className="body">
            <div className="head">
              <div className="ear"></div>
              <div className="ear"></div>
              <div className="face">
                <div className="eye"></div>
                <div className="eye"></div>
                <div className="nose"></div>
                <div className="mouth">
                  <div className="lips"></div>
                  <div className="tongue"></div>
                </div>
              </div>
            </div>
            <div className="torso"></div>
          </div>
          <div className="legs">
            <div className="front-legs">
              <div className="leg"></div>
              <div className="leg"></div>
            </div>
            <div className="hind-leg">
            </div>
          </div>
          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = AnimatedHusky
