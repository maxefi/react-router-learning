import React from 'react'
import { PropTypes } from 'react'

import { transparentBg } from '../styles/styles'

// Functional Stateless Component, http://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/
const Prompt = (props) => {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="VK Username"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt

//Basic Component Style
// export default React.createClass({
//   propTypes: {
//     header: PropTypes.string.isRequired,
//     onUpdateUser: PropTypes.func.isRequired,
//     onSubmitUser: PropTypes.func.isRequired,
//     username: PropTypes.string.isRequired
//   },
//   render() {
//     return (
//       <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
//         <h1>{this.props.header}</h1>
//         <div className="col-sm-12">
//           <form onSubmit={this.props.onSubmitUser}>
//             <div className="form-group">
//               <input
//                 className="form-control"
//                 placeholder="VK Username"
//                 onChange={this.props.onUpdateUser}
//                 value={this.props.username}
//                 type="text" />
//             </div>
//             <div className="form-group col-sm-4 col-sm-offset-4">
//               <button
//                 className="btn btn-block btn-success"
//                 type="submit">
//                   Continue
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   }
// })
