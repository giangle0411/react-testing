import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount()
})

// 1st test - Show a text area and a button
it('has a text area and a button', () => {
  //   console.log(wrapped.find('textarea').length)
  //   console.log(wrapped.find('button').length)

  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

// 2nd test - Text area change when user type in
it('has a text area that user can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' },
  })
  wrapped.update()
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
})

// 3rd test - Text area reset when the add a comment form is submitted
it('has an empty text area when user submit a comment', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' },
  })
  wrapped.update()
  wrapped.find('form').simulate('submit')
  wrapped.update()
  expect(wrapped.find('textarea').prop('value')).toEqual('')
})
