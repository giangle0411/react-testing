import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import App from 'components/App'
import moxios from 'moxios'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of comments and display them', (done) => {
  // Attempt to render the ENTIRE APP
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click')

  // Introduce a tiny pause (setTimeout) for moxios to stub the request
  // Expect to find a list of comments
  //
  //   setTimeout(() => {
  // Second option is to use moxios.wait function
  moxios.wait(() => {
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(2)
    done()
    wrapped.unmount()
  })
})
