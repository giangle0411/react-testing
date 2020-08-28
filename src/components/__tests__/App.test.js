import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})

// Show a comment box test
it('show a comment box', () => {
  // Simple Testing method
  //   const div = document.createElement('div')
  //   ReactDOM.render(<App />, div)
  // Looks inside the div
  // and checks to see if the CommentBox is in there
  //   expect(div.innerHTML).toContain('Comment box')
  //   ReactDOM.unmountComponentAtNode(div)
  /**************************************************/
  // Using Enzyme
  // Make sure only 1 comment box in the App
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

// Show a comment list test
it('show a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
