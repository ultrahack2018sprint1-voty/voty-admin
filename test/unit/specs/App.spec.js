import {mount} from "@vue/test-utils"
import App from "@/pages/App"

describe("App.vue", () => {
  const wrapper = mount(App)

  it("renders the correct markup", () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
